import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function About(){
    return<section id="about" className="sm:py-8 md:py-10 lg:py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-5xl font-black text-center mb-24 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent animate-slide-up">
          About
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-up">
            <p className="text-alabaster-900/80 leading-relaxed max-w-lg bg-graphite-500/10 p-5 sm:p-8 text-base sm:text-lg rounded-2xl backdrop-blur-xl border border-graphite-400/30">
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
}