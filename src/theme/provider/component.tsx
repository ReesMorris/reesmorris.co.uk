import { Global } from '@emotion/react';
import {
  ThemeProvider as NextThemeProvider,
  useTheme as NextUseTheme
} from 'next-themes';
import { globalCSS, resetCSS, rootCSS } from '..';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return (
    <NextThemeProvider>
      <Global styles={resetCSS} />
      <Global styles={globalCSS} />
      <Global styles={rootCSS} />
      {props.children}
    </NextThemeProvider>
  );
};

export const useTheme = NextUseTheme;
