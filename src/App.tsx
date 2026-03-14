import HeroBanner from './components/HeroBanner';
import About from './components/About';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-graphite-200 via-graphite-300 to-graphite-400 text-white overflow-x-hidden text-sm sm:text-base sm:py-4 md:py-6 lg:py-8">
      <NavBar/>
      <HeroBanner/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Education/>
      <ContactForm />
      <Footer/>
    </div>
  );
}

export default App;
