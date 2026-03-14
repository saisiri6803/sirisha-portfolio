import { useState } from "react";
import type { Project } from "../types/types";

export default function Projects() {
    const projects: Project[] = [
        {
            title: 'FitWithJD',
            tech: 'Ract.js, Next.js, GenAI, Prompt Engineering',
            desc: `Built a production-ready AI tool that analyzes resumes against job descriptions with ATS scoring, skill gap
                    detection, and section-level feedback across 10+ industries. Engineered structured prompts with semantic matching
                    and secure server-side API handling deployed on Vercel`,
            demo: 'https://resume-analyzer-tau-jade.vercel.app/',
            github: 'https://github.com/saisiri6803/cv-analyser'
        },
        {

            title: 'Job Application Tracker',
            tech: 'React 19, TypeScript, Tailwind, Firebase',
            desc: `Built with React 19, TypeScript, Tailwind, and Firebase Firestore for real-time data sync. 
                    Features include job status tracking like Applies, shortlisted, Rejected, In Progress. 
                    Deployed with Netlify CI/CD ensuring 99.9% uptime and seamless updates.`,
            demo: 'https://applicationtrackerforjobs.netlify.app/', github: 'https://github.com/saisiri6803/job-tracker'
        },
        {
            title: 'SimpleTool',
            tech: 'React.js, TypeScript, Tailwind CSS',
            desc: `A Multi-utility productivity app that consolidates everyday tasks into one interface. 
                    Developed with React.js, TypeScript, and Tailwind CSS. Features include Matrix Calculation, Image converters, File converters etc..,`,
            github: 'https://github.com/saisiri6803/Multi-Utility-App'
        },
        {
            title: 'Chat Application',
            tech: 'React.js, websocket.io, Node.js',
            desc: `A real‑time communication platform using React.js, Node.js, and WebSocket.io. . Supports instant messaging with sub-200ms latency, typing indicators, and multi-user chat rooms. 
                    Built with a modular architecture for easy extension to features like file sharing or video calls.`,
            github: '#'
        },
        {
            title: 'Swipe&Match Dating App',
            tech: 'React.js, TypeScript, Tailwind CSS',
            desc: `A modern dating application inspired by swipe-based interactions. Built with React.js, TypeScript, and Tailwind CSS. Includes profile creation, swipe-to-match functionality.
                    Designed with responsive UI and scalable backend integration for future features like location-based matching and integrated real-time chat.`,
            github: 'https://github.com/saisiri6803/Swipe-Match'
        },

    ];
    const [expandProjects, setExpandProjects] = useState(false);
    return <section id="projects" className="py-12 px-6 max-w-6xl mx-auto sm:py-8 md:py-10 lg:py-12">
        <h3 className="text-5xl font-black text-center mb-24 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
            Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-12">
            <button
                onClick={() => setExpandProjects(!expandProjects)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-stormy-500 to-yale-500 hover:from-stormy-600 hover:to-yale-600 text-white py-4 px-8 rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
                {expandProjects ? '↑ Show Less Projects' : '↓ Show More Projects'}
            </button>
        </div>
    </section>
}