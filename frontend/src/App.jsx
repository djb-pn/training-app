import React, { useState, useEffect, useCallback } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import { NursePractitionerW2Questions } from './data/NP_W2_Questions';
import { NursePractitionerW3Questions } from './data/NP_W3_Questions';
import { NursePractitionerW4Questions } from './data/NP_W4_Questions';
import QuestionEngine from './components/QuestionEngine';

// ---------------------------------------------------------------------------
// HELPER: Compute per-module stats from raw progress rows
// Progress rows have: { question_id, first_attempt_correct, total_attempts }
// ---------------------------------------------------------------------------
function computeModuleStats(questionsObj, modules, progressRows) {
  const progressMap = {};
  for (const row of progressRows) {
    progressMap[row.question_id] = row;
  }

  const stats = {};
  for (const mod of modules) {
    const chapters = questionsObj[mod.title];
    if (!chapters) { stats[mod.title] = { total: 0, mastered: 0, attempted: 0 }; continue; }

    const allQ = Object.values(chapters).flat();
    let mastered = 0;
    let attempted = 0;

    for (const q of allQ) {
      const p = progressMap[q.id];
      if (p) {
        attempted++;
        if (p.first_attempt_correct === 1) mastered++;
      }
    }

    stats[mod.title] = { total: allQ.length, mastered, attempted };
  }
  return stats;
}


function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [view, setView] = useState({ path: null, section: null, module: null });
  const [authStatus, setAuthStatus] = useState('idle');
  const [progress, setProgress] = useState([]);       // raw progress rows from API
  const [showDashboard, setShowDashboard] = useState(false);

  const BRAND = { maroon: '#670000', gray: '#595959', white: '#ffffff' };

  // --- FETCH PROGRESS from GET /progress?email=xxx ---
  const fetchProgress = useCallback(async (userEmail) => {
    try {
      const res = await fetch(`https://api-training.picksgallery.com/progress?email=${encodeURIComponent(userEmail)}`);
      if (res.ok) {
        const data = await res.json();
        setProgress(data.progress || []);
      }
    } catch (e) {
      console.error("Failed to fetch progress:", e);
    }
  }, []);

  useEffect(() => {
    const initAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const saved = localStorage.getItem('picks_session');

      if (token) {
        setAuthStatus('verifying');
        try {
          const res = await fetch(`https://api-training.picksgallery.com/auth/verify?token=${token}`);
          if (res.ok) {
            const data = await res.json();
            const userObj = { email: data.email };
            localStorage.setItem('picks_session', JSON.stringify(userObj));
            setUser(userObj);
            fetchProgress(data.email);
            window.history.replaceState({}, document.title, "/");
          } else { setAuthStatus('error'); }
        } catch (err) { setAuthStatus('error'); }
      } else if (saved) {
        const userObj = JSON.parse(saved);
        setUser(userObj);
        fetchProgress(userObj.email);
      }
    };
    initAuth();
  }, [fetchProgress]);

  const requestMagicLink = async (e) => {
    e.preventDefault();
    setAuthStatus('sending');
    try {
      const res = await fetch('https://api-training.picksgallery.com/auth/send-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) setAuthStatus('sent');
      else setAuthStatus('error');
    } catch (err) { setAuthStatus('error'); }
  };

  // =========================================================================
  // LOGIN SCREEN
  // =========================================================================
  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: BRAND.gray }}>
        <div style={{ background: BRAND.white, padding: '50px', borderRadius: '16px', textAlign: 'center', width: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <h1 style={{ color: BRAND.maroon }}>Training Portal</h1>
          {authStatus === 'verifying' ? <p>Verifying link...</p> : authStatus === 'sent' ?
            <p style={{ color: 'green' }}>Check your email for a login link!</p> :
            <form onSubmit={requestMagicLink}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email"
                style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', boxSizing: 'border-box', marginBottom: '15px' }} />
              <button type="submit" disabled={authStatus === 'sending'}
                style={{ width: '100%', padding: '15px', background: BRAND.maroon, color: 'white', border: 'none', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send Login Link'}
              </button>
              {authStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
            </form>
          }
        </div>
      </div>
    );
  }

  // =========================================================================
  // PROGRESS DASHBOARD
  // =========================================================================
  if (showDashboard) {
    const hdsStats = computeModuleStats(HearthDesignSpecialistQuestions, HDS_Modules, progress);
    const hdsTotals = Object.values(hdsStats).reduce((acc, s) => ({
      total: acc.total + s.total, mastered: acc.mastered + s.mastered, attempted: acc.attempted + s.attempted
    }), { total: 0, mastered: 0, attempted: 0 });

    const overallPct = hdsTotals.total > 0 ? Math.round((hdsTotals.mastered / hdsTotals.total) * 100) : 0;

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <button onClick={() => setShowDashboard(false)}
          style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '30px', cursor: 'pointer' }}>
          ← Back
        </button>

        <h1 style={{ color: BRAND.gray, marginBottom: '5px' }}>My Progress</h1>
        <p style={{ color: '#999', marginTop: '0' }}>{user.email}</p>

        {/* Overall Ring */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '120px', height: '120px', flexShrink: 0 }}>
            <svg viewBox="0 0 36 36" style={{ transform: 'rotate(-90deg)' }}>
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#eee" strokeWidth="3" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke={BRAND.maroon} strokeWidth="3"
                strokeDasharray={`${overallPct}, 100`} strokeLinecap="round" />
            </svg>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: BRAND.maroon }}>{overallPct}%</div>
              <div style={{ fontSize: '0.7rem', color: '#999' }}>Mastery</div>
            </div>
          </div>
          <div>
            <h2 style={{ margin: '0 0 5px 0', color: BRAND.gray }}>Overall HDS Mastery</h2>
            <p style={{ margin: 0, color: '#666' }}>
              {hdsTotals.mastered} of {hdsTotals.total} questions mastered on first try
            </p>
            <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '0.9rem' }}>
              {hdsTotals.attempted} attempted total
            </p>
          </div>
        </div>

        {/* Per-Module Breakdown */}
        <h2 style={{ color: BRAND.gray, marginBottom: '15px' }}>Hearth Design Specialist (Sales)</h2>
        {HDS_Modules.map(mod => {
          const s = hdsStats[mod.title] || { total: 0, mastered: 0, attempted: 0 };
          const pct = s.total > 0 ? Math.round((s.mastered / s.total) * 100) : 0;
          const barColor = pct >= 80 ? '#2f855a' : pct >= 50 ? '#b7791f' : pct > 0 ? '#c53030' : '#ddd';

          return (
            <div key={mod.id} style={{ background: 'white', padding: '20px', marginBottom: '12px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h3 style={{ margin: 0, color: BRAND.gray, fontSize: '1rem' }}>{mod.title}</h3>
                <span style={{ color: barColor, fontWeight: 'bold', fontSize: '0.95rem' }}>
                  {s.mastered}/{s.total} ({pct}%)
                </span>
              </div>
              <div style={{ width: '100%', background: '#eee', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, background: barColor, height: '100%', transition: 'width 0.5s ease', borderRadius: '4px' }} />
              </div>
              {s.attempted > 0 && s.attempted > s.mastered && (
                <p style={{ margin: '8px 0 0 0', fontSize: '0.8rem', color: '#999' }}>
                  {s.attempted - s.mastered} question{s.attempted - s.mastered !== 1 ? 's' : ''} attempted but not yet mastered
                </p>
              )}
            </div>
          );
        })}

        {/* Legend */}
        <div style={{ marginTop: '20px', padding: '15px', background: '#f7fafc', borderRadius: '8px', fontSize: '0.85rem', color: '#666' }}>
          <strong>What counts as "mastered"?</strong> A question is mastered when you answer it correctly on your very first attempt — no retries counted. 
          This is the standard NFI uses for exam readiness.
        </div>
      </div>
    );
  }

  // =========================================================================
  // STUDY AREA SELECTION (Home Screen)
  // =========================================================================
  if (!view.path) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ color: BRAND.maroon, margin: 0 }}>Training Portal</h1>
            <p style={{ color: BRAND.gray, margin: '5px 0 0 0' }}>{user.email}</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setShowDashboard(true)}
              style={{ padding: '10px 20px', background: BRAND.maroon, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              My Progress
            </button>
            <button onClick={() => { localStorage.removeItem('picks_session'); setUser(null); }}
              style={{ padding: '10px 20px', background: '#eee', color: BRAND.gray, border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        </div>

        <h2 style={{ color: BRAND.gray }}>Choose Your Study Path</h2>
        {AppConfig.study_areas.map(area => (
          <div key={area.id} onClick={() => setView({ path: area, section: null, module: null })}
            style={{ background: 'white', padding: '30px', marginBottom: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: `6px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div>
              <h3 style={{ margin: 0, color: BRAND.gray }}>{area.icon} {area.title}</h3>
              <p style={{ margin: '5px 0 0 0', color: '#999', fontSize: '0.9rem' }}>
                {area.sections.length} track{area.sections.length !== 1 ? 's' : ''} available
              </p>
            </div>
            <span style={{ color: BRAND.maroon, fontWeight: 'bold' }}>→</span>
          </div>
        ))}
      </div>
    );
  }

  // =========================================================================
  // SECTION SELECTION (within a study area)
  // =========================================================================
  if (view.path && !view.section) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <button onClick={() => setView({ path: null, section: null, module: null })}
          style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '30px', cursor: 'pointer' }}>← Back</button>
        <h1 style={{ color: BRAND.gray }}>{view.path.icon} {view.path.title}</h1>
        {view.path.sections.map(sec => (
          <div key={sec.id} onClick={() => setView({ ...view, section: sec })}
            style={{ background: 'white', padding: '30px', marginBottom: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', borderLeft: `6px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: 0, color: BRAND.gray }}>{sec.title}</h3>
            <span style={{ color: BRAND.maroon, fontWeight: 'bold' }}>→</span>
          </div>
        ))}
      </div>
    );
  }

  // =========================================================================
  // MODULE SELECTION (with progress bars)
  // =========================================================================
  if (view.section && !view.module) {
    const isNP = view.path.id === "NP_PATH";
    const npQuestions = view.section.id === "NP_W4" ? NursePractitionerW4Questions : view.section.id === "NP_W3" ? NursePractitionerW3Questions : NursePractitionerW2Questions;
    const questionsObj = isNP ? npQuestions : HearthDesignSpecialistQuestions;
    const items = isNP 
      ? Object.keys(npQuestions).map(key => ({ id: key, title: key }))
      : HDS_Modules;

    // Compute per-module progress
    const moduleStats = computeModuleStats(questionsObj, items, progress);

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <button onClick={() => setView({ ...view, section: null })}
          style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '30px', cursor: 'pointer' }}>← Back</button>
        <h1 style={{ color: BRAND.gray }}>{view.section.title}</h1>
        
        {items.map(item => {
          const s = moduleStats[item.title] || { total: 0, mastered: 0, attempted: 0 };
          const pct = s.total > 0 ? Math.round((s.mastered / s.total) * 100) : 0;
          const barColor = pct >= 80 ? '#2f855a' : pct >= 50 ? '#b7791f' : pct > 0 ? BRAND.maroon : '#ddd';
          const label = s.attempted > 0 ? `${s.mastered}/${s.total} mastered` : `${s.total} questions`;

          return (
            <div key={item.id} onClick={() => setView({ ...view, module: item })}
              style={{ background: 'white', padding: '25px', marginBottom: '15px', borderRadius: '10px', borderLeft: `6px solid ${barColor}`, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0, color: BRAND.gray }}>{item.title}</h3>
                <span style={{ color: BRAND.maroon, fontWeight: 'bold' }}>
                  {pct >= 80 ? '✓ ' : ''}START →
                </span>
              </div>
              {/* Progress bar */}
              <div style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#999' }}>{label}</span>
                  {s.attempted > 0 && <span style={{ fontSize: '0.85rem', color: barColor, fontWeight: '600' }}>{pct}%</span>}
                </div>
                <div style={{ width: '100%', background: '#eee', height: '6px', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${pct}%`, background: barColor, height: '100%', transition: 'width 0.5s ease', borderRadius: '3px' }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // =========================================================================
  // QUESTION ENGINE
  // =========================================================================
  const isNP = view.path.id === "NP_PATH";
  const npQuestions = view.section.id === "NP_W4" ? NursePractitionerW4Questions : view.section.id === "NP_W3" ? NursePractitionerW3Questions : NursePractitionerW2Questions;
  const questionsObj = isNP ? npQuestions : HearthDesignSpecialistQuestions;

  return (
    <QuestionEngine 
      moduleData={questionsObj[view.module.title]} 
      title={view.module.title}
      userEmail={user.email}
      onBack={() => setView({ ...view, module: null })}
      onSessionComplete={() => fetchProgress(user.email)}
      accent={BRAND.maroon}
    />
  );
}

export default App;