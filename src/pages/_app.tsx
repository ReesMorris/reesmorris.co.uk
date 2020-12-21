import React from 'react';
import { AppProps } from 'next/app';
import ThemeWrapper from '../components/theme-wrapper';
import useIsTabbing from '../components/hooks/use-is-tabbing';
import '../utils/font-awesome';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useIsTabbing();

  return (
    <ThemeWrapper>
      <Component {...pageProps} />
    </ThemeWrapper>
  );
};

export default App;
