import React, { createContext, useState, useContext, ReactNode } from 'react';
import {themes} from "../theme/theme";

type ThemeContextType = {
    theme: typeof themes.UAE;
    setTheme: (theme: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(themes.UAE);

    const changeTheme = (themeKey: keyof typeof themes) => {
        setTheme(themes[themeKey]);
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};
