import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }

    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    }

    return (
        <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? <FaSun size={24} className="text-yellow-500" /> : <FaMoon size={24} className="text-blue-500" />}
        </button>
    )
};

export default ThemeSwitcher;