import React, { useState, useEffect } from 'react';
import ManualReferences from '../data/ManualReferences.json';

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  // 1. STABLE LOAD: Shuffle the DECK once. Leave the OPTIONS in their raw state.
  useEffect(() => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat();
      setQuestions(allQ.sort(() => Math.random() - 0.5));
      setCurrentIdx(0);
      setWrongQueue([]);
      setSelectedOptions([]);
      setFeedback(null);
      setIsFinished(false);
      setScore({ correct: 0, total: 0 });
    }
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return;
    const q = questions[currentIdx];
    if (!q) return;
    const isSATA = Array.isArray(q.answer);
    
    if (isSATA) {
      setSelectedOptions(prev => 
        prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]
      );
    } else {
      evaluateAnswer([opt]);
    }
  };

  const evaluateAnswer = (userSelections) => {
    const q = questions[currentIdx];
    if (!q) return;
    let isCorrect = false;

    // Direct Value Comparison: This ignores index and order completely.
    if (Array.isArray(q.answer)) {
      isCorrect = userSelections.length === q.answer.length && 
                  userSelections.every(val => q.answer.includes(val));
    } else {
      isCorrect = userSelections[0] === q.answer;
    }
    
    // Build feedback: prefer explanation field, fall back to ManualReferences lookup, then raw source
    const explanation = q.explanation || null;
    const referenceText = q.source ? (ManualReferences[q.source] || q.source) : null;

    setFeedback({ correct: isCorrect, explanation, source: referenceText, userChoices: userSelections });
    setScore(prev => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));

    // DB Sync
    fetch('https://api-training.picksgallery.com/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, questionId: q.id, correct: isCorrect })
    }).catch(e => console.error("Sync failed"));

    if (!isCorrect) setWrongQueue(prev => [...prev, q]);
  };

  const nextQuestion = () => {
    setFeedback(null);
    setSelectedOptions([]);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else if (wrongQueue.length > 0) {
      // Review loop
      setQuestions([...wrongQueue.sort(() => Math.random() - 0.5)]);
      setWrongQueue([]);
      setCurrentIdx(0);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat();
      setQuestions(allQ.sort(() => Math.random() - 0.5));
      setCurrentIdx(0);
      setWrongQueue([]);
      setSelectedOptions([]);
      setFeedback(null);
      setIsFinished(false);
      setScore({ correct: 0, total: 0 });
    }
  };

  // --- COMPLETION SCREEN ---
  if (isFinished) {
    const pct = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    return (
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', textAlign: 'center' }}>
        <div style={{ background: 'white', padding: '50px 40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '4rem', marginBottom: '10px' }}>
            {pct >= 90 ? '🏆' : pct >= 70 ? '✅' : '📚'}
          </div>
          <h2 style={{ color: accent, margin: '0 0 10px 0', fontSize: '2rem' }}>
            {pct >= 90 ? 'Outstanding!' : pct >= 70 ? 'Well Done!' : 'Keep Studying!'}
          </h2>
          <p style={{ fontSize: '1.3rem', color: '#555', margin: '0 0 30px 0' }}>
            You scored <strong style={{ color: accent }}>{score.correct}</strong> out of <strong>{score.total}</strong> ({pct}%)
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={resetQuiz}
              style={{ padding: '15px 30px', background: accent, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.05rem' }}>
              Retake Quiz
            </button>
            <button onClick={onBack}
              style={{ padding: '15px 30px', background: 'white', color: accent, border: `2px solid ${accent}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.05rem' }}>
              Back to Modules
            </button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  const isSATA = Array.isArray(q.answer);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <button onClick={onBack} style={{ color: accent, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Exit</button>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '15px 0 5px 0' }}>
        <span style={{ fontSize: '0.85rem', color: '#999' }}>Question {currentIdx + 1} of {questions.length}</span>
        <span style={{ fontSize: '0.85rem', color: '#999' }}>{score.correct}/{score.total} correct</span>
      </div>
      <div style={{ width: '100%', background: '#eee', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ width: `${((currentIdx + 1) / questions.length) * 100}%`, background: accent, height: '100%', transition: 'width 0.3s' }} />
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#333' }}>
        {q.question}
        {isSATA && <span style={{ display: 'block', fontSize: '1rem', color: accent, marginTop: '10px' }}>(Select all that apply)</span>}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {q.options.map((opt, i) => {
          let bgColor = 'white';
          let border = '1px solid #ddd';
          
          if (selectedOptions.includes(opt)) border = `2px solid ${accent}`;

          if (feedback) {
            const isCorrectAnswer = isSATA ? 
              q.answer.includes(opt) : opt === q.answer;
            const userSelectedThis = feedback.userChoices.includes(opt);
            
            if (isCorrectAnswer) {
              bgColor = '#e6fffa'; 
              border = '2px solid #2f855a';
            } else if (userSelectedThis && !isCorrectAnswer) {
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

      {isSATA && !feedback && (
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
          {feedback.explanation && (
            <p style={{ margin: '0 0 8px 0', fontSize: '1.05rem', lineHeight: '1.5', color: '#333' }}>
              {feedback.explanation}
            </p>
          )}
          {feedback.source && (
            <p style={{ margin: '0', fontSize: '0.85rem', color: '#888', fontStyle: 'italic' }}>
              Source: {feedback.source}
            </p>
          )}
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;