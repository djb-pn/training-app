import React, { useState, useEffect } from 'react';
import ManualReferences from '../data/ManualReferences.json';

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);

  // 1. STABLE INITIALIZATION: Process and shuffle questions ONLY ONCE when moduleData changes
  useEffect(() => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat().map(q => {
        // Create a definitive "Locked" version of the question for this session
        const isSATA = Array.isArray(q.answer);
        return {
          ...q,
          isSATA,
          // Store original answer as the source of truth
          truth: q.answer, 
          // Shuffle options once and store them as the visual truth
          displayOptions: [...q.options].sort(() => Math.random() - 0.5)
        };
      });
      // Shuffle the entire deck once
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return; // Prevent clicking after answer is submitted
    const q = questions[currentIdx];
    
    if (q.isSATA) {
      setSelectedOptions(prev => 
        prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]
      );
    } else {
      // For single choice, evaluate immediately
      evaluateAnswer([opt]);
    }
  };

  const evaluateAnswer = (userSelections) => {
    const q = questions[currentIdx];
    let isCorrect = false;

    if (q.isSATA) {
      // SATA Logic: Length must match and every item must be present in the truth array
      isCorrect = userSelections.length === q.truth.length && 
                  userSelections.every(val => q.truth.includes(val));
    } else {
      // Single Choice Logic: Compare strings
      isCorrect = userSelections[0] === q.truth;
    }
    
    const referenceText = ManualReferences[q.source] || q.source;
    
    setFeedback({ 
      correct: isCorrect, 
      source: referenceText, 
      userChoices: userSelections 
    });

    // Record progress to Cloudflare Worker
    fetch('https://api-training.picksgallery.com/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, questionId: q.id, correct: isCorrect })
    }).catch(e => console.error("Sync failed"));

    if (!isCorrect) {
      setWrongQueue(prev => [...prev, q]);
    }
  };

  const nextQuestion = () => {
    setFeedback(null);
    setSelectedOptions([]);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else if (wrongQueue.length > 0) {
      // Re-run missed questions
      setQuestions([...wrongQueue.sort(() => Math.random() - 0.5)]);
      setWrongQueue([]);
      setCurrentIdx(0);
    } else {
      setIsFinished(true);
    }
  };

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading Question Bank...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={onBack} style={{ color: accent, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Exit</button>
      </header>
      
      <div style={{ width: '100%', background: '#eee', height: '10px', borderRadius: '5px', overflow: 'hidden', margin: '20px 0' }}>
        <div style={{ width: `${(currentIdx / questions.length) * 100}%`, background: accent, height: '100%', transition: 'width 0.3s' }} />
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#333', lineHeight: '1.4' }}>
        {q.question}
        {q.isSATA && <span style={{ display: 'block', fontSize: '1rem', color: accent, marginTop: '10px' }}>(Select all that apply)</span>}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {q.displayOptions.map((opt, i) => {
          let bgColor = 'white';
          let border = '1px solid #ddd';
          
          // Show selection before submitting
          if (selectedOptions.includes(opt)) {
            border = `2px solid ${accent}`;
          }

          // Feedback Logic
          if (feedback) {
            const isPartofCorrectAnswer = q.isSATA ? q.truth.includes(opt) : opt === q.truth;
            const wasChosenByUser = feedback.userChoices.includes(opt);
            
            if (isPartofCorrectAnswer) {
                bgColor = '#e6fffa'; // Light Green
                border = '2px solid #2f855a';
            } else if (wasChosenByUser && !isPartofCorrectAnswer) {
                bgColor = '#fff5f5'; // Light Red
                border = '2px solid #c53030';
            }
          }

          return (
            <button key={i} disabled={!!feedback} onClick={() => handleToggleOption(opt)} 
              style={{ textAlign: 'left', padding: '22px', borderRadius: '10px', border, fontSize: '1.15rem', background: bgColor, cursor: feedback ? 'default' : 'pointer', transition: 'all 0.2s' }}>
              {opt}
            </button>
          );
        })}
      </div>

      {q.isSATA && !feedback && (
        <button onClick={() => evaluateAnswer(selectedOptions)} disabled={selectedOptions.length === 0}
          style={{ marginTop: '20px', padding: '15px 30px', background: accent, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '1.2rem' }}>
          Submit Answer
        </button>
      )}

      {feedback && (
        <div style={{ marginTop: '30px', padding: '30px', borderRadius: '12px', background: feedback.correct ? '#f0fff4' : '#fff5f5', border: `2px solid ${feedback.correct ? '#c6f6d5' : '#fed7d7'}`, boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 10px 0', color: feedback.correct ? '#2f855a' : '#c53030', fontSize: '1.4rem' }}>
            {feedback.correct ? 'Correct!' : 'Incorrect'}
          </h4>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.6' }}><strong>Manual Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;