/**
 * AppConfiguration.js
 * This file acts as the primary map for the application's navigation.
 * To add new training modules, simply add objects to the 'sections' arrays.
 */

export const AppConfig = {
  study_areas: [
    {
      id: "HEARTH_PATH",
      title: "Hearth Specialists",
      icon: "🔥",
      sections: [
        { id: "HDS_SALES", title: "Hearth Design Specialist (Sales)" },
        { id: "CORE_KNOW", title: "Core Knowledge (Everyone)" },
        { id: "GAS_SPEC", title: "Gas Specialist" },
        { id: "WOOD_SPEC", title: "Wood Specialist" }
      ]
    },
    {
      id: "NP_PATH",
      title: "Nurse Practitioner",
      icon: "🩺",
      sections: [
        { id: "NP_W2", title: "Week 2" },
        { id: "NP_W3", title: "Week 3" },
        { id: "NP_W4", title: "Week 4" }
      ]
    }
  ]
};

/**
 * HDS_Modules maps the Hearth Design Specialist (Sales) track
 * to the specific modules found in HDS_Sales_Questions.js
 *
 * 5-Module Structure:
 *   M1 = Intro, Ch 1-2  (9 questions)
 *   M2 = Ch 3-5          (36 questions)
 *   M3 = Ch 6-9          (35 questions)
 *   M4 = Ch 10-13        (45 questions)
 *   M5 = Ch 14-16        (45 questions)
 */
export const HDS_Modules = [
  { id: "M1", title: "Module 1: Role & Sales Strategy" },
  { id: "M2", title: "Module 2: Client & Home Assessment" },
  { id: "M3", title: "Module 3: Technical Foundations" },
  { id: "M4", title: "Module 4: Installation & Wood Systems" },
  { id: "M5", title: "Module 5: Gas, Pellet & Other Systems" }
];