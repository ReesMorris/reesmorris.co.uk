import React, { useState } from 'react';
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
const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [theme, setTheme] = useState(light);

  const changeTheme = () => {
    document.body.classList.add('theme-transition');
    setTheme(theme === light ? dark : light);
    setTimeout(() => document.body.classList.remove('theme-transition'), 150);
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
