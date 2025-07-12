import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop, faPalette } from '@fortawesome/free-solid-svg-icons';

export const ThemeToggle = ({ isMobile = false }) => {
  const [theme, setTheme] = useState('system');
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark');
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
    
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const handleToggle = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  if (!mounted) {
    return <div className="w-12 h-8 bg-gray-200 rounded-lg animate-pulse"></div>;
  }

  // Mobile version - icon with dropdown
  if (isMobile) {
    return (
      <div className="relative">
        <motion.button
          onClick={handleToggle}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-600"
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <FontAwesomeIcon 
            icon={faPalette} 
            className="w-5 h-5 text-gray-600 dark:text-gray-300" 
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 p-2 min-w-[140px]"
            >
              <div className="space-y-1">
                <button
                  onClick={() => handleThemeChange('light')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                    theme === 'light' 
                      ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={faSun} className="w-4 h-4 mr-2" />
                  Light
                </button>
                
                <button
                  onClick={() => handleThemeChange('system')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                    theme === 'system' 
                      ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={faDesktop} className="w-4 h-4 mr-2" />
                  System
                </button>
                
                <button
                  onClick={() => handleThemeChange('dark')}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                    theme === 'dark' 
                      ? 'bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <FontAwesomeIcon icon={faMoon} className="w-4 h-4 mr-2" />
                  Dark
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop version - original toggle
  return (
    <motion.div 
      className="flex items-center bg-gray-100 dark:bg-gray-200 rounded-lg p-1"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'light' 
            ? 'bg-white dark:bg-gray-300 text-yellow-500 shadow-md' 
            : 'text-gray-600 dark:text-gray-700 hover:text-gray-800 dark:hover:text-gray-900'
        }`}
        title="Light theme"
      >
        <FontAwesomeIcon icon={faSun} className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleThemeChange('system')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'system' 
            ? 'bg-white dark:bg-gray-300 text-pink-500 shadow-md' 
            : 'text-gray-600 dark:text-gray-700 hover:text-gray-800 dark:hover:text-gray-900'
        }`}
        title="System theme"
      >
        <FontAwesomeIcon icon={faDesktop} className="w-4 h-4" />
      </button>
      
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-md transition-all duration-200 ${
          theme === 'dark' 
            ? 'bg-white dark:bg-gray-300 text-purple-500 shadow-md' 
            : 'text-gray-600 dark:text-gray-700 hover:text-gray-800 dark:hover:text-gray-900'
        }`}
        title="Dark theme"
      >
        <FontAwesomeIcon icon={faMoon} className="w-4 h-4" />
      </button>
    </motion.div>
  );
}; 