import { useState, useEffect } from 'react';
import { MdEmail,MdPhone,MdLocationOn } from 'react-icons/md';

interface Project {
  title: string;
  tech: string;
  desc: string;
  demo?: string;
  github: string;
}

const projects: Project[] = [
  {
    title: 'Job Application Tracker',
    tech: 'React 19, TypeScript, Tailwind, Firebase',
    desc: 'Real-time SaaS dashboard with 99.9% uptime. Netlify CI/CD deployed.',
    demo: 'https://applicationtrackerforjobs.netlify.app/', github: 'https://github.com/saisiri6803/job-tracker'
  },
  {
    title: 'SimpleTool',
    tech: 'React.js, Python, Tailwind CSS',
    desc: 'Multi-utility app boosting task speed by 40%. Production ready.',
    demo: '#', github: 'https://github.com/saisiri6803/Multi-Utility-App'
  },
  {
    title: 'Chat Application',
    tech: 'React.js,websocket.io, Node.js',
    desc: 'Real-time chat app with 200ms latency.' ,
    github: '#' 
  }
  // {
  //   title: 'Chat Application',
  //   tech: 'React.js,websocket.io, Node.js',
  //   desc: 'Real-time chat app with 200ms latency.' ,
  //   github: '#' 
  // },
  // {
  //   title: 'Chat Application',
  //   tech: 'React.js,websocket.io, Node.js',
  //   desc: 'Real-time chat app with 200ms latency.' ,
  //   github: '#' 
  // },
  // {
  //   title: 'Chat Application',
  //   tech: 'React.js,websocket.io, Node.js',
  //   desc: 'Real-time chat app with 200ms latency.' ,
  //   github: '#' 
  // }
];

interface Skill {
  title: string;
  items: string[];
}

const skills: Skill[] = [
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3']
  },
  {
    title: 'Backend and APIs',
    items: ['Node.js', 'Python', 'REST APIs', 'WebSocket','Java','Spring boot']
  },
  {
    title: 'Tools & Design',
    items: ['Figma', 'Git', 'Webpack','Github','Jira','CI/CD']
  },
  {
    title: 'Testing & Deployment',
    items: ['Jest', 'React Testing Library', 'Netlify', 'Vercel']
  },
  {
    title: 'Databases',
    items: ['Firebase Firestore', 'MongoDB', 'MySQL']
  },
  {
    title: 'Soft Skills',
    items: ['Agile', 'Problem Solving', 'Communication', 'Team Collaboration', 'UI/UX Focus']
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [expandProjects, setExpandProjects] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'experience', 'projects', 'skills','education'];
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-graphite-200 via-graphite-300 to-graphite-400 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out backdrop-blur-xl ${scrolled
          ? 'bg-graphite-400/95 shadow-2xl border-b border-stormy-500/30'
          : 'bg-graphite-300/80'
        }`}>
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-stormy-600 via-white to-yale-600 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
            Sai Sirisha Sabbella
          </h1>
          <ul className="flex space-x-8">
            {['about', 'experience', 'projects', 'skills', 'education'].map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  className={`relative group hover:text-stormy-500 transition-all duration-500 font-semibold text-alabaster-900/90 hover:text-white ${activeSection === sec ? 'text-stormy-500 shadow-lg' : ''
                    }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stormy-500 group-hover:w-full transition-all duration-500"></span>
                </a>
              </li>
            ))}
            <a href="mailto:saisirisha6803@gmail.com"
              className="bg-gradient-to-r from-stormy-500 to-yale-500 text-white px-8 py-3 rounded-full font-bold hover:from-stormy-600 hover:to-yale-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-stormy-400/50">
              Contact
            </a>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-24 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-12 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-stormy-500/20 via-yale-500/20 to-stormy-600/20 backdrop-blur-xl px-12 py-10 rounded-3xl border border-stormy-500/40 shadow-2xl flex flex-col gap-4">
            <div className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent leading-[2] md:leading-[2.05] lg:leading-[2.5] tracking-tight">
              Software Engineer
            </div>
            <p className="text-stormy-400 font-bold space-y-20 text-xl md:text-2xl tracking-widest bg-gradient-to-r from-stormy-300 to-yale-300 bg-clip-text text-transparent">
              Accenture
            </p>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl text-alabaster-900/90 max-w-2xl mx-auto leading-relaxed font-light">
            UI-focused Front end Developer with experience building modular, enterprise-grade web applications
          </p>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <a href="#projects"
              className="bg-gradient-to-r from-stormy-500 to-yale-500 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 border border-stormy-400/50">
              Featured Projects
            </a>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/src/assets/Sai_Sirisha_Sabbella_Resume.pdf';
                link.download = 'Sai-Sirisha-Resume.pdf';
                link.click();
              }}
              className="border-2 border-yale-500/60 text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-yale-500/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              Download Resume
            </button>
          </div>
        </div>
      </section>


      {/* About */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-24 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent animate-slide-up">
          About
        </h3>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <p className="text-xl text-alabaster-900/80 leading-relaxed max-w-lg bg-graphite-500/10 p-8 rounded-2xl backdrop-blur-xl border border-graphite-400/30">
              UI specialist at Accenture building modular React components with Atomic Design principles.
              Expert in Figma-to-pixel-perfect conversion, accessibility, and 35% performance optimization.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stormy-500/30">
              <div className="group text-center p-8 bg-graphite-400/30 backdrop-blur-xl rounded-3xl border border-stormy-500/20 hover:bg-stormy-500/10 hover:shadow-2xl transition-all duration-500">
                <div className="text-4xl font-black text-stormy-500 mb-3 group-hover:scale-110 transition-transform">85.7%</div>
                <div className="text-alabaster-900/70 font-medium">B.Tech CGPA</div>
              </div>
              <div className="group text-center p-8 bg-graphite-400/30 backdrop-blur-xl rounded-3xl border border-stormy-500/20 hover:bg-stormy-500/10 hover:shadow-2xl transition-all duration-500">
                <div className="text-4xl font-black text-yale-500 mb-3 group-hover:scale-110 transition-transform">2024</div>
                <div className="text-alabaster-900/70 font-medium">Accenture</div>
              </div>
            </div>
          </div>
          <div className="space-y-6 animate-slide-up">
            <div className="p-10 bg-graphite-400/20 backdrop-blur-xl rounded-3xl border border-yale-500/30 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h4 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">Contact Info</h4>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
                  <span className="w-9 h-9 bg-stormy-500/20 rounded-xl p-2 flex items-center justify-center"><MdEmail /></span>
                  <a href="mailto:saisirisha6803@gmail.com" className="hover:text-stormy-400 transition-colors font-medium">saisirisha6803@gmail.com</a>
                </p>
                <p className="flex items-center gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
                  <span className="w-9 h-9 bg-yale-500/20 rounded-xl p-2 flex items-center justify-center"><MdPhone /></span>
                  <span>9615669666</span>
                </p>
                <p className="flex items-center gap-4 p-3 rounded-xl hover:bg-graphite-500/20 transition-all duration-300">
                  <span className="w-9 h-9 bg-stormy-500/20 rounded-xl p-2 flex items-center justify-center"><MdLocationOn /></span>
                  <span>Bengaluru, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-6 max-w-6xl mx-auto bg-graphite-400/30 backdrop-blur-xl rounded-[3rem] mx-8 mt-4 border border-stormy-500/20 shadow-2xl">
        <h3 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Experience
        </h3>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="group bg-graphite-400/20 backdrop-blur-xl rounded-3xl p-10 brder border-yale-500/30 hover:border-stormy-500/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-stormy-500 to-yale-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
              <div>
                <h4 className="text-3xl font-black text-white group-hover:text-stormy-300 mb-2">Associate Software Engineer</h4>
                <p className="text-stormy-400 font-bold text-xl mb-1 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
                  Accenture · Bangalore
                </p>
                <p className="text-yale-400 font-mono text-sm tracking-wider bg-gradient-to-r from-yale-300 to-stormy-300 bg-clip-text text-transparent">
                  Jun 2024 – Present
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-alabaster-900/90 text-lg">
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Designed 15+ reusable React components (25% velocity boost)
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Figma → pixel-perfect React (accessibility & i18n ready)
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                35% performance gains (lazy loading + code splitting)
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Jest/RTL testing + Agile (20% faster releases)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}

      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-24 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className={`group bg-graphite-400/30 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500 hover:shadow-3xl hover:-translate-y-6 transition-all duration-700 overflow-hidden ${!expandProjects && i >= 2 ? 'hidden' : ''}`}>
              {/* <div className="h-48 bg-gradient-to-br from-stormy-500/30 to-yale-500/30 rounded-2xl mb-6 group-hover:scale-105 transition-all duration-500"></div> */}
              <h4 className="text-2xl font-black text-white mb-3 group-hover:text-stormy-400">{project.title}</h4>
              <p className="text-stormy-400 font-bold mb-4 text-lg bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">{project.tech}</p>
              <p className="text-alabaster-900/80 leading-relaxed mb-8">{project.desc}</p>
              <div className="flex gap-4">
                {project.demo && <a href={project.demo} className="flex-1 bg-gradient-to-r from-stormy-500 to-yale-500 hover:from-stormy-600 hover:to-yale-600 text-white py-4 px-6 rounded-2xl font-bold text-center hover:shadow-2xl hover:scale-105 transition-all duration-400">Live Demo</a>}
                <a href={project.github} className={`${!project.demo ? 'w-full' : 'w-16'} h-16 bg-graphite-500/50 hover:bg-stormy-500 flex items-center justify-center rounded-2xl font-bold hover:scale-110 transition-all duration-400`}>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setExpandProjects(!expandProjects)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-stormy-500 to-yale-500 hover:from-stormy-600 hover:to-yale-600 text-white py-4 px-8 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {expandProjects ? '↑ Show Less Projects' : '↓ Show More Projects'}
          </button>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="bg-graphite-400/30 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500 hover:shadow-3xl hover:-translate-y-6 transition-all duration-700">
              <h4 className="text-xl font-bold text-white mb-4">{skill.title}</h4>
              <ul className="list-disc pl-6 text-stormy-700/80 space-y-2">
                {skill.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Education
        </h3>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Gayatri Vidya Parishad */}
          <div className="group bg-graphite-400/20 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-stormy-500 to-yale-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
              <div>
                <h4 className="text-3xl font-black text-white group-hover:text-stormy-300 mb-2">B.Tech Computer Science in AI & ML</h4>
                <p className="text-stormy-400 font-bold text-xl mb-1 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
                  Gayatri Vidya Parishad College of Engineering
                </p>
                <p className="text-yale-400 font-mono text-sm tracking-wider bg-gradient-to-r from-yale-300 to-stormy-300 bg-clip-text text-transparent">
                  Jul 2020 – May 2024
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-alabaster-900/90 text-lg">
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Ranked Top 10% in the program
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Secured 85.7% in academics
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Completed Honors in Full Stack Web Development
              </li>
            </ul>
          </div>

          {/* Narayana Junior College */}
          <div className="group bg-graphite-400/20 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-stormy-500 to-yale-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
              <div>
                <h4 className="text-3xl font-black text-white group-hover:text-stormy-300 mb-2">Board of Intermediate Education</h4>
                <p className="text-stormy-400 font-bold text-xl mb-1 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
                  Narayana Junior College
                </p>
                <p className="text-yale-400 font-mono text-sm tracking-wider bg-gradient-to-r from-yale-300 to-stormy-300 bg-clip-text text-transparent">
                  Jun 2018 – Mar 2020
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-alabaster-900/90 text-lg">
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Ranked Top 5% in the program & Qualified for JEE Advanced
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Secured 96.6% in academics
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Qualified AP EAMCET with Rank 2023
              </li>
            </ul>
          </div>

          {/* Sri Siddhartha English Medium School */}
          <div className="group bg-graphite-400/20 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-stormy-500 to-yale-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
              <div>
                <h4 className="text-3xl font-black text-white group-hover:text-stormy-300 mb-2">Board of Secondary School Education</h4>
                <p className="text-stormy-400 font-bold text-xl mb-1 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
                  Sri Siddhartha English Medium School
                </p>
                <p className="text-yale-400 font-mono text-sm tracking-wider bg-gradient-to-r from-yale-300 to-stormy-300 bg-clip-text text-transparent">
                  Jun 2017 – Apr 2018
                </p>
              </div>
            </div>
            <ul className="space-y-4 text-alabaster-900/90 text-lg">
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Ranked Top in the program
              </li>
              <li className="flex items-start gap-3 pl-4 py-2 rounded-xl hover:bg-graphite-500/20 transition-all duration-300 group-hover:translate-x-2">
                <span className="text-stormy-500 font-bold mt-1 flex-shrink-0">→</span>
                Secured 10 CGPA in academics
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-20 px-6 text-center text-alabaster-900/60 border-t border-graphite-500/50 bg-graphite-400/20 backdrop-blur-xl rounded-3xl mt-24 mx-8">
        <p className="text-xl mb-8 font-medium">© 2026 Sai Sirisha Sabella</p>
        <p className="text-lg mb-8 text-alabaster-900/70">Crafted with React, TypeScript & Tailwind CSS</p>
        <div className="flex justify-center space-x-12 text-alabaster-900/80 hover:text-stormy-400 transition-all duration-300">
          <a href="https://linkedin.com/in/sai-sirisha-sabbella" className="hover:scale-110 transition-transform group">
            LinkedIn
            <span className="block h-0.5 bg-stormy-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="https://github.com/saisiri6803" className="hover:scale-110 transition-transform group">
            GitHub
            <span className="block h-0.5 bg-stormy-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
