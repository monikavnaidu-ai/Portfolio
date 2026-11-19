import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { THEME_STORAGE_KEY } from '../utils/constants.js';

const ThemeContext = createContext(null);

function readTheme() {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
}

/**
 * ThemeProvider
 * Applies `dark` or `light` class to the <html> element and persists the
 * preference in localStorage (default: dark).
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      /* storage unavailable — theme stays in state */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div id="app-root">{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
