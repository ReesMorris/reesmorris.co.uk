import type { AppProps } from 'next/app';
import { Fathom } from '~/components';
import { ThemeProvider } from '~/theme';
import { TabProvider } from '~/ui';
import '../libs/fontawesome';

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <TabProvider>
        <Fathom />
        <Component {...pageProps} />
      </TabProvider>
    </ThemeProvider>
  );
};
