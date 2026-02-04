import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [view, setView] = useState({ path: null, section: null, module: null });
  const [authStatus, setAuthStatus] = useState('idle'); // idle, sending, sent, error

  const BRAND = { maroon: '#670000', gray: '#595959', white: '#ffffff' };

  useEffect(() => {
    const saved = localStorage.getItem('picks_session');
    if (saved) setUser(JSON.parse(saved));
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: BRAND.gray, width: '100vw' }}>
        <div style={{ background: BRAND.white, padding: '50px', borderRadius: '16px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', width: '100%', maxWidth: '450px' }}>
          <h1 style={{ color: BRAND.maroon, margin: '0 0 10px 0', fontSize: '2.4rem' }}>Training App</h1>
          
          {authStatus === 'sent' ? (
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '3rem' }}>✉️</div>
              <h2 style={{ color: BRAND.gray }}>Link Sent!</h2>
              <p style={{ color: BRAND.gray, lineHeight: '1.5' }}>We sent a secure login link to <strong>{email}</strong>. Please check your inbox and click the link to continue.</p>
              <button onClick={() => setAuthStatus('idle')} style={{ color: BRAND.maroon, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Back to login</button>
            </div>
          ) : (
            <form onSubmit={requestMagicLink}>
              <p style={{ color: BRAND.gray, marginBottom: '30px' }}>Please log in to access your study paths.</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required 
                style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #eee', fontSize: '1rem', boxSizing: 'border-box' }} />
              <button type="submit" disabled={authStatus === 'sending'} 
                style={{ width: '100%', padding: '15px', background: BRAND.maroon, color: BRAND.white, border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
              {authStatus === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Failed to send. Check your connection.</p>}
            </form>
          )}
        </div>
      </div>
    );
  }

  if (!view.path) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: BRAND.maroon, margin: 0, fontSize: '2.5rem' }}>Dashboard</h1>
          <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{ color: BRAND.gray, fontWeight: 'bold', cursor: 'pointer', background: 'none', border: 'none' }}>LOGOUT</button>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} onClick={() => setView({...view, path: area})} 
              style={{ background: BRAND.white, padding: '40px', borderRadius: '12px', borderLeft: `12px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <span style={{ fontSize: '4rem' }}>{area.icon}</span>
              <h2 style={{ color: BRAND.gray, margin: '20px 0' }}>{area.title}</h2>
              <button style={{ background: BRAND.maroon, color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px', fontWeight: 'bold' }}>EXPLORE TRACK</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!view.module) {
    const items = !view.section ? view.path.sections : HDS_Modules;
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <button onClick={() => view.section ? setView({...view, section: null}) : setView({...view, path: null})} 
          style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginBottom: '30px', fontSize: '1.1rem' }}>← Back</button>
        <h2 style={{ color: BRAND.gray, marginBottom: '40px' }}>{!view.section ? view.path.title : view.section.title}</h2>
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