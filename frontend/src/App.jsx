import React, { useState } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';
import './App.css';

function App() {
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null); 

  const resetAll = () => { setPath(null); setSection(null); setModule(null); };

  // 1. Path Selection (Main Menu)
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

  // 2. Section Selection (e.g., Sales, Wood, Gas, or Week 2)
  if (!section) {
    return (
      <div className="container">
        <button className="back-btn" onClick={resetAll}>← Main Menu</button>
        <h1>{path.title}</h1>
        <div className="list">
          {path.sections.map(s => (
            <button key={s.id} onClick={() => setSection(s)}>{s.title}</button>
          ))}
        </div>
      </div>
    );
  }

  // 3. HDS Sales Module Selection 
  // (Note: This list only shows for the Sales ID)
  if (section.id === "SALES" && !module) {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSection(null)}>← Back to {path.title}</button>
        <h1>{section.title}</h1>
        <div className="list">
          {HDS_Modules.map(m => (
            <button key={m.id} onClick={() => setModule(m)}>{m.title}</button>
          ))}
        </div>
      </div>
    );
  }

  // 4. Placeholder for empty sections (Wood, Gas, Core, NP Weeks)
  if (!module && section.id !== "SALES") {
    return (
      <div className="container">
        <button className="back-btn" onClick={() => setSection(null)}>← Back</button>
        <h2>{section.title}</h2>
        <div className="coming-soon">
          <p>This manual content is coming soon.</p>
        </div>
      </div>
    );
  }

  // 5. Quiz Engine Execution
  const moduleQuestions = HearthDesignSpecialistQuestions[module?.title];

  return (
    <div className="container">
      <button className="back-btn" onClick={() => setModule(null)}>← Back to Modules</button>
      {moduleQuestions ? (
        <QuestionEngine 
          moduleData={moduleQuestions} 
          title={module.title}
        />
      ) : (
        <p>No questions found for this module.</p>
      )}
    </div>
  );
}

export default App;
