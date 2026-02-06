// --- HDS BATCH 1: Chapters 1-4 (Sales, Client, & Product Knowledge) ---

const hds_batch_1 = [
  {
    id: "HDS-001",
    question: "Why is the Hearth Design Specialist described as the 'cog in the wheel' of a hearth business?",
    options: [
      "They act as the conduit between the client and the rest of the team, directing the relationship.",
      "They are responsible for ordering inventory and maintaining supplier relationships.",
      "They oversee the installation crew and manage scheduling for all field work.",
      "They handle all warranty claims and manufacturer communications on behalf of the shop."
    ],
    answer: "They act as the conduit between the client and the rest of the team, directing the relationship.",
    explanation: "The Specialist is usually the first point of contact and guides the client through sales, installation, and ownership [cite: 275-276]."
  },
  {
    id: "HDS-002",
    question: "What is the primary difference between a 'feature' and a 'benefit'?",
    options: [
      "A feature describes the fuel cost; a benefit describes the energy savings over time.",
      "A feature is an add-on accessory; a benefit is what comes standard with the unit.",
      "A feature is a product characteristic; a benefit is the reason the customer buys it.",
      "They are interchangeable terms."
    ],
    answer: "A feature is a product characteristic; a benefit is the reason the customer buys it.",
    explanation: "Features describe the product (e.g., hopper size), while benefits describe the advantage to the user (e.g., less refilling)[cite: 371]."
  },
  {
    id: "HDS-003",
    question: "What is the recommended listening-to-talking ratio for a Hearth Design Specialist?",
    options: [
      "90% Listening / 10% Talking",
      "25% Listening / 75% Talking",
      "75% Listening / 25% Talking",
      "50% Listening / 50% Talking"
    ],
    answer: "75% Listening / 25% Talking",
    explanation: "Listening more allows the Specialist to gather the necessary information to guide the sale effectively[cite: 357]."
  },
  {
    id: "HDS-004",
    question: "Why should you avoid asking 'Yes/No' questions during the discovery phase?",
    options: [
      "They extend the sales consultation well beyond the recommended timeframe.",
      "They do not incite discussion or encourage the customer to open up.",
      "They violate the professional sales code of conduct outlined by NFI guidelines.",
      "They make the customer feel like they are being formally interrogated about their choices."
    ],
    answer: "They do not incite discussion or encourage the customer to open up.",
    explanation: "Open-ended questions urge the homeowner to share details about their lifestyle and home that are critical for qualifying[cite: 355]."
  },
  {
    id: "HDS-005",
    question: "Which of the following is an example of a 'benefit'?",
    options: [
      "The hopper holds 60 pounds of pellets and meets PFI specifications.",
      "You will save money on your monthly heating bill.",
      "This stove has a 40,000 BTU input rating verified by the testing laboratory.",
      "This unit is EPA certified."
    ],
    answer: "You will save money on your monthly heating bill.",
    explanation: "The other options are technical features; saving money is the positive result (benefit) for the customer[cite: 372]."
  },
  {
    id: "HDS-006",
    question: "Why must manufacturer brochures be used with caution?",
    options: [
      "They do not list prices.",
      "They provide excessive technical detail that overwhelms the average homeowner.",
      "They frequently contain technical specification errors from outdated product lines.",
      "They are created by marketing firms and may show unapproved installations or general claims."
    ],
    answer: "They are created by marketing firms and may show unapproved installations or general claims.",
    explanation: "Brochures prioritize aesthetics and may depict setups (like insufficient hearth extensions) that violate safety codes[cite: 388]."
  },
  {
    id: "HDS-007",
    question: "What is the best way to handle a customer who quotes incorrect 'scuttlebutt' from a friend?",
    options: [
      "Acknowledge their comment and redirect the conversation to a different product.",
      "Immediately tell them their friend was wrong and explain the correct information.",
      "Agree with them to maintain rapport and correct the information on a follow-up call.",
      "Gently correct them by pointing out what you, as an expert, have found to be true."
    ],
    answer: "Gently correct them by pointing out what you, as an expert, have found to be true.",
    explanation: "You must ensure they have correct information without offending them or being combative[cite: 424]."
  },
  {
    id: "HDS-008",
    question: "If a customer asks for an 'insert' but describes a 'fireplace,' what is likely happening?",
    options: [
      "They have already decided on a gas log set and are looking for pricing.",
      "They want a custom masonry fireplace built from scratch on their property.",
      "They are testing your knowledge to see if you are a qualified specialist.",
      "They are using terms incorrectly and may be confused by internet research."
    ],
    answer: "They are using terms incorrectly and may be confused by internet research.",
    explanation: "Customers often confuse terminology (e.g., thinking a manufactured fireplace is an insert because it goes into a wall)[cite: 454]."
  },
  {
    id: "HDS-009",
    question: "What should you assume if a customer enters your shop?",
    options: [
      "They are gathering information to pass along to their contractor for a future project.",
      "They are there to buy or are making a serious inquiry.",
      "They wandered in from an adjacent store and are not an active prospect.",
      "They are browsing to compare prices with what they found online or at big box stores."
    ],
    answer: "They are there to buy or are making a serious inquiry.",
    explanation: "In today's busy world, few people visit specialty retail stores without a serious intent or need[cite: 588]."
  },
  {
    id: "HDS-010",
    question: "When closing a sale, what are you selling besides the appliance?",
    options: [
      "Your expertise, service, and certification.",
      "A long-term maintenance agreement covering annual inspections and cleaning.",
      "A promotional discount that incentivizes them to finalize the purchase today.",
      "The venting system, hearth pad, and all required accessories for the installation."
    ],
    answer: "Your expertise, service, and certification.",
    explanation: "The value proposition includes the Specialist's knowledge and the business's support capabilities[cite: 464]."
  },
  {
    id: "HDS-011",
    question: "What is the 'Primary Heat' goal?",
    options: [
      "Heating as much of the living area as possible for most of the cold weather.",
      "Creating an attractive focal point with real flames for occasional holiday entertaining.",
      "Heating a single back room or addition that the central system cannot reach.",
      "Providing backup heat during power outages when the central furnace is inoperable."
    ],
    answer: "Heating as much of the living area as possible for most of the cold weather.",
    explanation: "Primary heat customers prioritize high efficiency and fuel costs over aesthetics[cite: 491]."
  },
  {
    id: "HDS-012",
    question: "What distinguishes a 'Supplemental Heat' goal?",
    options: [
      "Completely replacing the central furnace with a high-efficiency hearth appliance.",
      "Burning wood purely for the ambiance and aroma without any heating objective.",
      "Heating domestic water through a coil system integrated into the appliance.",
      "Heating a specific area that is inadequately served by the central system."
    ],
    answer: "Heating a specific area that is inadequately served by the central system.",
    explanation: "This target usually involves sizing a unit for a specific cold room or addition[cite: 494]."
  },
  {
    id: "HDS-013",
    question: "If a customer wants 'Emergency Heat,' what is the most critical technical requirement?",
    options: [
      "The unit must operate on standard 120V household electricity with a backup generator.",
      "The unit must carry a specific EPA certification for emergency use applications.",
      "The unit must avoid reliance on utility company electricity.",
      "The unit must be a direct-vent gas appliance with battery-powered ignition."
    ],
    answer: "The unit must avoid reliance on utility company electricity.",
    explanation: "To function during power outages, the appliance cannot depend on grid power for ignition or draft[cite: 499]."
  },
  {
    id: "HDS-014",
    question: "Which fuel type requires the highest level of 'Direct Involvement' from the user?",
    options: [
      "Gas heating appliance",
      "Pellet appliance",
      "Cordwood appliance",
      "Electric appliance"
    ],
    answer: "Cordwood appliance",
    explanation: "Wood burning requires cutting, splitting, stacking, loading, and ash removal, representing high involvement[cite: 517]."
  },
  {
    id: "HDS-015",
    question: "What is a 'Level II' inspection?",
    options: [
      "A video scan of the interior flue required upon changes to the system.",
      "A visual inspection of the chimney cap and exterior masonry from ground level.",
      "A thermal imaging check of the roof flashing and chimney crown condition.",
      "A destructive test requiring removal of sections of the masonry for analysis."
    ],
    answer: "A video scan of the interior flue required upon changes to the system.",
    explanation: "NFPA 211 requires a Level II inspection for any change in fuel type or appliance installation[cite: 545]."
  },
  {
    id: "HDS-016",
    question: "Why must a chimney be taller than the peak of the house?",
    options: [
      "To avoid negative pressure zones that cause poor draft.",
      "To prevent birds and small animals from nesting inside the flue system.",
      "To provide better access for annual inspection and chimney sweeping.",
      "To improve the overall aesthetic appearance of the home from the street."
    ],
    answer: "To avoid negative pressure zones that cause poor draft.",
    explanation: "Vents below the roof peak are susceptible to wind turbulence and negative pressure, reducing performance[cite: 551]."
  },
  {
    id: "HDS-017",
    question: "When assessing a home, why is it important to note the 'tightness' of the construction?",
    options: [
      "To determine if makeup air is needed for combustion.",
      "To estimate the resale value impact of adding a hearth appliance.",
      "To check for structural pest damage that could complicate the installation.",
      "To determine the appropriate interior finish colors and design options."
    ],
    answer: "To determine if makeup air is needed for combustion.",
    explanation: "Tight homes may not provide enough natural infiltration for combustion air, leading to draft issues[cite: 566]."
  },
  {
    id: "HDS-018",
    question: "Why are 'big box' stores generally at a disadvantage compared to specialty hearth retailers?",
    options: [
      "They only carry wood stoves and do not stock gas or pellet alternatives.",
      "They are only open during weekday business hours and closed on weekends.",
      "They typically charge higher prices due to their overhead and brand markups.",
      "They rarely have staff with specialized product or installation knowledge."
    ],
    answer: "They rarely have staff with specialized product or installation knowledge.",
    explanation: "The Specialist offers expertise in creating a complete system package that big box stores cannot match[cite: 571]."
  },
  {
    id: "HDS-019",
    question: "What is the 'mental picture' Mrs. Jones likely has when she asks for a fireplace?",
    options: [
      "The gas valve assembly and control system that regulates fuel flow.",
      "The entire finished wall, including mantel and surround.",
      "The metal firebox unit without any finish materials or accessories.",
      "The venting pipe and chimney components that exhaust the combustion gases."
    ],
    answer: "The entire finished wall, including mantel and surround.",
    explanation: "Clients visualize the finished aesthetic, not just the appliance SKU; the Specialist must bundle the components[cite: 583]."
  },
  {
    id: "HDS-020",
    question: "Why is 'bigger is better' often the wrong approach for sizing hearth appliances?",
    options: [
      "Large units always require 8-inch or larger venting regardless of fuel type.",
      "It can lead to overheating the room and inefficient low-burn operation.",
      "Large units are too heavy for standard floor structures and require reinforcement.",
      "Large units have proportionally higher installation costs without better performance."
    ],
    answer: "It can lead to overheating the room and inefficient low-burn operation.",
    explanation: "An oversized unit will drive the user out of the room or be operated at dirty, inefficient low settings[cite: 611]."
  },
  {
    id: "HDS-021",
    question: "What is the primary rule for venting configuration?",
    options: [
      "Performance and heat output are the only factors that matter for vent design.",
      "The upfront purchase cost is the most important factor in every installation decision.",
      "Safety first, performance second, aesthetics third.",
      "Aesthetics and visual appeal should always be the primary design consideration."
    ],
    answer: "Safety first, performance second, aesthetics third.",
    explanation: "The Specialist must prioritize a safe and functional vent layout over the client's desire to hide the pipe[cite: 623]."
  },
  {
    id: "HDS-022",
    question: "Why is the venting system often the most expensive part of the quote?",
    options: [
      "All venting materials must be imported from specialized manufacturers overseas.",
      "It is the 'engine' of the system and requires high-grade materials.",
      "Venting is legally required but provides no actual benefit to system performance.",
      "Dealers apply the highest markup percentage to venting components."
    ],
    answer: "It is the 'engine' of the system and requires high-grade materials.",
    explanation: "The venting drives the entire system; ensuring the client understands its value is critical to the sale[cite: 631]."
  },
  {
    id: "HDS-023",
    question: "How does a blower affect heat distribution?",
    options: [
      "It moves heat away from the appliance but cannot push it down long hallways.",
      "It increases the total BTU output of the fire by improving oxygen circulation.",
      "It distributes heat evenly to back bedrooms and distant areas of the home.",
      "It cools the room temperature by circulating air away from the heat source."
    ],
    answer: "It moves heat away from the appliance but cannot push it down long hallways.",
    explanation: "Blowers assist in moving air into the immediate room but are not central furnaces capable of whole-home distribution[cite: 642]."
  },
  {
    id: "HDS-024",
    question: "What is 'Zone Heating'?",
    options: [
      "Heating only the basement level where the hearth appliance is installed.",
      "Heating the specific area where people spend time, allowing the central furnace to run less.",
      "Heating the outdoor living space with a dedicated patio-rated appliance.",
      "Heating every room in the house to the same consistent temperature."
    ],
    answer: "Heating the specific area where people spend time, allowing the central furnace to run less.",
    explanation: "Zone heating creates a comfortable warm zone in the main living area while saving energy elsewhere[cite: 648]."
  },
  {
    id: "HDS-025",
    question: "What should a Specialist do if they do not know the answer to a technical question?",
    options: [
      "Minimize the question by telling the client it is not relevant to their situation.",
      "Admit they don't know, research it, and get back to the client.",
      "Redirect the conversation to a different topic to avoid appearing inexperienced.",
      "Make an educated guess based on similar products they have worked with before."
    ],
    answer: "Admit they don't know, research it, and get back to the client.",
    explanation: "Providing incorrect information can be catastrophic; honesty builds trust and ensures safety[cite: 607]."
  },
  {
    id: "HDS-026",
    question: "What legal responsibility does a Hearth Design Specialist assume?",
    options: [
      "Moral and legal responsibility to provide accurate safety information.",
      "Only the manufacturer bears responsibility since they designed and built the product.",
      "Responsibility is limited to collecting payment and processing the sales order.",
      "None, because only the certified installer carries liability for the project."
    ],
    answer: "Moral and legal responsibility to provide accurate safety information.",
    explanation: "Giving advice on fire appliances carries an obligation to safety; negligence can lead to lawsuits[cite: 154]."
  },
  {
    id: "HDS-027",
    question: "Why should a Specialist document a client's refusal to follow safety advice?",
    options: [
      "To protect the business from liability in case of an accident.",
      "To file a report with the local building authority about the client's noncompliance.",
      "To ensure the client purchases from a different dealer if they refuse to comply.",
      "To justify charging the client a higher rate for the additional consultation time."
    ],
    answer: "To protect the business from liability in case of an accident.",
    explanation: "Documentation proves that proper professional advice was given, protecting against claims of negligence."
  },
  {
    id: "HDS-028",
    question: "What is the best location for a vertical venting system?",
    options: [
      "Through the center of the home (the warm envelope).",
      "Routed through a window opening that has been retrofitted with a venting adapter.",
      "Running horizontally along the exterior siding to the nearest soffit penetration.",
      "Mounted on an exterior wall where it can vent directly through the sidewall."
    ],
    answer: "Through the center of the home (the warm envelope).",
    explanation: "Keeping the vent warm inside the house envelope maximizes draft and reduces creosote/condensation[cite: 625]."
  },
  {
    id: "HDS-029",
    question: "What is the purpose of the 'NFI Advocate' program?",
    options: [
      "To increase the volume of cordwood and pellet fuel sales across the industry.",
      "To negotiate lower insurance premiums for retailers and installers nationwide.",
      "To create a professional trade union for hearth industry installation workers.",
      "To encourage manufacturers to recommend installation by NFI Certified Specialists."
    ],
    answer: "To encourage manufacturers to recommend installation by NFI Certified Specialists.",
    explanation: "This program links manufacturers with certified professionals to reduce callbacks and increase safety[cite: 238]."
  },
  {
    id: "HDS-030",
    question: "What happens if a customer uses an unapproved fuel in their appliance?",
    options: [
      "It cleans the chimney flue by burning off residual creosote and soot buildup.",
      "It voids the warranty and may cause safety hazards.",
      "Nothing significant happens because most modern appliances accept multiple fuels.",
      "The appliance will burn at a higher temperature and produce more heat output."
    ],
    answer: "It voids the warranty and may cause safety hazards.",
    explanation: "Listings are fuel-specific; unauthorized fuels can damage the unit and create fire risks[cite: 325]."
  },
  {
    id: "HDS-031",
    question: "Why is it critical to identify the 'Authority Having Jurisdiction' (AHJ)?",
    options: [
      "They have the final say on code interpretation and approval.",
      "They administer the product warranty and authorize replacement parts claims.",
      "They issue the building permits and collect the associated application fees.",
      "They serve as the manufacturer's local representative for warranty support."
    ],
    answer: "They have the final say on code interpretation and approval.",
    explanation: "The AHJ enforces the code and can approve or reject installations based on their interpretation[cite: 1286]."
  },
  {
    id: "HDS-032",
    question: "What is the significance of the NFI 'Master Hearth Professional' (MHP) title?",
    options: [
      "It is a lifetime achievement award presented at the annual industry convention.",
      "It authorizes the person to manufacture and distribute hearth appliances.",
      "It recognizes individuals who have earned certifications in all three fuel types (Gas, Wood, Pellet).",
      "It indicates the person owns and operates a retail hearth products store."
    ],
    answer: "It recognizes individuals who have earned certifications in all three fuel types (Gas, Wood, Pellet).",
    explanation: "MHP is the highest tier of NFI certification, demonstrating comprehensive expertise[cite: 176]."
  },
  {
    id: "HDS-033",
    question: "When planning a new installation, why must you identify the location of electrical outlets?",
    options: [
      "To have a power source available for your installation tools during the project.",
      "To make sure you can charge your mobile phone while on the job site.",
      "To ensure the appliance's blower or control board can be powered without extension cords.",
      "To identify potential air leaks caused by poorly sealed electrical penetrations."
    ],
    answer: "To ensure the appliance's blower or control board can be powered without extension cords.",
    explanation: "Most modern appliances require power; locating outlets is a critical step in the site assessment[cite: 540]."
  },
  {
    id: "HDS-034",
    question: "What is 'makeup air'?",
    options: [
      "Conditioned air from the HVAC system that is recycled through the return ducts.",
      "Air supplied to replace air exhausted by the appliance or other fans.",
      "Unconditioned air that naturally accumulates in the attic and soffit spaces.",
      "The air space trapped inside the firebox that feeds the combustion process."
    ],
    answer: "Air supplied to replace air exhausted by the appliance or other fans.",
    explanation: "Tight homes require makeup air to prevent negative pressure and ensure proper drafting[cite: 566]."
  },
  {
    id: "HDS-035",
    question: "Why should a Specialist avoid 'negative overkill' when discussing fuel types?",
    options: [
      "It makes the salesperson appear frustrated and unprofessional to the customer.",
      "It can lose a customer by offending their preferences or previous choices.",
      "It creates confusion among the other sales staff who overhear the conversation.",
      "It violates manufacturer guidelines for presenting competing product information."
    ],
    answer: "It can lose a customer by offending their preferences or previous choices.",
    explanation: "Focusing on the merits of a fuel is more effective than dwelling on the negatives of others[cite: 473]."
  },
  {
    id: "HDS-036",
    question: "What is the role of the 'Job Analysis Committee' in NFI certification?",
    options: [
      "They design and write the marketing brochures for the NFI certification program.",
      "They recruit and hire installation staff for hearth retailers across the country.",
      "They identify specific job tasks and knowledge required for safe installation.",
      "They establish the retail pricing for installation services in each market."
    ],
    answer: "They identify specific job tasks and knowledge required for safe installation.",
    explanation: "This committee ensures the exam accurately reflects the real-world skills needed by professionals[cite: 182]."
  },
  {
    id: "HDS-037",
    question: "What does 'clearance to combustibles' mean?",
    options: [
      "The length of time required to obtain the installation permit from the AHJ.",
      "The minimum distance required between the property line and the chimney.",
      "The interior volume of the firebox measured in cubic inches or cubic feet.",
      "The mandatory air space required between the appliance/vent and wood, drywall, or furniture."
    ],
    answer: "The mandatory air space required between the appliance/vent and wood, drywall, or furniture.",
    explanation: "Maintaining this space prevents pyrolysis and ignition of building materials[cite: 1680]."
  },
  {
    id: "HDS-038",
    question: "Why is a 'hearth extension' necessary?",
    options: [
      "To create a staging area for storing firewood near the appliance opening.",
      "To provide structural support for the weight of the chimney system above.",
      "To protect the floor from sparks, embers, and radiant heat.",
      "To enhance the visual appearance of the overall fireplace installation."
    ],
    answer: "To protect the floor from sparks, embers, and radiant heat.",
    explanation: "Non-combustible extensions prevent floor fires from material falling out of the appliance[cite: 541]."
  },
  {
    id: "HDS-039",
    question: "What is the primary benefit of 'zone heating' for a client?",
    options: [
      "It allows the central furnace to be turned down, saving fuel costs.",
      "It distributes heat evenly across every room in the entire house structure.",
      "It requires no professional installation and can be set up by the homeowner.",
      "It cools the house in summer by circulating air through the dormant chimney."
    ],
    answer: "It allows the central furnace to be turned down, saving fuel costs.",
    explanation: "By heating only the occupied room, the homeowner saves on the cost of heating unused spaces[cite: 646]."
  },
  {
    id: "HDS-040",
    question: "Why should a Specialist confirm the 'listing' of an appliance?",
    options: [
      "To check if the unit is currently in stock at the manufacturer's warehouse.",
      "To confirm the available color options and decorative finish selections.",
      "To verify the current retail price and compare it with competing products.",
      "To ensure it is tested and approved for the specific installation (e.g., mobile home, alcove)."
    ],
    answer: "To ensure it is tested and approved for the specific installation (e.g., mobile home, alcove).",
    explanation: "Listings dictate where and how an appliance can be legally and safely installed[cite: 265]."
  },
];

// --- HDS BATCH 2: Chapters 5-9 (Communication, Combustion, Appliance Types, Codes) ---

const hds_batch_2 = [
  {
    id: "HDS-041",
    question: "After a sale is closed, why is it important to communicate the timeline to the client?",
    options: [
      "To discourage them from reconsidering or canceling the purchase order.",
      "To request an additional deposit to cover any potential cost overruns.",
      "To make sure they will be home during the scheduled delivery window.",
      "To maintain trust and keep them aware of the ETA of items and installation scheduling."
    ],
    answer: "To maintain trust and keep them aware of the ETA of items and installation scheduling.",
    explanation: "Keeping the client informed prevents frustration and reinforces their decision to choose you [cite: 678-679]."
  },
  {
    id: "HDS-042",
    question: "Who is responsible for ensuring the installation team has the correct details for a project?",
    options: [
      "The Hearth Design Specialist.",
      "The customer is ultimately responsible for communicating all project details.",
      "The manufacturer provides all installation instructions directly to the crew.",
      "The delivery driver relays the information when dropping off the equipment."
    ],
    answer: "The Hearth Design Specialist.",
    explanation: "The Specialist acts as the liaison, ensuring the team knows what is required for the specific project [cite: 660-662]."
  },
  {
    id: "HDS-043",
    question: "If you remove 'Heat' from the Combustion Triangle, what happens?",
    options: [
      "Carbon monoxide increases.",
      "The fire smolders.",
      "The fire burns hotter.",
      "Combustion ceases."
    ],
    answer: "Combustion ceases.",
    explanation: "All three elementsâ€”Fuel, Air, and Heatâ€”must be present for combustion to occur[cite: 697]."
  },
  {
    id: "HDS-044",
    question: "What are the primary products of *complete* combustion?",
    options: [
      "Water vapor, carbon dioxide, heat, and noncombustible ash.",
      "Primarily nitrogen gas and trace amounts of residual atmospheric oxygen.",
      "Heavy visible smoke, wood tar compounds, and condensed creosote deposits.",
      "Carbon monoxide, nitrogen dioxide, and visible particulate soot emissions."
    ],
    answer: "Water vapor, carbon dioxide, heat, and noncombustible ash.",
    explanation: "Complete combustion efficiently breaks down fuel into harmless byproducts and heat[cite: 699]."
  },
  {
    id: "HDS-045",
    question: "What is the ignition temperature of wood?",
    options: [
      "1,100Â°F",
      "212Â°F",
      "900Â°F",
      "450Â°F â€“ 550Â°F"
    ],
    answer: "450Â°F â€“ 550Â°F",
    explanation: "Wood begins to ignite in this temperature range, necessitating clearance from combustibles[cite: 729]."
  },
  {
    id: "HDS-046",
    question: "Why is Carbon Monoxide (CO) described as 'insidious'?",
    options: [
      "It causes immediate sharp pain and irritation that alerts the occupants.",
      "It is clearly visible as thick black smoke rising from the chimney top.",
      "It has a strong sulfurous odor similar to rotten eggs that is easily detected.",
      "It is odorless, colorless, and tasteless."
    ],
    answer: "It is odorless, colorless, and tasteless.",
    explanation: "Its lack of sensory warning signs makes it highly dangerous without detection equipment[cite: 776]."
  },
  {
    id: "HDS-047",
    question: "What does the presence of 'Aldehydes' (a pungent odor) indicate?",
    options: [
      "The firewood being used is excessively dry and burning at too high a temperature.",
      "Incomplete combustion is occurring, and CO is likely present.",
      "The fire is achieving complete combustion and operating at peak efficiency.",
      "There is a gas line leak somewhere in the system that requires immediate attention."
    ],
    answer: "Incomplete combustion is occurring, and CO is likely present.",
    explanation: "Aldehydes are a byproduct of incomplete combustion and usually accompany Carbon Monoxide [cite: 791-794]."
  },
  {
    id: "HDS-048",
    question: "In the context of combustion efficiency, what do the 'Three T's' stand for?",
    options: [
      "Type, Texture, Temperature",
      "Time, Temperature, Turbulence",
      "Thermostat, Thermometer, Thermocouple",
      "Torque, Thrust, Timing"
    ],
    answer: "Time, Temperature, Turbulence",
    explanation: "These three factors determine how completely the fuel is burned[cite: 803]."
  },
  {
    id: "HDS-049",
    question: "What is 'Combustion Efficiency'?",
    options: [
      "The rotational speed of the blower fan measured in revolutions per minute.",
      "The insulation R-value rating of the appliance wall assembly and firebrick.",
      "The percentage of the fuel's potential energy that is converted into heat.",
      "The percentage of heat energy successfully moved into the living space."
    ],
    answer: "The percentage of the fuel's potential energy that is converted into heat.",
    explanation: "It measures how well the appliance converts fuel into energy, distinct from heat transfer efficiency[cite: 818]."
  },
  {
    id: "HDS-050",
    question: "Why is it undesirable to have 100% Heat Transfer Efficiency?",
    options: [
      "It would consume fuel at an unsustainable rate and dramatically increase costs.",
      "It would leave no heat for the chimney, causing draft failure and condensation.",
      "It is prohibited by EPA regulations for residential heating appliances.",
      "It would make the room dangerously hot and create an overheating fire hazard."
    ],
    answer: "It would leave no heat for the chimney, causing draft failure and condensation.",
    explanation: "Some heat must escape up the flue to maintain draft and prevent corrosive condensation[cite: 830]."
  },
  {
    id: "HDS-051",
    question: "What distinguishes a 'Factory-Built Fireplace' from a masonry one?",
    options: [
      "It is constructed of brick and mortar by a mason directly on the job site.",
      "It is a tested system including firebox, venting, and components from one manufacturer.",
      "It is designed exclusively for decorative display and produces no usable heat.",
      "It operates without any chimney or venting system and exhausts into the room."
    ],
    answer: "It is a tested system including firebox, venting, and components from one manufacturer.",
    explanation: "Factory-built units are listed systems where components cannot be substituted [cite: 866-867]."
  },
  {
    id: "HDS-052",
    question: "How does a 'Circulating' fireplace differ from a 'Radiant' one?",
    options: [
      "It is designed without any glass viewing panel for maximum radiant output.",
      "It is constructed exclusively from cast iron components for superior heat retention.",
      "It creates a spinning vortex of flame for a more dramatic visual presentation.",
      "It uses a fan to move air around the firebox and release it through grilles."
    ],
    answer: "It uses a fan to move air around the firebox and release it through grilles.",
    explanation: "Circulating designs rely on convection (air movement) rather than just radiating heat from the face[cite: 902, 916]."
  },
  {
    id: "HDS-053",
    question: "What is a 'Fireplace Insert' designed to do?",
    options: [
      "It includes a cooktop surface designed for preparing food directly over the fire.",
      "It converts household waste into heat through a controlled incineration process.",
      "Improve the efficiency of an existing open masonry or factory-built fireplace.",
      "Create a new fireplace where none existed."
    ],
    answer: "Improve the efficiency of an existing open masonry or factory-built fireplace.",
    explanation: "Inserts are retrofitted into existing fireboxes to stop heat loss and improve performance [cite: 953-956]."
  },
  {
    id: "HDS-054",
    question: "Which material has lower thermal conductivity but higher specific heat (heat retention)?",
    options: [
      "Aluminum",
      "Steel",
      "Soapstone",
      "Cast Iron"
    ],
    answer: "Soapstone",
    explanation: "Soapstone absorbs heat slowly but releases it over a longer period than metal [cite: 968-969]."
  },
  {
    id: "HDS-055",
    question: "Which UL standard covers 'Factory-Built Fireplaces'?",
    options: [
      "UL 1482",
      "NFPA 211",
      "UL 127",
      "UL 103"
    ],
    answer: "UL 127",
    explanation: "UL 127 is the specific safety standard for factory-built fireplace systems[cite: 1079]."
  },
  {
    id: "HDS-056",
    question: "Which UL standard covers 'Solid-Fuel Type Room Heaters' (Woodstoves)?",
    options: [
      "UL 127",
      "UL 907",
      "UL 1777",
      "UL 1482"
    ],
    answer: "UL 1482",
    explanation: "UL 1482 tests freestanding stoves and inserts for safety and clearance requirements[cite: 1084]."
  },
  {
    id: "HDS-057",
    question: "What is the difference between a 'Listed' and 'Approved' appliance?",
    options: [
      "Listed means tested by a lab; Approved means accepted by the Authority Having Jurisdiction (AHJ).",
      "Listed means the appliance carries a higher retail price from the manufacturer.",
      "Both terms are interchangeable and describe the same certification status.",
      "Approved indicates the product ships with a comprehensive manufacturer warranty."
    ],
    answer: "Listed means tested by a lab; Approved means accepted by the Authority Having Jurisdiction (AHJ).",
    explanation: "Listing is a manufacturer/lab process; Approval is a legal status granted by the local code official [cite: 1043-1045]."
  },
  {
    id: "HDS-058",
    question: "Which standard applies to 'Vented Gas Fireplace Heaters' (Heater Rated)?",
    options: [
      "ANSI Z21.60",
      "NFPA 54",
      "ANSI Z21.50",
      "ANSI Z21.88"
    ],
    answer: "ANSI Z21.88",
    explanation: "Z21.88 applies to heater-rated gas fireplaces that meet efficiency standards, unlike Z21.50 (Decorative)[cite: 1182]."
  },
  {
    id: "HDS-059",
    question: "What is a primary restriction for 'Unvented' gas appliances in bedrooms?",
    options: [
      "They must be connected to a dedicated chimney flue for exhaust ventilation.",
      "They must be limited to 10,000 BTU/hr input.",
      "They must be painted with a special blue flame-resistant safety coating.",
      "They cannot be equipped with a thermostat or any automated temperature controls."
    ],
    answer: "They must be limited to 10,000 BTU/hr input.",
    explanation: "Safety standards restrict bedroom unvented units to 10,000 BTU to prevent oxygen depletion[cite: 1204]."
  },
  {
    id: "HDS-060",
    question: "What is the 'Authority Having Jurisdiction' (AHJ)?",
    options: [
      "The homeowner or property owner who purchased the hearth appliance.",
      "The official or agency responsible for enforcing codes and approving installations.",
      "The manufacturer that designed, built, and distributed the hearth product.",
      "The owner or manager of the retail store selling the hearth appliance."
    ],
    answer: "The official or agency responsible for enforcing codes and approving installations.",
    explanation: "The AHJ (e.g., fire marshal, building inspector) has the final legal say on installation compliance[cite: 1286]."
  },
  {
    id: "HDS-061",
    question: "If a manufacturer's instruction conflicts with a general code, which usually prevails?",
    options: [
      "The general building code always takes precedence over the manufacturer.",
      "The customer's personal preference determines which standard applies.",
      "The manufacturer's instruction (conditions of listing).",
      "The installer's professional judgment overrides both codes and listings."
    ],
    answer: "The manufacturer's instruction (conditions of listing).",
    explanation: "Most codes (like IRC) state that if a code violates a listing condition, the listing prevails[cite: 1304]."
  },
  {
    id: "HDS-062",
    question: "What is the EPA's 'New Source Performance Standard' (NSPS)?",
    options: [
      "A safety testing protocol for natural gas and propane valve components.",
      "A quality control standard for residential wood pellet fuel production.",
      "A federal tax credit program that incentivizes purchase of efficient appliances.",
      "A regulation limiting particulate emissions from new wood heaters."
    ],
    answer: "A regulation limiting particulate emissions from new wood heaters.",
    explanation: "NSPS regulates the pollution (smoke/particulates) allowed from residential wood heaters[cite: 1343]."
  },
  {
    id: "HDS-063",
    question: "What is the EPA emission limit for woodstoves under the 2015 Step 1 regulations?",
    options: [
      "4.5 grams/hour",
      "7.5 grams/hour",
      "2.0 grams/hour",
      "10.0 grams/hour"
    ],
    answer: "4.5 grams/hour",
    explanation: "The 2015 update lowered the limit to 4.5 g/hr for both catalytic and non-catalytic stoves[cite: 1389]."
  },
  {
    id: "HDS-064",
    question: "What is the 'Mobile Home' installation requirement for woodstoves?",
    options: [
      "The unit cannot be equipped with glass viewing doors due to impact concerns.",
      "They must have outside combustion air and be secured to the floor.",
      "The unit must weigh less than 200 pounds to avoid exceeding floor load limits.",
      "The unit must utilize single-wall stovepipe to conserve limited interior space."
    ],
    answer: "They must have outside combustion air and be secured to the floor.",
    explanation: "HUD standards require outside air and structural securement for mobile home safety [cite: 1274-1276]."
  },
  {
    id: "HDS-065",
    question: "Does the EPA certify open fireplaces?",
    options: [
      "Yes, they must comply with identical emission standards as certified woodstoves.",
      "No, but there is a voluntary 'Qualified' program for low-mass fireplaces.",
      "No, fireplaces are illegal to manufacture or sell under current EPA regulations.",
      "Yes, all residential fireplaces must meet the same EPA certification as woodstoves."
    ],
    answer: "No, but there is a voluntary 'Qualified' program for low-mass fireplaces.",
    explanation: "Open fireplaces are generally exempt from NSPS but can participate in a voluntary qualification program [cite: 1398-1401]."
  },
  {
    id: "HDS-066",
    question: "What is a 'Green Building' code overlay?",
    options: [
      "A specialized code that applies only to greenhouse and conservatory structures.",
      "A government discount program that subsidizes EPA-certified woodstove purchases.",
      "Additional efficiency or environmental standards (like LEED) above basic building codes.",
      "A requirement to use environmentally friendly paint on the building exterior."
    ],
    answer: "Additional efficiency or environmental standards (like LEED) above basic building codes.",
    explanation: "These codes promote sustainability and may incentivize or require EPA-certified appliances[cite: 1412]."
  },
  {
    id: "HDS-067",
    question: "What does 'Clearance' mean in a hearth installation?",
    options: [
      "The mandatory air space between a heat source and combustible materials.",
      "The measured distance between the appliance location and the nearest window.",
      "The sale price or markdown discount applied to discontinued hearth products.",
      "The estimated number of hours required to complete the installation project."
    ],
    answer: "The mandatory air space between a heat source and combustible materials.",
    explanation: "Clearance prevents pyrolysis and ignition of nearby walls or furniture[cite: 1678]."
  },
  {
    id: "HDS-068",
    question: "Which UL standard covers 'Chimney Liners'?",
    options: [
      "UL 127",
      "UL 103",
      "UL 1777",
      "UL 1482"
    ],
    answer: "UL 1777",
    explanation: "UL 1777 is the standard for testing metal and masonry chimney lining systems[cite: 1128]."
  },
  {
    id: "HDS-069",
    question: "What is 'Pyrolysis'?",
    options: [
      "A malfunction in the gas valve causing irregular fuel flow to the burner.",
      "A commercially manufactured fire-starting product made from compressed wax.",
      "A specialized cleaning method for removing soot and residue from glass doors.",
      "Chemical decomposition of material (like wood) caused by heat, lowering its ignition temperature."
    ],
    answer: "Chemical decomposition of material (like wood) caused by heat, lowering its ignition temperature.",
    explanation: "Pyrolysis makes wood easier to ignite over time, which is why clearances must be maintained[cite: 1655]."
  },
  {
    id: "HDS-070",
    question: "What is the 'R-Value' of a floor protector?",
    options: [
      "Its capacity to radiate heat energy back into the room above the protector.",
      "Its resistance to heat flow (insulation value).",
      "Its surface roughness rating on the standard construction materials scale.",
      "Its estimated resale or replacement value for insurance appraisal purposes."
    ],
    answer: "Its resistance to heat flow (insulation value).",
    explanation: "R-value measures how well the material protects the combustible floor from heat transfer[cite: 1108]."
  },
];

// --- HDS BATCH 3: Chapters 10-13 (Venting, Installation Planning, Wood Systems) ---

const hds_batch_3 = [
  {
    id: "HDS-071",
    question: "What is the primary function of a chimney beyond removing smoke?",
    options: [
      "To enhance the exterior curb appeal and architectural character of the home.",
      "To provide structural support for the roof framing above the fireplace area.",
      "To create a convenient nesting area for chimney swifts and other beneficial birds.",
      "To supply the combustion air that starts and sustains the fire."
    ],
    answer: "To supply the combustion air that starts and sustains the fire.",
    explanation: "Warm rising gases create the vacuum (draft) that pulls necessary air into the firebox ."
  },
  {
    id: "HDS-072",
    question: "What creates 'Natural Draft'?",
    options: [
      "The temperature difference between hot flue gases and cooler outdoor air.",
      "Wind blowing horizontally across the top of the chimney cap creates a vacuum.",
      "A powered mechanical fan mounted inside the flue that forces air upward.",
      "Opening a window on the same floor as the appliance provides the primary draft."
    ],
    answer: "The temperature difference between hot flue gases and cooler outdoor air.",
    explanation: "This temperature differential creates buoyancy; hot air rises, creating suction ."
  },
  {
    id: "HDS-073",
    question: "What is 'Flow' in a venting system?",
    options: [
      "The air pressure measurement inside the flue expressed in Pascals or inches of water.",
      "The specific material and wall thickness that the vent pipe is constructed from.",
      "The volume of gases passing through the system as a result of draft.",
      "The wind speed outside the home measured at the chimney termination height."
    ],
    answer: "The volume of gases passing through the system as a result of draft.",
    explanation: "Draft is the force (pressure); Flow is the result (movement of gas volume) ."
  },
  {
    id: "HDS-074",
    question: "What happens if a chimney is too large for the appliance?",
    options: [
      "Nothing changes because the appliance output is independent of chimney diameter.",
      "Draft increases significantly because there is more room for gases to rise quickly.",
      "Overall system efficiency increases due to the larger heat exchange surface area.",
      "Draft decreases because gases cool too quickly and move slower."
    ],
    answer: "Draft decreases because gases cool too quickly and move slower.",
    explanation: "Excessive volume causes rapid cooling, killing the buoyancy needed for strong draft ."
  },
  {
    id: "HDS-075",
    question: "What is a 'competing source of negative pressure' in a home?",
    options: [
      "A kitchen range exhaust fan.",
      "A closed and weather-stripped window on the same floor as the appliance.",
      "A ceiling fan circulating air within the room where the appliance is located.",
      "A refrigerator running in the kitchen near the main living area."
    ],
    answer: "A kitchen range exhaust fan.",
    explanation: "Exhaust fans suck air out of the house, potentially overpowering the chimney's natural draft ."
  },
  {
    id: "HDS-076",
    question: "What is a 'Blower Door Test' used for?",
    options: [
      "To inspect the chimney flue for obstructions and creosote accumulation.",
      "To verify that the blower fan on the appliance is functioning at rated speed.",
      "To evaluate the structural integrity and durability of the entry door hinges.",
      "To measure the airtightness of a building."
    ],
    answer: "To measure the airtightness of a building.",
    explanation: "It quantifies air leakage, helping determine if makeup air is needed for combustion appliances ."
  },
  {
    id: "HDS-077",
    question: "If a mechanical vent fan is located at the termination (end) of the vent, what is the pressure inside the vent?",
    options: [
      "Atmospheric.",
      "Positive.",
      "Neutral.",
      "Negative."
    ],
    answer: "Negative.",
    explanation: "Pulling air from the end creates a vacuum (negative pressure) throughout the pipe ."
  },
  {
    id: "HDS-078",
    question: "What is the definition of a 'Combustible Material'?",
    options: [
      "Any building material that has been painted with a red fire-retardant coating.",
      "Only materials classified as explosive or highly volatile under NFPA standards.",
      "Exclusively steel, brick, and other materials that will not burn in a fire.",
      "Material made of wood, compressed paper, or plant fibers that will ignite and burn."
    ],
    answer: "Material made of wood, compressed paper, or plant fibers that will ignite and burn.",
    explanation: "Even flame-proofed or plastered wood is considered combustible in hearth standards ."
  },
  {
    id: "HDS-079",
    question: "Is standard drywall (gypsum board) considered combustible?",
    options: [
      "No, gypsum board is a mineral-based product classified as noncombustible.",
      "Only if it has been exposed to moisture that has weakened its structural integrity.",
      "Yes, because of the paper facing.",
      "Only if it has been painted with a combustible latex or oil-based paint coating."
    ],
    answer: "Yes, because of the paper facing.",
    explanation: "The paper facing on drywall can ignite, so it is treated as a combustible material ."
  },
  {
    id: "HDS-080",
    question: "What is the '3-2-10 Rule' for chimney termination?",
    options: [
      "3 elbows maximum, 2 feet of horizontal run, and 10 feet of vertical rise.",
      "3 inches of annular clearance, 2 inches of joint overlap, and 10 inches of support.",
      "3 feet wide clearance, 2 feet deep clearance, and 10 feet maximum total chimney height.",
      "3 feet above the roof penetration, and 2 feet higher than anything within 10 feet horizontally."
    ],
    answer: "3 feet above the roof penetration, and 2 feet higher than anything within 10 feet horizontally.",
    explanation: "This rule ensures the chimney clears roof turbulence zones for proper draft and safety ."
  },
  {
    id: "HDS-081",
    question: "Why should an exterior chimney chase be insulated?",
    options: [
      "It is a universal code requirement enforced in every jurisdiction nationwide.",
      "To improve the overall thermal efficiency of the home's building envelope.",
      "To prevent 'cold hearth syndrome' and keep flue gases warm for better draft.",
      "To provide additional structural support and rigidity for the chimney pipe."
    ],
    answer: "To prevent 'cold hearth syndrome' and keep flue gases warm for better draft.",
    explanation: "Insulation reduces heat loss, preventing flow reversal and creosote buildup ."
  },
  {
    id: "HDS-082",
    question: "What is the EPA 'Lead RRP' Rule?",
    options: [
      "A regulation requiring certification for renovations disturbing paint in pre-1978 housing.",
      "A code standard requiring the use of lead-free gasoline in power equipment.",
      "A disposal regulation for removing and recycling decommissioned stove appliances.",
      "A regulation that governs the proper recycling and disposal of plastic materials."
    ],
    answer: "A regulation requiring certification for renovations disturbing paint in pre-1978 housing.",
    explanation: "It protects against lead dust contamination during renovation/repair work ."
  },
  {
    id: "HDS-083",
    question: "How do you calculate the floor protection size for a corner installation?",
    options: [
      "Estimate the size based on your professional experience and visual judgment.",
      "Simply measure 18 inches out from the nearest wall in every direction.",
      "Use the formula: Distance to front = (Rear clearance x 1.414) + (Width / 2) + Depth.",
      "Use the diagonal measurement of the room divided by the appliance BTU rating."
    ],
    answer: "Use the formula: Distance to front = (Rear clearance x 1.414) + (Width / 2) + Depth.",
    explanation: "This geometric formula ensures the pad covers the required distance from the appliance face ."
  },
  {
    id: "HDS-084",
    question: "What is a safe way to dispose of ashes?",
    options: [
      "Place them in a metal container with a tight-fitting lid on a non-combustible surface.",
      "Dump them directly into the garden beds while still hot to benefit the soil.",
      "Place them in a heavy-duty plastic garbage bag and dispose in the trash.",
      "Vacuum them immediately with a standard household vacuum while still warm."
    ],
    answer: "Place them in a metal container with a tight-fitting lid on a non-combustible surface.",
    explanation: "Ashes can contain live embers for days; plastic or paper containers can melt or ignite ."
  },
  {
    id: "HDS-085",
    question: "What does the 'Dollar Bill Test' check?",
    options: [
      "The draft of the chimney.",
      "The moisture of the wood.",
      "The price of the stove.",
      "The seal of the door gasket."
    ],
    answer: "The seal of the door gasket.",
    explanation: "If a dollar bill pulls out easily from a closed door, the gasket seal is compromised ."
  },
  {
    id: "HDS-086",
    question: "Why should you never use a standard household vacuum for cold ash?",
    options: [
      "It generates excessive noise that disturbs the household and neighbors.",
      "Fine ash passes through the filter and can ruin the motor or blow back into the room.",
      "It actually improves the vacuum's filtration by coating the filter with ash.",
      "It is a violation of local noise and air quality ordinances in most areas."
    ],
    answer: "Fine ash passes through the filter and can ruin the motor or blow back into the room.",
    explanation: "Standard filters are too coarse for ash; specialized ash vacuums are required ."
  },
  {
    id: "HDS-087",
    question: "How often should a chimney be inspected?",
    options: [
      "At least once a year.",
      "Never, if it works fine.",
      "Only when smoke comes into the room.",
      "Every 5 years."
    ],
    answer: "At least once a year.",
    explanation: "Annual inspections identify creosote buildup or structural damage before they become hazards."
  },
  {
    id: "HDS-088",
    question: "What is Creosote?",
    options: [
      "A species of hardwood tree commonly harvested for use as premium firewood.",
      "A flammable byproduct of incomplete combustion that condenses in the chimney.",
      "A chemical cleaning solution used for annual chimney maintenance and sweeping.",
      "The powdery gray ash residue that remains in the firebox after burning wood."
    ],
    answer: "A flammable byproduct of incomplete combustion that condenses in the chimney.",
    explanation: "It is unburned fuel vapor that solidifies and poses a severe fire hazard ."
  },
  {
    id: "HDS-089",
    question: "What are the four stages of wood combustion?",
    options: [
      "Lighting the kindling, Flaming of the main fuel load, Glowing of the coals, and Dying out.",
      "Heating, Active Burning, Smoking and smoldering, and final Cooling down.",
      "Solid fuel state, Liquid tar transition, Gaseous vapor release, and Plasma combustion.",
      "Moisture Evaporation, Vaporization, Gas Vapor Ignition, Char Burning."
    ],
    answer: "Moisture Evaporation, Vaporization, Gas Vapor Ignition, Char Burning.",
    explanation: "These stages describe the chemical process of converting wood into heat and energy ."
  },
  {
    id: "HDS-090",
    question: "What is the difference between HHV and LHV efficiency?",
    options: [
      "HHV is the standard used exclusively for gas fuels; LHV is used only for solid wood fuels.",
      "LHV efficiency is always numerically higher than HHV for the same appliance and test.",
      "HHV includes the energy of water vapor condensation; LHV subtracts it.",
      "There is no real difference; both terms describe the same measurement methodology."
    ],
    answer: "HHV includes the energy of water vapor condensation; LHV subtracts it.",
    explanation: "North American standards use HHV (Higher Heating Value) which accounts for all potential energy ."
  },
  {
    id: "HDS-091",
    question: "What is a 'Catalytic Combustor'?",
    options: [
      "A device that lowers the ignition temperature of smoke gases to burn them cleaner.",
      "A specific species of dense hardwood known for its high heat energy content.",
      "A high-speed convection fan that forces air over the firebox heat exchanger.",
      "A programmable thermostat that automatically regulates stove output temperature."
    ],
    answer: "A device that lowers the ignition temperature of smoke gases to burn them cleaner.",
    explanation: "It allows smoke to burn at 500Â°F instead of 1100Â°F, increasing efficiency and reducing emissions ."
  },
  {
    id: "HDS-092",
    question: "What is the maximum recommended moisture content for firewood?",
    options: [
      "50%",
      "20%",
      "35%",
      "10%"
    ],
    answer: "20%",
    explanation: "Moisture above 20% wastes heat boiling off water and promotes creosote formation."
  },
  {
    id: "HDS-093",
    question: "What is the recommended minimum chimney height for a woodstove?",
    options: [
      "10 feet.",
      "12 feet.",
      "8 feet.",
      "15 feet."
    ],
    answer: "15 feet.",
    explanation: "This height is generally required to generate sufficient natural draft for proper operation."
  },
  {
    id: "HDS-094",
    question: "Can you use single-wall stovepipe to penetrate a wall or ceiling?",
    options: [
      "Yes, if it is painted black.",
      "No, never.",
      "Yes, if you use a thimble.",
      "Only in a garage."
    ],
    answer: "No, never.",
    explanation: "Single-wall pipe cannot contain a chimney fire safely; listed chimney or pass-through systems must be used."
  },
  {
    id: "HDS-095",
    question: "What is 'Full Relining' for a fireplace insert?",
    options: [
      "Applying high-temperature paint to the inside of the existing firebox walls.",
      "Installing a continuous liner from the appliance outlet to the top of the chimney.",
      "Replacing the existing firebrick with new refractory material throughout.",
      "Installing a short connector pipe up into the existing damper opening."
    ],
    answer: "Installing a continuous liner from the appliance outlet to the top of the chimney.",
    explanation: "This ensures a properly sized, safe, and cleanable flue, solving draft and safety issues ."
  },
  {
    id: "HDS-096",
    question: "What is the purpose of a 'block-off plate'?",
    options: [
      "To seal the damper area and prevent room air from escaping up the chimney.",
      "To hold and organize the firewood for the next loading cycle.",
      "To extinguish the fire quickly in case of an emergency or chimney overheat.",
      "To block the direct view of the fire for safety when children are present."
    ],
    answer: "To seal the damper area and prevent room air from escaping up the chimney.",
    explanation: "It prevents heat loss and ensures the chimney draws from the appliance, not the room ."
  },
  {
    id: "HDS-097",
    question: "Why should trash never be burned in a woodstove?",
    options: [
      "It produces an unpleasant smell but otherwise causes no harm to the system.",
      "It burns at an extremely fast rate and wastes fuel without producing useful heat.",
      "It produces toxic fumes and can cause chimney fires or corrosion.",
      "It is an expensive disposal method when curbside pickup is readily available."
    ],
    answer: "It produces toxic fumes and can cause chimney fires or corrosion.",
    explanation: "Chemicals in trash damage the appliance and create dangerous emissions ."
  },
  {
    id: "HDS-098",
    question: "What should a homeowner do first if a chimney fire occurs?",
    options: [
      "Close all dampers and air controls to cut off the oxygen supply to the fire.",
      "Evacuate the house and call the fire department.",
      "Throw water directly onto the fire to extinguish it as quickly as possible.",
      "Open the stove door to inspect the severity and determine the next steps."
    ],
    answer: "Evacuate the house and call the fire department.",
    explanation: "Safety of life is priority #1; chimney fires can spread rapidly to the structure ."
  },
  {
    id: "HDS-099",
    question: "What is 'Overfiring'?",
    options: [
      "Terminating an installer's employment for repeated code violation incidents.",
      "Burning too much wood at once, causing damage to the appliance.",
      "Lighting the fire using a top-down method starting with kindling on top.",
      "Using an unapproved accelerant such as lighter fluid to start the fire."
    ],
    answer: "Burning too much wood at once, causing damage to the appliance.",
    explanation: "Excessive heat can warp metal, crack masonry, and void warranties ."
  },
  {
    id: "HDS-100",
    question: "What instrument is highly recommended for customers to check firewood quality?",
    options: [
      "An infrared thermometer pointed at the stovepipe to monitor flue gas temperatures.",
      "A retractable tape measure for checking clearance distances during installation.",
      "A calibrated weight scale to verify the density of each piece before loading.",
      "A moisture meter."
    ],
    answer: "A moisture meter.",
    explanation: "It provides an objective reading of fuel dryness, preventing the use of wet wood."
  },
  {
    id: "HDS-101",
    question: "What is the maximum horizontal run allowed for a woodstove connector?",
    options: [
      "No more than 2 feet of horizontal run is permitted under any circumstances.",
      "A maximum of 10 feet from the appliance outlet to the chimney thimble connection.",
      "No more than 50% of the vertical chimney height.",
      "There is no code limit on horizontal distance as long as the pipe is properly supported."
    ],
    answer: "No more than 50% of the vertical chimney height.",
    explanation: "NFPA 211 limits horizontal runs to maintain adequate draft."
  },
  {
    id: "HDS-102",
    question: "What is the minimum clearance for a single-wall chimney connector to combustibles?",
    options: [
      "18 inches.",
      "36 inches.",
      "6 inches.",
      "12 inches."
    ],
    answer: "18 inches.",
    explanation: "This is the standard required clearance unless an approved reduction system is used."
  },
  {
    id: "HDS-103",
    question: "What is the 'Pyrolysis' zone in wood combustion?",
    options: [
      "The ceramic or tempered glass panel on the front door of the appliance.",
      "The protective cap assembly mounted at the top of the chimney termination.",
      "The stage where chemical structure breaks down and releases gases.",
      "The collection area at the bottom of the firebox where ash accumulates."
    ],
    answer: "The stage where chemical structure breaks down and releases gases.",
    explanation: "Pyrolysis releases the hydrocarbon gases that provide the majority of the heat ."
  },
  {
    id: "HDS-104",
    question: "Why should a woodstove door not be left open during operation?",
    options: [
      "It startles pets and creates a safety hazard for small children nearby.",
      "It weakens the door hinges over time and causes premature seal failure.",
      "It causes overfiring and potential smoke spillage.",
      "It allows excess heat to escape the room and reduces overall efficiency."
    ],
    answer: "It causes overfiring and potential smoke spillage.",
    explanation: "Uncontrolled air intake leads to dangerously high temperatures and loss of draft control."
  },
  {
    id: "HDS-105",
    question: "What is the primary maintenance task for a catalytic combustor?",
    options: [
      "Applying a thin coat of high-temperature oil to protect against corrosion.",
      "Replacing it every month regardless of visual condition or performance.",
      "Gentle brushing or vacuuming to remove fly ash.",
      "Washing it thoroughly with soap and water after every cord of wood burned."
    ],
    answer: "Gentle brushing or vacuuming to remove fly ash.",
    explanation: "Ash blocks the cells; cleaning restores flow and function."
  },
  {
    id: "HDS-106",
    question: "What indicates that a catalytic combustor needs replacement?",
    options: [
      "It changes color from gray to a bright orange when it needs replacement.",
      "It stops producing the characteristic glow visible through the bypass damper.",
      "It is physically crumbling or cracked, and performance has dropped.",
      "It has been installed for more than one calendar year since the last change."
    ],
    answer: "It is physically crumbling or cracked, and performance has dropped.",
    explanation: "Physical deterioration and lack of heat output signal end of life."
  },
  {
    id: "HDS-107",
    question: "What is the benefit of a 'hybrid' woodstove?",
    options: [
      "It uses both catalytic and non-catalytic technology for clean burns.",
      "It includes an integrated electric heating element for backup operation.",
      "It burns both natural gas and cordwood simultaneously in the same firebox.",
      "It features two separate fireboxes with independent doors and air controls."
    ],
    answer: "It uses both catalytic and non-catalytic technology for clean burns.",
    explanation: "Hybrids combine the low-burn efficiency of catalysts with the high-burn performance of baffles."
  },
  {
    id: "HDS-108",
    question: "Why is 'seasoned' wood important?",
    options: [
      "It weighs less per cord making it easier to transport and stack for storage.",
      "It lights easier and produces more heat because water doesn't have to be boiled off.",
      "It costs significantly less per cord than freshly cut green wood.",
      "It produces a more pleasant aroma when burning in an enclosed appliance."
    ],
    answer: "It lights easier and produces more heat because water doesn't have to be boiled off.",
    explanation: "Dry wood allows energy to go into heat production rather than steam generation."
  },
  {
    id: "HDS-109",
    question: "What is the '3-foot, 2-foot, 10-foot' rule?",
    options: [
      "The minimum height requirement for chimney termination above a roof.",
      "The required minimum dimensions of the noncombustible hearth pad extension.",
      "A guideline for how far firewood should be stacked from the exterior of the house.",
      "The maximum distance allowed between the appliance and the nearest furniture."
    ],
    answer: "The minimum height requirement for chimney termination above a roof.",
    explanation: "Chimneys must be 3' above the roof penetration and 2' higher than anything within 10'."
  },
  {
    id: "HDS-110",
    question: "What is the danger of a 'cold hearth' syndrome?",
    options: [
      "The fire will not light because the flue temperature is below ignition point.",
      "The floor directly beneath the stove becomes uncomfortably cold to walk on.",
      "The glass door develops interior condensation that obscures the flame view.",
      "Cold air reverses flow down the chimney, causing smoke spillage at startup."
    ],
    answer: "Cold air reverses flow down the chimney, causing smoke spillage at startup.",
    explanation: "Exterior chimneys are prone to cooling, which creates a downdraft that pushes smoke into the room."
  },
];

// --- HDS BATCH 4: Chapters 14-16 & Appendices (Gas, Pellet, Other, Technical) ---

const hds_batch_4 = [
  {
    id: "HDS-111",
    question: "What is the specific gravity of Propane gas compared to air?",
    options: [
      "2.00 (Twice as heavy)",
      "0.60 (Lighter than air)",
      "1.52 (Heavier than air)",
      "1.00 (Same as air)"
    ],
    answer: "1.52 (Heavier than air)",
    explanation: "Because it is heavier than air, leaking propane sinks and pools in low areas, posing an explosion hazard[cite: 3779, 3872]."
  },
  {
    id: "HDS-112",
    question: "What is the primary function of an Oxygen Depletion Sensor (ODS) on an unvented appliance?",
    options: [
      "To ignite the pilot light electronically without a manual match or lighter.",
      "To continuously measure and display the current room temperature on a panel.",
      "To automatically activate the convection fan when the firebox reaches temperature.",
      "To shut off gas flow if oxygen levels drop below a safe limit."
    ],
    answer: "To shut off gas flow if oxygen levels drop below a safe limit.",
    explanation: "The ODS is a mandatory safety device that cuts fuel if oxygen levels fall, preventing asphyxiation[cite: 4173]."
  },
  {
    id: "HDS-113",
    question: "What is the maximum input rating allowed for an unvented heater installed in a bedroom?",
    options: [
      "40,000 BTU/hr",
      "10,000 BTU/hr",
      "20,000 BTU/hr",
      "6,000 BTU/hr"
    ],
    answer: "10,000 BTU/hr",
    explanation: "Current standards restrict bedroom unvented units to 10,000 BTU/hr[cite: 1204, 4178]."
  },
  {
    id: "HDS-114",
    question: "Which venting system uses a pipe-within-a-pipe configuration to bring air in and exhaust out?",
    options: [
      "A single-wall galvanized steel connector pipe used for short horizontal runs.",
      "Coaxial Direct Vent",
      "A standard Type B double-wall vent designed for natural draft gas appliances.",
      "A traditional clay tile or stainless steel masonry chimney liner system."
    ],
    answer: "Coaxial Direct Vent",
    explanation: "Coaxial systems have an inner exhaust pipe and an outer intake pipe, sealing the combustion system [cite: 4389-4391]."
  },
  {
    id: "HDS-115",
    question: "What is the ideal air-to-fuel ratio for Natural Gas?",
    options: [
      "50:1",
      "2:1",
      "10:1",
      "24:1"
    ],
    answer: "10:1",
    explanation: "Natural gas requires 10 cubic feet of air to burn 1 cubic foot of gas completely[cite: 3826]."
  },
  {
    id: "HDS-116",
    question: "Why must gas appliances installed at high altitudes (usually >2,000 ft) be derated?",
    options: [
      "To prevent the ceramic glass viewing panel from cracking under thermal stress.",
      "To reduce fuel consumption costs in regions with higher natural gas prices.",
      "Because the air is thinner, containing less oxygen per cubic foot.",
      "It is a state tax requirement for appliances installed above the 2,000 ft line."
    ],
    answer: "Because the air is thinner, containing less oxygen per cubic foot.",
    explanation: "Less oxygen requires less fuel to maintain the proper combustion ratio and prevent overfiring/sooting [cite: 3932-3933]."
  },
  {
    id: "HDS-117",
    question: "What component in a millivolt valve generates the power to hold the main valve open?",
    options: [
      "The piezo igniter that creates the initial spark to light the pilot flame.",
      "The thermopile.",
      "The replaceable battery pack housed inside the control module assembly.",
      "The wall-mounted switch or remote control unit that signals the valve to open."
    ],
    answer: "The thermopile.",
    explanation: "A thermopile generates enough millivoltage from heat to power the main operator head without external electricity [cite: 4158-4159]."
  },
  {
    id: "HDS-118",
    question: "What safety requirement was added for all glass-fronted gas fireplaces manufactured after January 1, 2015?",
    options: [
      "Standard double-pane insulated glass found in residential window assemblies.",
      "A mandatory protective barrier (screen) to prevent burns.",
      "A cool-touch glass technology coating that prevents the surface from getting hot.",
      "Automatic shutoff timers that power down the unit after a preset number of hours."
    ],
    answer: "A mandatory protective barrier (screen) to prevent burns.",
    explanation: "To prevent severe burns, a certified barrier must be installed to prevent direct contact with the hot glass[cite: 4769]."
  },
  {
    id: "HDS-119",
    question: "What is the maximum inorganic ash content allowed for 'PFI Premium' grade pellets?",
    options: [
      "3.0%",
      "0.5%",
      "1.0%",
      "5.0%"
    ],
    answer: "1.0%",
    explanation: "Premium grade pellets must have less than or equal to 1.0% ash; Standard grade can have up to 2.0%."
  },
  {
    id: "HDS-120",
    question: "Why are 'fines' (dust) in pellet bags a problem?",
    options: [
      "They can jam augers and block airflow.",
      "They burn at a significantly higher temperature and can damage the burn pot.",
      "They add unnecessary weight to each bag increasing shipping and handling costs.",
      "They trigger respiratory allergies in sensitive individuals near the appliance."
    ],
    answer: "They can jam augers and block airflow.",
    explanation: "Excess fines disrupt the fuel feed and can create air flow resistance in the hopper or burn pot [cite: 5006-5007]."
  },
  {
    id: "HDS-121",
    question: "What safety switch prevents the auger from turning when the hopper is being filled?",
    options: [
      "Pressure switch.",
      "High limit switch.",
      "Low limit switch.",
      "Hopper lid switch."
    ],
    answer: "Hopper lid switch.",
    explanation: "This interlock prevents user injury from the moving auger while loading fuel[cite: 5222]."
  },
  {
    id: "HDS-122",
    question: "In a pellet stove, what is the function of the 'Low Limit' snap switch?",
    options: [
      "To shut down the stove if the fire goes out (loss of proof of fire).",
      "To automatically activate the room circulation fan at the correct temperature.",
      "To measure the physical dimensions of the pellets as they enter the burn pot.",
      "To prevent the stove from overheating if the combustion fan runs at full speed."
    ],
    answer: "To shut down the stove if the fire goes out (loss of proof of fire).",
    explanation: "It stops fuel feed if operating temperatures are not reached or sustained, preventing unburned pile-up [cite: 5805-5806]."
  },
  {
    id: "HDS-123",
    question: "What is 'Equivalent Vent Length' (EVL)?",
    options: [
      "The physical length of the pipe measured in a straight line from the appliance to the termination.",
      "A calculation method that adds values for elbows and pipe length to determine flow resistance.",
      "The remaining warranty period covered by the vent pipe manufacturer from the date of installation.",
      "The minimum required distance from the vent termination to the nearest wall or property line."
    ],
    answer: "A calculation method that adds values for elbows and pipe length to determine flow resistance.",
    explanation: "EVL quantifies restriction (e.g., 90Â° elbow = 5 ft) to ensure the exhaust fan can overcome it[cite: 6461, 6498]."
  },
  {
    id: "HDS-124",
    question: "Why must positive-pressure pellet venting be sealed?",
    options: [
      "To structurally hold the pipe sections together and prevent separation at joints.",
      "To prevent rainwater and moisture from entering and corroding the vent pipe.",
      "To prevent fly ash and flue gases from being pushed into the room.",
      "To create a cleaner and more professional appearance for the exterior finish."
    ],
    answer: "To prevent fly ash and flue gases from being pushed into the room.",
    explanation: "Unlike natural draft, positive pressure pushes gas out; any leak becomes a source of pollution in the home[cite: 5539]."
  },
  {
    id: "HDS-125",
    question: "What is a 'Clinker' in a corn or pellet stove?",
    options: [
      "A specialized wire brush tool designed for cleaning the inside of the burn pot.",
      "A noisy vibration in the combustion blower fan caused by ash accumulation.",
      "A fused lump of silica and ash that can block air inlets.",
      "A premium grade of biomass pellet manufactured from compressed corn stalks."
    ],
    answer: "A fused lump of silica and ash that can block air inlets.",
    explanation: "Minerals in the fuel melt and fuse, requiring manual removal to maintain airflow [cite: 5920-5921]."
  },
  {
    id: "HDS-126",
    question: "Why is corn ignition different from wood pellet ignition?",
    options: [
      "Corn ignites at a significantly higher temperature (500-700Â°F).",
      "Corn cannot be ignited by a standard electric hot rod ignition element.",
      "Corn ignites at a lower temperature than wood pellets making it easier to start.",
      "There is no meaningful difference in ignition characteristics between the two."
    ],
    answer: "Corn ignites at a significantly higher temperature (500-700Â°F).",
    explanation: "Corn requires a hotter ignition source and often a bed of wood pellets to start[cite: 5152]."
  },
  {
    id: "HDS-127",
    question: "What happens if a pellet stove's exhaust path is blocked?",
    options: [
      "The hopper lid automatically opens to release excess pressure from the fuel chamber.",
      "The pressure switch detects the loss of flow and shuts off the auger.",
      "The fire burns significantly hotter due to the restricted airflow creating turbulence.",
      "The ceramic glass viewing window cracks from the sudden pressure change in the firebox."
    ],
    answer: "The pressure switch detects the loss of flow and shuts off the auger.",
    explanation: "The vacuum (pressure) switch is a critical safety device that monitors proper airflow[cite: 5823]."
  },
  {
    id: "HDS-128",
    question: "What type of coal is most commonly used for residential heating?",
    options: [
      "Peat",
      "Bituminous",
      "Anthracite",
      "Lignite"
    ],
    answer: "Anthracite",
    explanation: "Anthracite (hard coal) burns cleaner and longer than softer bituminous varieties [cite: 7550-7551]."
  },
  {
    id: "HDS-129",
    question: "Why must air enter a coal fire from *below* the fuel bed?",
    options: [
      "Coal releases most energy from glowing solid carbon, not gases, requiring oxygen to pass through the bed.",
      "Underfire air helps suppress coal dust to prevent respiratory irritation for the operator.",
      "Air from below cools the grate to prevent it from warping under sustained high heat.",
      "Coal is heavier than wood and requires a bottom grate rated for the additional weight."
    ],
    answer: "Coal releases most energy from glowing solid carbon, not gases, requiring oxygen to pass through the bed.",
    explanation: "Unlike wood, coal burns primarily as fixed carbon, needing under-fire air [cite: 7599-7602]."
  },
  {
    id: "HDS-130",
    question: "What is a primary selling point of an electric fireplace?",
    options: [
      "It provides enough heat output to serve as the primary heating source for the whole house.",
      "It can be installed anywhere with a standard outlet.",
      "It requires connection to a dedicated chimney flue for proper combustion exhaust venting.",
      "It increases the appraised home value more than any other type of hearth appliance."
    ],
    answer: "It can be installed anywhere with a standard outlet.",
    explanation: "Ease of installation (no venting or gas) makes electric units highly versatile[cite: 7653]."
  },
  {
    id: "HDS-131",
    question: "Do electric fireplaces require professional installation?",
    options: [
      "Only models equipped with a supplemental resistance heater require professional setup.",
      "Only units installed in commercial or public assembly buildings need a licensed installer.",
      "No, most plug into a standard wall outlet.",
      "Yes, all electric fireplaces require a licensed electrician for installation by code."
    ],
    answer: "No, most plug into a standard wall outlet.",
    explanation: "They are designed for DIY installation, though hardwired models may need an electrician [cite: 7653-7654]."
  },
  {
    id: "HDS-132",
    question: "What is Ohm's Law?",
    options: [
      "BTU = Mass x Temp Change",
      "A body in motion stays in motion.",
      "E = I x R (Voltage = Current x Resistance)",
      "Watts = Volts x Amps"
    ],
    answer: "E = I x R (Voltage = Current x Resistance)",
    explanation: "This formula relates Force (Volts), Intensity (Amps), and Resistance (Ohms)[cite: 7437]."
  },
  {
    id: "HDS-133",
    question: "If a multimeter continuity test reads '0.0' or near zero, what does it mean?",
    options: [
      "The circuit is complete (closed/continuous).",
      "The circuit is broken and electricity cannot pass through the component being tested.",
      "The fuse inline with the circuit has blown and must be replaced before retesting.",
      "The multimeter battery is dead and the reading is unreliable until replaced."
    ],
    answer: "The circuit is complete (closed/continuous).",
    explanation: "Zero resistance means electricity can flow freely through the component[cite: 7504]."
  },
  {
    id: "HDS-134",
    question: "How many BTUs are in one Therm of Natural Gas?",
    options: [
      "1,000,000",
      "1,000",
      "100,000",
      "91,500"
    ],
    answer: "100,000",
    explanation: "One therm equals 100,000 BTUs, a standard billing unit[cite: 7288]."
  },
  {
    id: "HDS-135",
    question: "How many BTUs are in one Gallon of Propane?",
    options: [
      "100,000",
      "2,500",
      "21,591",
      "91,690"
    ],
    answer: "91,690",
    explanation: "Liquid propane contains approximately 91,690 BTUs per gallon[cite: 7288]."
  },
  {
    id: "HDS-136",
    question: "Why is Higher Heating Value (HHV) efficiency always lower than Lower Heating Value (LHV)?",
    options: [
      "It is a mathematical rounding error in the conversion between metric and imperial.",
      "LHV is the European measurement standard while HHV is used only in North America.",
      "HHV only applies to gas fuel calculations while LHV covers solid fuels exclusively.",
      "HHV accounts for the energy lost vaporizing water; LHV ignores that loss."
    ],
    answer: "HHV accounts for the energy lost vaporizing water; LHV ignores that loss.",
    explanation: "HHV divides output by the *total* potential energy, including latent heat, resulting in a lower percentage [cite: 7248-7250]."
  },
  {
    id: "HDS-137",
    question: "What is a 'Short Circuit'?",
    options: [
      "A circuit where the wire length is too short to reach the intended component.",
      "A circuit where the wire has been physically broken or disconnected at a terminal.",
      "A low-resistance path that allows current to bypass the load.",
      "A battery-powered DC circuit commonly used in millivolt gas valve control systems."
    ],
    answer: "A low-resistance path that allows current to bypass the load.",
    explanation: "Shorts cause excessive current flow and can lead to damage or fire [cite: 7379-7385]."
  },
  {
    id: "HDS-138",
    question: "What determines the cost of operating a gas appliance?",
    options: [
      "The thermostat setting alone determines the total operating cost of the appliance.",
      "The brand and model of the stove is the primary factor in calculating fuel costs.",
      "The color and pattern of the flame when the appliance is operating at full output.",
      "Input rating (BTU/hr) divided by fuel energy content, multiplied by fuel cost."
    ],
    answer: "Input rating (BTU/hr) divided by fuel energy content, multiplied by fuel cost.",
    explanation: "This calculation determines the cost per hour of operation based on local rates [cite: 7289-7293]."
  },
  {
    id: "HDS-139",
    question: "What should be done before testing any electrical component for resistance/continuity?",
    options: [
      "Disconnect power to the appliance.",
      "Remove the exhaust pipe to access the wiring harness behind the combustion chamber.",
      "Turn the unit on to its highest setting so the component can be tested under load.",
      "Moisten your fingers to improve electrical contact with the multimeter probe tips."
    ],
    answer: "Disconnect power to the appliance.",
    explanation: "Testing resistance on a live circuit can damage the meter and cause injury[cite: 7495]."
  },
  {
    id: "HDS-140",
    question: "What is the main advantage of a pellet stove with a DC motor system?",
    options: [
      "It has a lower retail purchase price compared to AC motor equipped models.",
      "It provides better combustion of corn and biomass fuels than an AC motor system.",
      "It eliminates the need for any exhaust venting by using an internal filtration system.",
      "It can operate on battery backup during a power outage."
    ],
    answer: "It can operate on battery backup during a power outage.",
    explanation: "DC motors can run directly off batteries without an inverter, simplifying backup power[cite: 5630]."
  },
];

// --- HDS BATCH 5: Comprehensive Gap Fillers (Chapters 8-16 & Appendices) ---

const hds_batch_5 = [
  {
    id: "HDS-141",
    question: "According to NFPA 211, what is the minimum volume for an alcove installation unless listed otherwise?",
    options: [
      "A minimum of 1,000 cubic feet to allow adequate combustion air for safe operation.",
      "There is no minimum volume requirement; any alcove size is acceptable by code.",
      "512 cubic feet.",
      "A minimum of 100 cubic feet of open space surrounding the appliance on all sides."
    ],
    answer: "512 cubic feet.",
    explanation: "Alcoves smaller than 512 cubic feet can cause dangerous heat buildup unless the appliance is specifically listed for it[cite: 1671, 3017]."
  },
  {
    id: "HDS-142",
    question: "When is a 'Level II' chimney inspection specifically required?",
    options: [
      "Every year as part of the standard annual chimney sweep and maintenance service.",
      "Only when the house is sold and a home inspection is required by the lender.",
      "Only for gas appliance installations since wood systems use a different standard.",
      "Upon the addition or replacement of an appliance with a dissimilar type."
    ],
    answer: "Upon the addition or replacement of an appliance with a dissimilar type.",
    explanation: "Changing fuel types or adding an insert to an existing fireplace triggers a Level II inspection requirement [cite: 3090-3091]."
  },
  {
    id: "HDS-143",
    question: "What is the primary danger of installing a wood insert into a factory-built fireplace?",
    options: [
      "It may overheat the fireplace components or void the warranty if not specifically tested for that model.",
      "The insert will not physically fit inside the smaller factory-built firebox opening.",
      "It makes the chimney excessively cold and causes chronic condensation problems.",
      "It is prohibited by law in all fifty states regardless of appliance listing."
    ],
    answer: "It may overheat the fireplace components or void the warranty if not specifically tested for that model.",
    explanation: "Unless listed for use with the specific fireplace model, inserts can compromise the safety of the zero-clearance system [cite: 3143-3144]."
  },
  {
    id: "HDS-144",
    question: "For an outdoor gas appliance enclosure to be considered 'outdoors', what is the requirement if it has three walls?",
    options: [
      "At least 30% of the remaining horizontal periphery must be permanently open.",
      "It cannot have any type of permanent roof or overhead weather protection structure.",
      "It must have a UL-listed exhaust fan rated for outdoor combustion applications.",
      "It must include a sealed window rated for high-temperature gas appliance exposure."
    ],
    answer: "At least 30% of the remaining horizontal periphery must be permanently open.",
    explanation: "ANSI Z21.97 defines outdoor spaces to ensure adequate ventilation for combustion and exhaust dispersal[cite: 1218]."
  },
  {
    id: "HDS-145",
    question: "What must be installed if a propane cylinder is concealed inside an enclosure?",
    options: [
      "A keyed lock mechanism to prevent unauthorized access and tampering with the valve.",
      "Ventilation openings at both the upper and lower levels.",
      "A light bulb or illumination device for visibility during cylinder replacement.",
      "A dedicated resistance heater to prevent the propane from getting too cold."
    ],
    answer: "Ventilation openings at both the upper and lower levels.",
    explanation: "Ventilation prevents gas pooling; openings are required at the top and bottom of the enclosure [cite: 4877-4878]."
  },
  {
    id: "HDS-146",
    question: "What is the purpose of a 'restrictor plate' in a gas direct vent system?",
    options: [
      "To hold the decorative log set securely in the correct position over the burner.",
      "To reduce the gas flow rate and lower the maximum BTU input of the appliance.",
      "To limit excess draft in tall vertical runs, improving flame appearance.",
      "To prevent birds and debris from entering and obstructing the vent termination."
    ],
    answer: "To limit excess draft in tall vertical runs, improving flame appearance.",
    explanation: "Tall vents create strong draft that can lift flames off the burner; restrictors slow the flow to normalize the flame[cite: 4437]."
  },
  {
    id: "HDS-147",
    question: "Why does burning corn require a different stainless steel alloy for venting than wood pellets?",
    options: [
      "Corn burns at significantly higher temperatures that exceed standard pipe ratings.",
      "Corn combustion can produce corrosive acids that attack standard stainless steel.",
      "Corn produces substantially more visible soot that blocks the vent more quickly.",
      "Corn pellets are heavier per unit volume and create more physical wear on the pipe."
    ],
    answer: "Corn combustion can produce corrosive acids that attack standard stainless steel.",
    explanation: "Venting manufacturers offer special multi-fuel pipe to resist the corrosive effects of corn exhaust [cite: 5209-5210]."
  },
  {
    id: "HDS-148",
    question: "What is 'bridging' in a pellet hopper?",
    options: [
      "A type of electrical fuse that protects the auger motor from current overload.",
      "The mechanical coupling that connects the auger shaft to the drive motor assembly.",
      "Pellets getting stuck across the feed opening, preventing fuel flow.",
      "Physically connecting two separate hoppers together to increase total fuel capacity."
    ],
    answer: "Pellets getting stuck across the feed opening, preventing fuel flow.",
    explanation: "Excessively long pellets (>1.5 inches) can lock together (bridge) and starve the fire [cite: 5025-5026]."
  },
  {
    id: "HDS-149",
    question: "How does a 'Negative Pressure' pellet combustion system work?",
    options: [
      "A powered fan blows pressurized air directly into the burn pot from above.",
      "It uses gravity feed only with no electrical components or mechanical air movers.",
      "It operates without any fans relying entirely on natural convection and gravity.",
      "A fan pulls air through the burn pot and exhausts it."
    ],
    answer: "A fan pulls air through the burn pot and exhausts it.",
    explanation: "The fan is downstream of the firebox, creating a vacuum that pulls combustion air in [cite: 5503-5504]."
  },
  {
    id: "HDS-150",
    question: "What is the typical moisture content range for 'PFI Premium' wood pellets?",
    options: [
      "Over 30%",
      "Less than 8%",
      "20-25%",
      "10-15%"
    ],
    answer: "Less than 8%",
    explanation: "Low moisture is critical for the high efficiency and BTU output of pellet appliances."
  },
  {
    id: "HDS-151",
    question: "What is a 'hybrid' pellet appliance?",
    options: [
      "An appliance that burns both heating oil and wood pellets in alternate cycles.",
      "A pellet stove equipped with an integrated battery for backup power operation.",
      "A pellet stove that generates supplemental electricity through a thermoelectric module.",
      "An appliance designed to burn both wood pellets and other biomass fuels like corn."
    ],
    answer: "An appliance designed to burn both wood pellets and other biomass fuels like corn.",
    explanation: "These units often have specialized burn pots and agitators to handle the higher ash/clinkers of biomass [cite: 4907-4908]."
  },
  {
    id: "HDS-152",
    question: "Why is 'Cannel Coal' generally not recommended for closed heating appliances?",
    options: [
      "It will not sustain combustion and self-extinguishes when the door is closed.",
      "It is significantly more expensive per ton than standard anthracite coal varieties.",
      "It produces no measurable heat output and is useful only for decorative display.",
      "It contains highly volatile gas that poses a risk of flash fires or explosions."
    ],
    answer: "It contains highly volatile gas that poses a risk of flash fires or explosions.",
    explanation: "Its flash-fire characteristics make it suitable for open fireplaces but dangerous in controlled draft stoves [cite: 7551-7552]."
  },
  {
    id: "HDS-153",
    question: "What is 'Ash Fusion Temperature' in coal burning?",
    options: [
      "The minimum temperature the stove must reach before coal will sustain combustion.",
      "The temperature at which coal ash freezes and becomes impossible to remove.",
      "The operating temperature of the ceramic glass door panel during normal burning.",
      "The temperature at which ash melts and forms clinkers."
    ],
    answer: "The temperature at which ash melts and forms clinkers.",
    explanation: "Higher fusion temperatures are desirable to prevent the formation of hard clinkers that block air [cite: 7593-7594]."
  },
  {
    id: "HDS-154",
    question: "What is the typical heat output limit for a standard 120V electric fireplace?",
    options: [
      "2,000 BTUs",
      "5,000 BTUs",
      "10,000 BTUs",
      "20,000 BTUs"
    ],
    answer: "5,000 BTUs",
    explanation: "Due to the 15-amp circuit limit of standard outlets, output is capped around 1500 watts (~5,000 BTUs)[cite: 7653]."
  },
  {
    id: "HDS-155",
    question: "If a natural gas appliance has an input of 40,000 BTUs/hr and gas costs $1.00 per therm, what is the operating cost?",
    options: [
      "$0.10 per hour",
      "$0.40 per hour",
      "$1.00 per hour",
      "$4.00 per hour"
    ],
    answer: "$0.40 per hour",
    explanation: "40,000 / 100,000 (1 therm) = 0.4 therms/hr. 0.4 * $1.00 = $0.40 [cite: 7294-7297]."
  },
  {
    id: "HDS-156",
    question: "What is the purpose of a 'Surge Protector' for pellet stoves?",
    options: [
      "To protect the delicate electronic control board from power spikes.",
      "To reduce the total electricity consumption of the stove during normal operation.",
      "To boost the voltage supply and increase the maximum speed of the combustion fan.",
      "To provide additional cord length for flexible placement away from the wall outlet."
    ],
    answer: "To protect the delicate electronic control board from power spikes.",
    explanation: "Control boards are computers; surges can destroy them, voiding warranties [cite: 5619-5620]."
  },
  {
    id: "HDS-157",
    question: "What is the difference between a Thermocouple and a Thermopile?",
    options: [
      "A thermopile is a series of thermocouples generating higher voltage (mV).",
      "A thermocouple generates 120V; a thermopile generates 12V.",
      "They are the same thing.",
      "A thermopile measures air pressure."
    ],
    answer: "A thermopile is a series of thermocouples generating higher voltage (mV).",
    explanation: "A single thermocouple generates ~30mV; a thermopile generates ~750mV to power main valves [cite: 7866-7867]."
  },
  {
    id: "HDS-158",
    question: "Why should paint curing on a new stove be discussed with the owner?",
    options: [
      "Because the curing process produces smoke and odors that can alarm unprepared owners.",
      "Because the curing process adds a significant surcharge to the installation cost.",
      "To advise them to repaint the stove themselves with standard interior house paint.",
      "Because the factory paint coating will flake off permanently after the first fire."
    ],
    answer: "Because the curing process produces smoke and odors that can alarm unprepared owners.",
    explanation: "High-temperature paint cures with heat; warning the client prevents panic during the first fire [cite: 2069-2070]."
  },
  {
    id: "HDS-159",
    question: "What is the purpose of 'priming the flue'?",
    options: [
      "Adding additional kindling fuel on top of the main fire load to boost output.",
      "Sweeping and cleaning the flue with a wire brush before the first use of the season.",
      "Warming the flue with a torch or newspaper to establish draft before lighting the main fire.",
      "Applying a coat of high-temperature sealant paint to the inside chimney walls."
    ],
    answer: "Warming the flue with a torch or newspaper to establish draft before lighting the main fire.",
    explanation: "This overcomes the cold air plug in exterior chimneys, preventing initial smoke spillage[cite: 3403]."
  },
  {
    id: "HDS-160",
    question: "What is the 'Neutral Pressure Plane' in a house?",
    options: [
      "The lowest elevation point of the home, typically the basement floor slab.",
      "The highest structural point of the house, usually the peak of the roof ridge.",
      "The temperature setting on the central thermostat that controls the HVAC system.",
      "The level where air pressure inside equals the pressure outside."
    ],
    answer: "The level where air pressure inside equals the pressure outside.",
    explanation: "Above this plane, air pushes out; below it, air pulls in. Hearth appliances below this plane fight natural drafts."
  },
  {
    id: "HDS-161",
    question: "Why are 'unvented' logs prohibited in factory-built fireplaces unless specifically listed?",
    options: [
      "The firebox may not be designed to withstand the specific heat characteristics, creating a fire hazard.",
      "They are too heavy for the lightweight floor of a factory-built firebox assembly.",
      "They produce excessive heat output that overwhelms the room temperature controls.",
      "They do not physically fit inside the smaller dimensions of the factory firebox."
    ],
    answer: "The firebox may not be designed to withstand the specific heat characteristics, creating a fire hazard.",
    explanation: "UL 127 requires specific testing for unvented logs to ensure the firebox won't overheat[cite: 1081]."
  },
  {
    id: "HDS-162",
    question: "What is the function of a 'Barometric Damper'?",
    options: [
      "To increase draft strength in chimneys that have insufficient natural draw.",
      "To prevent cold outdoor air from flowing back down through the chimney flue.",
      "To measure and monitor the relative humidity level inside the flue system.",
      "To regulate excessive draft by admitting room air into the flue."
    ],
    answer: "To regulate excessive draft by admitting room air into the flue.",
    explanation: "It stabilizes draft in strong chimneys to prevent overfiring [cite: 2746-2748]."
  },
  {
    id: "HDS-163",
    question: "What is the 'Glass Cleaning' rule for ceramic glass?",
    options: [
      "Never use abrasives and only clean when cool.",
      "Use only a single-edge razor blade held at a low angle for stubborn deposits.",
      "Clean the glass while it is still hot so residue wipes off more easily.",
      "Use standard oven cleaner spray and let it soak for improved residue removal."
    ],
    answer: "Never use abrasives and only clean when cool.",
    explanation: "Abrasives scratch the ceramic coating, and cleaning while hot can cause burns or damage [cite: 2005-2006]."
  },
  {
    id: "HDS-164",
    question: "What is 'makeup air'?",
    options: [
      "Air brought into the house to replace air exhausted by appliances and fans.",
      "A brand name of cosmetic products unrelated to the hearth and heating industry.",
      "The primary combustion air supply drawn directly into the appliance firebox.",
      "Stale or recirculated air trapped inside the attic space above the ceiling."
    ],
    answer: "Air brought into the house to replace air exhausted by appliances and fans.",
    explanation: "It balances the house pressure to prevent negative pressure problems."
  },
  {
    id: "HDS-165",
    question: "Why should you not use a 'heat reclaimer' on a modern EPA woodstove?",
    options: [
      "It produces distracting vibration noise that disrupts the household environment.",
      "It extracts too much heat from the flue, causing draft failure and creosote.",
      "It causes the connector pipe to physically melt from excessive thermal contact.",
      "It is illegal under current EPA regulations and subject to substantial fines."
    ],
    answer: "It extracts too much heat from the flue, causing draft failure and creosote.",
    explanation: "High-efficiency stoves already have low flue temps; robbing more heat kills the draft [cite: 2788-2789]."
  },
  {
    id: "HDS-166",
    question: "What is a 'Snorkel' termination?",
    options: [
      "A recreational snorkeling pipe repurposed as a creative chimney rain guard.",
      "A direct vent cap that provides vertical rise on a horizontal termination to clear grade or debris.",
      "A standard conical rain cap designed to shed water away from the flue opening.",
      "A type of roof flashing boot that seals the chimney penetration at the roofline."
    ],
    answer: "A direct vent cap that provides vertical rise on a horizontal termination to clear grade or debris.",
    explanation: "Used in basements or low installations to get the intake/exhaust above snow/ground level[cite: 4644]."
  },
  {
    id: "HDS-167",
    question: "What is the difference between 'venting' and 'ventilation'?",
    options: [
      "They are identical terms that can be used interchangeably in all contexts.",
      "Venting removes combustion products; Ventilation is the flow of air into/within the house.",
      "Venting is a more expensive component while ventilation is a low-cost addition.",
      "Venting applies exclusively to gas appliances while ventilation applies to wood."
    ],
    answer: "Venting removes combustion products; Ventilation is the flow of air into/within the house.",
    explanation: "Venting deals with exhaust; ventilation deals with the breathing of the home structure [cite: 4272-4273]."
  },
  {
    id: "HDS-168",
    question: "What is the 'Specific Gravity' of Natural Gas?",
    options: [
      "0.60",
      "1.00",
      "1.52",
      "2.00"
    ],
    answer: "0.60",
    explanation: "It is lighter than air (1.0), meaning it rises and dissipates quickly."
  },
  {
    id: "HDS-169",
    question: "Why are 'vent-free' appliances not subject to 'altitude derating'?",
    options: [
      "They rely on the ODS pilot to shut down if oxygen is insufficient, rather than fixed orifices.",
      "They include a built-in mechanical convection fan that compensates for thin air.",
      "They do not use any type of gaseous fuel so altitude has no effect on operation.",
      "They are exempt from all derating requirements due to a special regulatory waiver."
    ],
    answer: "They rely on the ODS pilot to shut down if oxygen is insufficient, rather than fixed orifices.",
    explanation: "The Oxygen Depletion Sensor will simply shut the unit off if the altitude makes the air too thin [cite: 3939-3940]."
  },
  {
    id: "HDS-170",
    question: "What is the danger of using 'Galvanized' pipe for woodstove venting?",
    options: [
      "It is excessively heavy and difficult for installers to handle on elevated scaffolding.",
      "It develops rust and corrosion significantly faster than standard black steel pipe.",
      "It has a substantially higher material cost than equivalent black steel alternatives.",
      "The zinc coating can vaporize at high temperatures, creating toxic fumes."
    ],
    answer: "The zinc coating can vaporize at high temperatures, creating toxic fumes.",
    explanation: "Galvanized pipe is for air ducts, not high-heat solid fuel exhaust; black steel or stainless is required."
  },
];