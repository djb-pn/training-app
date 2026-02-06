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
            window.history.replaceState({}, document.title, "/");
          } else { setAuthStatus('error'); }
        } catch (err) { setAuthStatus('error'); }
      } else if (saved) {
        setUser(JSON.parse(saved));
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
    } catch (err) { setAuthStatus('error'); }
  };

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: BRAND.gray }}>
        <div style={{ background: BRAND.white, padding: '50px', borderRadius: '16px', textAlign: 'center', width: '400px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}>
          <h1 style={{ color: BRAND.maroon }}>Training Portal</h1>
          {authStatus === 'sent' ? <p>Email sent to <strong>{email}</strong>!</p> : (
            <form onSubmit={requestMagicLink}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" required 
                style={{ width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '8px', border: '2px solid #eee' }} />
              <button type="submit" style={{ width: '100%', padding: '15px', background: BRAND.maroon, color: BRAND.white, border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // Dashboard View
  if (!view.path) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <h1 style={{ color: BRAND.maroon }}>Dashboard</h1>
          <button onClick={() => { localStorage.clear(); window.location.reload(); }} style={{ color: BRAND.gray, cursor: 'pointer', background: 'none', border: 'none' }}>LOGOUT</button>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} onClick={() => setView({...view, path: area})} 
              style={{ background: 'white', padding: '40px', borderRadius: '12px', borderLeft: `10px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <span style={{ fontSize: '4rem' }}>{area.icon}</span>
              <h2 style={{ color: BRAND.gray }}>{area.title}</h2>
              <button style={{ background: BRAND.maroon, color: 'white', border: 'none', padding: '12px 25px', borderRadius: '6px' }}>EXPLORE</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Module List View
  if (!view.module) {
    const items = !view.section ? view.path.sections : HDS_Modules;
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <button onClick={() => view.section ? setView({...view, section: null}) : setView({...view, path: null})} style={{ color: BRAND.maroon, background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '30px', cursor: 'pointer' }}>← Back</button>
        <h1 style={{ color: BRAND.gray }}>{!view.section ? view.path.title : view.section.title}</h1>
        {items.map(item => (
          <div key={item.id} onClick={() => !view.section ? setView({...view, section: item}) : setView({...view, module: item})} 
            style={{ background: 'white', padding: '30px', marginBottom: '15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', borderLeft: `6px solid ${BRAND.maroon}`, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h3 style={{ margin: 0, color: BRAND.gray }}>{item.title}</h3>
            <span style={{ color: BRAND.maroon, fontWeight: 'bold' }}>START →</span>
          </div>
        ))}
      </div>
    );
  }

  // Quiz View
  return (
    <QuestionEngine 
      moduleData={HearthDesignSpecialistQuestions[view.module.title]} 
      title={view.module.title}
      userEmail={user.email}
      onBack={() => setView({...view, module: null})}
      accent={BRAND.maroon}
    />
  );
}

export default App;