import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { light, dark } from '../../themes';
import GlobalStyle from '../../styles';

interface ThemeContextProps {
  theme: DefaultTheme;
  changeTheme: () => void;
}
export const ThemeContext = React.createContext<Partial<ThemeContextProps>>({});

interface ThemeWrapperProps {
  children: React.ReactNode;
}
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (window.localStorage.getItem('theme') === 'dark') setTheme(dark);
  }, []);

  const changeTheme = () => {
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
    document.body.classList.add('theme-transition');
    setTimeout(() => document.body.classList.remove('theme-transition'), 150);
    window.localStorage.setItem('theme', newTheme.name);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeWrapper;
