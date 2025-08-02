import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  theme: 'theme1',
  setTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('theme1');

  useEffect(() => {
    const stored = localStorage.getItem('app-theme');
    if (stored) setThemeState(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('app-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const setTheme = (t) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="theme-transition">{children}</div>
    </ThemeContext.Provider>
  );
};
