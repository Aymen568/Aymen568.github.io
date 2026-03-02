import { Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';


const projects = [
  {
    title: 'Speech2Text- Real Time conference transcription with question answering',
    description: 'Platform that transcribe sessions in real time, and answers questions in real time based on the transcribed text using a custom trained LLM model.',
    image: '/src/assets/speech2text.png',
    tags: ['Flask', 'Javascript', 'SpeechMatics', 'RAG', 'RabbitMq', 'Vercel'],
    github: 'https://github.com/Aymen568/Speech2Text',
    demo: 'https://demo.com'
  },
  {
    title: 'AutoQA - Website testing platform',
    description: 'A platform to test websites by generating test cases based on the user input , using LLM tools.',
    image: '/src/assets/autoqa.jpg',
    tags: ['React', 'Playright', 'PostgreSQL'],
    github: 'https://github.com/Aymen568/Auto_qa',
    demo: 'https://demo.com'
  },
  {
    title: 'Task Schedular',
    description: 'A task scheduling platform that allows users to create, manage, and schedule tasks with reminders.',
    image: '/src/assets/taskschedular.png',
    tags: ['Python', 'Modal', 'React', 'Vercel'],
    github: 'https://github.com/Aymen568/Task_scheduler',
    demo: 'https://demo.com'
  }
];

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-dark-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-white/5 hover:border-indigo-200 dark:hover:border-accent-primary hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-accent-primary transition-colors">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-indigo-50 dark:bg-accent-primary/10 text-indigo-600 dark:text-accent-primary rounded-full text-xs font-medium border border-indigo-100 dark:border-transparent transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline transition-colors font-medium"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-accent-primary transition-colors"
                  >
                    {/* <ExternalLink className="h-5 w-5 mr-1" />
                    <span>Demo</span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}