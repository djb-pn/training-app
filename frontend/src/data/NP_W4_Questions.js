/**
 * NP_W4_Questions.js
 * Nurse Practitioner — Week 4 Practice Questions
 * Topic: HEENT — Head, Eyes, Ears, Nose & Oral Cavity Assessment
 *
 * Structure mirrors the training-app convention:
 *   export const NursePractitionerW4Questions = {
 *     "Module Title": {
 *       "Subcategory": [ { id, question, options, answer, source }, … ]
 *     }
 *   };
 *
 * QuestionEngine reads: id, question, options, answer (string | array), source
 *
 * 5-Module Structure:
 *   M1 = Anatomy, Physiology & Development           (10 questions)
 *   M2 = Physical Examination Techniques              (10 questions)
 *   M3 = Clinical Findings & Pathologies              (10 questions)
 *   M4 = Life Span Variations (Pregnant/Adult/Geri)   (10 questions)
 *   M5 = Comprehensive Review & Mixed Topics          (12 questions)
 *
 * Answer-position distribution (A/B/C/D): 13 / 13 / 13 / 13  (balanced)
 */

export const NursePractitionerW4Questions = {

  // =================================================================
  // MODULE 1 — ANATOMY, PHYSIOLOGY & DEVELOPMENT
  // =================================================================
  "Module 1: Anatomy, Physiology & Development": {

    "Fontanels, Sinuses & Cranial Development": [
      {
        id: 4001,
        question: "At what age does the anterior fontanel typically close in a developing infant?",
        options: [
          "12 to 18 months",
          "2 months",
          "24 months",
          "6 months"
        ],
        answer: "12 to 18 months",
        source: "The anterior fontanel typically closes between 12 and 18 months of age."
      },
      {
        id: 4002,
        question: "Which paranasal sinus is present at birth but develops rapidly between ages 6 and 8 years?",
        options: [
          "Frontal",
          "Ethmoid",
          "Maxillary",
          "Sphenoid"
        ],
        answer: "Ethmoid",
        source: "The ethmoid sinus is present at birth and undergoes rapid development between ages 6 and 8."
      },
      {
        id: 4003,
        question: "Until what age are infants considered obligate nose breathers?",
        options: [
          "2 months",
          "12 months",
          "4 months",
          "6 months"
        ],
        answer: "4 months",
        source: "Infants are obligate nose breathers until approximately 4 months of age."
      },
      {
        id: 4004,
        question: "How does the Eustachian tube in an infant differ from that of an adult?",
        options: [
          "It is shorter, wider, and more horizontal.",
          "It is longer and more vertical.",
          "It is longer and more horizontal.",
          "It is shorter and more vertical."
        ],
        answer: "It is shorter, wider, and more horizontal.",
        source: "The infant Eustachian tube is shorter, wider, and more horizontally positioned, predisposing to otitis media."
      },
      {
        id: 4005,
        question: "Which cranial nerve mediates visual acuity and peripheral vision?",
        options: [
          "CN IV",
          "CN II",
          "CN I",
          "CN III"
        ],
        answer: "CN II",
        source: "Cranial nerve II (Optic) is responsible for visual acuity and peripheral vision."
      }
    ],

    "Thyroid, Fontanels & Growth": [
      {
        id: 4006,
        question: "The thyroid gland typically increases in size by approximately 1 gram per year until it reaches adult size at what age?",
        options: [
          "18 years",
          "10 years",
          "15 years",
          "12 years"
        ],
        answer: "15 years",
        source: "The thyroid gland grows about 1 gram per year, reaching adult size around age 15."
      },
      {
        id: 4007,
        question: "The posterior fontanel should be assessed in infants up to what age?",
        options: [
          "2 months",
          "1 month",
          "6 months",
          "4 months"
        ],
        answer: "2 months",
        source: "The posterior fontanel typically closes by approximately 2 months."
      },
      {
        id: 4008,
        question: "In terms of cephalocaudal development, head circumference is typically greater than chest circumference until what age?",
        options: [
          "2 years",
          "4 years",
          "1 year",
          "6 months"
        ],
        answer: "2 years",
        source: "Head circumference exceeds chest circumference until approximately age 2."
      },
      {
        id: 4009,
        question: "Which structure is responsible for the increased nasal drainage seen in children when crying?",
        options: [
          "Nasopharynx",
          "Inferior meatus",
          "Superior meatus",
          "Middle meatus"
        ],
        answer: "Inferior meatus",
        source: "The nasolacrimal duct drains into the inferior meatus, which is why crying increases nasal drainage."
      },
      {
        id: 4010,
        question: "Accommodation and convergence of the eyes should be established in a child by:",
        options: [
          "12 months",
          "3 years",
          "18 to 24 months",
          "6 months"
        ],
        answer: "18 to 24 months",
        source: "Accommodation and convergence are typically established between 18 and 24 months."
      }
    ]
  },

  // =================================================================
  // MODULE 2 — PHYSICAL EXAMINATION TECHNIQUES
  // =================================================================
  "Module 2: Physical Examination Techniques": {

    "Eye & Vision Tests": [
      {
        id: 4011,
        question: "To perform the Hirschberg test, what is the examiner assessing?",
        options: [
          "Eye movement in six cardinal fields",
          "Symmetrical corneal light reflex",
          "Pupillary response to light",
          "Distance visual acuity"
        ],
        answer: "Symmetrical corneal light reflex",
        source: "The Hirschberg test evaluates symmetry of the corneal light reflex to screen for strabismus."
      },
      {
        id: 4012,
        question: "To pass a Snellen visual acuity test, a 5-year-old child must read how many letters on a line correctly?",
        options: [
          "3 out of 5",
          "5 out of 5",
          "4 out of 6",
          "2 out of 6"
        ],
        answer: "4 out of 6",
        source: "A child must read 4 out of 6 letters correctly on a line to pass that line of the Snellen chart."
      },
      {
        id: 4013,
        question: "When performing an ophthalmoscopic exam on a child, which structure is examined last because it is sensitive to light?",
        options: [
          "Retinal vessels",
          "Optic disc",
          "Macula",
          "Fovea centralis"
        ],
        answer: "Macula",
        source: "The macula is examined last during ophthalmoscopy because the bright light causes discomfort and pupil constriction."
      },
      {
        id: 4014,
        question: "What is the distance a child should stand from a Snellen chart during a vision screening?",
        options: [
          "15 feet",
          "20 feet",
          "5 feet",
          "10 feet"
        ],
        answer: "10 feet",
        source: "Children are typically screened at 10 feet using an appropriate Snellen chart."
      }
    ],

    "Ear, Hearing & Lymph Node Examination": [
      {
        id: 4015,
        question: "When examining the ear of a child aged 3 years or younger, the pinna should be pulled:",
        options: [
          "Straight back",
          "Upward and backward",
          "Downward and forward",
          "Downward, backward, and outward"
        ],
        answer: "Downward, backward, and outward",
        source: "For children 3 and under, the pinna is pulled downward, backward, and outward to straighten the ear canal."
      },
      {
        id: 4016,
        question: "Which test is specifically used to assess the mobility of the tympanic membrane?",
        options: [
          "Whisper test",
          "Rinne test",
          "Pneumatic otoscopy",
          "Weber test"
        ],
        answer: "Pneumatic otoscopy",
        source: "Pneumatic otoscopy assesses tympanic membrane mobility by applying air pressure."
      },
      {
        id: 4017,
        question: "What is the correct sequence for palpating the lymph nodes of the head and neck?",
        options: [
          "Front-to-back sequence beginning with preauricular",
          "Medial to lateral sequence",
          "Inferior to superior sequence",
          "Occipital to supraclavicular"
        ],
        answer: "Front-to-back sequence beginning with preauricular",
        source: "Lymph nodes are palpated in a front-to-back sequence starting with the preauricular nodes."
      },
      {
        id: 4018,
        question: "Which screening tool is most effective for hearing in a child aged 3 years or older who can cooperate?",
        options: [
          "Otoacoustic emission",
          "Acoustic blink reflex",
          "Moro reflex",
          "Whisper test"
        ],
        answer: "Whisper test",
        source: "The whisper test is effective for cooperative children aged 3 and older."
      },
      {
        id: 4019,
        question: "A 'cracked pot' sound elicited by percussion of the skull in a child is known as:",
        options: [
          "Torticollis",
          "Macewen sign",
          "Bossing",
          "Chvostek's sign"
        ],
        answer: "Macewen sign",
        source: "Macewen sign is a 'cracked pot' sound on skull percussion, associated with increased intracranial pressure."
      },
      {
        id: 4020,
        question: "During the Rinne test, a patient with conductive hearing loss will experience:",
        options: [
          "Lateralization to the midline.",
          "Lateralization to the unaffected ear.",
          "Air conduction being heard longer than bone conduction.",
          "Bone conduction being heard longer than air conduction."
        ],
        answer: "Bone conduction being heard longer than air conduction.",
        source: "In conductive hearing loss, bone conduction is heard longer than air conduction (negative Rinne)."
      }
    ]
  },

  // =================================================================
  // MODULE 3 — CLINICAL FINDINGS & PATHOLOGIES
  // =================================================================
  "Module 3: Clinical Findings & Pathologies": {

    "Oral & Pharyngeal Findings": [
      {
        id: 4021,
        question: "A 'strawberry tongue' is a classic finding associated with which conditions?",
        options: [
          "Herpes simplex and glossitis",
          "Psoriasis and dental caries",
          "Allergic rhinitis and asthma",
          "Streptococcal scarlet fever and Kawasaki disease"
        ],
        answer: "Streptococcal scarlet fever and Kawasaki disease",
        source: "Strawberry tongue is classically seen in streptococcal scarlet fever and Kawasaki disease."
      },
      {
        id: 4022,
        question: "The presence of 'Koplik's spots' on the buccal mucosa is pathognomonic for:",
        options: [
          "Measles",
          "Scarlet fever",
          "Mumps",
          "Kawasaki disease"
        ],
        answer: "Measles",
        source: "Koplik's spots are white lesions on the buccal mucosa that are pathognomonic for measles."
      },
      {
        id: 4023,
        question: "'Cobblestoning' of the posterior pharynx is often seen with:",
        options: [
          "Diphtheria",
          "Allergic rhinitis",
          "Herpangina",
          "Streptococcal pharyngitis"
        ],
        answer: "Allergic rhinitis",
        source: "Cobblestoning of the posterior pharynx is a hallmark of chronic allergic rhinitis from postnasal drainage."
      }
    ],

    "Nasal & Sinus Findings": [
      {
        id: 4024,
        question: "Boggy, pale, or bluish nasal mucosa typically indicates:",
        options: [
          "Sinusitis",
          "Upper respiratory infection",
          "Foreign body obstruction",
          "Allergic rhinitis"
        ],
        answer: "Allergic rhinitis",
        source: "Boggy, pale, or bluish nasal mucosa is characteristic of allergic rhinitis."
      },
      {
        id: 4025,
        question: "A horizontal crease across the lower third of the nose in a child is caused by:",
        options: [
          "Frequent upward rubbing (allergic salute)",
          "Congenital deformity",
          "Facial trauma",
          "Chronic sinusitis"
        ],
        answer: "Frequent upward rubbing (allergic salute)",
        source: "The 'allergic salute' — repeated upward rubbing of the nose — creates a horizontal nasal crease."
      }
    ],

    "Ophthalmologic & Neurologic Findings": [
      {
        id: 4026,
        question: "Which finding during an ophthalmoscopic exam suggests increased intracranial pressure?",
        options: [
          "Cotton wool bodies",
          "Papilledema",
          "Myelinated nerve fibers",
          "Glaucomatous cupping"
        ],
        answer: "Papilledema",
        source: "Papilledema (optic disc swelling) is a key indicator of increased intracranial pressure."
      },
      {
        id: 4027,
        question: "A white reflex in the pupil (leukocoria) is a concerning finding that may indicate:",
        options: [
          "Glaucoma",
          "Myopia",
          "Retinoblastoma",
          "Strabismus"
        ],
        answer: "Retinoblastoma",
        source: "Leukocoria (white pupillary reflex) is a red flag for retinoblastoma and requires urgent referral."
      },
      {
        id: 4028,
        question: "Ankyloglossia (tongue-tie) can specifically cause difficulty with:",
        options: [
          "Nasal breathing",
          "Nighttime snoring",
          "Swallowing solids",
          "Breastfeeding"
        ],
        answer: "Breastfeeding",
        source: "Ankyloglossia restricts tongue movement and commonly causes breastfeeding difficulties in infants."
      },
      {
        id: 4029,
        question: "Tonsils that are touching each other at the midline are graded as:",
        options: [
          "Grade 2+",
          "Grade 1+",
          "Grade 4+",
          "Grade 3+"
        ],
        answer: "Grade 4+",
        source: "Grade 4+ tonsils meet or 'kiss' at the midline."
      },
      {
        id: 4030,
        question: "Which condition is characterized by ptosis, miosis, and anhidrosis?",
        options: [
          "Horner syndrome",
          "Cushing's syndrome",
          "Hashimoto disease",
          "Graves' disease"
        ],
        answer: "Horner syndrome",
        source: "Horner syndrome is the classic triad of ptosis (drooping lid), miosis (constricted pupil), and anhidrosis (decreased sweating)."
      }
    ]
  },

  // =================================================================
  // MODULE 4 — LIFE SPAN VARIATIONS (PREGNANT, ADULT, GERIATRIC)
  // =================================================================
  "Module 4: Life Span Variations": {

    "Pregnancy-Related Changes": [
      {
        id: 4031,
        question: "In pregnant patients, hypertrophy of the gums and nasal stuffiness are typically results of:",
        options: [
          "Poor oral hygiene",
          "Hormonal and vascular changes",
          "Nutritional deficiencies",
          "Systemic infection"
        ],
        answer: "Hormonal and vascular changes",
        source: "Estrogen-driven vascular changes in pregnancy cause gingival hypertrophy and nasal congestion."
      },
      {
        id: 4032,
        question: "A 'mask of pregnancy' characterized by hyperpigmentation on the face is called:",
        options: [
          "Exophthalmos",
          "Plagiocephaly",
          "Chloasma",
          "Myxedema"
        ],
        answer: "Chloasma",
        source: "Chloasma (melasma) is the characteristic facial hyperpigmentation of pregnancy."
      }
    ],

    "Geriatric Changes": [
      {
        id: 4033,
        question: "Older adults often experience reduced salivary flow, a condition known as:",
        options: [
          "Parotitis",
          "Glossitis",
          "Epistaxis",
          "Xerostomia"
        ],
        answer: "Xerostomia",
        source: "Xerostomia (dry mouth) is common in older adults due to decreased salivary production and medication effects."
      },
      {
        id: 4034,
        question: "Which eye condition is a leading cause of central vision loss in older adults?",
        options: [
          "Macular degeneration",
          "Glaucoma",
          "Retinoblastoma",
          "Cataracts"
        ],
        answer: "Macular degeneration",
        source: "Age-related macular degeneration (AMD) is the leading cause of central vision loss in the elderly."
      },
      {
        id: 4035,
        question: "The presence of 'Arcus senilis' (lipid deposits in the periphery of the cornea) in an older adult is:",
        options: [
          "Indicative of corneal ulcers.",
          "A normal age-related variation.",
          "A sign of active infection.",
          "Pathognomonic for cataracts."
        ],
        answer: "A normal age-related variation.",
        source: "Arcus senilis is a benign, age-related finding caused by lipid deposition at the corneal periphery."
      },
      {
        id: 4036,
        question: "In terms of thyroid function in older adults, the rate of T4 production and degradation:",
        options: [
          "Stops completely by age 70.",
          "Remains unchanged.",
          "Gradually decreases.",
          "Increases significantly."
        ],
        answer: "Gradually decreases.",
        source: "Both T4 production and degradation gradually decline with age."
      },
      {
        id: 4037,
        question: "Presbycusis is a term used to describe:",
        options: [
          "Chronic vertigo in the elderly.",
          "Conductive hearing loss due to cerumen.",
          "Hardening of the tympanic membrane.",
          "Age-related sensorineural hearing loss."
        ],
        answer: "Age-related sensorineural hearing loss.",
        source: "Presbycusis is progressive, bilateral sensorineural hearing loss associated with aging."
      },
      {
        id: 4038,
        question: "Which of the following is a 'red flag' for headaches in older adults (age 50+)?",
        options: [
          "New onset or progressive headache.",
          "History of tension headaches.",
          "Bilateral presentation.",
          "Visual prodromes."
        ],
        answer: "New onset or progressive headache.",
        source: "New-onset or progressive headache after age 50 warrants urgent evaluation for secondary causes such as temporal arteritis or malignancy."
      },
      {
        id: 4039,
        question: "In the elderly, the thyroid gland may become more:",
        options: [
          "Enlarged and vascular.",
          "Fibrotic and gritty.",
          "Smooth and non-palpable.",
          "Spongy and soft."
        ],
        answer: "Fibrotic and gritty.",
        source: "With aging, the thyroid gland becomes more fibrotic with a gritty texture on palpation."
      },
      {
        id: 4040,
        question: "Sunken eyes and loose, wrinkled eyelids in an older adult are often related to:",
        options: [
          "Chronic hypertension.",
          "Untreated allergies.",
          "Nutritional status and loss of orbital fat.",
          "Increased intraocular pressure."
        ],
        answer: "Nutritional status and loss of orbital fat.",
        source: "Loss of subcutaneous orbital fat with aging leads to sunken eyes and loose periorbital skin."
      }
    ]
  },

  // =================================================================
  // MODULE 5 — COMPREHENSIVE REVIEW & MIXED TOPICS
  // =================================================================
  "Module 5: Comprehensive Review & Mixed Topics": {

    "Developmental & Screening Review": [
      {
        id: 4041,
        question: "What is the normal size range for a pupil in infants and children?",
        options: [
          "4 to 8 mm",
          "5 to 10 mm",
          "1 to 3 mm",
          "2 to 6 mm"
        ],
        answer: "2 to 6 mm",
        source: "Normal pupil size in infants and children ranges from 2 to 6 mm."
      },
      {
        id: 4042,
        question: "A left supraclavicular lymph node that is enlarged and hard often indicates:",
        options: [
          "Thyroiditis.",
          "Ear infection.",
          "Strep throat.",
          "Malignancy in the abdomen or thorax."
        ],
        answer: "Malignancy in the abdomen or thorax.",
        source: "An enlarged, hard left supraclavicular node (Virchow's node) is a sentinel sign of abdominal or thoracic malignancy."
      },
      {
        id: 4043,
        question: "Milia are common in newborns and are described as:",
        options: [
          "Small, white cysts that resolve spontaneously.",
          "Red, inflamed pustules.",
          "Scaly patches on the scalp.",
          "Dark, pigmented birthmarks."
        ],
        answer: "Small, white cysts that resolve spontaneously.",
        source: "Milia are benign, tiny white cysts caused by trapped keratin that resolve without treatment."
      }
    ],

    "Cranial Nerve & Neurologic Review": [
      {
        id: 4044,
        question: "Which cranial nerve is tested by asking the patient to smile and observing for symmetry?",
        options: [
          "CN XII",
          "CN VII",
          "CN V",
          "CN IX"
        ],
        answer: "CN VII",
        source: "CN VII (Facial) innervates the muscles of facial expression and is tested with smile symmetry."
      },
      {
        id: 4045,
        question: "'Shotty' lymph nodes in children are described as:",
        options: [
          "Large, tender, and fixed.",
          "Warm to the touch and painful.",
          "Small, firm, rubbery, and mobile.",
          "Soft, fluctuant, and erythematous."
        ],
        answer: "Small, firm, rubbery, and mobile.",
        source: "'Shotty' lymph nodes are small, firm, non-tender, and mobile — a normal variant in healthy children."
      },
      {
        id: 4046,
        question: "What is the recommended sequence for examining the HEENT system in a resistant toddler?",
        options: [
          "Start with the most invasive procedures.",
          "Only examine if the child is not crying.",
          "Ears and mouth first to get them over with.",
          "Defer oral and nasal exams until after heart and lung auscultation."
        ],
        answer: "Defer oral and nasal exams until after heart and lung auscultation.",
        source: "In resistant toddlers, save the most distressing exams (mouth, nose, ears) for last to preserve cooperation for auscultation."
      },
      {
        id: 4047,
        question: "Torticollis (wry neck) in an infant is typically the result of injury to which muscle?",
        options: [
          "Sternocleidomastoid",
          "Masseter",
          "Cricothyroid",
          "Trapezius"
        ],
        answer: "Sternocleidomastoid",
        source: "Congenital torticollis results from fibrosis or shortening of the sternocleidomastoid muscle."
      }
    ],

    "Pathology & Diagnosis Review": [
      {
        id: 4048,
        question: "Which finding on a tympanic membrane indicates blood in the middle ear due to trauma?",
        options: [
          "Pearly gray and translucent",
          "Bluish or purple color",
          "White, chalky patches",
          "Amber-colored bubbles"
        ],
        answer: "Bluish or purple color",
        source: "A bluish or purple tympanic membrane indicates hemotympanum (blood in the middle ear)."
      },
      {
        id: 4049,
        question: "At what age should a child have all 20 primary teeth?",
        options: [
          "5 years",
          "1 year",
          "3 years",
          "2 years"
        ],
        answer: "3 years",
        source: "All 20 primary (deciduous) teeth are typically present by age 3."
      },
      {
        id: 4050,
        question: "Exophthalmos (bulging eyes) is a common clinical manifestation of:",
        options: [
          "Cushing's syndrome",
          "Myxedema",
          "Hashimoto disease",
          "Graves' disease"
        ],
        answer: "Graves' disease",
        source: "Exophthalmos is caused by retro-orbital inflammation and is characteristic of Graves' disease (hyperthyroidism)."
      },
      {
        id: 4051,
        question: "In a child with allergic rhinitis, what quality of voice is often observed?",
        options: [
          "Nasal",
          "Stridorous",
          "High-pitched",
          "Hoarse"
        ],
        answer: "Nasal",
        source: "Chronic nasal congestion from allergic rhinitis produces a hyponasal voice quality."
      },
      {
        id: 4052,
        question: "Which cranial nerve is responsible for the movement of the tongue?",
        options: [
          "Vagus (CN X)",
          "Hypoglossal (CN XII)",
          "Abducens (CN VI)",
          "Glossopharyngeal (CN IX)"
        ],
        answer: "Hypoglossal (CN XII)",
        source: "CN XII (Hypoglossal) controls tongue movement and is tested by asking the patient to protrude the tongue."
      }
    ]
  }
};
