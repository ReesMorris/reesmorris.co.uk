import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from '../../themes';
import GlobalStyle from '../../styles';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  // TODO: Allow user to toggle theme

  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
