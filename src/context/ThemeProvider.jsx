import { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('home-theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        // Apply theme to document
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('home-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('home-theme', 'light');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const value = {
        darkMode,
        toggleTheme,
        setDarkMode
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}; 