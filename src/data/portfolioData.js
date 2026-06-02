export const profiles = [
  { id: 1, name: 'Raksha', avatar: 'red' },
];

export const projectsData = [
  {
    id: 'safebite',
    title: 'SafeBiteAI — AI Food Safety & Nutrition Analysis',
    subtitle: 'AI based food safety & nutrition analysis platform helping users make healthy dietary choices',
    description: 'SafeBiteAI is an intelligent health monitoring and nutrition platform that evaluates food safety risks, identifies allergens, and predicts dangerous food combinations using custom machine learning algorithms.',
    tags: ['React', 'FastAPI', 'MongoDB', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop',
    rating: '97% Match',
    year: '2025',
    duration: 'AI/ML & Health',
    problem: 'Health complications arise from unrecognized food triggers, dangerous combinations, and complex chemical ingredients that are difficult to track manually.',
    solution: 'Created an intelligent scanner that tracks nutrition intake, detects harmful additive combinations, and reads ingredients via high-accuracy OCR.',
    architecture: 'Frontend built with React. Backend built with FastAPI. Database powered by MongoDB. AI engines developed using TensorFlow and Keras.',
    techStackIcons: ['React', 'FastAPI', 'MongoDB', 'TensorFlow'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SafeBiteAI'
  },
  {
    id: 'skillfinder',
    title: 'SkillFinder — Learning Discovery Platform',
    subtitle: 'Full stack learning discovery platform using Prisma & SQLite',
    description: 'SkillFinder is a full-stack discovery application that simplifies program searching, enabling learners to search, compare, and enroll in online and offline courses.',
    tags: ['React', 'Node.js', 'Prisma', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    rating: '92% Match',
    year: '2026',
    duration: 'Full Stack',
    problem: 'Educational courses and bootcamps are scattered across fragmented platforms, making curriculum and fee comparison highly inefficient.',
    solution: 'Designed a centralized search portal implementing secure JWT-based enrollment mechanisms and database search procedures.',
    architecture: 'React user dashboard. Node.js backend. Relational SQLite database mapped using Prisma ORM with a normalized 3NF layout.',
    techStackIcons: ['React', 'Node.js', 'Prisma', 'SQLite'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SkillFinder.git'
  },
  {
    id: 'ciphernet',
    title: 'CipherNet — Hybrid Encrypted Chat',
    subtitle: 'Secure chat application implementing RSA + AES hybrid encryption',
    description: 'CipherNet is a real-time messaging application implementing E2E hybrid cryptography, coupled with a visual behind-the-scenes encryption inspector.',
    tags: ['React', 'Node.js', 'Socket.io', 'Cryptography'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1614064641913-6b7140414c71?q=80&w=1600&auto=format&fit=crop',
    rating: '99% Match',
    year: '2025',
    duration: 'Security & Chat',
    problem: 'Centralized messaging infrastructure exposes sensitive conversations to man-in-the-middle (MITM) attacks and packet snooping.',
    solution: 'Combined asymmetric RSA key exchange with symmetric AES message encryption, visualising key generation and byte transformations.',
    architecture: 'React frontend handling client-side node-forge cryptographic keys. Node.js socket server routing secure payloads dynamically.',
    techStackIcons: ['React', 'Node.js', 'Socket.io', 'Security'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/CipherNet.git'
  },
  {
    id: 'krishimitra',
    title: 'KrishiMithra — AI Smart Agriculture Assistant',
    subtitle: 'Document interpreter helping farmers bridge literacy gaps',
    description: 'KrishiMithra is an intelligent agricultural portal helping farmers understand crop cycles, interpret complicated legal/subsidy documents, and get real-time weather analytics.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Gemini AI'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1592982537447-6f2127271b80?q=80&w=1600&auto=format&fit=crop',
    rating: '98% Match',
    year: '2025',
    duration: 'Full Stack AI',
    problem: 'Illiteracy and language barriers prevent rural farmers from understanding crop telemetry, subsidy guidelines, and official paperwork.',
    solution: 'Built an OCR and Google Gemini-powered voice/text model simplifying legal jargon and predicting crop matches based on soil telemetry.',
    architecture: 'React client UI. FastAPI backend querying soil maps, retrieving OpenWeather metrics, and running Pytesseract OCR interpretation.',
    techStackIcons: ['React', 'FastAPI', 'MongoDB', 'Python'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/KrishiMithra.git'
  },
  {
    id: 'smart-farming',
    title: 'SmartFarming — IoT Crop Monitoring & Disease Detection',
    subtitle: 'IoT powered agriculture system for crop monitoring, irrigation automation and yield optimization',
    description: 'SmartFarming is a deep-learning driven IoT crop management system that detects plant leaf diseases, regulates soil humidity, and tracks environmental indicators.',
    tags: ['Python', 'TensorFlow', 'Flask', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1600&auto=format&fit=crop',
    rating: '95% Match',
    year: '2024',
    duration: 'IoT & DL',
    problem: 'Unchecked crop diseases and poorly timed irrigation routines trigger substantial water waste and crop failure rates.',
    solution: 'Integrated hardware soil telemetry and digital camera feeds with image processing neural nets that identify 35+ crop leaf diseases.',
    architecture: 'Embedded telemetry triggers. Flask server loading pre-trained TensorFlow CNN models for crop leaf analysis.',
    techStackIcons: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SmartFarming'
  },
  {
    id: 'aurafinance',
    title: 'AuraFinance — AI-Driven Financial Behavior Intelligence Platform',
    subtitle: 'Advanced personal finance platform combining unsupervised machine learning with modern web engineering',
    description: 'AuraFinance is an advanced personal finance platform that combines modern web engineering with unsupervised machine learning to classify spending personalities, audit transaction anomalies, forecast cash flows, and detect subscription leaks.',
    tags: ['React', 'Node.js', 'Express', 'scikit-learn'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop',
    rating: '96% Match',
    year: '2026',
    duration: 'AI & Finance',
    problem: 'Users struggle to categorize cross-account transactions, fail to recognize negative spending habits, and lack predictive budget insights to prevent cash flow dry-ups.',
    solution: 'Designed an intelligent financial tracker combining K-Means clustering, Isolation Forests, and Linear Regression to forecast future balances and flag leakage.',
    architecture: 'Express/Node backend parsing transactional datasets into numpy matrices and triggering scikit-learn models. React/Recharts renders the telemetry dashboard outputs.',
    techStackIcons: ['React', 'Node.js', 'Express', 'Chart.js'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/AuraFinance',
    mlOverview: {
      methodology: 'Following CRISP-DM, the machine learning system ingest and normalizes currency strings, parses dates to ordinal metrics, normalizes savings/allocations ratios, and formats anomalies vectors.',
      engines: [
        {
          name: 'Unsupervised Segmentation (K-Means)',
          detail: 'Groups users into 4 distinct spending personalities (Balanced Budgeter, Impulsive Spender, Disciplined Saver, Strategic Investor) based on Euclidean distance to centroids in N-dimensional space.'
        },
        {
          name: 'Outlier Detection (Isolation Forest)',
          detail: 'Analyzes individual transactions in real-time, assigning a contamination score. Transactions requiring fewer splits to isolate are tagged as anomalies and highlighted with bright Rose borders.'
        },
        {
          name: 'Future Projections (Linear & Ridge Regression)',
          detail: 'Fits a line of best fit over historical monthly expense aggregates to forecast future expenditure slopes and project best/worst case area chart bounds.'
        },
        {
          name: 'Subscription Leak Heuristics',
          detail: 'Runs interval search algorithms checking charge periodicities (e.g., Netflix every 30 days) to isolate recurring leaks and recommend cancel/keep actions.'
        }
      ]
    }
  },
  {
    id: 'presenceiq',
    title: 'PresenceIQ — IoT RFID Attendance System',
    subtitle: 'Intelligent attendance tracking system automating recording, analytics, and reporting',
    description: 'PresenceIQ is a modern, IoT-enabled contactless attendance tracking solution that replaces manual rolls and registers with an automated card scan mechanism. Utilizing a Raspberry Pi client coupled with a central Node.js/Express.js backend and a real-time dashboard, the system guarantees instant validation, session controls, and auditable records.',
    tags: ['IoT', 'React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop',
    rating: '94% Match',
    year: '2026',
    duration: 'IoT & Web',
    problem: 'Manual attendance logbooks cause physical check-in congestion at entrances, suffer from proxy attendance, and require manual compile labor.',
    solution: 'Built an IoT-integrated check-in network that instantly publishes student taps to a real-time admin control panel using Server-Sent Events.',
    architecture: 'Python client interfacing RC522 sensors. Node.js backend cluster using Server-Sent Events (SSE) and MongoDB data persistency.',
    techStackIcons: ['React', 'Node.js', 'MongoDB', 'IoT'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/PresenceIQ',
    architectureDetails: {
      flowDescription: 'Below is the step-by-step physical and digital telemetry process explaining how card scans propagate from hardware client reader to dashboard logs:',
      steps: [
        {
          title: 'The Client Node (Raspberry Pi)',
          detail: 'Runs a Python script continuously reading the RC522 RFID module. Decodes UIDs and matches local state structures.'
        },
        {
          title: 'Session Control State',
          detail: 'Tracks whether a session is "Active". Student scans are blocked unless faculty has swiped to open the registration window.'
        },
        {
          title: 'The Core Server API',
          detail: 'Raspberry Pi issues HTTP POST payloads containing card ID, name, role, and current subject session metrics.'
        },
        {
          title: 'Data Layer & Offline Resilience',
          detail: 'Node.js server logs scans to MongoDB via Mongoose. If MongoDB is offline, it auto-caches entries to local JSON files.'
        },
        {
          title: 'SSE Broadcasting',
          detail: 'Pushes real-time alerts instantly to open administrative dashboard windows using lightweight Server-Sent Events.'
        }
      ]
    }
  },
  {
    id: 'terraclaim',
    title: 'TerraClaim DSS — GIS Forest Rights System',
    subtitle: 'GIS-powered Forest Rights Act Decision Support System digitizing claims and WebGIS dashboards',
    description: 'TerraClaim is a desktop-grade spatial ledger and decision support dashboard for monitoring, evaluating, and reviewing land claims under the Forest Rights Act (FRA), 2006 (specifically for Karnataka). It allows administrators and Forest Rights Officers to visualize geolocated claims and run eligibility audits.',
    tags: ['React', 'GIS', 'PostgreSQL', 'Python'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
    rating: '97% Match',
    year: '2026',
    duration: 'GIS & WebGIS',
    problem: 'Forest rights claims processing is historically paper-intensive, lacks coordinate maps checking for overlaps, and delays government schemes checks.',
    solution: 'Designed a WebGIS spatial system matching digital boundary polygons, validating criteria via a Decision Support System (DSS), and generating Patta documents.',
    architecture: 'React interface. Leaflet mapping integration. GeoDjango API server querying spatial data stored in PostGIS database containers.',
    techStackIcons: ['React', 'Python', 'GIS', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/TerraClaim',
    keyFeatures: [
      {
        name: 'Interactive Spatial Map',
        detail: 'Uses Maplibre GL to display geolocated Individual (IFR), Community (CR), and Community Forest Resource (CFR) claims, color-coded by approval state.'
      },
      {
        name: 'Decision Support System (DSS)',
        detail: 'Runs applicant metadata against criteria rules to automatically check eligibility for 7 central/state schemes (PM-KISAN, MGNREGA, JJM, PMAY-G, PMFBY, NSTFDC, DAJGUA).'
      },
      {
        name: 'Workflow Review & Audit Logs',
        detail: 'Enables administrators to log verification milestones (Gram Sabha, SDLC, DLC reviews) and save updates straight to Postgres.'
      },
      {
        name: 'Digital Patta Generator',
        detail: 'Compiles official digital land title certificates with unique QR codes, official state seals, and signatures for granted titles.'
      },
      {
        name: 'Compliance Manual',
        detail: 'Embedded statutory manual explaining FRA legal conditions, verification processes, and checklists for officers.'
      }
    ]
  }
];

export const heroProject = projectsData[0];

export const techStackData = [
  {
    category: 'Object-Oriented Programming',
    description: 'Languages used to build structured and scalable applications.',
    skills: ['C++', 'Java', 'OOP Concepts'],
    iconCategory: 'oop',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'Web Development',
    description: 'Technologies used to design and build modern responsive web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    iconCategory: 'web',
    image: 'https://images.unsplash.com/photo-1627398240411-8ec5a5413008?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'AI / Machine Learning',
    description: 'Tools and libraries used to develop intelligent systems and data-driven models.',
    skills: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
    iconCategory: 'ai',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'Database & ORM',
    description: 'Technologies used for efficient data storage, retrieval, and management.',
    skills: ['SQLite', 'Prisma ORM', 'MongoDB'],
    iconCategory: 'db',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=600&auto=format&fit=crop'
  },
  {
    category: 'Backend Development',
    description: 'Server-side frameworks and runtimes.',
    skills: ['FastAPI', 'Flask', 'Node.js'],
    iconCategory: 'backend',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop'
  }
];

export const categories = [
  {
    id: 'projects',
    title: 'Featured Projects',
    type: 'projects', // Used to conditionally render different row styles
    items: projectsData
  },
  {
    id: 'experience',
    title: 'Experience',
    type: 'experience',
    items: [
      {
        id: 'e1',
        title: 'Intern',
        subtitle: 'Infineon Technologies',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop',
        rating: '2026',
        description: 'Intern in Software and Firmware Department.',
        roleInfo: 'Working directly within the Software and Firmware Department to gain practical industry exposure in embedded systems, semiconductor technologies, and modern software engineering practices.',
        architecture: 'Industry Experience',
        architectureLabel: 'Category:',
        tags: ['Embedded Systems', 'Firmware', 'Software Engineering'],
        tagsLabel: 'Focus Areas:'
      },
      {
        id: 'e2',
        title: 'B.Tech CSE',
        subtitle: 'JSS STU',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500&auto=format&fit=crop',
        rating: '2023-2027',
        description: 'Focusing on AI & ML, Full-Stack Web Development, Cybersecurity, and Database Systems.',
        courses: 'Computer Networks (CN), Database Management Systems (DBMS), Operating Systems (OS), Object-Oriented Programming (OOPs), Data Structures (DS), Analysis and Design of Algorithms (ADA), Data Communication (DC), Cryptography, Artificial Intelligence (AI), Machine Learning (ML).',
        architecture: 'Academic Degree',
        architectureLabel: 'Category:',
        tags: ['Academic', 'Core CS', 'Engineering'],
        tagsLabel: 'Focus Areas:'
      }
    ]
  }
];

export const journeyData = [
  {
    id: 1,
    year: '2021',
    title: 'SSLC',
    institution: 'KPCL High School, Jog Falls',
    description: 'Developed a strong interest in science and mathematics. Consistently performed at the top of the class. Also developed a passion for table tennis.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
    align: 'left'
  },
  {
    id: 2,
    year: '2023',
    title: 'PUC',
    institution: 'Sri Aurobindo PU College, Javalli',
    description: 'Specialization in PCMB. Strengthened analytical thinking and problem-solving abilities. Continued competing in state-level table tennis tournaments.',
    image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=800&auto=format&fit=crop',
    align: 'right'
  },
  {
    id: 3,
    year: '2023-27',
    title: 'B.Tech CSE',
    institution: 'JSS Science and Technology University',
    description: 'Focusing on AI & ML, Full-Stack Web Development, Cybersecurity, and Database Systems. Core subjects include: CN, DBMS, OS, OOPs, DS, ADA, DC, Cryptography, AI, and ML.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    align: 'left'
  },
  {
    id: 4,
    year: '2026',
    title: 'Intern',
    institution: 'Infineon Technologies',
    description: 'Intern in Software and Firmware Department.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    align: 'right'
  }
];

export const achievements = [
  'CM Karnataka Academic Excellence Award',
  'State Level Table Tennis Player'
];

export const vision = "As a learner interested in AI-ML, Full-Stack Development, and Secure Systems, my goal is to build software that solves real-world problems. Much like a finely tuned Formula 1 car, I believe great software requires a perfect balance of speed, a clean UI, and robust backend engineering to win the race.";
