import React, { useState, useEffect } from 'react';

const QuestionEngine = ({ moduleData, title, onBack, accent }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
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
    if (selected !== q.answer) setWrongQueue(prev => [...prev, q]);

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else if (wrongQueue.length > 0) {
      setQuestions([...wrongQueue]);
      setWrongQueue([]);
      setCurrentIdx(0);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center' }}>
        <h2 style={{ color: accent }}>Track Mastered!</h2>
        <button onClick={onBack} style={{ padding: '15px 40px', background: accent, color: 'white', border: 'none', borderRadius: '6px' }}>Return Home</button>
      </div>
    );
  }

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>No questions found.</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <div style={{ width: '100%', background: '#eee', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '30px' }}>
        <div style={{ width: `${(currentIdx / questions.length) * 100}%`, background: accent, height: '100%' }} />
      </div>
      <h3>{q.question}</h3>
      {q.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)} style={{ width: '100%', padding: '20px', margin: '10px 0', textAlign: 'left', background: 'white', border: '1px solid #ddd', borderRadius: '8px' }}>
          {opt}
        </button>
      ))}
    </div>
  );
};

export default QuestionEngine;