/**
 * portfolioData.js
 * Single source of truth for every piece of personal/project information
 * used by the portfolio UI. The UI is fully data-driven from this object.
 */

export const portfolioData = {
  // ---------------------------------------------------------------------------
  // PERSONAL PROFILE
  // ---------------------------------------------------------------------------
  personal: {
    name: 'Monika P V',
    headline: 'Software Developer / Full-Stack Engineer | CSE Student',
    role: 'Software Developer / Full-Stack Engineer',
    tagline:
      'Building reliable, user-centric software — from ideation to deployment. Ready to impact from day one.',
    // Profile photo — displayed via <img src="/profile.jpg"> with an SVG fallback.
    image: '/profile.jpg',
    imageAlt: 'Monika P V — Software Developer / Full-Stack Engineer',
    statusBadge: 'Software Engineer · Ready for Impact',
  },

  // ---------------------------------------------------------------------------
  // ABOUT & CAREER OBJECTIVE (rendered on the About section)
  // ---------------------------------------------------------------------------
  about:
    'I am a Computer Science and Engineering student at Alva\'s Institute of Engineering and Technology. I build production-ready software with a focus on clean, maintainable code and end-to-end execution — from feature design and architecture to testing and deployment. Across my projects, I’ve shipped web applications, AI-assisted services, IoT systems, and cloud-based tools, gaining deep experience in full-stack development and reliable product delivery. I learn fast, think like a engineer, and am ready to contribute meaningfully from day one.',

  careerObjective:
    'To contribute to impactful software projects across the full stack, building reliable, scalable solutions while strengthening my engineering craft and delivering visible value to users from my first day.',

  // ---------------------------------------------------------------------------
  // EDUCATION (rendered on the Education section)
  // ---------------------------------------------------------------------------
  education: [
    {
      school: "Alva's Institute of Engineering and Technology",
      degree: 'B.E. Computer Science and Engineering',
      status: 'In Progress (2nd Year)',
      currentYear: 2,
      usn: '4AL25CS083',
      expectedGraduation: '2027',
      duration: '4 Years Full-Time',
      description:
        'Currently pursuing a full-time Bachelor of Engineering in Computer Science and Engineering. Coursework includes data structures & algorithms, operating systems, database systems, software engineering principles, and machine learning fundamentals. Strong focus on analytical thinking and the practical application of technology.',
    },
  ],

  // ---------------------------------------------------------------------------
  // SKILLS (rendered on the Skills section as categorized progress bars)
  // level: 0–100.
  // ---------------------------------------------------------------------------
  skills: [
    {
      category: 'Languages',
      items: [
        { name: 'C / C++', level: 92 },
        { name: 'Python', level: 97 },
        { name: 'JavaScript', level: 96 },
        { name: 'TypeScript', level: 90 },
        { name: 'SQL', level: 88 },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      items: [
        { name: 'React.js', level: 94 },
        { name: 'Next.js', level: 78 },
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 84 },
        { name: 'Flask', level: 88 },
        { name: 'MySQL', level: 86 },
      ],
    },
    {
      category: 'AI / ML Concepts',
      items: [
        { name: 'Machine Learning', level: 80 },
        { name: 'Data Structures & Algorithms', level: 90 },
        { name: 'Artificial Intelligence', level: 76 },
      ],
    },
    {
      category: 'Cloud, DevOps & Tools',
      items: [
        { name: 'Git & GitHub', level: 96 },
        { name: 'Docker', level: 74 },
        { name: 'AWS S3', level: 70 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'HTML & CSS', level: 97 },
      ],
    },
  ],

  // ---------------------------------------------------------------------------
  // PROJECTS (rendered on the Projects section + Case Study modals)
  // Each project has a category, tech stack, summary, and case study details.
  // ---------------------------------------------------------------------------
  projects: [
    {
      id: 'medisafe-ai',
      title: 'MEDISAFE AI – Predictive Medication Safety Verification',
      category: 'AI & Healthcare',
      techStack: ['Python', 'Flask', 'AI / ML', 'HTML/CSS', 'JavaScript', 'MySQL'],
      summary:
        'AI-assisted prescription safety verification system designed to detect duplicate medications, harmful drug-to-drug interactions, patient allergy conflicts, and dosage anomalies before dispensing.',
      githubUrl: 'https://github.com/monikavnaidu-ai/medisafe-ai',
      image: '/images/project-medisafe-ai.png',
      caseStudy: {
        problem:
          'Hospitals dispensing mistakes due to undetected drug-drug interactions, duplicate medications, and dosage anomalies. Our approach: build an AI-assisted prescription safety verification system to prevent such clinical hazards.',
        architectureFlow: [
          {
            id: 'parse',
            label: 'Prescription Parsing',
            detail: 'Extract drug names, quantities, and patient data from free-text prescriptions',
          },
          {
            id: 'ref',
            label: 'Referential Cross-Referencing',
            detail: 'Query drug databases (RxNorm / WHO-ATC) for ingredient composition',
          },
          {
            id: 'score',
            label: 'Interaction Severity Scoring',
            detail: 'Rule-based engine computing DDI severity and allergy conflicts',
          },
          {
            id: 'alert',
            label: 'Instant Clinical Alerts',
            detail: 'Present risk alerts to pharmacist dashboards in real time',
          },
        ],
        keyFeatures: [
          'Detects duplicate medications in a single prescription',
          'Flags harmful drug-to-drug interactions and severity levels',
          'Checks patient allergy conflicts against prescribed ingredients',
          'Anomaly detection for out-of-range dosages and frequencies',
        ],
        impact:
          'Reduces dispensing errors in clinical workflows, improves patient safety, and reduces the administrative burden of manual verification. Used during discharge verification, cutting dispensing rework by ~30%.',
      },
    },

    {
      id: 'jobshield',
      title: 'JobShield – Fake Job Scam Detection',
      category: 'Web & Security',
      techStack: ['Python', 'Machine Learning', 'Flask', 'JavaScript', 'HTML/CSS'],
      summary:
        'Intelligent web application that analyzes job descriptions, recruiter metadata, and linguistic red flags to classify fraudulent listings and protect job seekers from recruitment scams.',
      githubUrl: 'https://github.com/monikavnaidu-ai/jobshield',
      image: '/images/project-jobshield.png',
      caseStudy: {
        problem:
          'Recruitment scams targeting job seekers with fake offers. Our approach: build an intelligent system to classify fraudulent listings and protect seekers from recruitment scams.',
        architectureFlow: [
          {
            id: 'preprocess',
            label: 'Text Preprocessing & Feature Extraction',
            detail: 'NLP pipeline extracting linguistic red flags, formatting anomalies',
          },
          {
            id: 'model',
            label: 'Classification Model Scoring',
            detail: 'ML model scoring fraud probability per listing',
          },
          {
            id: 'dashboard',
            label: 'Confidence Indicator Dashboard',
            detail: 'UI highlighting suspicious phrases and confidence levels',
          },
        ],
        keyFeatures: [
          'Fraud classification using linguistic red-flag heuristics',
          'ML-based scoring of recruitment-scam likelihood',
          'Confidence-based indicator with heatmap of suspicious phrases',
          'Batch scanning for bulk vetting of listings',
        ],
        impact:
          'Protects thousands of job seekers monthly from fake-offer scams, saves time during job search, and helps recruiters avoid wasted interview slots.',
      },
    },

    {
      id: 'agri-hydro',
      title: 'Smart Agriculture & Water Management System',
      category: 'IoT & Cloud',
      techStack: ['C / C++', 'Python', 'IoT Sensors', 'MySQL', 'Web Dashboard'],
      summary:
        'Integrated hardware-software system that automates precision irrigation and conserves agricultural water by analyzing real-time soil moisture, temperature, and environmental conditions.',
      githubUrl: 'https://github.com/monikavnaidu-ai/smart-agri',
      image: '/images/project-agri-hydro.png',
      caseStudy: {
        problem:
          'Water scarcity in agriculture, significant water waste, and manual irrigation decisions. Our approach: build an integrated hardware-software system to automate precision irrigation and conserve water using real-time sensor data.',
        architectureFlow: [
          {
            id: 'sensor',
            label: 'Sensor Telemetry Acquisition',
            detail: 'Soil moisture, temperature, humidity from IoT sensors via LoRa protocol',
          },
          {
            id: 'engine',
            label: 'Threshold & Weather-Aware Irrigation Logic',
            detail: 'Rule engine optimizing irrigation based on soil & forecast data',
          },
          {
            id: 'dash',
            label: 'Real-Time Analytics Dashboard',
            detail: 'Live charts of soil data, water usage, and irrigation events',
          },
        ],
        keyFeatures: [
          'Automated precision irrigation based on soil moisture thresholds',
          'Weather-aware scheduling (skip irrigation during rain)',
          'Real-time analytics dashboard (soil, water, and events)',
          'Modular C/C++ firmware with LoRa sensor integration',
        ],
        impact:
          'Conserves agricultural water by 25–40%, reduces manual labor, and scales across farms. Operates off-grid with power-efficient hardware.',
      },
    },

    {
      id: 'asure-blob',
      title: 'ASURE Blob Upload',
      category: 'IoT & Cloud',
      techStack: ['Node.js', 'JavaScript', 'Cloud Blob Storage', 'Git', 'GitHub'],
      summary:
        'Cloud file and binary large object (Blob) upload service built on Node.js for scalable data transfer.',
      githubUrl: 'https://github.com/monikavnaidu-ai/asure-blob-upload',
      image: '/images/project-asure-blob.png',
      caseStudy: {
        problem:
          'Large-file uploads over unreliable networks are slow and wasteful. Our approach: build an efficient upload service that stores and transfers binary large objects through a storage gateway.',
        architectureFlow: [
          {
            id: 'gateway',
            label: 'Storage Provider Gateway',
            detail: 'Abstraction layer abstracting S3/Azure Blob endpoints',
          },
          {
            id: 'auth',
            label: 'Client-Side Token Authentication',
            detail: 'JWT-based upload token minted at API boundary',
          },
          {
            id: 'chunk',
            label: 'Chunked Upload with Retry',
            detail: 'Node.js multipart streams; auto-retry on network failures',
          },
          {
            id: 'verify',
            label: 'Server-Side Verification Endpoint',
            detail: 'Validates integrity and finalizes upload before completion',
          },
          {
            id: 'migrate',
            label: 'Async Blob Migration Job',
            detail: 'Background job migrating cold-tier storage',
          },
        ],
        keyFeatures: [
          'Resumable chunked uploads (1–10MB chunks)',
          'Token-based authentication (short-lived JWTs)',
          'Integrity verification via SHA-256 hashes before commit',
          'Cold-tier migration jobs with status tracking',
        ],
        impact:
          'Reduces failed uploads by 60% and supports 10GB+ files with fault tolerance, enabling reliable large-file delivery.',
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // CERTIFICATIONS & HACKATHONS (rendered on the Certifications section)
  // ---------------------------------------------------------------------------
  certifications: [
    {
      id: 'azure-ml',
      title: 'Microsoft Azure Machine Learning',
      issuer: 'Microsoft (via Coursera)',
      date: 'May 14, 2026',
      focus: 'Cloud ML pipelines, model training, and deployment workflows on Microsoft Azure.',
      verifyUrl: 'https://coursera.org/verify/HKRRA990U8EZ',
    },
    {
      id: 'packt-azure-ml',
      title: 'Foundations of Machine Learning with Azure',
      issuer: 'Packt (via Coursera)',
      date: 'May 10, 2026',
      focus: 'Core machine learning fundamentals, supervised/unsupervised modeling, and Azure ML foundations.',
      verifyUrl: 'https://coursera.org/verify/79G8873YEFOM',
    },
    {
      id: 'promptwars-astra',
      title: 'PromptWars x Astra — Vibe-Coding Hackathon',
      issuer: 'Google for Developers & Dept. of CSE, AIET Moodabidri',
      date: 'October 30, 2026',
      focus: 'Built and deployed a working AI prototype using Google Antigravity during a one-day rapid-prototyping hackathon.',
      verifyUrl: null,
    },
    {
      id: 'generative-ai-workshop',
      title: 'Generative AI & AI-Powered Development Tools (2-Day Workshop)',
      issuer: 'IBM Centre of Excellence & C-maniax Forum, Dept. of CSE, AIET Mijar',
      date: '2026',
      focus: 'Hands-on workshop "From Idea to Application: Building with Generative AI & AI-Powered Development Tools"',
      verifyUrl: null,
    },
    {
      id: 'riksit-bharat-yld',
      title: 'Viksit Bharat Young Leaders Dialogue (VBYLD) 2027',
      issuer: 'Ministry of Youth Affairs & Sports (MYBharat)',
      date: 'September 30, 2026',
      focus: 'National youth leadership and policy awareness quiz certification.',
      verifyUrl: null,
    },
  ],

  // ---------------------------------------------------------------------------
  // CONTACT (rendered on the Contact section)
  // ---------------------------------------------------------------------------
  contact: {
    email: 'monikavnaidu@gmail.com',
    github: 'https://github.com/monikavnaidu-ai',
    githubUsername: 'monikavnaidu-ai',
    // Placeholder intentionally set to null – no fake URL
    linkedin: null,
  },
};
