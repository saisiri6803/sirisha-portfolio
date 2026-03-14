export default function Experience(){
    return <section id="experience" className="sm:py-8 md:py-10 lg:py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Experience
        </h3>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="group bg-graphite-400/20 backdrop-blur-xl rounded-3xl p-10 brder border-yale-500/30 hover:border-stormy-500/50 hover:shadow-3xl hover:-translate-y-4 transition-all duration-700">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 bg-gradient-to-r from-stormy-500 to-yale-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
              <div>
                <h4 className="text-xl sm:text-3xl font-black text-white group-hover:text-stormy-400 mb-2">Associate Software Engineer</h4>
                <p className="text-stormy-600 font-bold text-xl mb-1 bg-gradient-to-r from-stormy-400 to-yale-400 bg-clip-text text-transparent">
                  Accenture · Bangalore
                </p>
                <p className="text-yale-600 font-mono text-sm tracking-wider bg-gradient-to-r from-yale-300 to-stormy-300 bg-clip-text text-transparent">
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
}