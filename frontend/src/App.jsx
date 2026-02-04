import React, { useState } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';
import './App.css';

function App() {
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null); 

  const resetAll = () => { 
    setPath(null); 
    setSection(null); 
    setModule(null); 
  };

  // 1. Initial Path Selection Screen (Replaces old Dashboard)
  if (!path) {
    return (
      <div className="container">
        <header className="app-header">
          <h1>Training App v2.0</h1>
          <p>Select your certification path to begin</p>
        </header>
        <div className="grid">
          {AppConfig.study_areas.map(area => (
            <button key={area.id} className="path-card" onClick={() => setPath(area)}>
              <span className="icon">{area.icon}</span>
              <h2>{area.title}</h2>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. Certification Track Selection (Core vs Sales vs Gas vs Wood)
  if (!section) {
    return (
      <div className="container">
        <button className="back-btn" onClick={resetAll}>← Main Menu</button>
        <h1>{path.title}</h1>
        <div className="list">
          {path.sections.map(s => (
            <button key={s.id} className="menu-item" onClick={() => setSection(s)}>
              {s.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 3. Module Selection (HDS Sales Specific)
  if (section.id === "SALES" && !module) {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSection(null)}>← Back to Tracks</button>
        <h1>{section.title}</h1>
        <div className="list">
          {HDS_Modules.map(m => (
            <button key={m.id} className="menu-item" onClick={() => setModule(m)}>
              {m.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 4. "Coming Soon" Safety Gate for empty tracks
  if (!module && section.id !== "SALES") {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSection(null)}>← Back</button>
        <h2>{section.title}</h2>
        <div className="placeholder-box">
          <p>The manual for {section.title} is currently being processed.</p>
        </div>
      </div>
    );
  }

  // 5. Quiz Logic Execution
  const moduleQuestions = HearthDesignSpecialistQuestions[module?.title];

  return (
    <div className="container">
      <div className="quiz-header">
        <button className="back-btn" onClick={() => setModule(null)}>← Change Module</button>
        <h2>{module.title}</h2>
      </div>
      {moduleQuestions ? (
        <QuestionEngine 
          moduleData={moduleQuestions} 
          title={module.title}
        />
      ) : (
        <p>Data synchronization error: Questions not found for this module.</p>
      )}
    </div>
  );
}

export default App;
