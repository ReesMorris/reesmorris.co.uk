import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as TP, DefaultTheme } from 'styled-components';
import { light, dark, Theme } from '../../themes';
import { getCookie, setCookie } from '../../utils/cookies';
import GlobalStyle from '../../styles';
import body from '../../utils/body';

interface ThemeProps {
  initialTheme?: Theme;
  children: React.ReactNode;
}

interface ContextProps {
  theme: DefaultTheme;
  setTheme: (theme: Theme) => void;
}

// Theme mappings
const mappings: Record<Theme, DefaultTheme> = { light, dark };

// The context
const ThemeContext = createContext<ContextProps>({
  theme: dark,
  setTheme: () => null
});

// The component
const ThemeProvider = ({ initialTheme, children }: ThemeProps) => {
  const [theme, _setTheme] = useState<DefaultTheme>(
    initialTheme ? mappings[initialTheme] : light
  );

  const setTheme = (theme: Theme) => {
    body.addClass('theme-transition');
    setTimeout(() => body.removeClass('theme-transition'), 150);

    _setTheme(mappings[theme]);
    setCookie('theme', theme, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
  };

  // Set the theme based on the cookie when component mounts
  useEffect(() => {
    const themeCookie = getCookie('theme');
    if (themeCookie && themeCookie in mappings) setTheme(themeCookie as Theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TP theme={theme}>
        <GlobalStyle />
        {children}
      </TP>
    </ThemeContext.Provider>
  );
};

// The hook
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
