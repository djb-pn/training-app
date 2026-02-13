import React, { useState } from 'react';

const roadmap = [
  {
    title: "The Foundation",
    chapters: "Hearth 101 & Intro",
    icon: "\u{1F4D8}",
    time: "22 min",
    topics: ["HDS Role", "Industry Overview", "Certification Goals"],
    videos: ["Hearth 101 (MANDATORY)", "7010: HDS as a Profit Driver", "7088: Test Taking 101"],
    accent: "#3b82f6"
  },
  {
    title: "Core Competencies",
    chapters: "Chapters 1 \u2013 5",
    icon: "\u{1F465}",
    time: "35 min",
    topics: ["Sales Knowledge", "Client Qualification", "Communication Skills"],
    videos: ["5213: Sales 101", "3542: Basic Salesmanship", "6727: Showroom FAQs"],
    accent: "#6366f1"
  },
  {
    title: "Science of Fire",
    chapters: "Chapters 6 \u2013 8",
    icon: "\u{1F525}",
    time: "45 min",
    topics: ["Combustion Principles", "CO Dangers", "Appliance Types"],
    videos: ["5200: NFI Wood Basics", "4451: NFI Gas Theory", "6736: Pyrolysis"],
    accent: "#f97316"
  },
  {
    title: "Safety & Compliance",
    chapters: "Chapter 9",
    icon: "\u{1F6E1}\uFE0F",
    time: "30 min",
    topics: ["UL & ANSI Standards", "NFPA 211", "Building Codes"],
    videos: ["5958: Codes & Instructions", "7664: Codes for Retailers", "3076: Limiting Liability"],
    accent: "#ef4444"
  },
  {
    title: "Venting & Airflow",
    chapters: "Chapter 10",
    icon: "\u{1F4A8}",
    time: "40 min",
    topics: ["Draft & Flow", "Chimney Physics", "Vent Types"],
    videos: ["7421: Chimney Science", "8289: Draft & Flow", "6324: Venting Issues"],
    accent: "#14b8a6"
  },
  {
    title: "Field Planning",
    chapters: "Chapters 11 \u2013 12",
    icon: "\u{1F4D0}",
    time: "45 min",
    topics: ["Site Assessment", "Clearances", "Maintenance Plans"],
    videos: ["7018: Installation Errors", "7571: Chimney Inspections", "7771: Homeowner Experience"],
    accent: "#10b981"
  },
  {
    title: "Fuel Specialties",
    chapters: "Chapters 13 \u2013 16",
    icon: "\u26A1",
    time: "105 min",
    topics: ["Wood, Gas, Pellet", "Electric & Outdoor", "Fuel-Specific Maintenance"],
    videos: ["4444: Selling Gas", "3098: Selling Pellets", "7006: Electric Fireplaces"],
    accent: "#ca8a04"
  },
  {
    title: "Final Review",
    chapters: "Appendices & Exam Prep",
    icon: "\u{1F3C6}",
    time: "60 min",
    topics: ["Knowledge Statements", "Site Forms", "Glossary Terms"],
    videos: ["7049: Risk Management", "7088: Exam Tips"],
    accent: "#a855f7"
  }
];

const studyTips = [
  {
    icon: "\u2705",
    title: "Study Tip #1",
    text: "Never guess on the job or the exam. If you don\u2019t know the answer, use the manual or research it. Accuracy saves lives."
  },
  {
    icon: "\u{1F4DD}",
    title: "Study Tip #2",
    text: "Print Appendix E. The Site Assessment forms are your primary tool for reducing liability and planning installs."
  },
  {
    icon: "\u{1F3AF}",
    title: "The Goal",
    text: "Passing the NFI HDS exam proves you are a facilitator who can bridge the gap between customer dreams and safe installs."
  }
];

const CLOCK = "\u{1F552}";
const BOOK = "\u{1F4D6}";
const FILM = "\u{1F3AC}";
const PLAY = "\u25B6";
const PIN = "\u{1F4CD}";
const ARROW = "\u2190";

export default function LearningMap({ onBack, brand }) {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Back button */}
      <button onClick={onBack}
        style={{ color: brand.maroon, background: 'none', border: 'none', fontWeight: 'bold', marginBottom: '30px', cursor: 'pointer', fontSize: '1rem' }}>
        {ARROW} Back
      </button>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: brand.gray, margin: '0 0 8px 0', fontSize: '1.8rem' }}>
          HDS Certification Roadmap
        </h1>
        <p style={{ color: '#999', margin: '0 0 20px 0', fontSize: '1rem' }}>
          A step-by-step guide through the Hearth Design Specialist manual and video curriculum.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <span style={{ background: 'white', padding: '6px 14px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', fontSize: '0.85rem', fontWeight: '600', color: brand.gray }}>
            {BOOK} ~6.5 Hours Total Reading
          </span>
          <span style={{ background: 'white', padding: '6px 14px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', fontSize: '0.85rem', fontWeight: '600', color: brand.gray }}>
            {FILM} 25+ Key Videos
          </span>
        </div>
      </div>

      {/* Roadmap Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '16px' }}>
        {roadmap.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <div key={index} onClick={() => setActiveStep(isActive ? null : index)}
              style={{
                background: 'white',
                padding: '24px',
                borderRadius: '12px',
                borderLeft: `6px solid ${step.accent}`,
                boxShadow: isActive ? '0 8px 25px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                transform: isActive ? 'scale(1.01)' : 'scale(1)',
              }}>
              {/* Card Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px', background: '#f8fafc',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', flexShrink: 0
                  }}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: brand.gray, fontSize: '1.1rem', fontWeight: '700' }}>{step.title}</h3>
                    <p style={{ margin: '2px 0 0 0', color: '#999', fontSize: '0.85rem', fontWeight: '600' }}>{step.chapters}</p>
                  </div>
                </div>
                <span style={{
                  background: '#f1f5f9', padding: '4px 10px', borderRadius: '6px',
                  fontSize: '0.75rem', fontWeight: '700', color: brand.gray, whiteSpace: 'nowrap'
                }}>
                  {CLOCK} {step.time}
                </span>
              </div>

              {/* Topics */}
              <div style={{ marginBottom: '14px' }}>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', color: '#aaa', margin: '0 0 8px 0' }}>
                  Learning Objectives
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {step.topics.map((t, i) => (
                    <span key={i} style={{
                      fontSize: '0.78rem', background: '#f8fafc', padding: '4px 10px',
                      borderRadius: '4px', border: '1px solid #e2e8f0', color: brand.gray
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Videos */}
              <div>
                <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', color: '#aaa', margin: '0 0 8px 0' }}>
                  Essential Videos
                </p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {step.videos.map((v, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: brand.gray, padding: '3px 0' }}>
                      <span style={{ color: '#cbd5e1', fontSize: '0.75rem' }}>{PLAY}</span>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Active Indicator */}
              {isActive && (
                <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: brand.maroon }}>
                    Step {index + 1} of {roadmap.length} {PIN}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Study Tips Footer */}
      <div style={{
        marginTop: '50px', background: brand.gray, borderRadius: '16px',
        padding: '36px', color: 'white', boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '28px' }}>
          {studyTips.map((tip, i) => (
            <div key={i}>
              <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '700' }}>
                {tip.icon} {tip.title}
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
