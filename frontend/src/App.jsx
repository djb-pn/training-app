import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [view, setView] = useState({ path: null, section: null, module: null });
  const [authStatus, setAuthStatus] = useState('idle');

  const COLORS = { maroon: '#670000', gray: '#595959', white: '#ffffff' };

  useEffect(() => {
    const saved = localStorage.getItem('picks_session');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const requestMagicLink = (e) => {
    e.preventDefault();
    setAuthStatus('sending');
    // Handshake logic to be wired to your Resend backend later
    setTimeout(() => {
      setAuthStatus('sent');
      // For immediate entry during your local testing:
      // setUser({ email, stats: {}, progress: {} }); 
    }, 1200);
  };

  if (!user) {
    return (
      <div className="auth-bg" style={{ background: '#f4f4f4', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="auth-card" style={{ background: COLORS.white, padding: '40px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <h1 style={{ color: COLORS.maroon, margin: '0 0 20px 0' }}>Training App v2.0</h1>
          {authStatus === 'sent' ? (
            <p>Check your email for your secure login link!</p>
          ) : (
            <form onSubmit={requestMagicLink}>
              <p style={{ color: COLORS.gray }}>Enter your email to access study paths.</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email@example.com" required style={{ width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #ddd' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', background: COLORS.maroon, color: COLORS.white, border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  if (!view.path) {
    return (
      <div className="dashboard-container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ color: COLORS.maroon, margin: 0 }}>Dashboard</h1>
          <button onClick={() => { localStorage.removeItem('picks_session'); setUser(null); }} style={{ background: 'none', border: 'none', color: COLORS.gray, textDecoration: 'underline', cursor: 'pointer' }}>Logout</button>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} className="picks-card" onClick={() => setView({...view, path: area})} style={{ background: COLORS.white, borderRadius: '8px', padding: '30px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'pointer', borderLeft: `6px solid ${COLORS.maroon}` }}>
              <span style={{ fontSize: '2rem' }}>{area.icon}</span>
              <h2 style={{ color: COLORS.gray }}>{area.title}</h2>
              <button style={{ background: COLORS.maroon, color: COLORS.white, border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>Explore Track</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!view.module) {
    const items = !view.section ? view.path.sections : HDS_Modules;
    return (
      <div className="dashboard-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        <button onClick={() => view.section ? setView({...view, section: null}) : setView({...view, path: null})} style={{ marginBottom: '20px', color: COLORS.maroon, background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>← Back</button>
        <h1 style={{ color: COLORS.gray }}>{!view.section ? view.path.title : view.section.title}</h1>
        {items.map(item => (
          <div key={item.id} onClick={() => !view.section ? setView({...view, section: item}) : setView({...view, module: item})} style={{ background: COLORS.white, padding: '20px', marginBottom: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.05)', cursor: 'pointer', borderLeft: `4px solid ${COLORS.maroon}` }}>
            <h3 style={{ margin: 0, color: COLORS.gray }}>{item.title}</h3>
            <span style={{ color: COLORS.maroon, fontWeight: 'bold' }}>GO →</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <QuestionEngine 
      moduleData={HearthDesignSpecialistQuestions[view.module.title]} 
      title={view.module.title}
      onBack={() => setView({...view, module: null})}
      accentColor={COLORS.maroon}
    />
  );
}

export default App;