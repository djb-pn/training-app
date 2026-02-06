import React, { useState, useEffect } from 'react';
import ManualReferences from '../data/ManualReferences.json';

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (moduleData) {
      // PRESERVE TRUTH: Map questions to keep the 'correctAnswer' stable before shuffling UI options
      const preparedQ = Object.values(moduleData).flat().map(q => {
        return {
          ...q,
          correctAnswer: q.answer, // Locked truth
          shuffledOptions: [...q.options].sort(() => Math.random() - 0.5) // UI only
        };
      });
      setQuestions(preparedQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return;
    const q = questions[currentIdx];
    const isSATA = Array.isArray(q.correctAnswer);
    
    if (isSATA) {
      setSelectedOptions(prev => 
        prev.includes(opt) ? prev.filter(i => i !== opt) : [...prev, opt]
      );
    } else {
      checkAnswer([opt]);
    }
  };

  const checkAnswer = (selections) => {
    const q = questions[currentIdx];
    const isSATA = Array.isArray(q.correctAnswer);
    let isCorrect = false;

    if (isSATA) {
      // Logic for Select All That Apply 
      isCorrect = selections.length === q.correctAnswer.length && 
                  selections.every(val => q.correctAnswer.includes(val));
    } else {
      // Single choice logic [cite: 1002]
      isCorrect = selections[0] === q.correctAnswer;
    }
    
    const referenceText = ManualReferences[q.source] || q.source;
    setFeedback({ correct: isCorrect, source: referenceText, selections });

    if (!isCorrect) setWrongQueue(prev => [...prev, q]);
  };

  const nextQuestion = () => {
    setFeedback(null);
    setSelectedOptions([]);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else if (wrongQueue.length > 0) {
      setQuestions([...wrongQueue.sort(() => Math.random() - 0.5)]);
      setWrongQueue([]);
      setCurrentIdx(0);
    } else {
      setIsFinished(true);
    }
  };

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  const isSATA = Array.isArray(q.correctAnswer);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <button onClick={onBack} style={{ color: accent, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Exit</button>
      
      <div style={{ width: '100%', background: '#eee', height: '10px', borderRadius: '5px', overflow: 'hidden', margin: '20px 0' }}>
        <div style={{ width: `${(currentIdx / questions.length) * 100}%`, background: accent, height: '100%', transition: 'width 0.3s' }} />
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#333' }}>
        {q.question}
        {isSATA && <span style={{ display: 'block', fontSize: '1rem', color: accent, marginTop: '10px' }}>(Select all that apply)</span>}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {q.shuffledOptions.map((opt, i) => {
          let bgColor = 'white';
          let border = '1px solid #ddd';
          
          if (selectedOptions.includes(opt)) {
            bgColor = '#f9f9f9';
            border = `2px solid ${accent}`;
          }

          if (feedback) {
            const isActuallyCorrect = isSATA ? q.correctAnswer.includes(opt) : opt === q.correctAnswer;
            const userSelectedThis = feedback.selections.includes(opt);
            
            if (isActuallyCorrect) bgColor = '#e6fffa'; // Correct answers always turn green
            else if (userSelectedThis && !isActuallyCorrect) bgColor = '#fff5f5'; // Wrong user choice turns red
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
        <button onClick={() => checkAnswer(selectedOptions)} disabled={selectedOptions.length === 0}
          style={{ marginTop: '20px', padding: '15px 30px', background: accent, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}>
          Submit Answer
        </button>
      )}

      {feedback && (
        <div style={{ marginTop: '30px', padding: '30px', borderRadius: '12px', background: feedback.correct ? '#f0fff4' : '#fff5f5', border: `1px solid ${feedback.correct ? '#c6f6d5' : '#fed7d7'}` }}>
          <h4 style={{ margin: '0 0 10px 0', color: feedback.correct ? '#2f855a' : '#c53030' }}>
            {feedback.correct ? 'Correct!' : 'Incorrect'}
          </h4>
          <p style={{ lineHeight: '1.5' }}><strong>Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;