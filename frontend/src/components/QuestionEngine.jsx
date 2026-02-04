import React, { useState } from 'react';

const QuestionEngine = ({ moduleData, title }) => {
  // Flattens the chapters in the module into one single array of questions
  const allQuestions = Object.values(moduleData).flat();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selected) => {
    if (selected === allQuestions[currentIdx].answer) setScore(score + 1);
    setCurrentIdx(currentIdx + 1);
  };

  if (currentIdx >= allQuestions.length) {
    return (
      <div>
        <h2>Quiz Complete!</h2>
        <p>Your Score: {score} / {allQuestions.length}</p>
      </div>
    );
  }

  const q = allQuestions[currentIdx];

  return (
    <div className="quiz-box">
      <h3>{title}</h3>
      <p className="question-text">{q.question}</p>
      {q.image_asset && <div className="image-placeholder">📷 {q.image_asset}</div>}
      <div className="options">
        {q.options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
        ))}
      </div>
    </div>
  );
};

export default QuestionEngine;