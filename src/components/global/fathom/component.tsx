import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as FathomClient from 'fathom-client';

export const Fathom = () => {
  const router = useRouter();

  useEffect(() => {
    FathomClient.load('GLPYEDSZ', {
      includedDomains: ['reesmorris.co.uk']
    });

    const onRouteChangeComplete = () => FathomClient.trackPageview();

    router.events.on('routeChangeComplete', onRouteChangeComplete);
    return () =>
      router.events.off('routeChangeComplete', onRouteChangeComplete);
  }, [router.events]);

  return null;
};
