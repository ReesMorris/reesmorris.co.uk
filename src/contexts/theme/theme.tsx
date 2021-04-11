import React from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { Global, css } from '@emotion/react';
import { themes, stylesheet } from '../../themes';
import globalStyles from '../../styles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <NextThemeProvider themes={Object.keys(themes)}>
      {/* Get stylesheet for all themes */}
      <Global
        styles={css`
          ${stylesheet()}
        `}
      />

      {/* Global styles */}
      {Object.keys(globalStyles).map(style => {
        return (
          <Global
            key={style}
            styles={css`
              ${globalStyles[style as never]}
            `}
          />
        );
      })}

      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
