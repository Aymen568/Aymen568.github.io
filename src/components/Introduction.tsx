import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Introduction() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Full Stack Software Engineer focused on building robust systems. My core strength lies in designing backend APIs and data engineering pipelines, and I complement this with practical frontend development experience to deliver complete applications. I enjoy integrating theoretical knowledge with hands-on building.
            </p>
        </div>
      </div>
    </section>
  );
}