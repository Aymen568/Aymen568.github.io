import { Server, Database, Container, Layout, FileText } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const expertiseAreas = [
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust APIs and scalable server-side applications.',
    tools: ['C#', 'Python', 'Node.js', 'Flask', 'FastAPI'],
    color: 'blue'
  },
  {
    icon: Database,
    title: 'Data Pipelines',
    description: 'Designing and orchestrating efficient data workflows at scale.',
    tools: ['PySpark', 'DataBricks', 'SQL'],
    color: 'green'
  },
  {
    icon: Container,
    title: 'DevOps',
    description: 'Automating deployments and managing infrastructure for reliable delivery.',
    tools: ['Docker', 'GitHub Actions'],
    color: 'purple'
  },
  {
    icon: Layout,
    title: 'Frontend Development',
    description: 'Crafting responsive and interactive user interfaces.',
    tools: ['HTML', 'CSS', 'React', 'Tailwind'],
    color: 'orange'
  },
  {
    icon: FileText,
    title: 'Doc Automation',
    description: 'Streamlining documentation workflows and knowledge management.',
    tools: ['Notion'],
    color: 'pink'
  }
];

const colorMap: Record<string, { icon: string; border: string; hoverBorder: string; badge: string; title: string; bg: string }> = {
  blue:   { icon: 'text-blue-600 dark:text-accent-blue',   border: 'border-blue-100 dark:border-accent-blue/20',   hoverBorder: 'hover:border-blue-400 dark:hover:border-accent-blue',   badge: 'bg-blue-50 dark:bg-dark-300 text-blue-700 dark:text-accent-blue border border-blue-200 dark:border-accent-blue/30',   title: 'group-hover:text-blue-600 dark:group-hover:text-accent-blue',   bg: 'dark:bg-dark-100' },
  green:  { icon: 'text-emerald-600 dark:text-accent-green',  border: 'border-emerald-100 dark:border-accent-green/20',  hoverBorder: 'hover:border-emerald-400 dark:hover:border-accent-green',  badge: 'bg-emerald-50 dark:bg-dark-300 text-emerald-700 dark:text-accent-green border border-emerald-200 dark:border-accent-green/30',  title: 'group-hover:text-emerald-600 dark:group-hover:text-accent-green',  bg: 'dark:bg-dark-100' },
  purple: { icon: 'text-violet-600 dark:text-accent-purple', border: 'border-violet-100 dark:border-accent-purple/20', hoverBorder: 'hover:border-violet-400 dark:hover:border-accent-purple', badge: 'bg-violet-50 dark:bg-dark-300 text-violet-700 dark:text-accent-purple border border-violet-200 dark:border-accent-purple/30', title: 'group-hover:text-violet-600 dark:group-hover:text-accent-purple', bg: 'dark:bg-dark-100' },
  orange: { icon: 'text-orange-500 dark:text-accent-orange', border: 'border-orange-100 dark:border-accent-orange/20', hoverBorder: 'hover:border-orange-400 dark:hover:border-accent-orange', badge: 'bg-orange-50 dark:bg-dark-300 text-orange-700 dark:text-accent-orange border border-orange-200 dark:border-accent-orange/30', title: 'group-hover:text-orange-500 dark:group-hover:text-accent-orange', bg: 'dark:bg-dark-100' },
  pink:   { icon: 'text-pink-600 dark:text-accent-pink',   border: 'border-pink-100 dark:border-accent-pink/20',   hoverBorder: 'hover:border-pink-400 dark:hover:border-accent-pink',   badge: 'bg-pink-50 dark:bg-dark-300 text-pink-700 dark:text-accent-pink border border-pink-200 dark:border-accent-pink/30',   title: 'group-hover:text-pink-600 dark:group-hover:text-accent-pink',   bg: 'dark:bg-dark-100' },
};

export default function Expertise() {
  const sectionRef = useScrollReveal();

  return (
    <section id="areas_of_expertise" className="py-24 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Areas of Expertise</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Specialized in building full-stack applications, data pipelines, and automated workflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {expertiseAreas.map((area, index) => {
            const c = colorMap[area.color];
            return (
              <div 
                key={index} 
                className={`group p-6 bg-white ${c.bg} rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border ${c.border} ${c.hoverBorder} hover:-translate-y-1`}
              >
                <area.icon className={`h-12 w-12 ${c.icon} mb-4 transform transition-transform duration-300 group-hover:scale-110`} />
                <h3 className={`text-xl font-semibold text-gray-900 dark:text-white mb-2 ${c.title} transition-colors`}>{area.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool) => (
                    <span key={tool} className={`px-3 py-1 text-xs font-medium rounded-full ${c.badge} transition-colors`}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}