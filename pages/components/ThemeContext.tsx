import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextData {
  theme: string | undefined;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: undefined,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string | undefined>(undefined);

  const setMode = (mode: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', mode);
      setTheme(mode);
    }
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localTheme = window.localStorage.getItem('theme');
      localTheme ? setTheme(localTheme) : setMode('light');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);