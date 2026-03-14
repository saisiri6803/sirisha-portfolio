export default function HeroBanner(){
    return <section className="min-h-screen flex items-center justify-center pt-24 px-6 max-w-6xl mx-auto">
        <div className="text-center space-y-12 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-r from-stormy-500/20 via-yale-500/20 to-stormy-600/20 backdrop-blur-xl px-12 py-10 rounded-3xl border border-stormy-500/40 shadow-2xl flex flex-col gap-4">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent leading-[2] md:leading-[2.05] lg:leading-[2.5] tracking-tight">
              Software Engineer
            </div>
            <p className="text-stormy-400 font-bold space-y-20 text-xl md:text-2xl tracking-widest bg-gradient-to-r from-stormy-300 to-yale-300 bg-clip-text text-transparent">
              Accenture
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-2xl text-alabaster-900/90 max-w-2xl mx-auto leading-relaxed font-light">
            UI-focused Front end Developer with experience building modular, enterprise-grade web applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects"
              className="bg-gradient-to-r from-stormy-500 to-yale-500 text-white px-12 py-6 rounded-3xl text-xl font-bold shadow-2xl hover:shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all duration-500 border border-stormy-400/50">
              Featured Projects
            </a>
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/file/d/1UcFSFO75YWftCwqclEMsmwO7krnymRe1/view?usp=sharing';
                link.download = 'Sai-Sirisha-Resume.pdf';
                link.click();
              }}
              className="border-2 border-yale-500/60 text-white px-12 py-6 rounded-3xl text-xl font-bold hover:bg-yale-500/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              Download Resume
            </button>
          </div>
        </div>
      </section>
}