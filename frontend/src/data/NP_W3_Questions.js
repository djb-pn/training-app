/**
 * NP_W3_Questions.js
 * Nurse Practitioner — Week 3 Practice Questions
 * Topic: Integumentary System & Lymphatic System (Ch. 12)
 *
 * Structure mirrors the training-app convention:
 *   export const NursePractitionerW3Questions = {
 *     "Module Title": {
 *       "Subcategory": [ { id, question, options, answer, source }, … ]
 *     }
 *   };
 *
 * QuestionEngine reads: id, question, options, answer (string | array), source
 *
 * 7-Module Structure:
 *   M1 = Integumentary Anatomy & Physiology        (10 questions)
 *   M2 = Pediatric Developmental Considerations     (10 questions)
 *   M3 = Geriatric Skin Considerations              (10 questions)
 *   M4 = Dark Skin Tone Assessment                  (10 questions)
 *   M5 = The Lymphatic System                       (15 questions)
 *   M6 = Physical Examination Techniques & History  (10 questions)
 *   M7 = Clinical Differentials & Pathologies       ( 5 questions)
 *
 * Answer-position distribution (A/B/C/D): 17 / 18 / 18 / 17  (balanced)
 */

export const NursePractitionerW3Questions = {

  // =================================================================
  // MODULE 1 — INTEGUMENTARY ANATOMY & PHYSIOLOGY
  // =================================================================
  "Module 1: Integumentary Anatomy & Physiology": {

    "Skin Development & Structure": [
      {
        id: 3001,
        question: "At which week of gestation does the skin begin to develop?",
        options: [
          "5th week",
          "8th week",
          "23rd week",
          "11th week"
        ],
        answer: "11th week",
        source: "The skin begins its development during the 11th week of gestation."
      },
      {
        id: 3002,
        question: "Which skin layer is avascular and serves as the outermost protective barrier?",
        options: [
          "Epidermis",
          "Dermis",
          "Subcutaneous tissue",
          "Hypodermis"
        ],
        answer: "Epidermis",
        source: "The epidermis is the outermost, avascular layer of the skin."
      },
      {
        id: 3003,
        question: "What are the five layers of the epidermis found on the palms and soles?",
        options: [
          "Corneum, Granulosum, Spinosum, Basale, Papilla",
          "Corneum, Lucidum, Granulosum, Spinosum, Basale",
          "Dermal, Epidermal, Subcutaneous, Basale, Corneum",
          "Sebum, Eccrine, Apocrine, Basale, Corneum"
        ],
        answer: "Corneum, Lucidum, Granulosum, Spinosum, Basale",
        source: "In areas of chronic friction, the layers from outside inward are the stratum corneum, lucidum, granulosum, spinosum, and basale."
      },
      {
        id: 3004,
        question: "Which layer contains the blood vessels and nerves that supply the epidermis with nutrition?",
        options: [
          "Stratum Corneum",
          "Hypodermis",
          "Dermis",
          "Stratum Basale"
        ],
        answer: "Dermis",
        source: "The dermis is richly vascular and supplies the epidermis with nutrition."
      },
      {
        id: 3005,
        question: "What is the primary function of subcutaneous tissue?",
        options: [
          "Vitamin D synthesis",
          "Cushioning against trauma and insulation",
          "Protection against microbial invasion",
          "Production of melanin"
        ],
        answer: "Cushioning against trauma and insulation",
        source: "The subcutaneous layer cushions the body against trauma and insulates it to maintain body temperature."
      }
    ],

    "Glands & Secretions": [
      {
        id: 3006,
        question: "Which glands are responsible for temperature control and begin functioning shortly after birth?",
        options: [
          "Apocrine glands",
          "Eccrine glands",
          "Sebaceous glands",
          "Ceruminous glands"
        ],
        answer: "Eccrine glands",
        source: "Eccrine glands help maintain fluid/electrolyte balance and temperature control, beginning to function by 2 to 18 days of age."
      },
      {
        id: 3007,
        question: "Why do apocrine glands only become active at puberty?",
        options: [
          "They are stimulated by hormonal changes during puberty.",
          "They require adult thickness of the epidermis to function.",
          "They are responsible for childhood sebum production.",
          "They only develop in response to chronic UV exposure."
        ],
        answer: "They are stimulated by hormonal changes during puberty.",
        source: "Apocrine glands do not become active until puberty, secreting fluid in response to heat or emotional stress."
      },
      {
        id: 3008,
        question: "What lipid substance do sebaceous glands produce to moisturize the skin?",
        options: [
          "Sweat",
          "Keratin",
          "Sebum",
          "Melanin"
        ],
        answer: "Sebum",
        source: "Sebaceous glands produce sebum, a lipid substance that moisturizes the skin and keeps hair from drying."
      },
      {
        id: 3009,
        question: "Where on the body are sebaceous glands completely absent?",
        options: [
          "Scalp and face",
          "Palms and soles",
          "Axilla and groin",
          "Trunk and extremities"
        ],
        answer: "Palms and soles",
        source: "Sebaceous glands are found everywhere on the body except the palms and soles."
      },
      {
        id: 3010,
        question: "What is the 'horny layer' of the epidermis called?",
        options: [
          "Stratum Lucidum",
          "Stratum Basale",
          "Stratum Spinosum",
          "Stratum Corneum"
        ],
        answer: "Stratum Corneum",
        source: "The stratum corneum is known as the horny layer."
      }
    ]
  },

  // =================================================================
  // MODULE 2 — PEDIATRIC DEVELOPMENTAL CONSIDERATIONS
  // =================================================================
  "Module 2: Pediatric Developmental Considerations": {

    "Neonatal Skin Properties": [
      {
        id: 3011,
        question: "Why is the skin of a neonate at a higher risk for absorbing harmful chemicals?",
        options: [
          "Apocrine glands are overactive in the first week of life.",
          "Neonates have a higher concentration of melanin.",
          "The skin has greater permeability and increased transcutaneous absorption.",
          "Because of the presence of lanugo."
        ],
        answer: "The skin has greater permeability and increased transcutaneous absorption.",
        source: "Newborn skin has greater permeability and increased transcutaneous absorption of potentially harmful chemicals."
      },
      {
        id: 3012,
        question: "When does the stratum corneum typically develop during gestation?",
        options: [
          "23rd to 25th week",
          "15th to 18th week",
          "38th to 40th week",
          "11th week"
        ],
        answer: "23rd to 25th week",
        source: "The stratum corneum does not develop until 23 to 25 weeks' gestation."
      },
      {
        id: 3013,
        question: "Why are infants more prone to blister formation than adults?",
        options: [
          "Lack of subcutaneous adipose tissue.",
          "High water content in the stratum basale.",
          "Immature eccrine gland function.",
          "Loose attachment between the epidermis and the dermis."
        ],
        answer: "Loose attachment between the epidermis and the dermis.",
        source: "A loose attachment between the epidermis and the dermis causes newborns to be more prone to blister formation."
      },
      {
        id: 3014,
        question: "At what age do melanin levels typically reach adult levels?",
        options: [
          "By adolescence",
          "By middle childhood",
          "By 2 years of age",
          "By 5 years of age"
        ],
        answer: "By adolescence",
        source: "Melanin reaches adult levels by adolescence."
      },
      {
        id: 3015,
        question: "Why may young children experience high fevers due to immature skin systems?",
        options: [
          "Their stratum corneum is too thick to allow heat dissipation.",
          "They sweat minimally and cannot regulate body temperature as efficiently.",
          "They have an overdeveloped hypodermis.",
          "Their sebaceous glands produce too much sebum."
        ],
        answer: "They sweat minimally and cannot regulate body temperature as efficiently.",
        source: "Infants and very young children sweat minimally and are unable to regulate body temperature as efficiently as older children or adults."
      }
    ],

    "Gland Development & Hair": [
      {
        id: 3016,
        question: "What skin finding is caused by sebum presence in the first few weeks of life?",
        options: [
          "Erythema toxicum",
          "Mongolian spots",
          "Café-au-lait spots",
          "Milia"
        ],
        answer: "Milia",
        source: "Sebum presence in newborns produces milia (sebaceous cysts on the nose and chin) and seborrhea."
      },
      {
        id: 3017,
        question: "When do sebaceous glands typically stop producing sebum before reactivating at puberty?",
        options: [
          "Between 1 and 3 months of age",
          "Between 6 and 12 months of age",
          "By the 2nd year of life",
          "They never stop producing sebum."
        ],
        answer: "Between 6 and 12 months of age",
        source: "Sebaceous glands stop producing sebum between 6 and 12 months of age and reactivate at puberty."
      },
      {
        id: 3018,
        question: "Which glands are responsible for body odor when they react with skin bacteria?",
        options: [
          "Apocrine glands",
          "Ceruminous glands",
          "Adrenal glands",
          "Eccrine glands"
        ],
        answer: "Apocrine glands",
        source: "Bacteria on the skin react with fluid produced by apocrine glands to produce body odor."
      },
      {
        id: 3019,
        question: "What is the soft, downy hair often seen covering a newborn's body called?",
        options: [
          "Terminal hair",
          "Vellus hair",
          "Hirsutism",
          "Lanugo"
        ],
        answer: "Lanugo",
        source: "Lanugo is the soft, downy hair covering the body, sometimes indicative of malnutrition if seen in older patients."
      },
      {
        id: 3020,
        question: "Why does newborn skin often appear red or ruddy?",
        options: [
          "Localized inflammation from birth trauma.",
          "Early activation of the sympathetic nervous system.",
          "A thin epidermis allows superficial blood vessels to be visible.",
          "High levels of constitutive pigmentation."
        ],
        answer: "A thin epidermis allows superficial blood vessels to be visible.",
        source: "The thin epidermis allows superficial blood vessels to be visible, causing the skin to appear red to ruddy."
      }
    ]
  },

  // =================================================================
  // MODULE 3 — GERIATRIC SKIN CONSIDERATIONS
  // =================================================================
  "Module 3: Geriatric Skin Considerations": {

    "Aging Skin Changes": [
      {
        id: 3021,
        question: "What predictable change in elderly skin leads to increased fragility?",
        options: [
          "Thickening of the dermis.",
          "Decreased collagen, elastin, and vascular thinning.",
          "Increased cell turnover rate.",
          "Increased sebaceous gland activity."
        ],
        answer: "Decreased collagen, elastin, and vascular thinning.",
        source: "Decreased collagen, elastin, and vascular thinning of the epidermis and dermis make the skin more fragile."
      },
      {
        id: 3022,
        question: "Why is skin turgor an unreliable indicator of hydration in older adults?",
        options: [
          "Chronic edema is present in all geriatric patients.",
          "Older adults have increased sweat gland activity.",
          "Increased subcutaneous fat masks the finding.",
          "Loss of elasticity in the skin occurs with aging regardless of hydration."
        ],
        answer: "Loss of elasticity in the skin occurs with aging regardless of hydration.",
        source: "Turgor does not correlate with hydration status in older adults due to loss of elasticity."
      },
      {
        id: 3023,
        question: "What is the result of reduced sebaceous gland activity in the aging population?",
        options: [
          "Oily skin and acne.",
          "Faster wound healing.",
          "Dry skin and itching (pruritus).",
          "Increased risk of skin cancer."
        ],
        answer: "Dry skin and itching (pruritus).",
        source: "Dry skin is common due to reduced sebaceous and sweat gland activity, often resulting in itching."
      },
      {
        id: 3024,
        question: "Which geriatric skin finding is a common sign of venous insufficiency?",
        options: [
          "Stasis dermatitis",
          "Seborrheic keratosis",
          "Solar lentigines",
          "Actinic keratosis"
        ],
        answer: "Stasis dermatitis",
        source: "Stasis dermatitis is a chronic inflammatory skin condition caused by venous insufficiency."
      },
      {
        id: 3025,
        question: "What are 'solar lentigines' commonly known as?",
        options: [
          "Liver spots or age spots",
          "Skin tags",
          "Cherry angiomas",
          "Warts"
        ],
        answer: "Liver spots or age spots",
        source: "Solar lentigines are common age-related pigment changes."
      }
    ],

    "Geriatric Lesions & Wound Healing": [
      {
        id: 3026,
        question: "What is the clinical significance of actinic keratosis in older adults?",
        options: [
          "It is a fungal infection of the scalp.",
          "It is a vascular malformation present from birth.",
          "It involves atypical squamous cells that can progress to squamous cell carcinoma.",
          "It consists of benign waxy lesions with a 'stuck-on' appearance."
        ],
        answer: "It involves atypical squamous cells that can progress to squamous cell carcinoma.",
        source: "Actinic keratosis involves atypical squamous cells confined to the upper layers of the epidermis and can be a precursor to cancer."
      },
      {
        id: 3027,
        question: "Why do elderly patients experience delayed wound healing?",
        options: [
          "Overactive immune response.",
          "Slower cell turnover and reduced blood supply.",
          "Faster cell turnover.",
          "Increased elasticity of the dermis."
        ],
        answer: "Slower cell turnover and reduced blood supply.",
        source: "Aging skin has a slower cell turnover and reduced blood supply, contributing to delayed wound healing."
      },
      {
        id: 3028,
        question: "What assessment is a critical component of the skin exam in an older adult to ensure safety?",
        options: [
          "Hair texture assessment.",
          "Capillary refill timing.",
          "Nail length measurement.",
          "Abuse and neglect screening."
        ],
        answer: "Abuse and neglect screening.",
        source: "Abuse screening is a critical component of the skin exam in older adults."
      },
      {
        id: 3029,
        question: "Which benign lesion is described as having a waxy, 'stuck-on' appearance?",
        options: [
          "Basal cell carcinoma",
          "Cherry angioma",
          "Seborrheic keratosis",
          "Actinic keratosis"
        ],
        answer: "Seborrheic keratosis",
        source: "Seborrheic keratosis is characterized by a waxy, well-circumscribed, 'stuck-on' appearance."
      },
      {
        id: 3030,
        question: "What causes the graying of hair as adults age?",
        options: [
          "Overuse of chemical hair dyes.",
          "Decreased number of melanocytes.",
          "Nutritional deficiencies in Vitamin D.",
          "Increased testosterone levels."
        ],
        answer: "Decreased number of melanocytes.",
        source: "Gray hair results from a decrease in melanocytes."
      }
    ]
  },

  // =================================================================
  // MODULE 4 — DARK SKIN TONE ASSESSMENT
  // =================================================================
  "Module 4: Dark Skin Tone Assessment": {

    "Fitzpatrick Scale & Detecting Findings": [
      {
        id: 3031,
        question: "What is the Fitzpatrick scale used to classify?",
        options: [
          "The stages of a pressure injury.",
          "The severity of atopic dermatitis.",
          "The degree of skin cancer metastasis.",
          "Skin response to ultraviolet (UV) radiation."
        ],
        answer: "Skin response to ultraviolet (UV) radiation.",
        source: "The Fitzpatrick scale describes skin response to UV radiation from type I to VI."
      },
      {
        id: 3032,
        question: "Why is erythema (redness) often difficult to detect in patients with dark skin?",
        options: [
          "Melanin masks the red hue and may present as inflammatory hyperpigmentation.",
          "The dermis is too thick for blood to be visible.",
          "Dark-skinned patients do not experience inflammation.",
          "Dark skin has fewer cutaneous capillaries."
        ],
        answer: "Melanin masks the red hue and may present as inflammatory hyperpigmentation.",
        source: "Because of the quantity of melanin, inflammatory hyperpigmentation (not erythema) may be present."
      },
      {
        id: 3033,
        question: "Where should a nurse look for cyanosis in a patient with a high amount of melanin?",
        options: [
          "The trunk and back.",
          "The forearms and lower legs.",
          "The palms, soles, conjunctiva, and oral mucous membranes.",
          "The cheeks and bridge of the nose."
        ],
        answer: "The palms, soles, conjunctiva, and oral mucous membranes.",
        source: "Look where the epidermis is thin and vascular supply is abundant, such as the oral mucosa, lips, palms, and soles."
      },
      {
        id: 3034,
        question: "How does pallor typically manifest in very dark-skinned individuals?",
        options: [
          "As a deep purple undertone.",
          "As a yellow-brown or ash-gray color in mucous membranes.",
          "As a bright red flush.",
          "It is not detectable in dark skin."
        ],
        answer: "As a yellow-brown or ash-gray color in mucous membranes.",
        source: "Brown skin appears yellow-brown, and very dark brown or black skin appears ash-gray during pallor."
      },
      {
        id: 3035,
        question: "What is the most accurate location to assess for jaundice in a patient of color?",
        options: [
          "The hard palate and the sclera closest to the cornea.",
          "The skin of the abdomen.",
          "The nail beds.",
          "The palms and soles."
        ],
        answer: "The hard palate and the sclera closest to the cornea.",
        source: "Inspect the oral mucosa (hard palate) and the sclera closest to the cornea for jaundice."
      }
    ],

    "Hyperpigmentation, Equipment & Pressure Injuries": [
      {
        id: 3036,
        question: "What is 'inflammatory hyperpigmentation' and why does it occur in dark skin?",
        options: [
          "It is a permanent loss of skin pigment.",
          "It is a result of excessive sun exposure in infancy.",
          "It is a bacterial infection caused by Staphylococcus.",
          "It is the skin becoming darker than surrounding tissue in response to injury or inflammation."
        ],
        answer: "It is the skin becoming darker than surrounding tissue in response to injury or inflammation.",
        source: "In dark skin, injury or inflammation may occur as hyperpigmentation (darker than surrounding skin) rather than redness."
      },
      {
        id: 3037,
        question: "Why should fluorescent lighting be avoided during a skin assessment?",
        options: [
          "It hides the presence of skin lesions.",
          "It produces a bluish tint that can alter the appearance of skin color.",
          "It makes the skin appear too bright.",
          "It is too hot for the patient."
        ],
        answer: "It produces a bluish tint that can alter the appearance of skin color.",
        source: "Fluorescent lighting should be avoided because it gives off a bluish tint and alters true skin color."
      },
      {
        id: 3038,
        question: "What percentage of dark-skinned individuals naturally have melanonychia (nail streaks)?",
        options: [
          "90%",
          "25%",
          "75%",
          "10%"
        ],
        answer: "90%",
        source: "Melanonychia is a normal variant in up to 90% of black people."
      },
      {
        id: 3039,
        question: "How does a Stage 1 pressure injury appear on dark skin compared to light skin?",
        options: [
          "Dark skin will always show a purple or maroon color.",
          "Light skin appears gray, while dark skin appears white.",
          "Dark skin may show no visible sign or appear darker, taut, or indurated.",
          "Both appear identically as non-blanchable redness."
        ],
        answer: "Dark skin may show no visible sign or appear darker, taut, or indurated.",
        source: "In dark skin, no visible sign may be present, or the skin might present as darker than surrounding tissue and may be taut/indurated."
      },
      {
        id: 3040,
        question: "Why are pulse oximeters potentially less accurate for patients with dark skin?",
        options: [
          "They require fluorescent lighting to function.",
          "They cannot clip onto the finger properly.",
          "They only measure melanin, not hemoglobin.",
          "They may overestimate oxygen saturation levels in people of color."
        ],
        answer: "They may overestimate oxygen saturation levels in people of color.",
        source: "Studies have noted that pulse oximeter readings overestimate oxygen saturation levels in people of color."
      }
    ]
  },

  // =================================================================
  // MODULE 5 — THE LYMPHATIC SYSTEM
  // =================================================================
  "Module 5: The Lymphatic System": {

    "Lymph Node Function & Palpation": [
      {
        id: 3041,
        question: "What are the primary functions of lymph nodes?",
        options: [
          "Pumping blood to the extremities.",
          "Regulation of insulin levels.",
          "Phagocytosis and the production of lymphocytes and antibodies.",
          "Digestion of fats in the stomach."
        ],
        answer: "Phagocytosis and the production of lymphocytes and antibodies.",
        source: "Lymph nodes play a role in phagocytosis and the production of lymphocytes and antibodies."
      },
      {
        id: 3042,
        question: "What is the correct sequence for palpating head and neck lymph nodes?",
        options: [
          "Preauricular/Postauricular, Submaxillary/Submental, Occipital, Cervical, Supraclavicular.",
          "Supraclavicular, Cervical, Occipital, Submental, Auricular.",
          "Inguinal, Axillary, Cervical, Preauricular.",
          "Tonsillar, Submental, Occipital, Preauricular."
        ],
        answer: "Preauricular/Postauricular, Submaxillary/Submental, Occipital, Cervical, Supraclavicular.",
        source: "The sequence is pre/postauricular, submaxillary/submental, occipital, cervical, and then supraclavicular nodes."
      },
      {
        id: 3043,
        question: "Where are the preauricular lymph nodes located and what do they drain?",
        options: [
          "Under the chin; drain the floor of the mouth.",
          "Anterior to the tragus; drain the eyelids, conjunctivae, temporal region, and pinnae.",
          "Behind the ear; drain the posterior scalp.",
          "In the posterior triangle; drain the thyroid gland."
        ],
        answer: "Anterior to the tragus; drain the eyelids, conjunctivae, temporal region, and pinnae.",
        source: "Preauricular nodes are anterior to the tragus and drain the eyelids, conjunctivae, temporal region, and pinnae."
      },
      {
        id: 3044,
        question: "What does enlargement of the left supraclavicular node usually indicate?",
        options: [
          "Localized ear infection.",
          "Normal response to a recent immunization.",
          "Inflammation of the thyroid gland.",
          "Malignancy in the abdomen or thorax."
        ],
        answer: "Malignancy in the abdomen or thorax.",
        source: "Enlargement of a left supraclavicular node often indicates a malignancy in the abdomen or thorax."
      },
      {
        id: 3045,
        question: "What are 'shotty' lymph nodes and in what age group are they common?",
        options: [
          "Large, fixed nodes found in infants.",
          "Small, firm, rubbery, non-tender nodes common in children 3 to 10 years of age.",
          "Warm, tender nodes found only in adolescents.",
          "Nodes that pulsate with the carotid artery."
        ],
        answer: "Small, firm, rubbery, non-tender nodes common in children 3 to 10 years of age.",
        source: "'Shotty' nodes are small, firm, rubbery, non-tender, and mobile; they are normal in children aged 3 to 10."
      }
    ],

    "Node Size, Characteristics & Pathology": [
      {
        id: 3046,
        question: "How large can a cervical lymph node be in a child before it is considered abnormal?",
        options: [
          "0.5 cm",
          "1.0 cm",
          "1.5 cm",
          "2.0 cm"
        ],
        answer: "2.0 cm",
        source: "Anterior cervical lymph nodes as large as 2 cm are considered normal in children."
      },
      {
        id: 3047,
        question: "How is lymphadenopathy defined?",
        options: [
          "Lymph node tissue measuring greater than 1 cm in diameter, with some exceptions.",
          "A fungal infection of the lymph vessels.",
          "The absence of lymph nodes in the neck.",
          "The production of too many antibodies."
        ],
        answer: "Lymph node tissue measuring greater than 1 cm in diameter, with some exceptions.",
        source: "Lymphadenopathy is defined as lymph node tissue measuring greater than 1 cm in diameter."
      },
      {
        id: 3048,
        question: "Which nodes are found along the anterior margin of the trapezius muscle?",
        options: [
          "Submaxillary nodes",
          "Deep cervical nodes",
          "Posterior cervical nodes",
          "Superficial cervical nodes"
        ],
        answer: "Posterior cervical nodes",
        source: "Posterior cervical nodes are in the posterior triangle along the anterior margin of the trapezius."
      },
      {
        id: 3049,
        question: "Which clinical characteristics of a lymph node suggest malignancy?",
        options: [
          "Hard, fixed to underlying tissue, and not painful.",
          "Soft, non-tender, and disappears with pressure.",
          "Firm, warm, tender, and mobile.",
          "Small, rubbery, and highly mobile."
        ],
        answer: "Hard, fixed to underlying tissue, and not painful.",
        source: "Malignant nodes are typically hard, fixed to underlying tissue, and not painful."
      },
      {
        id: 3050,
        question: "At what age is lymphoid tissue typically twice the size of an adult's?",
        options: [
          "Birth",
          "10 years",
          "18 years",
          "2 years"
        ],
        answer: "10 years",
        source: "By age 10, lymph tissue is at its largest, approximately two times adult size."
      }
    ],

    "Lymphoid Organs & Drainage": [
      {
        id: 3051,
        question: "What is the function of the thymus in early childhood?",
        options: [
          "Filtration of red blood cells.",
          "Drainage of the submental nodes.",
          "Production of sebum.",
          "Essential to the development of protective immune function and T-cell production."
        ],
        answer: "Essential to the development of protective immune function and T-cell production.",
        source: "The thymus is essential to the development of immune function and is a site for T-cell production in infancy/childhood."
      },
      {
        id: 3052,
        question: "Where are Peyer patches located?",
        options: [
          "In the superior mediastinum.",
          "Along the occipital ridge.",
          "On the mucosa of the small intestine.",
          "Deep to the sternocleidomastoid muscle."
        ],
        answer: "On the mucosa of the small intestine.",
        source: "Peyer patches are small, raised areas of lymph tissue on the mucosa of the small intestine."
      },
      {
        id: 3053,
        question: "What do the tonsillar nodes drain?",
        options: [
          "Tongue, floor of mouth, and oropharynx.",
          "Scalp and head.",
          "Larynx and trachea.",
          "Eyelids and conjunctivae."
        ],
        answer: "Tongue, floor of mouth, and oropharynx.",
        source: "Tonsillar nodes drain the tongue, floor of mouth, and oropharynx."
      },
      {
        id: 3054,
        question: "Which nodes should be assessed in the posterior triangle of the neck?",
        options: [
          "Submental nodes",
          "Posterior cervical nodes",
          "Preauricular nodes",
          "Submaxillary nodes"
        ],
        answer: "Posterior cervical nodes",
        source: "Posterior cervical nodes are located in the posterior triangle."
      },
      {
        id: 3055,
        question: "What are the normal findings for a palpable lymph node in a child?",
        options: [
          "Fixed, hard, and warm.",
          "Tender, erythematous, and immobile.",
          "Mobile, non-tender, and not warm to the touch.",
          "Large (>3 cm) and pulsating."
        ],
        answer: "Mobile, non-tender, and not warm to the touch.",
        source: "Normal lymph nodes are mobile, non-tender, and not warm to the touch."
      }
    ]
  },

  // =================================================================
  // MODULE 6 — PHYSICAL EXAMINATION TECHNIQUES & HISTORY
  // =================================================================
  "Module 6: Physical Examination Techniques & History": {

    "History & Mnemonics": [
      {
        id: 3056,
        question: "What mnemonic is used to obtain a complete history of a skin complaint?",
        options: [
          "PQRST",
          "FAST",
          "SAMPLE",
          "OLDCARTS"
        ],
        answer: "OLDCARTS",
        source: "Use the OLDCARTS framework (Onset, Location, Duration, Characteristics, Aggravating factors, Relieving factors, Treatment, Severity)."
      },
      {
        id: 3057,
        question: "Which part of the hand is best used to assess skin temperature?",
        options: [
          "Palmar surface",
          "Dorsal surface",
          "Ulnar edge",
          "Fingertips"
        ],
        answer: "Dorsal surface",
        source: "Use the dorsal surface of your hands or fingers to evaluate temperature."
      },
      {
        id: 3058,
        question: "What is 'Russell's Sign' and what might it indicate?",
        options: [
          "Abrasion or scarring on the dominant hand fingers, indicating bulimia.",
          "A targetoid lesion indicating Lyme disease.",
          "Blue discoloration of the sclera indicating jaundice.",
          "Scalp scaling indicating tinea capitis."
        ],
        answer: "Abrasion or scarring on the dominant hand fingers, indicating bulimia.",
        source: "Russell's sign involves abrasions on the index/middle finger of the dominant hand and may indicate bulimia."
      },
      {
        id: 3059,
        question: "What does the ABCDE criteria screen for in dermatology?",
        options: [
          "Appearance, Blanching, Consistency, Density, Edema.",
          "Age, Birthmark, Cyst, Dermis, Epidermis.",
          "Asymmetry, Border, Color, Diameter, Evolution — used to screen for melanoma.",
          "Airway, Breathing, Circulation, Disability, Exposure."
        ],
        answer: "Asymmetry, Border, Color, Diameter, Evolution — used to screen for melanoma.",
        source: "The ABCDE criteria screen for melanoma: Asymmetry, Border (irregular), Color (variation), Diameter (>6 mm), and Evolution (change)."
      },
      {
        id: 3060,
        question: "What is the proper technique for palpating the trachea in a child?",
        options: [
          "Palpate only while the child is crying.",
          "Use thumb and forefinger on either side and slide them gently down.",
          "The trachea cannot be palpated in children.",
          "Place a thumb on the thyroid and press firmly."
        ],
        answer: "Use thumb and forefinger on either side and slide them gently down.",
        source: "Place thumb and forefinger on either side of the trachea and slowly/gently slide them down."
      }
    ],

    "Lesion Assessment & Differentiation": [
      {
        id: 3061,
        question: "Why is it important to ask a patient if a lesion has evolved or changed?",
        options: [
          "Patients always remember the exact date of onset.",
          "Change indicates the lesion is definitely benign.",
          "It helps determine if the patient has insurance.",
          "Evolution is a major red flag for skin cancer."
        ],
        answer: "Evolution is a major red flag for skin cancer.",
        source: "Change in a lesion (evolution) is critical; any growing or changing lesion should be biopsied."
      },
      {
        id: 3062,
        question: "How do you differentiate nits from dandruff?",
        options: [
          "Nits stick to the hair shaft; dandruff does not.",
          "Dandruff only occurs in the summer.",
          "Nits are always red; dandruff is white.",
          "Nits can be washed out with regular soap."
        ],
        answer: "Nits stick to the hair shaft; dandruff does not.",
        source: "Nits stick to the hair shaft; dandruff does not."
      },
      {
        id: 3063,
        question: "What is a 'bruit' and when should you auscultate the thyroid for it?",
        options: [
          "A clicking sound in the jaw.",
          "A type of skin lesion found on the scalp.",
          "The sound of air moving through a perforated septum.",
          "A vascular sound auscultated if the thyroid gland is enlarged."
        ],
        answer: "A vascular sound auscultated if the thyroid gland is enlarged.",
        source: "Auscultate the thyroid for a bruit if the gland is enlarged."
      },
      {
        id: 3064,
        question: "What is the difference between primary and secondary skin lesions?",
        options: [
          "Primary are internal; secondary are external.",
          "Primary develop from normal skin; secondary evolve from primary lesions (e.g., from scratching).",
          "Primary lesions are always painful; secondary are not.",
          "Primary are only found in adults; secondary in children."
        ],
        answer: "Primary develop from normal skin; secondary evolve from primary lesions (e.g., from scratching).",
        source: "Primary lesions develop from previously normal skin; secondary lesions evolve from primary ones."
      },
      {
        id: 3065,
        question: "What tool is used to measure the size of a lesion in centimeters?",
        options: [
          "Penlight",
          "Tape measure",
          "Centimeter ruler",
          "Magnifying glass"
        ],
        answer: "Centimeter ruler",
        source: "Use a centimeter ruler to get precise documentation of lesion sizes."
      }
    ]
  },

  // =================================================================
  // MODULE 7 — CLINICAL DIFFERENTIALS & PATHOLOGIES
  // =================================================================
  "Module 7: Clinical Differentials & Pathologies": {

    "Rashes & Dermatologic Conditions": [
      {
        id: 3066,
        question: "What is the hallmark sign of Lyme Disease?",
        options: [
          "Silvery scales on the elbows.",
          "Velvety patches in the axilla.",
          "Erythema migrans (bullseye rash).",
          "Koplik spots in the mouth."
        ],
        answer: "Erythema migrans (bullseye rash).",
        source: "Erythema migrans is the hallmark 'bullseye' rash of early localized Lyme disease."
      },
      {
        id: 3067,
        question: "A child presents with a 'slapped cheek' facial rash. What is the suspected diagnosis?",
        options: [
          "Fifth Disease (Erythema Infectiosum)",
          "Rosacea",
          "Scarlet Fever",
          "Atopic Dermatitis"
        ],
        answer: "Fifth Disease (Erythema Infectiosum)",
        source: "Patchy facial erythema with a 'slapped cheek' appearance is typical of Fifth Disease."
      },
      {
        id: 3068,
        question: "Which condition presents with silvery-white scales on extensor surfaces?",
        options: [
          "Tinea Corporis",
          "Pityriasis Rosea",
          "Eczema",
          "Psoriasis"
        ],
        answer: "Psoriasis",
        source: "Psoriasis is characterized by well-demarcated erythematous plaques with silvery-white scales."
      },
      {
        id: 3069,
        question: "What is a 'herald patch' and with which condition is it associated?",
        options: [
          "A cluster of vesicles in Herpes Simplex.",
          "A waxy lesion in Seborrheic Keratosis.",
          "An initial oval plaque followed by a 'Christmas tree' rash in Pityriasis Rosea.",
          "A target lesion in Lyme disease."
        ],
        answer: "An initial oval plaque followed by a 'Christmas tree' rash in Pityriasis Rosea.",
        source: "Pityriasis Rosea begins with a single larger 'herald patch' before a wider eruption."
      },
      {
        id: 3070,
        question: "What is Acanthosis Nigricans and what is its most common metabolic association?",
        options: [
          "Hair loss associated with thyroid disease.",
          "Thickened, velvety, darkened skin associated with insulin resistance.",
          "Red scales on the face indicating rosacea.",
          "Fungal infection of the nails associated with diabetes."
        ],
        answer: "Thickened, velvety, darkened skin associated with insulin resistance.",
        source: "Acanthosis nigricans is a marker of underlying pathology, most specifically insulin resistance."
      }
    ]
  }
};