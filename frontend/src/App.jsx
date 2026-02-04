import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';
import theme from './theme'; 

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('idle');
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null);

  useEffect(() => {
    const checkSession = () => {
      const saved = localStorage.getItem('training_auth_session');
      if (saved) setUser(JSON.parse(saved));
      setLoading(false);
    };
    checkSession();
  }, []);

  const handleRequestLink = async (e) => {
    e.preventDefault();
    setLoginStatus('sending');
    try {
      const response = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) setLoginStatus('sent');
      else throw new Error();
    } catch (err) {
      setLoginStatus('idle');
      // For local testing if backend is down:
      // setUser({ email, progress: {}, stats: {} }); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('training_auth_session');
    setUser(null);
    setPath(null); setSection(null); setModule(null);
  };

  if (loading) return <div className="loading">Loading...</div>;

  // SCREEN 1: MagicLink Login
  if (!user) {
    return (
      <div className="login-wrapper" style={{ backgroundColor: theme.colors.background }}>
        <div className="login-card">
          <h1 style={{ color: theme.colors.primary }}>Training App</h1>
          {loginStatus === 'sent' ? (
            <p className="success-msg">Login link sent! Check your inbox.</p>
          ) : (
            <form onSubmit={handleRequestLink}>
              <p>Enter email to receive your secure MagicLink.</p>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" required />
              <button type="submit" style={{ backgroundColor: theme.colors.accent }}>
                {loginStatus === 'sending' ? 'Sending...' : 'Send MagicLink'}
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }

  // SCREEN 2: Path Selection (Hearth vs Nurse)
  if (!path) {
    return (
      <div className="dashboard-container">
        <header className="dash-header">
          <h1 style={{ color: theme.colors.primary }}>Dashboard</h1>
          <button className="text-btn" onClick={handleLogout}>Logout</button>
        </header>
        <div className="card-grid">
          {AppConfig.study_areas.map(area => (
            <div key={area.id} className="picks-card" onClick={() => setPath(area)}>
              <div className="card-accent" style={{ background: theme.colors.accent }}></div>
              <div className="card-body">
                <span className="card-icon">{area.icon}</span>
                <h2>{area.title}</h2>
                <button className="start-btn" style={{ backgroundColor: theme.colors.accent }}>EXPLORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // SCREEN 3: Section/Module Selection
  if (!module) {
    const items = !section ? path.sections : HDS_Modules;
    return (
      <div className="dashboard-container">
        <button className="back-btn" onClick={() => section ? setSection(null) : setPath(null)}>← Back</button>
        <h1>{!section ? path.title : section.title}</h1>
        <div className="list-menu">
          {items.map(item => (
            <div key={item.id} className="menu-row" onClick={() => !section ? setSection(item) : setModule(item)}>
              <h3>{item.title}</h3>
              <button className="row-btn">OPEN</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // SCREEN 4: Quiz Engine (Finalized)
  return (
    <QuestionEngine 
      moduleData={HearthDesignSpecialistQuestions[module.title]} 
      title={module.title}
      onBack={() => setModule(null)}
      userStats={user.stats || {}}
    />
  );
}

export default App;