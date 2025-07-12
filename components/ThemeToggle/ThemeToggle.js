import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');
  const [mounted, setMounted] = useState(false);

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
  };

  if (!mounted) {
    return <div className="w-12 h-8 bg-gray-200 rounded-lg animate-pulse"></div>;
  }

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