interface JourneyItemProps {
  title: string;
  organization: string;
  year: string;
  description: string;
  logoUrl: string;
  link: string;
}

export default function JourneyItem({ 
  title, 
  organization, 
  year, 
  description, 
  logoUrl, 
  link 
}: JourneyItemProps) {
  
  return (
    <div className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
      
      {/* Container with date on left and content on right */}
      <div className="flex items-start">
        
        {/* Date positioned to the left of the timeline */}
        <div className="relative w-60 flex-shrink-0 text-right pr-6">
          <span className="text-sm text-indigo-600 dark:text-accent-primary font-semibold">
            {year}
          </span>
        </div>

        {/* Timeline arrow */}
        <div className="flex-shrink-0 flex items-center">
          <span className="text-indigo-400 dark:text-white text-lg font-bold whitespace-nowrap">---&gt;</span>
        </div>

        {/* Content Container */}
        <div className="flex-grow pl-8 pb-8">
          <div className="flex items-start gap-4">
            
            {/* Logo Container */}
            <div 
              className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 
                border-2 border-accent-primary/20 group-hover:border-accent-primary 
                transition-colors bg-white flex items-center justify-center"
            >
              <img 
                src={logoUrl} 
                alt={organization}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Content */}
            <div className="flex-grow">

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                {title}
              </h4>

              {/* Organization Link */}
              <div className="text-gray-500 dark:text-gray-300">
                <a 
                  href={link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors"
                >
                  {organization}
                </a>
              </div>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {description}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}