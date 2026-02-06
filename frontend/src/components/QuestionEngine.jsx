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
      const allQ = Object.values(moduleData).flat().map(q => ({
        ...q,
        options: [...q.options].sort(() => Math.random() - 0.5) // Randomize answer placement
      }));
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return;
    const isSATA = Array.isArray(questions[currentIdx].answer);
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
    const isSATA = Array.isArray(q.answer);
    let isCorrect = false;

    if (isSATA) {
      isCorrect = selections.length === q.answer.length && 
                  selections.every(val => q.answer.includes(val));
    } else {
      isCorrect = selections[0] === q.answer;
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

  const isSATA = Array.isArray(q.answer);

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
        {q.options.map((opt, i) => {
          let bgColor = 'white';
          let border = '1px solid #ddd';
          
          if (selectedOptions.includes(opt)) {
            bgColor = '#f0f0f0';
            border = `2px solid ${accent}`;
          }

          if (feedback) {
            const isCorrectAnswer = isSATA ? q.answer.includes(opt) : opt === q.answer;
            const wasSelected = feedback.selections.includes(opt);
            
            if (isCorrectAnswer) bgColor = '#e6fffa';
            else if (wasSelected && !isCorrectAnswer) bgColor = '#fff5f5';
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
          <p><strong>Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;