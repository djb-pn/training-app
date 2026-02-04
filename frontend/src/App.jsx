import React, { useState } from 'react';
import { AppConfig, HDS_Modules } from './AppConfiguration';
import { HearthDesignSpecialistQuestions } from './data/HDS_Sales_Questions';
import QuestionEngine from './components/QuestionEngine';

function App() {
  // These variables remember where the user is in the app
  const [path, setPath] = useState(null); 
  const [section, setSection] = useState(null); 
  const [module, setModule] = useState(null); 

  // Function to jump back to the very beginning
  const resetAll = () => { 
    setPath(null); 
    setSection(null); 
    setModule(null); 
  };

  // STEP 1: Main Menu (Nurse Practitioner vs Hearth Specialists)
  if (!path) {
    return (
      <div className="app-container">
        <h1>Training App v2.0</h1>
        <div className="path-selection">
          {AppConfig.study_areas.map(area => (
            <div key={area.id} className="selection-card" onClick={() => setPath(area)}>
              <span className="icon">{area.icon}</span>
              <h2>{area.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // STEP 2: Sub-Menu (e.g., Choosing between Sales, Gas, or Wood)
  if (!section) {
    return (
      <div className="app-container">
        <button onClick={resetAll}>← Main Menu</button>
        <h1>{path.title}</h1>
        <div className="section-list">
          {path.sections.map(s => (
            <button key={s.id} onClick={() => setSection(s)}>
              {s.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // STEP 3: Sales Modules (Specific to Hearth Design Specialist)
  if (section.id === "SALES" && !module) {
    return (
      <div className="app-container">
        <button onClick={() => setSection(null)}>← Back</button>
        <h1>{section.title}</h1>
        <div className="module-list">
          {HDS_Modules.map(m => (
            <button key={m.id} onClick={() => setModule(m)}>
              {m.title}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // STEP 4: Coming Soon (Safety gate for empty sections like Wood/Gas/Nurse Weeks)
  if (!module && section.id !== "SALES") {
    return (
      <div className="app-container">
        <button onClick={() => setSection(null)}>← Back</button>
        <h2>{section.title}</h2>
        <div className="coming-soon-message">
          <p>This training module is currently being finalized.</p>
        </div>
      </div>
    );
  }

  // STEP 5: The Quiz (Loads the 70 questions we've mapped)
  const moduleQuestions = HearthDesignSpecialistQuestions[module?.title];

  return (
    <div className="app-container">
      <button onClick={() => setModule(null)}>← Back to Modules</button>
      {moduleQuestions ? (
        <QuestionEngine 
          moduleData={moduleQuestions} 
          title={module.title}
        />
      ) : (
        <p>Questions for this specific selection are coming soon.</p>
      )}
    </div>
  );
}

export default App;
