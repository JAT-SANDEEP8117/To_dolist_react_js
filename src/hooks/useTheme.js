import { useState, useEffect } from 'react';
import { saveTheme, loadTheme } from '../utils/localStorage';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Checking the  system preferences for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'; // Default to dark theme if system prefers dark mode
    }
    return loadTheme() || 'dark'; // Fallback to 'dark' if no theme is stored in localStorage
  });

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add(theme);
    // Save the current theme to localStorage for persistence
    saveTheme(theme);
  }, [theme]); // Re-run effect when the theme changes

  // function to toggle between dark and light theme changes need to be made here 
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'dark' : 'dark')); // Keep only 'dark' theme for now 
  };

  return { theme, toggleTheme };
};
