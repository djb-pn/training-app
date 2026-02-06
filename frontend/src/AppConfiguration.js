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
 */
export const HDS_Modules = [
  { id: "M1", title: "Module 1: Role & Sales Strategy" },
  { id: "M2", title: "Module 2: Client Assessment & Products" },
  { id: "M3", title: "Module 3: Technical Standards" },
  { id: "M4", title: "Module 4: Installation & Fuel Types" }
];