import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [view, setView] = useState({ path: null, section: null, module: null });
  const [authStatus, setAuthStatus] = useState('idle');

  const BRAND = { maroon: '#670000', gray: '#595959', white: '#ffffff' };

  // Restore Session
  useEffect(() => {
    const saved = localStorage.getItem('picks_session');
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
       // Future: Verify token with /auth/verify
       setUser({ email: "Verified User" }); 
    } else if (saved) {
       setUser(JSON.parse(saved));
    }
  }, []);

  const requestMagicLink = async (e) => {
    e.preventDefault();
    setAuthStatus('sending');
    try {
      const res = await fetch('https://training-api.djb-pn.workers.dev/auth/send-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) setAuthStatus('sent');
      else setAuthStatus('error');
    } catch (err) {
      setAuthStatus('error');
    }
  };

  if (!user) {
    return (
      <div className="auth-bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#595959' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '12px', width: '400px', textAlign: 'center' }}>
          <h1 style={{ color: BRAND.maroon }}>Training App</h1>
          {authStatus === 'sent' ? (
            <p>Check your email for your secure login link!</p>
          ) : (
            <form onSubmit={requestMagicLink}>
              <p>Enter email for access:</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '15px' }} />
              <button type="submit" style={{ width: '100%', padding: '12px', background: BRAND.maroon, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ color: BRAND.maroon }}>Picks Gallery Training</h1>
          <button onClick={() => {localStorage.clear(); window.location.reload();}} style={{ color: BRAND.gray, background: 'none', border: 'none', cursor: 'pointer' }}>LOGOUT</button>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} onClick={() => setView({...view, path: area})} style={{ background: 'white', padding: '40px', borderRadius: '8px', borderLeft: `10px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '3rem' }}>{area.icon}</span>
              <h2 style={{ color: BRAND.gray }}>{area.title}</h2>
              <button style={{ background: BRAND.maroon, color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px' }}>Explore track</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!view.module) {
    const items = !view.section ? view.path.sections : HDS_Modules;
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
        <button onClick={() => view.section ? setView({...view, section: null}) : setView({...view, path: null})} style={{ color: BRAND.maroon, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>← Back</button>
        <h2 style={{ color: BRAND.gray }}>{!view.section ? view.path.title : view.section.title}</h2>
        {items.map(item => (
          <div key={item.id} onClick={() => !view.section ? setView({...view, section: item}) : setView({...view, module: item})} style={{ background: 'white', padding: '25px', marginBottom: '15px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', borderLeft: `5px solid ${BRAND.maroon}`, cursor: 'pointer' }}>
            <h3 style={{ margin: 0, color: BRAND.gray }}>{item.title}</h3>
            <span style={{ color: BRAND.maroon }}>START →</span>
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
      accent={BRAND.maroon}
    />
  );
}

export default App;