import React from 'react';
import { AppProps } from 'next/app';
import useIsTabbing from '../components/hooks/use-is-tabbing';
import TabsProvider from '../contexts/tabs';
import ThemeProvider from '../contexts/theme';
import '../libs/fontawesome';

const App = ({ Component, pageProps }: AppProps) => {
  useIsTabbing();

  return (
    <ThemeProvider>
      <TabsProvider>
        <Component {...pageProps} />
      </TabsProvider>
    </ThemeProvider>
  );
};

export default App;
