import React, { useState, useEffect } from 'react';
import ManualReferences from '../data/ManualReferences.json'; // New Import

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat();
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleAnswer = (selected) => {
    const q = questions[currentIdx];
    const isCorrect = selected === q.answer;
    
    // Look up the full reference text using the cite ID
    const referenceText = ManualReferences[q.source] || q.source;

    setFeedback({ correct: isCorrect, source: referenceText, selected });
    
    // Sync to Cloudflare D1 Progress Table
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

  if (isFinished) {
    return (
      <div style={{ maxWidth: '600px', margin: '100px auto', textAlign: 'center', background: 'white', padding: '50px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: accent }}>Module Mastered!</h2>
        <button onClick={onBack} style={{ padding: '15px 40px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Finish Track</button>
      </div>
    );
  }

  const q = questions[currentIdx];
  if (!q) return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button onClick={onBack} style={{ color: accent, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Exit</button>
      </div>
      
      <div style={{ width: '100%', background: '#eee', height: '10px', borderRadius: '5px', overflow: 'hidden', marginBottom: '30px' }}>
        <div style={{ width: `${(currentIdx / questions.length) * 100}%`, background: accent, height: '100%', transition: 'width 0.3s' }} />
      </div>

      <h3 style={{ fontSize: '1.6rem', color: '#333' }}>{q.question}</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {q.options.map((opt, i) => (
          <button 
            key={i} 
            disabled={!!feedback}
            onClick={() => handleAnswer(opt)} 
            style={{ 
              textAlign: 'left', padding: '22px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1.15rem', 
              background: feedback?.correct && opt === q.answer ? '#e6fffa' : (!feedback?.correct && feedback && opt === feedback.selected ? '#fff5f5' : 'white'),
              cursor: feedback ? 'default' : 'pointer' 
            }}>
            {opt}
          </button>
        ))}
      </div>

      {feedback && (
        <div style={{ marginTop: '30px', padding: '30px', borderRadius: '12px', background: feedback.correct ? '#f0fff4' : '#fff5f5', border: `2px solid ${feedback.correct ? '#c6f6d5' : '#fed7d7'}` }}>
          <h4 style={{ margin: '0 0 10px 0', color: feedback.correct ? '#2f855a' : '#c53030' }}>
            {feedback.correct ? 'Correct!' : 'Incorrect - This will return later.'}
          </h4>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}><strong>Manual Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;