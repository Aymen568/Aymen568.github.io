import {Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#journey", label: "Journey" },
    { href: "#areas_of_expertise", label: "Areas of Expertise" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  const [activeItem, setActiveItem] = useState<string>(navItems[0].href);
  const handleClick = (href: string) => {
    setActiveItem(href);
  };

  return (
  <nav className={`fixed left-0 top-0 h-screen w-64 z-50 transition-all duration-300 glass-effect flex flex-col`}>

    {/* Profile Section */}
    <div className="p-6 border-b border-black/5 dark:border-white/10">
      <div className="flex flex-col items-center">
        <img 
          src="/src/assets/aymen_picture.jpg" 
          alt="Logo" 
          className="h-32 w-32 rounded-full mb-4 border-2 border-accent-primary/30"
        />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white text-center">Aymen Labidi</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 text-center">Full Stack Software Engineer</p>
      </div>
    </div>

        <div className="flex justify-center space-x-4 mt-4 mb-6 px-4">
          <a href="mailto:aymen.labidi@supcom.tn" target="_blank" rel="noopener noreferrer"
             className="text-indigo-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition-colors p-2 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-lg">
            <Mail className="h-5 w-5" />
          </a>
          <a href="https://github.com/aymen568" target="_blank" rel="noopener noreferrer" 
             className="text-indigo-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition-colors p-2 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-lg">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/aymenlabidi/" target="_blank" rel="noopener noreferrer" 
             className="text-indigo-500 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition-colors p-2 hover:bg-indigo-50 dark:hover:bg-white/5 rounded-lg">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
    
    {/* Desktop Navigation */}
    <div className="mb-6 px-6 border-t border-black/5 dark:border-white/10">
      <div className="mt-6 space-y-1 w-full">
        { navItems.map((item) => {
            const isActive = activeItem === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-200 group text-sm font-medium ${
                  isActive 
                    ? 'text-indigo-600 dark:text-white bg-indigo-50 dark:bg-white/10 font-semibold' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-white/5'
                  }`}
              >
                <span>{item.label}</span>
                <span className={`transition-opacity text-indigo-400 dark:text-white/50 ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>→</span>
              </a>
            )
          }) 
        }
      </div>
    </div>

  </nav>
);
}