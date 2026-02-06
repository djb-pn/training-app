/**
 * NP_W2_Questions.js
 * Nurse Practitioner — Week 2 Practice Questions
 *
 * Structure mirrors the training-app convention:
 *   export const NursePractitionerW2Questions = {
 *     "Module Title": {
 *       "Subcategory": [ { id, question, options, answer, source }, … ]
 *     }
 *   };
 *
 * QuestionEngine reads: id, question, options, answer (string | array), source
 */

export const NursePractitionerW2Questions = {

  // =================================================================
  // MODULE 1 — CLINICAL REASONING & DIAGNOSTIC LOGIC
  // =================================================================
  "Module 1: Clinical Reasoning & Diagnostic Logic": {

    "Reasoning Models & Dual Process Theory": [
      {
    id: 2001,
    question: "According to the Dual Process Theory, which thinking system is characterized as being slow, logical, effortful, and rule-based?",
    options: [
      "Heuristic Processing",
      "Intuitive Reasoning",
      "System 2 (Analytical)",
      "System 1 (Intuitive)"
    ],
    answer: "System 2 (Analytical)",
    source: "System 2 (Analytical) reasoning is slow, logical, and follows a step-by-step or algorithmic process."
  },
      {
    id: 2002,
    question: "Which clinical reasoning method involves focusing diagnostic possibilities into the single best explanation based on the facts available at that moment?",
    options: [
      "Deductive reasoning",
      "Inductive reasoning",
      "Pattern recognition",
      "Abductive reasoning"
    ],
    answer: "Abductive reasoning",
    source: "Abductive reasoning focuses on narrowing diagnostic possibilities into diagnoses of plausibility—the best explanation given the facts."
  },
      {
    id: 2003,
    question: "'Illness Scripts' are mental templates used by experienced clinicians to organize medical knowledge. Which component includes the environmental and personal factors that increase the likelihood of a disease?",
    options: [
      "Clinical consequences",
      "Pattern recognition",
      "Enabling conditions",
      "Pathophysiological insult"
    ],
    answer: "Enabling conditions",
    source: "Enabling conditions describe the factors (age, gender, history, exposures) that predispose a patient to a specific condition."
  },
      {
    id: 2004,
    question: "Approximately what percentage of a final diagnosis is typically derived from a well-conducted patient history?",
    options: [
      "85%",
      "50%",
      "65%",
      "95%"
    ],
    answer: "85%",
    source: "Research indicates that roughly 85% of a diagnosis comes from the health history."
  },
      {
    id: 2005,
    question: "What is considered the 'gold standard' mnemonic for obtaining the History of Present Illness (HPI)?",
    options: [
      "VINDICATE model",
      "OLD CARTS mnemonic",
      "SOAP note format",
      "DaRT assessment"
    ],
    answer: "OLD CARTS mnemonic",
    source: "OLD CARTS (Onset, Location, Duration, Character, Aggravating/Relieving, Timing, Severity) is the standard mnemonic for history collection."
  },
      {
    id: 2006,
    question: "In the clinical reasoning process, what is considered the 'most important part' of the initial diagnostic process?",
    options: [
      "Peer feedback, deliberate practice, and interprofessional collaboration",
      "Systematic use of Electronic Health Record (EHR) clinical decision prompts",
      "Judicial use of advanced diagnostic testing and imaging studies",
      "Accurate collection of history and physical examination data"
    ],
    answer: "Accurate collection of history and physical examination data",
    source: "Accurate collection of data through the history and physical examination is the most critical foundation for the diagnostic process."
  },
      {
    id: 2007,
    question: "According to the Dual Processing Theory, 'System 1' thinking is characterized as:",
    options: [
      "Utilizing only laboratory data and imaging for diagnostic confirmation",
      "Fast, automatic, and reliant on pattern recognition",
      "Slow, logical, and following a sequential step-by-step algorithm",
      "Rule-based, effortful, and methodically analytical"
    ],
    answer: "Fast, automatic, and reliant on pattern recognition",
    source: "System 1 thinking is intuitive, quick, and based on past clinical experiences stored in memory."
  },
      {
    id: 2008,
    question: "Which diagnostic reasoning strategy involves 'inference to the best explanation' based on the clinical data at hand?",
    options: [
      "Abductive reasoning",
      "Deductive reasoning",
      "Pattern recognition",
      "Inductive reasoning"
    ],
    answer: "Abductive reasoning",
    source: "Abductive reasoning focuses on the best possible explanation for the facts available."
  }
    ],

    "Cognitive Biases & Error Reduction": [
      {
    id: 2009,
    question: "Which cognitive bias occurs when a clinician fixates on an initial piece of information (such as a previous diagnosis in the chart) and fails to adjust despite new data?",
    options: [
      "Premature closure",
      "Search satisfying",
      "Anchoring bias",
      "Outcome bias"
    ],
    answer: "Anchoring bias",
    source: "Anchoring is a mental shortcut that resolutely focuses on an initial piece of information to make subsequent decisions."
  },
      {
    id: 2010,
    question: "What is identified across medical literature as the most frequent cognitive error in diagnostic reasoning?",
    options: [
      "Zebra retreat",
      "Premature closure",
      "Commission bias",
      "Overconfidence bias"
    ],
    answer: "Premature closure",
    source: "Premature closure—the tendency to stop the diagnostic process before all possibilities are explored—is the most common error."
  },
      {
    id: 2011,
    question: "A provider stops looking for additional diagnoses once the first plausible explanation is found. This error is known as:",
    options: [
      "Search satisfying",
      "Omission bias",
      "Confirmation bias",
      "Fundamental attribution error"
    ],
    answer: "Search satisfying",
    source: "Search satisfying occurs when we stop looking for further explanations once an initial one is found."
  },
      {
    id: 2012,
    question: "Metacognition is a critical skill for APRNs to reduce error. It is best defined as:",
    options: [
      "Rapid pattern recognition",
      "Memorizing rare disease scripts",
      "Following evidence-based guidelines",
      "Thinking about one's own thinking"
    ],
    answer: "Thinking about one's own thinking",
    source: "Metacognition involves self-reflection and 'thinking about your thinking' to monitor for biases."
  },
      {
    id: 2013,
    question: "'Confirmation Bias' in diagnostic reasoning is best described as:",
    options: [
      "Interpreting clinical information to fit a preconceived diagnosis regardless of contrary data",
      "Seeking validation from an interprofessional team before finalizing a preliminary working diagnosis",
      "Relying primarily on laboratory and imaging results to validate a preliminary working diagnosis",
      "Utilizing current evidence-based practice guidelines to confirm and validate a treatment plan"
    ],
    answer: "Interpreting clinical information to fit a preconceived diagnosis regardless of contrary data",
    source: "Confirmation bias involves interpreting information in a way that supports a preferred diagnosis while ignoring contradictory evidence."
  },
      {
    id: 2014,
    question: "In clinical reasoning, what does the term 'Search Satisfying' refer to?",
    options: [
      "Using a medical reference database or clinical decision tool to satisfy the need for additional information",
      "The emotional sense of satisfaction and closure that occurs after arriving at the correct final diagnosis",
      "The tendency to stop looking for other diagnostic possibilities once one plausible diagnosis is found",
      "Systematically reviewing all available laboratory results and imaging before arriving at a final diagnosis"
    ],
    answer: "The tendency to stop looking for other diagnostic possibilities once one plausible diagnosis is found",
    source: "Search satisfying is a cognitive bias where a clinician ceases consideration of other possibilities once an initial explanation is found."
  },
      {
    id: 2015,
    question: "Which cognitive error is identified as the most frequent cause of missed or delayed diagnoses in clinical practice?",
    options: [
      "Zebra retreat",
      "Overconfidence bias",
      "Fundamental attribution error",
      "Premature closure"
    ],
    answer: "Premature closure",
    source: "Premature closure—stopping the diagnostic process too early—is the most common cognitive error."
  }
    ],

    "Advanced Diagnostic Strategies": [
      {
    id: 2016,
    question: "In the analytical reasoning mnemonic VINDICATE, what does the 'V' represent?",
    options: [
      "Vitamin deficiency",
      "Viral",
      "Vascular",
      "Visual impairment"
    ],
    answer: "Vascular",
    source: "'V' stands for Vascular causes in the VINDICATE logical framework."
  },
      {
    id: 2017,
    question: "'Occam's Razor' is a principle used in clinical reasoning which suggests:",
    options: [
      "Attributing the patient's presenting symptoms primarily to their personality traits or character",
      "Favoring a single diagnosis that explains all symptoms over multiple diagnoses",
      "Defaulting to the most advanced and expensive diagnostic test before conducting a clinical exam",
      "Using rapid System 1 intuitive thinking as the sole reasoning method for all clinical encounters"
    ],
    answer: "Favoring a single diagnosis that explains all symptoms over multiple diagnoses",
    source: "This principle encourages clinicians to look for the simplest single explanation for a patient's presentation."
  },
      {
    id: 2018,
    question: "Attributing a patient's symptoms to their personality or character rather than a physical illness is an error known as:",
    options: [
      "Search satisfying heuristic",
      "Commission bias tendency",
      "Anchoring heuristic fixation",
      "Fundamental attribution error"
    ],
    answer: "Fundamental attribution error",
    source: "This cognitive error involves misattributing clinical signs to the patient's nature rather than a pathophysiological cause."
  }
    ],

    "Case-Based Clinical Reasoning": [
      {
    id: 2019,
    question: "A 52-year-old female presents with fatigue and intermittent substernal chest pressure (4/10) that is aggravated by exertion and relieved by rest. According to the OLD CARTS mnemonic, what is the 'Aggravating factor'?",
    options: [
      "Rest",
      "Fatigue",
      "Intermittent timing",
      "Exertion"
    ],
    answer: "Exertion",
    source: "The patient's chest discomfort is made worse by physical activity or exertion."
  },
      {
    id: 2020,
    question: "A 78-year-old female patient reports dizzy spells on standing. The NP notes a blood pressure of 150/70 while sitting and 130/60 while standing. This clinical finding is diagnostic for:",
    options: [
      "Acute myocardial infarction",
      "Orthostatic hypotension",
      "Early-stage dementia",
      "Normal age-related changes"
    ],
    answer: "Orthostatic hypotension",
    source: "A significant drop in blood pressure when moving from a sitting to a standing position indicates orthostatic hypotension."
  },
      {
    id: 2021,
    question: "An NP is evaluating a 45-year-old male with a PHQ-9 score of 18/27, low appetite, and hopelessness. Which differential diagnosis should be ruled out first due to its organic nature?",
    options: [
      "Adjustment disorder",
      "Major depressive disorder",
      "Hypothyroidism",
      "Cultural stigma"
    ],
    answer: "Hypothyroidism",
    source: "It is critical to rule out organic causes like hypothyroidism for depressive symptoms."
  }
    ]
  },

  // =================================================================
  // MODULE 2 — PHYSICAL EXAMINATION TECHNIQUES
  // =================================================================
  "Module 2: Physical Examination Techniques": {

    "Standard Examination Sequence": [
      {
    id: 2022,
    question: "What is the standard sequence for all physical examinations EXCEPT for the assessment of the abdomen?",
    options: [
      "Palpation, Inspection, Percussion, Auscultation",
      "Auscultation, Inspection, Palpation, Percussion",
      "Inspection, Palpation, Percussion, Auscultation",
      "Inspection, Auscultation, Palpation, Percussion"
    ],
    answer: "Inspection, Palpation, Percussion, Auscultation",
    source: "The standard order is Inspection, Palpation, Percussion, and Auscultation."
  },
      {
    id: 2023,
    question: "Why is auscultation performed BEFORE palpation and percussion when examining the abdomen?",
    options: [
      "To allow the patient to relax and become accustomed to the provider",
      "Because palpation and percussion can alter bowel sounds",
      "To assess for underlying vascular bruits before proceeding further",
      "It is the standardized preference of the interprofessional care team"
    ],
    answer: "Because palpation and percussion can alter bowel sounds",
    source: "Palpation and percussion can stimulate or alter bowel sounds, leading to an inaccurate assessment."
  },
      {
    id: 2024,
    question: "Why is the abdominal examination sequence altered to Inspection, Auscultation, Percussion, Palpation?",
    options: [
      "To make the patient more comfortable and relaxed while lying in the supine position",
      "To assess for underlying vascular bruits before performing direct organ palpation",
      "To identify any large abdominal masses or organomegaly before proceeding to auscultation",
      "To prevent palpation and percussion from altering bowel sounds"
    ],
    answer: "To prevent palpation and percussion from altering bowel sounds",
    source: "Percussion and palpation can stimulate or change bowel sounds, so auscultation must be performed first."
  }
    ],

    "Palpation, Percussion & Auscultation": [
      {
    id: 2025,
    question: "When percussing over a solid organ like the liver or a fluid-filled area, which sound is typically produced?",
    options: [
      "Dullness",
      "Tympany",
      "Resonance",
      "Flatness"
    ],
    answer: "Dullness",
    source: "Dullness is a thud-like sound heard over organs like the liver or stomach."
  },
      {
    id: 2026,
    question: "Which part of the hand should the NP use to most accurately assess a patient's skin temperature?",
    options: [
      "Heel of the hand (thenar eminence base)",
      "Finger pads (palmar fingertip surfaces)",
      "Dorsal surface (back of the hand)",
      "Ulnar surface (lateral hand edge)"
    ],
    answer: "Dorsal surface (back of the hand)",
    source: "The dorsal surface (dorsum) is the most sensitive area for temperature assessment."
  },
      {
    id: 2027,
    question: "The bell of the stethoscope is best suited for hearing:",
    options: [
      "Normal first and second heart sounds at standard sites (S1/S2)",
      "Low-pitched heart murmurs or extra sounds (S3/S4)",
      "High-pitched or hyperactive bowel sounds (borborygmi)",
      "High-pitched adventitious lung sounds (crackles/rales)"
    ],
    answer: "Low-pitched heart murmurs or extra sounds (S3/S4)",
    source: "The bell is used specifically for low-pitched sounds like murmurs."
  },
      {
    id: 2028,
    question: "In percussion, a loud, drum-like sound heard over gastric air is known as:",
    options: [
      "Dullness",
      "Resonance",
      "Flatness",
      "Tympany"
    ],
    answer: "Tympany",
    source: "Tympany is the drum-like sound produced by percussing over gas-filled structures like the stomach."
  },
      {
    id: 2029,
    question: "A Nurse Practitioner is auscultating a patient's heart and hears a low-pitched murmur. Which part of the stethoscope is best designed to hear this type of sound?",
    options: [
      "The earpieces",
      "The tubing",
      "The bell",
      "The diaphragm"
    ],
    answer: "The bell",
    source: "The bell of the stethoscope is specifically used for low-pitched sounds, such as abnormal heart sounds or murmurs."
  },
      {
    id: 2030,
    question: "During percussion, a drum-like sound characterized by loud intensity and high pitch is typically heard over gastric air bubbles. This sound is known as:",
    options: [
      "Tympany",
      "Resonance",
      "Dullness",
      "Flatness"
    ],
    answer: "Tympany",
    source: "Tympany is the loud, drum-like sound produced by percussing over gas-filled structures like the stomach."
  }
    ],

    "Vital Signs & Measurement": [
      {
    id: 2031,
    question: "An NP is selecting a blood pressure cuff for a pediatric patient. To ensure an accurate reading, the cuff width should be what percentage of the arm circumference?",
    options: [
      "60-75%",
      "40-50%",
      "20-30%",
      "80-100%"
    ],
    answer: "40-50%",
    source: "The correct cuff width is 40% to 50% of the arm circumference."
  },
      {
    id: 2032,
    question: "If a blood pressure cuff is too SMALL for a patient's arm, the resulting reading will be:",
    options: [
      "Unaffected by cuff size",
      "Falsely low reading",
      "Inaccurate diastolic only",
      "Falsely high reading"
    ],
    answer: "Falsely high reading",
    source: "A cuff that is too small will result in a reading that is falsely high."
  },
      {
    id: 2033,
    question: "A blood pressure cuff that is too SMALL for the patient's arm will result in a reading that is:",
    options: [
      "Falsely high reading",
      "Falsely low reading",
      "Inaccurate systolic only",
      "Unaffected by position"
    ],
    answer: "Falsely high reading",
    source: "A small cuff will yield a falsely high reading."
  },
      {
    id: 2034,
    question: "At what age should oral temperature typically be measured in children?",
    options: [
      "Birth",
      "2 to 3 years",
      "12 months",
      "4 to 5 years"
    ],
    answer: "4 to 5 years",
    source: "Oral temperature is appropriate starting at age 4 to 5 years, provided the child is cooperative."
  },
      {
    id: 2035,
    question: "For children under age 6, which site is used to measure heart rate?",
    options: [
      "Radial pulse",
      "Carotid pulse",
      "Apical pulse",
      "Brachial pulse"
    ],
    answer: "Apical pulse",
    source: "Apical pulse is the standard site for heart rate measurement in children under age 6."
  },
      {
    id: 2036,
    question: "'Pyrexia' (fever) in children is triggered by which biological components?",
    options: [
      "Circadian rhythm temperature variation",
      "Prostaglandins and endogenous pyrogens",
      "Endocrine hormonal imbalances",
      "Increased physical activity and exertion"
    ],
    answer: "Prostaglandins and endogenous pyrogens",
    source: "Fever is triggered by the release of prostaglandins and endogenous pyrogens."
  }
    ]
  },

  // =================================================================
  // MODULE 3 — PEDIATRIC ASSESSMENT & WELLNESS
  // =================================================================
  "Module 3: Pediatric Assessment & Wellness": {

    "Growth & Developmental Milestones": [
      {
    id: 2037,
    question: "When measuring linear growth in a child under 2 years of age, which method must be used to ensure accuracy on standardized growth charts?",
    options: [
      "Standing height on a platform scale",
      "Weight-for-age standardized ratio",
      "Recumbent length (lying down)",
      "Crown-to-rump seated length measurement"
    ],
    answer: "Recumbent length (lying down)",
    source: "Children under 2 years must be measured lying down (recumbent length) as growth charts for this age are standardized for this method."
  },
      {
    id: 2038,
    question: "At what developmental milestone is an infant typically expected to triple their birth weight?",
    options: [
      "12 months",
      "6 months",
      "9 months",
      "24 months"
    ],
    answer: "12 months",
    source: "An infant should triple their birth weight by 12 months of age."
  },
      {
    id: 2039,
    question: "According to American Academy of Pediatrics (AAP) guidelines, at which specific ages should formal developmental screening using a validated tool be performed?",
    options: [
      "12, 24, and 36 months",
      "Annually starting at age 2",
      "6, 12, and 18 months",
      "9, 18, and 30 months"
    ],
    answer: "9, 18, and 30 months",
    source: "Formal screening is required at 9, 18, and 30 months."
  },
      {
    id: 2040,
    question: "The anterior fontanel in a healthy infant is typically expected to close between:",
    options: [
      "24-30 months",
      "12-18 months",
      "0-2 months",
      "4-6 months"
    ],
    answer: "12-18 months",
    source: "The anterior fontanel generally closes by 12 to 18 months."
  },
      {
    id: 2041,
    question: "According to the CDC, what is the weight milestone expected for an infant by 12 months of age?",
    options: [
      "Double their birth weight",
      "Triple their birth weight only if breastfed",
      "Triple their birth weight",
      "Quadruple their birth weight"
    ],
    answer: "Triple their birth weight",
    source: "An infant is expected to triple their birth weight by 12 months."
  },
      {
    id: 2042,
    question: "Which measurement is considered a routine part of the physical assessment for children aged 2 years and younger?",
    options: [
      "Head circumference",
      "Standing height",
      "Body Mass Index (BMI)",
      "Blood pressure"
    ],
    answer: "Head circumference",
    source: "Head circumference is measured routinely for children aged 2 years and younger."
  },
      {
    id: 2043,
    question: "When measuring linear growth in a child under the age of 2, what method is required to ensure accuracy on standardized growth charts?",
    options: [
      "Standing height using a wall-mounted stadiometer",
      "Measuring height while the child sits in the parent's lap",
      "Weight-for-length ratio",
      "Recumbent length measured while the child is lying down"
    ],
    answer: "Recumbent length measured while the child is lying down",
    source: "Children under age 2 must be measured lying down (length) rather than standing (height) for accuracy."
  }
    ],

    "Pediatric Physical Examination": [
      {
    id: 2044,
    question: "When performing a physical exam on a fearful toddler, which part of the examination should be performed LAST?",
    options: [
      "Bilateral lung field auscultation",
      "Ear and throat inspection",
      "Heart auscultation with stethoscope",
      "Abdominal palpation of four quadrants"
    ],
    answer: "Ear and throat inspection",
    source: "Intrusive procedures, like examining the ears and throat, should be done last in infants and toddlers while they are crying or at the end of the visit."
  },
      {
    id: 2045,
    question: "At what age should a pediatric healthcare provider typically begin routine blood pressure screenings during wellness visits?",
    options: [
      "12 months",
      "2 years",
      "At birth",
      "3 years"
    ],
    answer: "3 years",
    source: "Routine blood pressure measurement should begin at age 3 years."
  },
      {
    id: 2046,
    question: "During a well-child visit for a 3-month-old, the NP performs a 'General Survey' upon entering the room. Which observation is an appropriate part of this initial assessment?",
    options: [
      "Observation of the child's level of consciousness and facial expression",
      "Auscultation of heart sounds using the bell and diaphragm of the stethoscope",
      "Precise measurement of head circumference using a standardized measuring tape",
      "Systematic percussion of all four quadrants of the abdomen for tonal changes"
    ],
    answer: "Observation of the child's level of consciousness and facial expression",
    source: "The general survey involves overall observation of the child's state before beginning a detailed physical exam."
  },
      {
    id: 2047,
    question: "What is the standard recommended length of time for a comprehensive well-child visit?",
    options: [
      "2 hours minimum required",
      "90 minutes or longer",
      "30 to 60 minutes",
      "15 minutes or less"
    ],
    answer: "30 to 60 minutes",
    source: "A standard wellness visit should ideally last between 30 and 60 minutes."
  }
    ],

    "Sports Physicals & Screening": [
      {
    id: 2048,
    question: "The '90-second orthopedic evaluation' is a rapid screening tool used during sports physicals. Under what condition can this quick evaluation be used?",
    options: [
      "Only if the screening history for musculoskeletal issues is negative",
      "If the athlete has a documented history of prior fractures, sprains, or dislocations",
      "For all athletes regardless of their musculoskeletal injury history",
      "Only for children under the age of 10 during a preparticipation physical"
    ],
    answer: "Only if the screening history for musculoskeletal issues is negative",
    source: "The 90-second evaluation is appropriate if the initial screening history does not reveal musculoskeletal concerns."
  },
      {
    id: 2049,
    question: "Which cardiac condition is an absolute indication to disqualify an athlete from sports participation?",
    options: [
      "Controlled hypertension",
      "Athletic bradycardia",
      "Acute myocarditis",
      "Resolved Still's murmur"
    ],
    answer: "Acute myocarditis",
    source: "Acute myocarditis is a disqualifying condition for sports participation."
  }
    ],

    "HEENT & Musculoskeletal": [
      {
    id: 2050,
    question: "During a HEENT examination, at what age are the tympanic membranes (TMs) typically able to be clearly visualized?",
    options: [
      "6 months",
      "12 months",
      "Birth",
      "2 months"
    ],
    answer: "6 months",
    source: "Providers can typically begin visualizing the TMs from 6 months of age."
  },
      {
    id: 2051,
    question: "The 'Cover-Uncover' test is used during a pediatric eye exam to assess for:",
    options: [
      "Red reflex (retinal light screening)",
      "Visual acuity (distance clarity testing)",
      "Color blindness (Ishihara plate testing)",
      "Strabismus (ocular misalignment)"
    ],
    answer: "Strabismus (ocular misalignment)",
    source: "This test helps identify misalignment by watching for lateral movement when an occluder is removed."
  },
      {
    id: 2052,
    question: "Which of the following is a normal musculoskeletal finding in a child until age 7 or 8?",
    options: [
      "Genu varum (bowlegs)",
      "Persistent intoeing",
      "Genu valgum (knock-knees)",
      "Antalgic gait (limping)"
    ],
    answer: "Genu valgum (knock-knees)",
    source: "Slight knock-knees are considered a normal developmental variation until around age 8."
  }
    ],

    "Cardiorespiratory & Neurological": [
      {
    id: 2053,
    question: "When auscultating a child for a heart murmur, what is the ideal patient position for the best acoustic results?",
    options: [
      "Supine at a 0° flat angle",
      "Supine at a 30° incline",
      "Sitting at a 90° angle",
      "Prone position"
    ],
    answer: "Supine at a 30° incline",
    source: "Auscultation is most effective at a 30-degree incline on bare skin."
  },
      {
    id: 2054,
    question: "An 'Innocent Still's Murmur' is most typically heard at which location?",
    options: [
      "Right upper sternal border at the second intercostal space",
      "Above the clavicles in the supraclavicular notch region",
      "Over the carotid arteries at the anterolateral neck region",
      "Left side of the sternum in line with the nipple"
    ],
    answer: "Left side of the sternum in line with the nipple",
    source: "Still's murmur is localized to the left sternal border and often heard more clearly when the child is sitting or prone."
  },
      {
    id: 2055,
    question: "High-pitched musical or whistling sounds heard during expiration that indicate airway narrowing are classified as:",
    options: [
      "Crackles",
      "Bronchial sounds",
      "Wheezes",
      "Rhonchi"
    ],
    answer: "Wheezes",
    source: "Wheezing is a high-pitched whistling sound common in asthma and bronchiolitis."
  },
      {
    id: 2056,
    question: "Which test is used to assess cerebellar function and balance in a school-aged child?",
    options: [
      "Romberg test",
      "Cover-uncover test",
      "Babinski test",
      "Red reflex test"
    ],
    answer: "Romberg test",
    source: "The Romberg test, along with tandem walking and hopping, assesses cerebellar function."
  }
    ]
  },

  // =================================================================
  // MODULE 4 — DOCUMENTATION & HEALTH RECORDS
  // =================================================================
  "Module 4: Documentation & Health Records": {

    "SOAP Format": [
      {
    id: 2057,
    question: "In the SOAP documentation format, where should the NP record measurable data such as vital signs and physical exam findings?",
    options: [
      "Assessment",
      "Objective",
      "Plan",
      "Subjective"
    ],
    answer: "Objective",
    source: "Objective data includes measurable findings like vitals, PE data, and lab results."
  },
      {
    id: 2058,
    question: "Which section of the SOAP note contains the working diagnosis and the rationale behind the chosen differential diagnoses?",
    options: [
      "Plan",
      "Objective",
      "Assessment",
      "Subjective"
    ],
    answer: "Assessment",
    source: "The Assessment section includes interpretations, diagnoses with rationale, and anticipated complications."
  },
      {
    id: 2059,
    question: "In the SOAP documentation format, where should the provider record the patient's verbatim information and symptoms?",
    options: [
      "Objective",
      "Subjective",
      "Assessment",
      "Plan"
    ],
    answer: "Subjective",
    source: "The Subjective section includes information provided by the patient, such as history and symptoms."
  },
      {
    id: 2060,
    question: "The 'Assessment' portion of a SOAP note is used to document:",
    options: [
      "Diagnoses with rationale and prioritized differential diagnoses",
      "The therapeutic treatment plan and pharmacological interventions ordered",
      "Verbatim patient complaints and self-reported symptom descriptions",
      "A comprehensive list of all patient allergies, medications, and supplements"
    ],
    answer: "Diagnoses with rationale and prioritized differential diagnoses",
    source: "The Assessment section includes the provider's interpretations, diagnoses with rationale, and prioritized differentials."
  },
      {
    id: 2061,
    question: "Which of the following is included in the 'Plan' section of the health record?",
    options: [
      "Pertinent positives and negatives identified during the health history interview",
      "The clinical rationale for the chosen primary diagnosis and differential diagnoses",
      "Diagnostic tests ordered, patient education, and referrals",
      "Physical examination findings and clinical observations by the provider"
    ],
    answer: "Diagnostic tests ordered, patient education, and referrals",
    source: "The Plan includes diagnostics, therapeutics, education, referrals, and target dates for reevaluation."
  },
      {
    id: 2062,
    question: "When using the OLD CARTS mnemonic for subjective data collection, what does the 'C' represent?",
    options: [
      "Cultural beliefs assessment",
      "Chief Concern or Complaint",
      "Chronic Illness history review",
      "Character of the symptom"
    ],
    answer: "Character of the symptom",
    source: "In the OLD CARTS mnemonic, 'C' stands for Character (e.g., quality of the symptom)."
  },
      {
    id: 2063,
    question: "A 'Working Diagnosis' is best defined as:",
    options: [
      "A preliminary diagnosis made while awaiting laboratory results or treatment response",
      "A final and definitive diagnosis confirmed solely by laboratory testing and diagnostic imaging",
      "A hereditary or familial diagnosis identified primarily through genogram analysis of family history",
      "A diagnosis formulated exclusively through rapid System 1 intuitive pattern recognition thinking"
    ],
    answer: "A preliminary diagnosis made while awaiting laboratory results or treatment response",
    source: "A working diagnosis is preliminary and used when a diagnosis cannot yet be fully confirmed."
  },
      {
    id: 2064,
    question: "In the SOAP format, where should the NP document a patient's educational needs and any referrals initiated?",
    options: [
      "Objective",
      "Assessment",
      "Subjective",
      "Plan"
    ],
    answer: "Plan",
    source: "The Plan section is reserved for diagnostic tests, treatments, education, and referrals."
  },
      {
    id: 2065,
    question: "When assessing Sarah, a 52-year-old with chest pressure, the NP notes 'pallor and mild JVD.' This information should be recorded in which section of the SOAP note?",
    options: [
      "Objective",
      "Subjective",
      "Assessment",
      "Plan"
    ],
    answer: "Objective",
    source: "Physical findings observed by the provider are recorded in the Objective section."
  }
    ],

    "Genograms & Family History": [
      {
    id: 2066,
    question: "When documenting a family history in a genogram, which symbol is used to represent the 'Proband' (the patient being evaluated)?",
    options: [
      "An arrow pointing toward the symbol",
      "A square containing a cross (deceased male)",
      "A shaded circle indicating affection",
      "A double-lined square (consanguinity marker)"
    ],
    answer: "An arrow pointing toward the symbol",
    source: "The proband is indicated by an arrow pointing to their symbol."
  },
      {
    id: 2067,
    question: "In a standard medical genogram, a square containing a cross indicates:",
    options: [
      "A sibling relationship within the pedigree",
      "A deceased male family member",
      "A marriage or partnership union line",
      "The patient (Proband) being evaluated"
    ],
    answer: "A deceased male family member",
    source: "A square represents a male, and the cross represents a deceased individual."
  },
      {
    id: 2068,
    question: "In a standard medical genogram, which symbol is used to represent the 'Proband' (the patient currently being evaluated)?",
    options: [
      "A double-lined square indicating consanguinity in the family",
      "A square or circle containing a cross indicating a deceased member",
      "A shaded circle indicating an affected individual",
      "An arrow pointing toward the individual's symbol"
    ],
    answer: "An arrow pointing toward the individual's symbol",
    source: "The proband is indicated by an arrow pointing to the symbol for that individual."
  },
      {
    id: 2069,
    question: "When constructing a genogram, a square symbol represents a male family member, while a circle represents a female. How is a deceased family member indicated?",
    options: [
      "The symbol is shaded in black",
      "A cross inside the symbol",
      "A horizontal line through the symbol",
      "A dotted line connecting the symbol"
    ],
    answer: "A cross inside the symbol",
    source: "Deceased individuals are marked with a cross symbol inside their genogram symbol."
  },
      {
    id: 2070,
    question: "In a pedigree, a horizontal line connecting two symbols (square and circle) typically represents:",
    options: [
      "A shared clinical diagnosis",
      "Descent from a common ancestor",
      "A marriage or union",
      "A sibling relationship"
    ],
    answer: "A marriage or union",
    source: "A horizontal line indicates a marriage or union."
  }
    ],

    "EHR & Clinical Tools": [
      {
    id: 2071,
    question: "Which of the following is considered a primary benefit of using Electronic Health Records (EHRs) compared to hand-written notes?",
    options: [
      "It systematically prevents all forms of cognitive and diagnostic error in clinical practice",
      "It significantly reduces the total time required for obtaining a comprehensive patient history",
      "It assigns risk stratification (low/medium/high) to guide clinical interventions",
      "It eliminates the need for a comprehensive physical examination during the encounter"
    ],
    answer: "It assigns risk stratification (low/medium/high) to guide clinical interventions",
    source: "EHRs facilitate risk stratification to help manage patient outcomes systematically."
  },
      {
    id: 2072,
    question: "A 78-year-old female patient presents with frailty and an antalgic gait. Which geriatric-specific assessment is most appropriate to evaluate her fall risk?",
    options: [
      "Timed Up-and-Go test",
      "Katz ADL Index score",
      "Mini-Mental State Exam",
      "Geriatric Depression Scale"
    ],
    answer: "Timed Up-and-Go test",
    source: "The Timed Up-and-Go test is a standard tool for assessing gait and fall risk in geriatric patients."
  },
      {
    id: 2073,
    question: "What is the 'gold standard' for determining if a pediatric provider has reached the correct pass-fail passing score for a certification exam using Subject Matter Experts?",
    options: [
      "Occam's Razor diagnostic principle",
      "DaRT Tool assessment framework",
      "VINDICATE differential model system",
      "Modified Angoff Procedure"
    ],
    answer: "Modified Angoff Procedure",
    source: "This nationally recognized method is used by Subject Matter Experts to set passing scores for professional certification."
  }
    ]
  }
};