import React, { useState, useEffect } from 'react';

const QuestionEngine = ({ moduleData, title, onBack, accentColor }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat();
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleAnswer = (selected) => {
    const q = questions[currentIdx];
    if (selected === q.answer) {
      setScore(s => s + 1);
    } else {
      // Staggered Repetition: Move wrong answer to end of the queue
      setWrongQueue(prev => [...prev, q]);
    }

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else if (wrongQueue.length > 0) {
      // Loop back to incorrect items
      setQuestions([...wrongQueue]);
      setWrongQueue([]);
      setCurrentIdx(0);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div style={{ maxWidth: '600px', margin: '50px auto', padding: '40px', background: 'white', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: accentColor }}>{title} Complete</h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mastery: {Math.round((score / questions.length) * 100)}%</p>
        <button onClick={onBack} style={{ padding: '12px 30px', background: accentColor, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Finish</button>
      </div>
    );
  }

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  return (
    <div style={{ maxWidth: '700px', margin: '40px auto', padding: '20px' }}>
      <div style={{ height: '8px', background: '#eee', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
        <div style={{ width: `${(currentIdx / questions.length) * 100}%`, height: '100%', background: accentColor, transition: 'width 0.3s' }} />
      </div>
      <button onClick={onBack} style={{ color: accentColor, background: 'none', border: 'none', cursor: 'pointer', marginBottom: '10px' }}>← Exit Quiz</button>
      <h3 style={{ color: '#333', fontSize: '1.4rem' }}>{q.question}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} style={{ textAlign: 'left', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', background: 'white', cursor: 'pointer', fontSize: '1.05rem' }}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionEngine;