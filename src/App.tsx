import { useState } from 'react';
import { Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction.tsx';
import Journey from './components/Journey/Journey.tsx';
import Expertise from './components/Expertise.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contacts.tsx';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-300 ml-0 md:ml-64 transition-colors duration-300">
      <Navbar isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />

      {/* Mobile menu toggle */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-dark-100 rounded-full shadow-lg border border-gray-200 dark:border-white/10 p-2"
        onClick={() => setIsMobileNavOpen((prev) => !prev)}
      >
        <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
      </button>

      {isMobileNavOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}

      {/* Floating theme toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white dark:bg-dark-100 rounded-full shadow-lg border border-gray-200 dark:border-white/10 p-1">
          <ThemeToggle />
        </div>
      </div>
      <main>
        <Introduction />
        <Journey />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-white dark:bg-dark-100 border-t border-gray-100 dark:border-white/5 text-gray-500 dark:text-gray-400 py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} Aymen Labidi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;