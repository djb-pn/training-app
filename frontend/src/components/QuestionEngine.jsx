import React, { useState, useEffect, useRef } from 'react';
import ManualReferences from '../data/ManualReferences.json';

const QuestionEngine = ({ moduleData, title, onBack, accent, userEmail, onSessionComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [wrongQueue, setWrongQueue] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [feedback, setFeedback] = useState(null); 
  const [isFinished, setIsFinished] = useState(false);

  // --- MASTERY TRACKING ---
  // Track which question IDs have been attempted this session (first-pass only, not retries)
  const attemptedIds = useRef(new Set());
  // Session stats for the completion screen
  const sessionStats = useRef({ total: 0, firstTryCorrect: 0, retryCorrect: 0 });

  // 1. STABLE LOAD: Shuffle the DECK once. Leave the OPTIONS in their raw state.
  useEffect(() => {
    if (moduleData) {
      const allQ = Object.values(moduleData).flat();
      sessionStats.current = { total: allQ.length, firstTryCorrect: 0, retryCorrect: 0 };
      setQuestions(allQ.sort(() => Math.random() - 0.5));
    }
  }, [moduleData]);

  const handleToggleOption = (opt) => {
    if (feedback) return;
    const q = questions[currentIdx];
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
    let isCorrect = false;

    // Direct Value Comparison: This ignores index and order completely.
    if (Array.isArray(q.answer)) {
      isCorrect = userSelections.length === q.answer.length && 
                  userSelections.every(val => q.answer.includes(val));
    } else {
      isCorrect = userSelections[0] === q.answer;
    }
    
    const referenceText = ManualReferences[q.source] || q.source;
    setFeedback({ correct: isCorrect, source: referenceText, userChoices: userSelections });

    // --- FIRST-ATTEMPT LOGIC ---
    const isFirstAttempt = !attemptedIds.current.has(q.id);
    attemptedIds.current.add(q.id);

    // Track session stats
    if (isFirstAttempt && isCorrect) {
      sessionStats.current.firstTryCorrect += 1;
    } else if (!isFirstAttempt && isCorrect) {
      sessionStats.current.retryCorrect += 1;
    }

    // DB Sync — includes isFirstAttempt flag
    fetch('https://api-training.picksgallery.com/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, questionId: q.id, correct: isCorrect, isFirstAttempt })
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

  // --- COMPLETION SCREEN ---
  if (isFinished) {
    const stats = sessionStats.current;
    const masteryPct = Math.round((stats.firstTryCorrect / stats.total) * 100);
    const needsWork = stats.total - stats.firstTryCorrect;

    // Pick a message based on mastery level
    let message = '';
    let messageColor = '';
    if (masteryPct >= 90) {
      message = 'Outstanding! You\'re exam-ready on this module.';
      messageColor = '#2f855a';
    } else if (masteryPct >= 70) {
      message = 'Solid foundation — review the ones you missed and you\'ll be there.';
      messageColor = '#b7791f';
    } else {
      message = 'Keep studying — re-read the manual sections for the questions you missed.';
      messageColor = '#c53030';
    }

    return (
      <div style={{ maxWidth: '600px', margin: '60px auto', padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: accent, marginBottom: '10px' }}>Module Complete</h2>
        <h3 style={{ color: '#333', fontWeight: 'normal', marginBottom: '40px' }}>{title}</h3>

        {/* Mastery Ring */}
        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 30px' }}>
          <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none" stroke="#eee" strokeWidth="3" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none" stroke={accent} strokeWidth="3"
              strokeDasharray={`${masteryPct}, 100`}
              strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <div style={{ fontSize: '2.2rem', fontWeight: 'bold', color: accent }}>{masteryPct}%</div>
            <div style={{ fontSize: '0.8rem', color: '#999' }}>First-Try</div>
          </div>
        </div>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', marginBottom: '30px' }}>
          <div style={{ background: '#f0fff4', padding: '20px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2f855a' }}>{stats.firstTryCorrect}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Mastered</div>
          </div>
          <div style={{ background: '#fff5f5', padding: '20px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#c53030' }}>{needsWork}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Needs Work</div>
          </div>
          <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '10px' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#4a5568' }}>{stats.total}</div>
            <div style={{ fontSize: '0.85rem', color: '#666' }}>Total</div>
          </div>
        </div>

        <p style={{ color: messageColor, fontWeight: '600', fontSize: '1.05rem', marginBottom: '30px' }}>{message}</p>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button onClick={() => {
            // Notify parent to refresh progress data
            if (onSessionComplete) onSessionComplete();
            onBack();
          }} style={{
            padding: '14px 30px', background: accent, color: 'white',
            border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem'
          }}>
            Back to Modules
          </button>
          <button onClick={() => {
            // Reset and reshuffle for another pass
            attemptedIds.current.clear();
            sessionStats.current = { total: sessionStats.current.total, firstTryCorrect: 0, retryCorrect: 0 };
            const allQ = Object.values(moduleData).flat();
            setQuestions(allQ.sort(() => Math.random() - 0.5));
            setCurrentIdx(0);
            setWrongQueue([]);
            setIsFinished(false);
          }} style={{
            padding: '14px 30px', background: 'white', color: accent,
            border: `2px solid ${accent}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem'
          }}>
            Retry Module
          </button>
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
          
          if (selectedOptions.includes(opt)) border = `2px solid ${accent}`;

          if (feedback) {
            const isCorrectAnswer = isSATA ? q.answer.includes(opt) : opt === q.answer;
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
          {q.explanation && <p style={{ color: '#555', margin: '0 0 10px 0' }}>{q.explanation}</p>}
          <p><strong>Reference:</strong> {feedback.source}</p>
          <button onClick={nextQuestion} style={{ marginTop: '20px', padding: '12px 30px', background: accent, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Continue</button>
        </div>
      )}
    </div>
  );
};

export default QuestionEngine;