import { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [globalTheme, setGlobalTheme] = useState('light');

  const lightTheme = {
    background: '#FFF',
    typography: '#313131',
    homeBg: '#EFC842',
  };

  const darkTheme = {
    background: '#313131',
    typography: '#FFF',
    homeBg: '#313131',
  };

  const definedTheme = globalTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ definedTheme, setGlobalTheme, globalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};