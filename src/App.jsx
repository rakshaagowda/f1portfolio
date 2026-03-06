import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './index.css';

// Import Data
import { projectsData, techStackData, journeyData, achievements, vision } from './data/portfolioData';

// Icons
import {
  Flag, Radio, Trophy, Activity, ArrowRight, Gauge, Disc,
  Mail, Phone, ExternalLink, Github
} from 'lucide-react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinux
} from 'react-icons/fa';
import {
  SiJavascript, SiCplusplus, SiTailwindcss, SiMui, SiVite,
  SiExpress, SiFastapi, SiPrisma, SiMysql, SiMongodb, SiSqlite,
  SiPostman, SiNetlify, SiMarkdown, SiRender, SiJsonwebtokens
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechIconMap = {
  "C/C++": <SiCplusplus />, "Python": <FaPython />, "Java": <FaJava />, "JavaScript": <SiJavascript />, "Markdown": <SiMarkdown />,
  "ReactJS": <FaReact />, "HTML": <FaHtml5 />, "CSS": <FaCss3Alt />, "TailwindCSS": <SiTailwindcss />, "M-UI": <SiMui />, "Vite": <SiVite />,
  "Node.js": <FaNodeJs />, "Express.js": <SiExpress />, "FastAPI": <SiFastapi />, "Prisma ORM": <SiPrisma />,
  "MySQL": <SiMysql />, "MongoDB": <SiMongodb />, "SQLite": <SiSqlite />,
  "Git": <FaGitAlt />, "GitHub": <FaGithub />, "Postman": <SiPostman />, "Linux": <FaLinux />, "VS Code": <VscVscode />, "JWT": <SiJsonwebtokens />, "Netlify": <SiNetlify />, "Render": <SiRender />
};

const getTechIcon = (techName) => TechIconMap[techName] || <Disc size={14} />;

function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [lights, setLights] = useState([false, false, false, false, false]);
  const { scrollYProgress } = useScroll();

  // F1 Car Tracker driving down the line based on scroll
  // We'll map scrollYProgress from 0 to 1 to a top position percentage 
  // It won't be perfectly tied to exactly the section without complex offset logic,
  // but mapping overall scroll to say 10% -> 90% looks cool.
  const carY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Custom Cursor
  useEffect(() => {
    const cur = cursorRef.current;
    const rng = ringRef.current;
    if (!cur || !rng) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let frame;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; cur.style.left = mx + 'px'; cur.style.top = my + 'px'; };
    const lerp = () => {
      rx += (mx - rx) * 0.2; ry += (my - ry) * 0.2;
      rng.style.left = rx + 'px'; rng.style.top = ry + 'px';
      frame = requestAnimationFrame(lerp);
    };

    window.addEventListener('mousemove', onMove);
    frame = requestAnimationFrame(lerp);

    // Interactive hover
    const interactables = document.querySelectorAll('a, button, .tire-card, .gp-card');
    const onHover = () => { rng.style.width = '60px'; rng.style.height = '60px'; rng.style.borderColor = '#fff'; };
    const onLeave = () => { rng.style.width = '36px'; rng.style.height = '36px'; rng.style.borderColor = 'var(--f1-red)'; };

    interactables.forEach(el => { el.addEventListener('mouseenter', onHover); el.addEventListener('mouseleave', onLeave); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
      interactables.forEach(el => { el.removeEventListener('mouseenter', onHover); el.removeEventListener('mouseleave', onLeave); });
    };
  }, []);

  // Reveal Animation on Scroll
  useEffect(() => {
    const obs = new IntersectionObserver(es => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.05, rootMargin: '0px' });
    document.querySelectorAll('.rv').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Hero Lights Animation
  useEffect(() => {
    let active = true;

    const sequence = async () => {
      setLights([false, false, false, false, false]);
      for (let i = 0; i < 5; i++) {
        await new Promise(r => setTimeout(r, 800));
        if (!active) return;
        setLights(prev => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }
      await new Promise(r => setTimeout(r, 1000));
      if (!active) return;
      setLights([false, false, false, false, false]);
    };

    sequence();
    return () => { active = false; };
  }, []);

  // RPM Bar Width based on Scroll
  const rpmWidth = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="ring" ref={ringRef}></div>

      {/* Global Background Track & Cars */}
      <div className="bg-track">
        <motion.div className="car-tracker" style={{ top: carY, marginTop: '-50px' }}>
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="75" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="10" y="130" width="15" height="40" rx="4" fill="#111" />
            <rect x="75" y="130" width="15" height="40" rx="4" fill="#111" />
            <path d="M40 20 L60 20 L65 70 L35 70 Z" fill="#E10600" />
            <path d="M25 70 L75 70 L75 140 L25 140 Z" fill="#E10600" />
            <path d="M35 140 L65 140 L60 170 L40 170 Z" fill="#000" />
            <rect x="25" y="10" width="50" height="10" rx="2" fill="#222" />
            <rect x="20" y="160" width="60" height="15" rx="3" fill="#222" />
            <circle cx="50" cy="90" r="10" fill="#fff" />
            <path d="M50 20 L50 70" stroke="#fff" strokeWidth="2" opacity="0.5" />
          </svg>
        </motion.div>

        <motion.div className="car-tracker" style={{ top: carY, marginLeft: '30px', marginTop: '70px', transform: 'translateX(-50%) scale(0.8)', opacity: 0.8 }}>
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="75" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="10" y="130" width="15" height="40" rx="4" fill="#111" />
            <rect x="75" y="130" width="15" height="40" rx="4" fill="#111" />
            <path d="M40 20 L60 20 L65 70 L35 70 Z" fill="#1f4287" />
            <path d="M25 70 L75 70 L75 140 L25 140 Z" fill="#1f4287" />
            <path d="M35 140 L65 140 L60 170 L40 170 Z" fill="#000" />
            <rect x="25" y="10" width="50" height="10" rx="2" fill="#222" />
            <rect x="20" y="160" width="60" height="15" rx="3" fill="#222" />
            <circle cx="50" cy="90" r="10" fill="#fff" />
          </svg>
        </motion.div>

        <motion.div className="car-tracker" style={{ top: carY, marginLeft: '-40px', marginTop: '160px', transform: 'translateX(-50%) scale(0.85)', opacity: 0.9 }}>
          <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="15" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="75" y="30" width="10" height="30" rx="3" fill="#111" />
            <rect x="10" y="130" width="15" height="40" rx="4" fill="#111" />
            <rect x="75" y="130" width="15" height="40" rx="4" fill="#111" />
            <path d="M40 20 L60 20 L65 70 L35 70 Z" fill="#fca311" />
            <path d="M25 70 L75 70 L75 140 L25 140 Z" fill="#fca311" />
            <path d="M35 140 L65 140 L60 170 L40 170 Z" fill="#000" />
            <rect x="25" y="10" width="50" height="10" rx="2" fill="#222" />
            <rect x="20" y="160" width="60" height="15" rx="3" fill="#222" />
            <circle cx="50" cy="90" r="10" fill="#fff" />
          </svg>
        </motion.div>
      </div>

      <nav>
        <a className="logo" href="#hero">Raksha <span>B R</span></a>
        <ul className="nav-links">
          <li><a href="#driver">The Driver</a></li>
          <li><a href="#pitstop">Constructors</a></li>
          <li><a href="#projects">Grand Prix</a></li>
          <li><a href="#circuit">Circuit Laps</a></li>
          <li><a href="#podium">Podiums</a></li>
          <li><a href="#radio">Team Radio</a></li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="hero-lights">
          {lights.map((isOn, i) => <div key={i} className={`light ${isOn ? 'on' : ''}`}></div>)}
        </div>
        <h1 className="h-title">
          <span>Pole</span>
          <span className="outline">Position</span>
        </h1>
        <p className="h-subtitle" style={{ fontSize: '22px', letterSpacing: '4px', color: 'var(--f1-white)' }}>Raksha B R</p>
        <p className="h-subtitle" style={{ marginBottom: '20px' }}>Computer Science Engineering Student</p>
        <p className="h-subtitle" style={{ fontSize: '12px', color: 'var(--f1-white)' }}>Intern at Infineon • AI/ML Enthusiast</p>

        <div className="rpm-bar">
          <motion.div className="rpm-fill" style={{ width: rpmWidth }}></motion.div>
        </div>

        <a href="#projects" className="btn-race"><span>Start Engine <ArrowRight size={14} style={{ display: 'inline', marginLeft: 8 }} /></span></a>
      </section>

      {/* ── ABOUT / THE DRIVER ── */}
      <section id="driver">
        <div className="curb-divider"></div>
        <div className="inner" style={{ marginTop: 60 }}>
          <div className="slabel rv"><Activity size={18} /> Driver Profile</div>
          <h2 className="stitle rv">The Driver</h2>

          <div className="driver-card rv">
            <div className="driver-head">
              <div>
                <div className="slabel" style={{ color: '#fff', margin: 0 }}>The Driver</div>
                <div className="driver-name">Raksha B R</div>
              </div>
              <div className="driver-num">01</div>
            </div>
            <div className="driver-body">
              <div className="driver-stats">
                <div className="stat-box">
                  <div className="stat-label">Role</div>
                  <div className="stat-val">CSE Student</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Focus</div>
                  <div className="stat-val">AI/ML</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Experience</div>
                  <div className="stat-val">Infineon Intern</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Location</div>
                  <div className="stat-val">India</div>
                </div>
              </div>
              <div className="driver-bio">
                {vision} <br /><br />
                Just like a finely tuned Formula 1 car, I believe software requires a perfect balance of speed, aerodynamics (clean UI), and exceptional engineering (robust backend) to win the race.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS / PIT STOP ── */}
      <section id="pitstop">
        <div className="inner">
          <div className="slabel rv"><Gauge size={18} /> Telemetry Data</div>
          <h2 className="stitle rv">Pit Stop: Tech Stack</h2>
          <p className="rv" style={{ color: 'var(--f1-grey)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
            Just as a pit stop crew relies on the right tires and tools for the circuit conditions, I rely on this <strong>Tech Stack known</strong> to build high-performance applications.
          </p>

          <div className="pit-grid">
            {techStackData.map((category, idx) => (
              <div className="tire-card rv" key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="tire-bg"></div>
                <div className="tire-title"><Disc size={20} color="var(--f1-red)" /> {category.category}</div>
                <div className="tech-row">
                  {category.skills.map(skill => (
                    <div className="speed-tag" key={skill}>
                      {getTechIcon(skill)} {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS / GRAND PRIX ── */}
      <section id="projects">
        <div className="inner">
          <div className="slabel rv"><Flag size={18} /> Race Weekend</div>
          <h2 className="stitle rv">Grand Prix Calendar</h2>
          <p className="rv" style={{ color: 'var(--f1-grey)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
            A showcase of the major engineering milestones and featured projects across different domains, forming the 'Grand Prix Calendar' of my development career.
          </p>

          <div className="gp-calendar">
            {projectsData.map((proj, idx) => (
              <div className="gp-card rv" key={proj.id}>
                <div className="gp-date">
                  <div className="gp-idx">0{idx + 1}</div>
                  <div className="gp-year">SEASON {proj.year}</div>
                </div>
                <div className="gp-content">
                  <div className="gp-title">{proj.title}</div>
                  <div className="gp-prob"><strong>Telemetry Issue:</strong> {proj.problem}</div>
                  <div className="gp-sol"><strong>Constructor Fix:</strong> {proj.solution}</div>

                  <div className="gp-tech">
                    {proj.tags.map(t => <span key={t}>{getTechIcon(t)} {t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY / CIRCUIT LAPS ── */}
      <section id="circuit">
        <div className="inner" style={{ position: 'relative' }}>
          <div className="slabel rv"><Flag size={18} /> Track Sectors</div>
          <h2 className="stitle rv">Circuit Laps</h2>
          <p className="rv" style={{ color: 'var(--f1-grey)', maxWidth: '600px', lineHeight: 1.6 }}>
            The progression of my education and professional experience, mapped out lap by lap around the circuit.
          </p>

          <div style={{ position: 'relative', marginTop: 80 }}>
            {/* The structural center line */}
            <div className="circuit-line"></div>

            {journeyData.slice().reverse().map((lap) => (
              <div className="lap-item rv" key={lap.id}>
                <div className="lap-dot"></div>
                <div className="lap-content">
                  <div className="lap-year">LAP {lap.year}</div>
                  <div className="lap-title">{lap.title} - {lap.institution}</div>
                  <div className="lap-inst">{lap.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS / PODIUMS ── */}
      <section id="podium">
        <div className="curb-divider"></div>
        <div className="inner" style={{ marginTop: 60 }}>
          <h2 className="stitle rv">Podium Finishes</h2>
          <p className="rv" style={{ color: 'var(--f1-grey)', margin: '0 auto 40px', maxWidth: '600px', lineHeight: 1.6 }}>
            These awards recognize individual technical excellence, but I strongly believe every win also requires highly collaborative teamwork.
          </p>
          <div className="podium-grid">
            <div className="podium-step p-2 rv">
              <Trophy size={48} className="p-trophy" />
              <div className="p-title">{achievements[1]}</div>
            </div>
            <div className="podium-step p-1 rv" style={{ transitionDelay: '0.2s' }}>
              <Trophy size={64} className="p-trophy" />
              <div className="p-title">{achievements[0]}</div>
            </div>
            <div className="podium-step p-3 rv" style={{ transitionDelay: '0.4s' }}>
              <Trophy size={40} className="p-trophy" />
              <div className="p-title">Collaborative Team Projects</div>
            </div>
          </div>
        </div>
      </section>



      {/* ── CONTACT / TEAM RADIO ── */}
      <section id="radio">
        <div className="inner">
          <div className="slabel" style={{ justifyContent: 'center' }}><Radio size={18} /> Comm Channel</div>
          <h2 className="stitle" style={{ textAlign: 'center' }}>Team Radio</h2>

          <div className="radio-box">
            <div className="radio-wave"><Radio size={40} /></div>
            <h3 style={{ fontFamily: 'Montserrat', fontStyle: 'italic', fontSize: '24px', marginBottom: '30px', textTransform: 'uppercase' }}>Box, Box, Box.</h3>

            <div className="contact-grid">
              <a href="mailto:rakshagowda264@gmail.com" className="c-item">
                <Mail size={24} /> <span className="c-text">rakshagowda264@gmail.com</span>
              </a>
              <a href="https://instagram.com/justrakshagowda" target="_blank" rel="noreferrer" className="c-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span className="c-text">justrakshagowda</span>
              </a>
              <a href="https://github.com/rakshaagowda" target="_blank" rel="noreferrer" className="c-item">
                <Github size={24} /> <span className="c-text">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/raksha-b-r-447490292" target="_blank" rel="noreferrer" className="c-item">
                <ExternalLink size={24} /> <span className="c-text">LinkedIn Paddock</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '40px', background: '#050505', borderTop: '1px solid #222', fontFamily: 'Orbitron', fontSize: '12px', color: '#666', letterSpacing: '2px' }}>
        © RAKSHA B R. POWERED BY REACT & VITE. ALL SECONDS COUNT.
      </footer>
    </>
  );
}

export default App;
