import type { AppProps } from 'next/app';
import { ThemeProvider } from '~/providers';
import { TabProvider } from '~/ui';
import '../libs/fontawesome';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <TabProvider>
        <Component {...pageProps} />
      </TabProvider>
    </ThemeProvider>
  );
}

export default MyApp;
