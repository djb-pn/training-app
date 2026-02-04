import React, { useState } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';
import './App.css';

function App() {
  const [path, setPath] = useState(null); // HEARTH or NP
  const [section, setSection] = useState(null); // SALES, CORE, W2, etc.
  const [module, setModule] = useState(null); // Module 1, 2, etc.

  const resetAll = () => { setPath(null); setSection(null); setModule(null); };

  // 1. Splash Screen: Select Path
  if (!path) {
    return (
      <div className="container">
        <h1>Training App v2.0</h1>
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

  // 2. Section Selection (e.g., Sales vs Gas vs Core)
  if (!section) {
    return (
      <div className="container">
        <button onClick={resetAll}>← Main Menu</button>
        <h1>{path.title}</h1>
        <div className="list">
          {path.sections.map(s => (
            <button key={s.id} onClick={() => setSection(s)}>{s.title}</button>
          ))}
        </div>
      </div>
    );
  }

  // 3. Module Selection (Specific to Sales for now)
  if (section.id === "SALES" && !module) {
    return (
      <div className="container">
        <button onClick={() => setSection(null)}>← Back to {path.title}</button>
        <h1>{section.title}</h1>
        <div className="list">
          {HDS_Modules.map(m => (
            <button key={m.id} onClick={() => setModule(m)}>{m.title}</button>
          ))}
        </div>
      </div>
    );
  }

  // 4. Quiz Engine (Loads the grouped questions)
  return (
    <div className="container">
      <button onClick={() => setModule(null)}>← Back to Modules</button>
      <QuestionEngine 
        moduleData={HearthDesignSpecialistQuestions[module.title]} 
        title={module.title}
      />
    </div>
  );
}

export default App;