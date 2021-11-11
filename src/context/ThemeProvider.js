import { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [globalTheme, setGlobalTheme] = useState('light');

  const lightTheme = {
    background: '#FFF',
    typography: '#313131',
    homeBg: '#EFC842',
    homeTxt: '#000',
    navBarColor: '#F2243A',
    offColor: '#313131',
  };

  const darkTheme = {
    background: '#313131',
    typography: '#FFF',
    homeBg: '#313131',
    homeTxt: '#FFF',
    navBarColor: '#4B126E',
    onColor: '#F2243A',
  };

  const definedTheme = globalTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ definedTheme, setGlobalTheme, globalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};