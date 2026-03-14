import type { Skill } from "../types/types";

export default function Skills(){
    const skills: Skill[] = [
      {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3']
      },
      {
        title: 'Backend and APIs',
        items: ['Node.js', 'Python', 'REST APIs', 'WebSocket', 'Java', 'Spring boot']
      },
      {
        title: 'Tools & Design',
        items: ['Figma', 'Git', 'Webpack', 'Github', 'Jira', 'CI/CD']
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
        title: 'AI & Machine Learning',
        items: ['Generative AI', 'Large Language Models (LLMs)', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision']
      },
      {
        title: 'Soft Skills',
        items: ['Agile', 'Problem Solving', 'Communication', 'Team Collaboration', 'UI/UX Focus']
      }
    ];
    return <section id="skills" className="py-12 px-6 max-w-6xl mx-auto sm:py-8 md:py-10 lg:py-12">
        <h3 className="text-5xl font-black text-center mb-16 bg-gradient-to-r from-white via-alabaster-900 to-stormy-400 bg-clip-text text-transparent">
          Skills
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="bg-graphite-400/30 backdrop-blur-xl rounded-3xl p-10 border border-yale-500/30 hover:border-stormy-500 hover:shadow-3xl hover:-translate-y-6 transition-all duration-700">
              <h4 className="text-xl font-bold text-white mb-4">{skill.title}</h4>
              <ul className="list-disc pl-6 text-stormy-700/80 text-sm sm:text-base text-alabaster-900 space-y-2">
                {skill.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
}