import React, { useState, useEffect } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardEngine({ cards, title, onBack, accent }) {
  const [deck, setDeck] = useState([]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState([]);
  const [learning, setLearning] = useState([]);
  const [phase, setPhase] = useState('study'); // 'study' | 'complete'

  useEffect(() => {
    setDeck(shuffle(cards));
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setLearning([]);
    setPhase('study');
  }, [cards]);

  const current = deck[index];
  const total = deck.length;
  const answered = known.length + learning.length;

  const handleRate = (isKnown) => {
    if (isKnown) {
      setKnown(prev => [...prev, current.id]);
    } else {
      setLearning(prev => [...prev, current.id]);
    }

    if (index + 1 >= total) {
      setPhase('complete');
    } else {
      setIndex(prev => prev + 1);
      setFlipped(false);
    }
  };

  const handleReviewMissed = () => {
    const missedCards = deck.filter(c => learning.includes(c.id));
    setDeck(shuffle(missedCards));
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setLearning([]);
    setPhase('study');
  };

  const handleRestart = () => {
    setDeck(shuffle(cards));
    setIndex(0);
    setFlipped(false);
    setKnown([]);
    setLearning([]);
    setPhase('study');
  };

  // --- COMPLETION SCREEN ---
  if (phase === 'complete') {
    const knownCount = known.length;
    const learningCount = learning.length;
    const pct = total > 0 ? Math.round((knownCount / total) * 100) : 0;
    const message = pct === 100 ? 'Perfect! You know every card!'
      : pct >= 80 ? 'Great job! Almost there!'
      : pct >= 50 ? 'Good progress — keep reviewing!'
      : 'Keep studying — you\'ll get there!';

    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: accent, marginBottom: '5px' }}>Deck Complete</h1>
        <p style={{ color: '#999', marginTop: 0 }}>{title}</p>

        {/* Ring */}
        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '30px auto' }}>
          <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none" stroke="#eee" strokeWidth="3" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none" stroke={accent} strokeWidth="3"
              strokeDasharray={`${pct}, 100`} strokeLinecap="round" />
          </svg>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: accent }}>{pct}%</div>
            <div style={{ fontSize: '0.75rem', color: '#999' }}>Known</div>
          </div>
        </div>

        <p style={{ fontSize: '1.1rem', color: '#595959', fontWeight: '600' }}>{message}</p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', margin: '20px 0' }}>
          <Stat label="Know It" value={knownCount} color="#2f855a" />
          <Stat label="Still Learning" value={learningCount} color="#b7791f" />
          <Stat label="Total" value={total} color="#595959" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px', alignItems: 'center' }}>
          {learningCount > 0 && (
            <button onClick={handleReviewMissed} style={{
              padding: '14px 32px', background: accent, color: '#fff', border: 'none',
              borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', width: '260px'
            }}>
              Review Missed ({learningCount})
            </button>
          )}
          <button onClick={handleRestart} style={{
            padding: '14px 32px', background: '#fff', color: accent, border: `2px solid ${accent}`,
            borderRadius: '10px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', width: '260px'
          }}>
            Restart Deck
          </button>
          <button onClick={onBack} style={{
            padding: '14px 32px', background: 'none', color: '#999', border: 'none',
            fontSize: '0.95rem', cursor: 'pointer'
          }}>
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  // --- STUDY SCREEN ---
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '40px 20px' }}>
      <button onClick={onBack} style={{
        color: accent, background: 'none', border: 'none', fontWeight: 'bold',
        marginBottom: '20px', cursor: 'pointer', fontSize: '0.95rem'
      }}>
        ← Back
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ color: '#595959', margin: 0, fontSize: '1.1rem' }}>{title}</h2>
        <span style={{ color: '#999', fontSize: '0.9rem', fontWeight: '600' }}>
          {index + 1} / {total}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ width: '100%', background: '#eee', height: '4px', borderRadius: '2px', marginBottom: '28px', overflow: 'hidden' }}>
        <div style={{
          width: `${((answered) / total) * 100}%`,
          background: accent, height: '100%', borderRadius: '2px',
          transition: 'width 0.4s ease'
        }} />
      </div>

      {/* Card */}
      <div
        onClick={() => !flipped && setFlipped(true)}
        style={{
          perspective: '1000px',
          cursor: flipped ? 'default' : 'pointer',
          marginBottom: '24px'
        }}
      >
        <div style={{
          position: 'relative',
          width: '100%',
          minHeight: '280px',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}>
          {/* Front */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '280px',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            padding: '36px 28px', boxSizing: 'border-box',
            border: `2px solid ${accent}22`
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: accent, marginBottom: '16px', fontWeight: '600' }}>
              Question
            </div>
            <p style={{ fontSize: '1.15rem', color: '#333', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
              {current?.question}
            </p>
            <div style={{ marginTop: '24px', fontSize: '0.8rem', color: '#bbb' }}>
              Tap to reveal answer
            </div>
          </div>

          {/* Back */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', minHeight: '280px',
            backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            padding: '36px 28px', boxSizing: 'border-box',
            border: `2px solid ${accent}44`
          }}>
            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#2f855a', marginBottom: '16px', fontWeight: '600' }}>
              Answer
            </div>
            <p style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.6', textAlign: 'center', margin: 0 }}>
              {current?.answer}
            </p>
          </div>
        </div>
      </div>

      {/* Rating buttons — only visible after flip */}
      {flipped && (
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
          <button onClick={() => handleRate(false)} style={{
            flex: 1, padding: '14px', background: '#fef3c7', color: '#92400e',
            border: '2px solid #f59e0b', borderRadius: '12px', fontSize: '1rem',
            fontWeight: '600', cursor: 'pointer', maxWidth: '200px'
          }}>
            Still Learning
          </button>
          <button onClick={() => handleRate(true)} style={{
            flex: 1, padding: '14px', background: '#d1fae5', color: '#065f46',
            border: '2px solid #10b981', borderRadius: '12px', fontSize: '1rem',
            fontWeight: '600', cursor: 'pointer', maxWidth: '200px'
          }}>
            Know It
          </button>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div style={{ textAlign: 'center', padding: '12px 20px', background: '#f7fafc', borderRadius: '10px', minWidth: '80px' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color }}>{value}</div>
      <div style={{ fontSize: '0.8rem', color: '#999', marginTop: '2px' }}>{label}</div>
    </div>
  );
}
