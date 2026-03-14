export default function Footer(){
    return <footer className="px-4 sm:px-6 py-12 sm:py-8 md:py-10 lg:py-12 text-sm sm:text-lg text-center text-alabaster-900/60 border-t border-graphite-500/50 bg-graphite-400/20 backdrop-blur-xl rounded-3xl mt-24 mx-8">

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
}