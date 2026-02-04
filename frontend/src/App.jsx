import React, { useState, useEffect } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null);

  // MagicLink Auth Persistence
  useEffect(() => {
    const user = localStorage.getItem('user_session');
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('user_session', 'active');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user_session');
    setPath(null); setSection(null); setModule(null);
  };

  // 1. MagicLink Login Screen
  if (!isLoggedIn) {
    return (
      <div className="login-wrapper">
        <div className="login-card">
          <h1>Training App v2.0</h1>
          <p>Please log in to access your study paths.</p>
          <button className="primary-btn" onClick={handleLogin}>Login with MagicLink</button>
        </div>
      </div>
    );
  }

  // 2. Main Dashboard (Path Selection)
  if (!path) {
    return (
      <div className="dashboard-container">
        <header className="dash-header">
          <h1>Dashboard</h1>
          <button className="text-link" onClick={handleLogout}>Logout</button>
        </header>
        <div className="card-grid">
          {AppConfig.study_areas.map(area => (
            <div key={area.id} className="training-card" onClick={() => setPath(area)}>
              <div className="card-content">
                <span className="icon-badge">{area.icon}</span>
                <h2>{area.title}</h2>
                <p>Access your {area.title} certification track.</p>
                <button className="start-btn">VIEW TRACK</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 3. Track Selection (SALES, CORE, GAS, WOOD)
  if (!section) {
    return (
      <div className="dashboard-container">
        <button className="back-link" onClick={() => setPath(null)}>← All Tracks</button>
        <h1>{path.title}</h1>
        <div className="card-grid">
          {path.sections.map(s => (
            <div key={s.id} className="training-card" onClick={() => setSection(s)}>
              <div className="card-content">
                <h2>{s.title}</h2>
                <button className="start-btn">OPEN</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 4. Module Selection (Specific to Sales Track)
  if (section.id === "SALES" && !module) {
    return (
      <div className="dashboard-container">
        <button className="back-link" onClick={() => setSection(null)}>← {path.title}</button>
        <h1>Hearth Design Specialist (Sales)</h1>
        <div className="card-grid">
          {HDS_Modules.map(m => (
            <div key={m.id} className="training-card" onClick={() => setModule(m)}>
              <div className="card-content">
                <h2>{m.title}</h2>
                <p>Quiz based on manual chapters.</p>
                <button className="start-btn">START TRAINING</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 5. "Coming Soon" Gate
  if (!module && section.id !== "SALES") {
    return (
      <div className="dashboard-container">
        <button className="back-link" onClick={() => setSection(null)}>← Back</button>
        <div className="coming-soon-box">
          <h2>{section.title}</h2>
          <p>Training material is currently being finalized for this section.</p>
        </div>
      </div>
    );
  }

  // 6. The Quiz View
  const moduleQuestions = HearthDesignSpecialistQuestions[module?.title];

  return (
    <div className="quiz-container">
      <nav className="quiz-nav">
        <button className="back-link" onClick={() => setModule(null)}>← Back to Modules</button>
        <h3>{module.title}</h3>
      </nav>
      {moduleQuestions ? (
        <QuestionEngine moduleData={moduleQuestions} title={module.title} />
      ) : (
        <p>Error: No questions found.</p>
      )}
    </div>
  );
}

export default App;