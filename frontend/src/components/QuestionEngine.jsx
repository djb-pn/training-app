import React, { useState, useEffect } from 'react';
import theme from '../theme';

const QuestionEngine = ({ moduleData, title, onBack, userStats }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (moduleData) {
      // Flatten chapters into one array
      const allQ = Object.values(moduleData).flat();
      // Simple Shuffle for Spaced Repetition feel
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleAnswer = (selected) => {
    const correct = questions[currentIdx].answer;
    if (selected === correct) {
      setScore(s => s + 1);
    } else {
      // Staggered Repetition: Add to "wrong" list to show at the end
      setWrongAnswers(prev => [...prev, questions[currentIdx]]);
    }

    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <h2>{title} Results</h2>
        <div className="score-circle" style={{ borderColor: theme.colors.accent }}>
          {Math.round((score / questions.length) * 100)}%
        </div>
        <p>Mastery: {score} of {questions.length} correct</p>
        {wrongAnswers.length > 0 && <p className="review-text">Staggered Review: {wrongAnswers.length} items to re-study.</p>}
        <button className="primary-btn" style={{ background: theme.colors.accent }} onClick={onBack}>Finish</button>
      </div>
    );
  }

  if (questions.length === 0) return <div>Initializing questions...</div>;

  const q = questions[currentIdx];

  return (
    <div className="quiz-container">
      <div className="progress-bar"><div className="fill" style={{ width: `${(currentIdx/questions.length)*100}%`, background: theme.colors.accent }} /></div>
      <p className="q-count">Question {currentIdx + 1} of {questions.length}</p>
      <h3 className="question-text">{q.question}</h3>
      <div className="options-grid">
        {q.options.map((opt, i) => (
          <button key={i} className="option-btn" onClick={() => handleAnswer(opt)}>{opt}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionEngine;