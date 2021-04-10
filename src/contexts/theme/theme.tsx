import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider as TP, Global, css } from '@emotion/react';
import { Theme, light, dark, ThemeName } from '../../themes';
import { getCookie, setCookie } from '../../utils/cookies';
import styles from '../../styles';
import body from '../../utils/body';

interface ThemeProps {
  initialTheme?: ThemeName;
  children: React.ReactNode;
}

interface ContextProps {
  theme: Theme;
  setTheme: (name: ThemeName) => void;
}

// Theme mappings
const mappings: Record<ThemeName, Theme> = { light, dark };

// The context
const ThemeContext = createContext<ContextProps>({
  theme: dark,
  setTheme: () => null
});

// The component
const ThemeProvider = ({ initialTheme, children }: ThemeProps) => {
  const [theme, _setTheme] = useState<Theme>(
    initialTheme ? mappings[initialTheme] : light
  );

  // Handler for changing themes
  const setTheme = (name: ThemeName) => {
    body.addClass('theme-transition');
    setTimeout(() => body.removeClass('theme-transition'), 150);

    _setTheme(mappings[name]);
    setCookie('theme', name, {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    });
  };

  // Set the theme based on the cookie when component mounts
  useEffect(() => {
    const themeCookie = getCookie('theme');
    if (themeCookie && themeCookie in mappings)
      setTheme(themeCookie as ThemeName);
  }, []);

  console.log();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <TP theme={theme}>
        <Global
          styles={css`
            ${styles.reset} ${styles.global(theme)} ${styles.code(theme)}
          `}
        />
        {children}
      </TP>
    </ThemeContext.Provider>
  );
};

// The hook
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
