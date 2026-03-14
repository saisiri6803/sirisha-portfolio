import { useState, useEffect } from "react";


export default function NavBar(){
const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState('hero');
const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out backdrop-blur-xl ${scrolled
            ? 'bg-graphite-400/95 shadow-2xl border-b border-stormy-500/30'
            : 'bg-graphite-300/80'
            }`}>
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    
              {/* Left: Name */}
              <h1 className="text-xl sm:text-2xl font-black">
                Sai Sirisha
              </h1>
    
              {/* Right: Desktop menu */}
              <ul className="md:flex sm: flex items-center space-x-8">
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
                <a href="#contact"
                  className="bg-gradient-to-r from-stormy-500 to-yale-500 text-white px-8 py-3 rounded-full font-bold hover:from-stormy-600 hover:to-yale-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-stormy-400/50">
                  Contact
                </a>
              </ul>
    
              {/* Right: Mobile hamburger */}
              <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
    
            {/* Mobile dropdown */}
            {menuOpen && (
              <div className="md:hidden w-full bg-graphite-400 px-6 py-6 space-y-4 text-right">
                {[
                  { id: 'about', label: 'About' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'education', label: 'Education' },
                ].map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
              </div>
    
            )}
          </nav>
}