export const chapter13Questions = [
  {
    id: "ch13_q1",
    type: "single",
    prompt: "According to NFPA 211, what is the maximum allowable horizontal run of a chimney connector for a solid fuel appliance?",
    options: [
      "75% of the height of the vertical chimney",
      "10 feet total length regardless of vertical height",
      "50% of the height of the vertical portion of the chimney",
      "1/4 inch of rise for every 12 inches"
    ],
    answer: 2, // Index of the correct option
    citation: "NFPA 211 requires that the horizontal run of a connector be no longer than 50% of the height of the vertical portion of the chimney above the connector.",
    page: "70"
  },
  {
    id: "ch13_q2",
    type: "multiple", // All-or-nothing
    prompt: "Which of the following are required for a masonry chimney cleanout? (Select all that apply)",
    options: [
      "Must be at least 6 inches below the lowest inlet",
      "Must be made of ferrous metal or masonry",
      "Must be air-tight",
      "Must be at least 12 inches above grade"
    ],
    answer: [0, 1, 2], // Indices 0, 1, and 2 are correct
    citation: "Cleanouts shall be equipped with ferrous metal or masonry doors... arranged to remain tightly closed. The upper edge shall be at least 6 in. below the lowest chimney inlet.",
    page: "72"
  },
  {
  id: "ch13_q3",
  type: "matching",
  prompt: "Match the masonry chimney component with its specific requirement:",
  terms: ["Flue Liner", "Cleanout Door", "Chimney Cap"],
  definitions: [
    "Must be 6 inches below the lowest inlet", 
    "Must have a sloped surface to shed water", 
    "Must be fireclay or equivalent material"
  ],
  answer: { 0: 2, 1: 0, 2: 1 }, // Term 0 pairs with Def 2, etc.
  citation: "Flue liners shall be of fireclay... Cleanouts shall be 6 in. below the inlet... Chimney caps shall be designed to shed water.",
  page: "72-74"
}
];