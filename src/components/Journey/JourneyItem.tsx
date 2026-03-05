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
      <div className="flex flex-col md:flex-row md:items-start">
        
        {/* Date positioned to the left of the timeline */}
        <div className="relative md:w-60 md:shrink-0 md:text-right md:pr-6 mb-2 md:mb-0">
          <span className="inline-block text-xs sm:text-sm text-indigo-600 dark:text-accent-primary font-semibold bg-indigo-50 dark:bg-white/10 rounded-full px-2 py-1 md:bg-transparent md:dark:bg-transparent md:rounded-none md:px-0 md:py-0">
            {year}
          </span>
        </div>

        {/* Timeline arrow */}
        <div className="hidden md:flex shrink-0 items-center">
          <span className="text-indigo-400 dark:text-white text-lg font-bold whitespace-nowrap">---&gt;</span>
        </div>

        {/* Content Container */}
        <div className="grow md:pl-8 pb-8">
          <div className="flex items-start gap-3 sm:gap-4">
            
            {/* Logo Container */}
            <div 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 
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
            <div className="grow">

              {/* Title */}
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white transition-colors leading-snug">
                {title}
              </h4>

              {/* Organization Link */}
              <div className="text-sm sm:text-base text-gray-500 dark:text-gray-300">
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
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                {description}
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}