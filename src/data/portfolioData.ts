import {
  NavItem,
  InfoCardItem,
  EducationItem,
  SkillCategory,
  ExperienceItem,
  ProjectItem,
  FeaturedCertification,
  CertificationItem,
  AchievementItem,
  ContactLinkItem,
} from '../types/portfolio';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_DATA = {
  tag: '✦ Welcome to My Portfolio',
  name: 'Kalaiyarasan P.',
  subtitle: 'Biotechnology Student · Aspiring Biotechnologist',
  typedPhrases: [
    'Algal Biotechnology Researcher',
    'Clinical Research Enthusiast',
    'Environmental Biotechnologist',
    'Aspiring Biotechnologist',
    'Science-Driven Innovator',
  ],
  description:
    "Hello, I'm Kalaiyarasan — a Biotechnology student passionate about algal biotechnology, clinical research, environmental sustainability, and scientific innovation. I enjoy working on research-driven projects that address real-world challenges.",
  portraitUrl: '/hero-portrait.jpg',
  badge: '🎓 B.Tech Biotechnology',
};

export const ABOUT_PARAGRAPHS: string[] = [
  'I am a B.Tech Biotechnology student at Muthayammal Engineering College with a strong passion for biotechnology, scientific research, and innovation. My interests lie in algal biotechnology, clinical research, environmental sustainability, and healthcare applications.',
  'I am driven by the potential of biotechnology to solve real-world challenges and improve quality of life through sustainable and science-based solutions. I enjoy learning new technologies, exploring emerging research areas, and developing projects that contribute to both environmental and healthcare advancements.',
  'My goal is to build a career in biotechnology where I can contribute to research, innovation, and the development of impactful solutions that benefit society and support sustainable development.',
];

export const INTEREST_BADGES: string[] = [
  '🌿 Algal Biotechnology',
  '🏥 Clinical Research',
  '🌍 Environmental Sustainability',
  '🧬 Healthcare Applications',
  '🔬 Scientific Innovation',
];

export const INFO_CARDS: InfoCardItem[] = [
  {
    icon: '🎓',
    title: 'B.Tech Biotechnology',
    subtitle: 'Muthayammal Engineering College',
  },
  {
    icon: '📍',
    title: 'Tamil Nadu, India',
    subtitle: 'Available for research & internship',
  },
  {
    icon: '🧪',
    title: 'Research Focus',
    subtitle: 'Algal Biotechnology & Clinical Research',
  },
  {
    icon: '📅',
    title: 'Batch of 2027',
    subtitle: 'Currently pursuing undergraduate studies',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'B.Tech in Biotechnology',
    badge: 'Pursuing',
    school: 'Muthayammal Engineering College, Rasipuram, Tamil Nadu',
    meta: '2023 – 2027',
  },
  {
    degree: 'Higher Secondary Education — Class XII',
    school: 'Government Higher Secondary School, V. Kalathur, Tamil Nadu',
    meta: 'Completed 2023 · Percentage: 63%',
  },
  {
    degree: 'Secondary School Education — Class X',
    school: 'Government Higher Secondary School, V. Kalathur, Tamil Nadu',
    meta: 'Completed 2021',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '🧫 Laboratory Skills',
    skills: [
      'Media Preparation',
      'Algal Cultivation',
      'Biomass Analysis',
      'Sample Handling',
      'PCR & qPCR',
      'Gel Electrophoresis',
      'DNA/RNA Extraction',
      'Microscopy',
      'Spectrophotometry',
      'Chlorophyll Analysis',
    ],
  },
  {
    title: '📊 Research Skills',
    skills: [
      'Scientific Research',
      'Literature Review',
      'Scientific Writing',
      'Data Collection',
      'Data Interpretation',
      'Water Quality Analysis',
      'Research Documentation',
      'Report Preparation',
    ],
  },
  {
    title: '🏥 Clinical Research',
    skills: [
      'ICH-GCP Guidelines',
      'Clinical Trial Ethics',
      'Participant Safety',
      'Informed Consent',
      'Good Clinical Practice',
      'Diagnostic Workflows',
      'Biochemical Assays',
    ],
  },
  {
    title: '🤝 Professional Skills',
    skills: [
      'Communication',
      'Teamwork',
      'Leadership',
      'Problem Solving',
      'MS Office Suite',
      'Good Lab Practices',
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Algal Biotechnology Intern',
    year: '2025',
    company: 'Phycosol Ecotech Pvt. Ltd. — Tamil Nadu',
    bullets: [
      'Cultivated and maintained microalgae under controlled indoor conditions; prepared nutrient media and monitored cultures.',
      'Measured water quality parameters: pH, EC, TDS, Optical Density (OD); performed biomass and chlorophyll analysis.',
      'Contributed to CO₂ absorption, wastewater treatment, and biofertilizer application projects.',
      'Identified contamination sources including bacterial, fungal, and protozoan contamination.',
      'Maintained experimental logs, sample records, and documentation per Good Laboratory Practices (GLP).',
      'Prepared scientific reports, posters, and presentations.',
    ],
  },
  {
    role: 'Clinical Biochemistry Intern',
    year: '2025',
    company: 'Sun Laboratory — Tamil Nadu',
    bullets: [
      'Assisted with clinical biochemistry procedures, biological sample handling, and biochemical assays.',
      'Recorded, organized, and verified laboratory data; gained exposure to diagnostic workflows and quality control.',
      'Operated and handled laboratory instruments under supervision; performed routine blood and urine analysis.',
      'Followed laboratory safety protocols, hygiene standards, and Good Laboratory Practices (GLP).',
      'Maintained lab records and followed standard operating procedures (SOPs).',
      'Gained exposure to professional laboratory ethics and patient confidentiality.',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'hiv-vaccine',
    badge: '🧬 Featured Project',
    type: 'Bioinformatics | Immunoinformatics | Clinical Research',
    title: 'Computational Multi-Epitope HIV Vaccine Design & Clinical Research Analytics',
    objective:
      'Designed a computational multi-epitope HIV vaccine candidate using reverse vaccinology, immunoinformatics, molecular docking, and clinical research analytics — integrating cutting-edge bioinformatics tools with clinical trial simulation.',
    summaryLabel: '🔬 Summary:',
    summaryText:
      'The project involved HIV protein sequence retrieval, epitope prediction, vaccine construct design, phytochemical screening, molecular docking, and simulated clinical trial development with SAS-based data analysis.',
    expandLabel: 'View Key Highlights & Methods',
    highlights: [
      'HIV protein retrieval and sequence analysis from NCBI & BLAST',
      'Physicochemical characterization using ProtParam & PSIPRED',
      'Antigenicity and allergenicity prediction (VaxiJen, AllerTOP)',
      'B-cell, MHC-I, and MHC-II epitope identification via IEDB',
      'Multi-epitope vaccine construct design and population coverage analysis',
      'Phytochemical screening for bioactive compounds',
      'Molecular docking using PyRx; interaction visualization in PyMOL',
      'Clinical trial protocol design & informed consent documentation',
      'SAS-based clinical data analysis and reporting',
    ],
    tags: [
      'Reverse Vaccinology',
      'Epitope Prediction',
      'Molecular Docking',
      'Immunoinformatics',
      'Clinical Trial Design',
      'SAS Analytics',
    ],
    tools: [
      'NCBI',
      'BLAST',
      'ProtParam',
      'PSIPRED',
      'VaxiJen',
      'AllerTOP',
      'IEDB',
      'PyRx',
      'PyMOL',
      'SAS',
    ],
    linkUrl: 'https://damp-water-538.linkyhost.com',
    linkLabel: '🔗 View Project',
  },
  {
    id: 'algae-co2',
    type: 'Environmental Biotechnology Research',
    title: 'Indoor Algae-Based CO₂ Absorption System Using Chlorella vulgaris',
    objective:
      'To develop a sustainable indoor algae cultivation system capable of reducing CO₂ levels while producing algal biomass for environmental applications.',
    description:
      'This project investigates the potential of Chlorella vulgaris for indoor CO₂ absorption and biomass production using different nutrient media. The study evaluates algal growth, chlorophyll content, biomass accumulation, and the effectiveness of various culture media under indoor conditions.',
    summaryLabel: '📊 Key Results:',
    summaryText:
      'The natural-source medium demonstrated superior performance, achieving the highest biomass production and chlorophyll content compared to commercial and chemically formulated media — highlighting algae-based systems as cost-effective and sustainable solutions for indoor air quality improvement.',
    expandLabel: 'View Project Highlights',
    highlights: [
      'Developed a nature-derived nutrient medium for Chlorella vulgaris cultivation.',
      'Designed an indoor semi-open photobioreactor for biological CO₂ sequestration.',
      'Compared natural, commercial, and chemically formulated growth media.',
      'Cultivated microalgae under ambient conditions using natural sunlight.',
      'Performed physicochemical analysis (pH, EC, and TDS) to evaluate culture performance.',
      'Monitored algal growth using Optical Density (OD₆₂₀) measurements.',
      'Estimated biomass yield using the gravimetric method.',
      'Quantified chlorophyll (a & b) to evaluate photosynthetic efficiency.',
      'Demonstrated carbon biofixation through photosynthesis for sustainable CO₂ capture.',
      'Optimized cultivation performance through nutrient medium selection.',
      'Developed a low-cost and sustainable indoor carbon capture biotechnology system.',
      'Produced biomass with potential applications in biofertilizers, biofuels, and other bioproducts.',
      'Proposed a scalable biotechnology solution for improving indoor air quality and mitigating climate change.',
    ],
    tags: [
      'Algal Cultivation',
      'Biomass Analysis',
      'Chlorophyll Estimation',
      'Environmental Biotechnology',
      'CO₂ Sequestration',
      'Data Analysis',
    ],
  },
];

export const FEATURED_CERTIFICATION: FeaturedCertification = {
  label: 'Featured Workshop Certificate',
  title: 'Scientific Research Writing & Publication',
  organization: 'DNA Barcode Biotechnology',
  date: 'July 2026',
  description:
    'Workshop on "From Research Idea to Publication: A Practical Guide to Scientific Writing" focused on manuscript preparation, research communication, and academic publishing standards.',
  skills: [
    'Scientific Writing',
    'Manuscript Preparation',
    'Research Publication',
    'Academic Communication',
  ],
  imageUrl: '/cert-dna-barcode.png',
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    icon: '🏅',
    title: 'ICH Good Clinical Practice (GCP) E6(R3)',
    organization: 'The Global Health Network',
    skillsLabel: 'Skills gained',
    skillsList: [
      'Core principles of Good Clinical practice',
      'Ethical conduct of clinical trials',
      'Protection of clinical trial participants',
      'Roles and responsibilities of investigators and trial stakeholders',
      'Data integrity and reliable clinical trial results',
    ],
  },
  { icon: '🏅', title: 'Good Clinical Practice – NIDA (2025)' },
  { icon: '🏅', title: 'NPTEL – Experimental Biotechnology' },
  { icon: '🏅', title: 'NPTEL – Stress Management' },
  { icon: '🏅', title: 'Cancer Cell Culture – Sathyabama Institute' },
  { icon: '🏅', title: 'QA/QC & Pharmaceutical Production' },
  { icon: '🏅', title: 'RNA Isolation & qPCR Workshop' },
  { icon: '🏅', title: 'Dot ELISA Workshop – MEC' },
  { icon: '🏅', title: 'Clinical Trial Management' },
  {
    icon: '🏅',
    title: 'Scientific Research Writing & Publication – DNA Barcode Biotechnology (2026)',
    certificateImage: '/cert-dna-barcode.png',
  },
  { icon: '🏆', title: 'Smart India Hackathon – 2026' },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    year: '2026',
    icon: '🏆',
    title: 'Smart India Hackathon',
    organization: 'Government of India',
    description:
      "Participated in Smart India Hackathon 2026, one of India's largest innovation platforms, presenting a science-driven solution to a real-world challenge.",
  },
  {
    year: '2025',
    icon: '🎓',
    title: 'IDE Bootcamp — Varanasi',
    organization: 'Innovation & Design Entrepreneurship Bootcamp',
    description:
      'Selected to attend the prestigious IDE Bootcamp in Varanasi — a national-level program focused on innovation, design thinking, and entrepreneurship for students.',
  },
  {
    year: '2025',
    icon: '🌿',
    title: 'Algal Biotechnology Research',
    organization: 'Phycosol Ecotech Pvt. Ltd.',
    description:
      'Successfully completed research internship contributing to CO₂ absorption and wastewater treatment projects using microalgae — gaining hands-on environmental biotechnology expertise.',
  },
  {
    year: '2025',
    icon: '🔬',
    title: 'CO₂ Sequestration Research',
    organization: 'Muthayammal Engineering College',
    description:
      'Led an independent research project on indoor algae-based CO₂ absorption using Chlorella vulgaris, demonstrating that natural-source media outperforms commercial alternatives.',
  },
];

export const CONTACT_LINKS: ContactLinkItem[] = [
  {
    icon: '📧',
    label: 'Email',
    value: 'kalaiyarasan8504@gmail.com',
    href: 'mailto:kalaiyarasan8504@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 7339005728',
    href: 'tel:+917339005728',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/kalaiyarasan-p-biotech',
    href: 'https://www.linkedin.com/in/kalaiyarasan-p-biotech/',
    external: true,
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@kalai_king_55',
    href: 'https://www.instagram.com/kalai_king_55',
    external: true,
  },
];
