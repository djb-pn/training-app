import React, { useState, useEffect, useMemo } from 'react';
import ManualReferences from '../data/ManualReferences.json';

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);

  // 1. LOCK THE DECK: useMemo ensures the questions and their internal shuffles 
  // are calculated ONCE and never change until the module itself changes.
  const questions = useMemo(() => {
    if (!moduleData) return [];
    return Object.values(moduleData).flat().map(q => {
      const isSATA = Array.isArray(q.answer);
      return {
        ...q,
        isSATA,
        truth: q.answer,
        // The display order is now locked into the question object itself
        displayOptions: [...q.options].sort(() => Math.random() - 0.5)
      };
    }).sort(() => Math.random() - 0.5);
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return;
    const q = questions[currentIdx];
    
    if (q.isSATA) {
      setSelectedOptions(prev => 
        prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]
      );
    } else {
      evaluateAnswer([opt]);
    }
  };

  const evaluateAnswer = (userSelections) => {
    const q = questions[currentIdx];
    let isCorrect = false;

    if (q.isSATA) {
      isCorrect = userSelections.length === q.truth.length && 
                  userSelections.every(val => q.truth.includes(val));
    } else {
      isCorrect = userSelections[0] === q.truth;
    }
    
    const referenceText = ManualReferences[q.source] || q.source;
    setFeedback({ correct: isCorrect, source: referenceText, userChoices: userSelections });

    // Sync progress to DB
    fetch('https://api-training.picksgallery.com/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, questionId: q.id, correct: isCorrect })
    }).catch(e => console.error("DB Sync failed"));

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
      // End of round: If there are wrongs, they will be reviewed in a fresh session.
      setIsFinished(true); 
    } else {
      setIsFinished(true);
    }
  };

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

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
          
          if (selectedOptions.includes(opt)) {
            border = `2px solid ${accent}`;
          }

          if (feedback) {
            const isPartofCorrectAnswer = q.isSATA ? q.truth.includes(opt) : opt === q.truth;
            const wasChosenByUser = feedback.userChoices.includes(opt);
            
            if (isPartofCorrectAnswer) {
                bgColor = '#e6fffa'; 
                border = '2px solid #2f855a';
            } else if (wasChosenByUser && !isPartofCorrectAnswer) {
                bgColor = '#fff5f5'; 
                border = '2px solid #c53030';
            }
          }

          return (
            <button key={i} disabled={!!feedback} onClick={() => handleToggleOption(opt)} 
              style={{ textAlign: 'left', padding: '22px', borderRadius: '10px', border, fontSize: '1.15rem', background: bgColor, cursor: feedback ? 'default' : 'pointer' }}>
              {opt}
            </button>
          );
        })}
      </div>

      {q.isSATA && !feedback && (
        <button onClick={() => evaluateAnswer(selectedOptions)} disabled={selectedOptions.length === 0}
          style={{ marginTop: '20px', padding: '15px 30px', background: accent, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>
          Submit Answer
        </button>
      )}

      {feedback && (
        <div style={{ marginTop: '30px', padding: '30px', borderRadius: '12px', background: feedback.correct ? '#f0fff4' : '#fff5f5', border: `2px solid ${feedback.correct ? '#c6f6d5' : '#fed7d7'}` }}>
          <h4 style={{ margin: '0 0 10px 0', color: feedback.correct ? '#2f855a' : '#c53030' }}>
            {feedback.correct ? 'Correct!' : 'Incorrect'}
          </h4>
          <p><strong>Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;