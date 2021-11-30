import {
  ThemeProvider as NextThemeProvider,
  useTheme as NextUseTheme
} from 'next-themes';
import '~/theme/css'; // our global CSS!

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  return <NextThemeProvider>{props.children}</NextThemeProvider>;
};

export const useTheme = NextUseTheme;
