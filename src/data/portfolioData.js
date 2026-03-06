export const profiles = [
  { id: 1, name: 'Raksha', avatar: 'red' },
];

export const projectsData = [
  {
    id: 'krishimitra',
    title: 'KrishiMitra — AI Smart Agriculture Assistant',
    subtitle: 'An intelligent agriculture platform that helps farmers choose optimal crops using soil data, weather insights, and AI analysis.',
    description: 'The system also interprets agricultural documents and tracks government subsidy deadlines automatically.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Gemini AI'],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1592982537447-6f2127271b80?q=80&w=1600&auto=format&fit=crop',
    rating: '98% Match',
    year: '2025',
    duration: 'Full Stack',
    problem: 'Farmers struggle with understanding soil reports, lack access to accurate weather insights, miss subsidy deadlines, and have limited awareness of crop suitability.',
    solution: 'Integrated AI solution identifying best crops, extracting insights via OCR, tracking subsidies, and providing localized weather in multiple languages.',
    architecture: 'Frontend in React/Tailwind. Backend in FastAPI/MongoDB. Google Gemini API for AI, OpenWeather for data, Pytesseract for OCR.',
    techStackIcons: ['React', 'FastAPI', 'MongoDB', 'Python'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/KrishiMithra.git'
  },
  {
    id: 'smart-farming',
    title: 'Smart Farming System — AI Crop Disease Detection',
    subtitle: 'A deep-learning powered farming system that detects plant diseases from leaf images with high accuracy.',
    description: 'It provides treatment recommendations, weather alerts, and crop management insights through a unified dashboard.',
    tags: ['Python', 'TensorFlow', 'Flask', 'OpenCV'],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=1600&auto=format&fit=crop',
    rating: '95% Match',
    year: '2024',
    duration: 'Deep Learning',
    problem: 'Crop diseases cause significant losses. Farmers lack early identification tools and struggle with unpredictable weather impacts.',
    solution: 'Intelligent platform detecting 35+ crop diseases via uploaded photos, providing severity and treatment, plus real-time weather alerts.',
    architecture: 'Flask backend processing images via OpenCV and TensorFlow models. Bootstrap frontend. SQL database.',
    techStackIcons: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SmartFarming'
  },
  {
    id: 'safebite',
    title: 'SafeBiteAI — AI Food Safety & Health Monitoring',
    subtitle: 'An AI-based health monitoring system that analyzes food intake, symptoms, and medical reports to detect potential health risks.',
    description: 'It predicts harmful food combinations and provides personalized dietary insights using machine learning.',
    tags: ['React', 'FastAPI', 'MongoDB', 'TensorFlow'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1600&auto=format&fit=crop',
    rating: '97% Match',
    year: '2025',
    duration: 'AI/ML',
    problem: 'Health issues arise from unsafe food combinations and untracked medical conditions. People fail to identify food triggers.',
    solution: 'Assistant tracking food/symptoms, using AI to detect harmful patterns, monitoring health metrics, and reading medical reports via OCR.',
    architecture: 'React/Tailwind frontend. FastAPI backend with MongoDB. AI models via TensorFlow/Keras and OpenAI API.',
    techStackIcons: ['React', 'FastAPI', 'MongoDB', 'TensorFlow'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SafeBiteAI.git'
  },
  {
    id: 'skillfinder',
    title: 'SkillFinder — Learning Platform Discovery System',
    subtitle: 'A full-stack platform that helps users discover, compare, and enroll in online or offline learning platforms.',
    description: 'The system implements a well-structured relational database with secure authentication and normalized schema design.',
    tags: ['React', 'Node.js', 'Prisma', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
    rating: '92% Match',
    year: '2026',
    duration: 'Full Stack',
    problem: 'Students struggle finding right platforms due to fragmented info, lack of comparison, and difficult enrollment management.',
    solution: 'Centralized discovery platform with ratings, secure JWT enrollment, and normalized 3NF database design.',
    architecture: 'React frontend. Node.js/Express backend. SQLite database managed via Prisma ORM.',
    techStackIcons: ['React', 'Node.js', 'Prisma', 'SQLite'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/SkillFinder.git'
  },
  {
    id: 'ciphernet',
    title: 'CipherNet — End-to-End Encrypted Chat Application',
    subtitle: 'A real-time chat system that ensures secure communication using RSA for key exchange and AES for message encryption.',
    description: 'It includes a visual BTS encryption view that demonstrates how messages are protected during transmission.',
    tags: ['React', 'Node.js', 'Socket.io', 'Cryptography'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1614064641913-6b7140414c71?q=80&w=1600&auto=format&fit=crop',
    rating: '99% Match',
    year: '2025',
    duration: 'Security',
    problem: 'Centralized messaging systems expose user data to MITM attacks, data interception, and unauthorized access.',
    solution: 'Hybrid encryption model (RSA for keys, AES for messages) ensuring E2E security, plus educational BTS visualization of the encryption process.',
    architecture: 'React frontend. Node.js/Express backend communicating via Socket.io. node-forge for AES/RSA operations.',
    techStackIcons: ['React', 'Node.js', 'Socket.io', 'Security'],
    demoUrl: '#',
    githubUrl: 'https://github.com/rakshaagowda/CipherNet.git'
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

export const vision = "My goal is to leverage Artificial Intelligence, Full-Stack Development, and Secure Systems to build impactful technologies that solve real-world problems in areas such as healthcare, agriculture, and digital communication. I aspire to contribute to innovative technology companies and develop solutions that create meaningful social impact.";
