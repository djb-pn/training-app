export const AppConfig = {
  study_areas: [
    {
      id: "HEARTH",
      title: "Hearth Specialists",
      icon: "🔥",
      sections: [
        { id: "CORE", title: "Core Knowledge (Everyone)" },
        { id: "SALES", title: "Hearth Design Specialist (Sales)" },
        { id: "GAS", title: "Gas Specialist" },
        { id: "WOOD", title: "Wood Specialist" }
      ]
    },
    {
      id: "NP",
      title: "Nurse Practitioner",
      icon: "🩺",
      sections: [
        { id: "W2", title: "Week 2" },
        { id: "W3", title: "Week 3" },
        { id: "W4", title: "Week 4" }
      ]
    }
  ]
};

export const HDS_Modules = [
  { id: "M1", title: "Module 1: Role & Sales Strategy", chapters: ["Intro", 1, 2] },
  { id: "M2", title: "Module 2: Client Assessment & Products", chapters: [3, 4, 5, 8] },
  { id: "M3", title: "Module 3: Technical Standards", chapters: [6, 7, 9] },
  { id: "M4", title: "Module 4: Installation & Fuel Types", chapters: [10, 11, 12, 13, 14, 15] }
];