import { useState, useEffect, createContext } from 'react';
import { ThemeContextProps, ThemeProviderProps } from '../types/themeProps';

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(
    localStorage.getItem('taskr-userTheme') !== 'light' ? 'dark' : 'light',
  );

  useEffect(() => {
    const root = window.document.documentElement;
    const removePreviousTheme = theme === 'light' ? 'dark' : 'light';

    root.classList.remove(removePreviousTheme);
    root.classList.add(theme);

    localStorage.setItem('taskr-userTheme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
