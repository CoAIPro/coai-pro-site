/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

export { ThemeContext, useTheme };

