import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [view, setView] = useState({ path: null, section: null, module: null });
  const [authStatus, setAuthStatus] = useState('idle'); // idle, sending, sent, verifying, error

  const BRAND = { maroon: '#670000', gray: '#595959', white: '#ffffff' };

  // --- NEW: Token Handling & Session Management ---
  useEffect(() => {
    const initAuth = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const savedSession = localStorage.getItem('picks_session');

      // 1. Check if we just arrived via a MagicLink
      if (token) {
        setAuthStatus('verifying');
        try {
          const res = await fetch(`https://api-training.picksgallery.com/auth/verify?token=${token}`);
          if (res.ok) {
            const data = await res.json(); // Returns { email: "user@example.com" }
            const userObj = { email: data.email, stats: {}, progress: {} };
            localStorage.setItem('picks_session', JSON.stringify(userObj));
            setUser(userObj);
            // Clean the URL so the token doesn't stay in the address bar
            window.history.replaceState({}, document.title, "/");
          } else {
            setAuthStatus('error');
          }
        } catch (err) {
          setAuthStatus('error');
        }
      } 
      // 2. Otherwise, check if we have a persistent session
      else if (savedSession) {
        setUser(JSON.parse(savedSession));
      }
    };

    initAuth();
  }, []);

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
    } catch (err) {
      setAuthStatus('error');
    }
  };

  // --- SCREEN 1: LOGIN / VERIFYING ---
  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: BRAND.gray }}>
        <div style={{ background: BRAND.white, padding: '50px', borderRadius: '16px', textAlign: 'center', width: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <h1 style={{ color: BRAND.maroon, fontSize: '2.4rem' }}>Training App</h1>
          
          {authStatus === 'verifying' ? (
            <div style={{ padding: '20px' }}>
               <p style={{ color: BRAND.gray }}>Verifying your secure link...</p>
            </div>
          ) : authStatus === 'sent' ? (
            <div>
              <h2 style={{ color: BRAND.gray }}>✉️ Check Your Email</h2>
              <p style={{ color: BRAND.gray }}>A login link was sent to <strong>{email}</strong>.</p>
              <button onClick={() => setAuthStatus('idle')} style={{ color: BRAND.maroon, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Back to login</button>
            </div>
          ) : (
            <form onSubmit={requestMagicLink}>
              <p style={{ color: BRAND.gray, marginBottom: '30px' }}>Enter your email to receive a secure login link.</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required 
                style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #eee', fontSize: '1rem', boxSizing: 'border-box' }} />
              <button type="submit" disabled={authStatus === 'sending'} 
                style={{ width: '100%', padding: '15px', background: BRAND.maroon, color: BRAND.white, border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
              {authStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Link expired or server error. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    );
  }

  // --- SCREEN 2: DASHBOARD ---
  if (!view.path) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: BRAND.maroon, margin: 0, fontSize: '2.5rem' }}>Dashboard</h1>
          <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{ color: BRAND.gray, fontWeight: 'bold', cursor: 'pointer', background: 'none', border: 'none' }}>LOGOUT</button>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} className="picks-card" onClick={() => setView({...view, path: area})} 
              style={{ background: BRAND.white, padding: '40px', borderRadius: '12px', borderLeft: `12px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <span style={{ fontSize: '4rem' }}>{area.icon}</span>
              <h2 style={{ color: BRAND.gray, margin: '20px 0' }}>{area.title}</h2>
              <button style={{ background: BRAND.maroon, color: BRAND.white, border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold' }}>EXPLORE TRACK</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Module Selection
  if (!view.module) {
    const items = !view.section ? view.path.sections : HDS_Modules;
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <button onClick={() => view.section ? setView({...view, section: null}) : setView({...view, path: null})} 
          style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginBottom: '30px', fontSize: '1.1rem' }}>← Back</button>
        <h2 style={{ color: BRAND.gray }}>{!view.section ? view.path.title : view.section.title}</h2>
        {items.map(item => (
          <div key={item.id} onClick={() => !view.section ? setView({...view, section: item}) : setView({...view, module: item})} 
            style={{ background: 'white', padding: '30px', marginBottom: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: `6px solid ${BRAND.maroon}`, cursor: 'pointer' }}>
            <h3 style={{ margin: 0, color: BRAND.gray }}>{item.title}</h3>
            <span style={{ color: BRAND.maroon, fontWeight: 'bold' }}>START →</span>
          </div>
        ))}
      </div>
    );
  }

  // --- SCREEN 3: QUIZ ---
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