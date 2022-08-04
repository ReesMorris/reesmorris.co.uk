import type { AppProps } from 'next/app';
import { PlausibleProvider } from '~/components';
import { ThemeProvider } from '~/theme';
import { TabProvider } from '~/ui';
import '../libs/fontawesome';

export default ({ Component, pageProps }: AppProps) => {
  return (
    <PlausibleProvider domain='reesmorris.co.uk'>
      <ThemeProvider>
        <TabProvider>
          <Component {...pageProps} />
        </TabProvider>
      </ThemeProvider>
    </PlausibleProvider>
  );
};
