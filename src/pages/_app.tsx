import React from 'react';
import { AppProps } from 'next/app';
import ThemeWrapper from '../components/theme-wrapper';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeWrapper>
    <Component {...pageProps} />
  </ThemeWrapper>
);

export default App;
