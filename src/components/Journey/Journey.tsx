import { GraduationCap, Briefcase } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal.ts';
import JourneyItem from './JourneyItem';
import { education, experience } from '../../data/JourneyData';

export default function Journey() {
  const sectionRef = useScrollReveal();

  return (
    <section id="journey" className="bg-white dark:bg-dark-200 transition-colors duration-300">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-indigo-500 dark:text-accent-primary" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experiences
              </h3>
            </div>
            
            <div className="relative space-y-2 stagger">
              {/* Continuous timeline line */}
              <div className="hidden md:block absolute left-[15rem] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white" />
              {experience.map((exp) => (
                <JourneyItem
                  key={exp.id}
                  title={exp.role}
                  organization={exp.company}
                  year={exp.year}
                  description={exp.description}
                  logoUrl={exp.logoPath}
                  link={exp.companyLink}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center  gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-indigo-500 dark:text-accent-primary" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>
            
            <div className="relative space-y-2 stagger">
              {/* Continuous timeline line */}
              <div className="hidden md:block absolute left-[15rem] top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-white" />
              {education.map((edu) => (
                <JourneyItem
                  key={edu.id}
                  title={edu.degree}
                  organization={edu.institution}
                  year={edu.year}
                  description={edu.description}
                  logoUrl={edu.logoPath}
                  link={edu.universityLink}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}