import { useState, useEffect } from 'react';
import { saveTheme, loadTheme } from '../utils/localStorage';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check system preference first
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return loadTheme() || 'light';
  });

  useEffect(() => {
    // Remove both classes first
    document.documentElement.classList.remove('dark', 'light');
    // Add the current theme class
    document.documentElement.classList.add(theme);
    // Save to localStorage
    saveTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
