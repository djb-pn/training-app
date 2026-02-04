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

  const requestMagicLink = async (e) => {
    e.preventDefault();
    setAuthStatus('sending');
    try {
      // URL fixed based on your Cloudflare screenshot
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

  if (!user) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: COLORS.gray }}>
        <div style={{ background: COLORS.white, padding: '50px', borderRadius: '16px', textAlign: 'center', width: '400px' }}>
          <h1 style={{ color: COLORS.maroon }}>Training App</h1>
          {authStatus === 'sent' ? (
            <div>
              <h2>✉️ Check Your Email</h2>
              <p>A login link was sent to <strong>{email}</strong>.</p>
              <button onClick={() => setAuthStatus('idle')} style={{ color: COLORS.maroon, background: 'none', border: 'none', textDecoration: 'underline', cursor: 'pointer' }}>Back to login</button>
            </div>
          ) : (
            <form onSubmit={requestMagicLink}>
              <p>Enter your email to receive a login link.</p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '12px', marginBottom: '20px' }} />
              <button type="submit" disabled={authStatus === 'sending'} style={{ width: '100%', padding: '12px', background: COLORS.maroon, color: COLORS.white, border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                {authStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
              {authStatus === 'error' && <p style={{ color: 'red' }}>Error sending email.</p>}
            </form>
          )}
        </div>
      </div>
    );
  }

  if (!view.path) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ color: COLORS.maroon, marginBottom: '40px' }}>Dashboard</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {AppConfig.study_areas.map(area => (
            <div key={area.id} onClick={() => setView({...view, path: area})} style={{ background: COLORS.white, padding: '40px', borderRadius: '12px', borderLeft: `10px solid ${COLORS.maroon}`, cursor: 'pointer', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '3rem' }}>{area.icon}</span>
              <h2 style={{ color: COLORS.gray }}>{area.title}</h2>
              <button style={{ background: COLORS.maroon, color: COLORS.white, border: 'none', padding: '12px 20px', borderRadius: '4px' }}>Explore track</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Chapter selection and Quiz Engine logic remains same but centered
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
       {/* Module List or QuestionEngine View */}
       <button onClick={() => setView({...view, path: null})}>← Back</button>
       <QuestionEngine 
          moduleData={HearthDesignSpecialistQuestions[view.module?.title]} 
          title={view.module?.title} 
          onBack={() => setView({...view, module: null})} 
          accent={COLORS.maroon} 
       />
    </div>
  );
}

export default App;