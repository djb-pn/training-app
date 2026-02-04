import React, { useState } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null); 

  const resetAll = () => { 
    setPath(null); 
    setSection(null); 
    setModule(null); 
  };

  // 1. MAIN PATH SELECTION (Splash Screen)
  if (!path) {
    return (
      <div className="app-container">
        <header className="main-header">
          <h1>Training App v2.0</h1>
          <p>Choose a Study Track</p>
        </header>
        <div className="selection-grid">
          {AppConfig.study_areas.map(area => (
            <button key={area.id} className="card-button" onClick={() => setPath(area)}>
              <span className="icon">{area.icon}</span>
              <div className="card-content">
                <h2>{area.title}</h2>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. SECTION SELECTION (Core, Sales, Gas, Wood)
  if (!section) {
    return (
      <div className="app-container">
        <button className="nav-back" onClick={resetAll}>← Home</button>
        <h1>{path.title}</h1>
        <div className="menu-list">
          {path.sections.map(s => (
            <button key={s.id} className="menu-button" onClick={() => setSection(s)}>
              {s.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 3. MODULE SELECTION (Grouped Chapters from Manual)
  if (section.id === "SALES" && !module) {
    return (
      <div className="app-container">
        <button className="nav-back" onClick={() => setSection(null)}>← Back to Tracks</button>
        <h1>{section.title}</h1>
        <div className="menu-list">
          {HDS_Modules.map(m => (
            <button key={m.id} className="menu-button" onClick={() => setModule(m)}>
              {m.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 4. PLACEHOLDER (For sections not yet filled with manual data)
  if (!module && section.id !== "SALES") {
    return (
      <div className="app-container">
        <button className="nav-back" onClick={() => setSection(null)}>← Back</button>
        <div className="placeholder-container">
          <h2>{section.title}</h2>
          <p>Manual content for this section is coming soon.</p>
        </div>
      </div>
    );
  }

  // 5. QUIZ ENGINE (Loads the 70 questions)
  const moduleQuestions = HearthDesignSpecialistQuestions[module?.title];

  return (
    <div className="app-container">
      <button className="nav-back" onClick={() => setModule(null)}>← Change Module</button>
      {moduleQuestions ? (
        <QuestionEngine 
          moduleData={moduleQuestions} 
          title={module.title}
        />
      ) : (
        <div className="error-box">
          <p>Questions not found for {module?.title}.</p>
        </div>
      )}
    </div>
  );
}

export default App;