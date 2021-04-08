import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'basic' | 'article';
  publishedTime?: string;
  emoji?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  type = 'basic',
  publishedTime,
  emoji
}: SEOProps) => {
  return (
    <>
      <Head>
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
            emoji || `🧔🏻`
          }</text></svg>`}
        />
      </Head>
      <NextSeo
        title={title ? `${title} · Rees Morris` : 'Rees Morris'}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          type,
          title,
          description,
          locale: 'en_GB',
          site_name: 'Rees Morris',
          article:
            type === 'article'
              ? { publishedTime, authors: ['Rees Morris'] }
              : undefined
        }}
        twitter={{
          cardType: 'summary',
          site: 'reesmorris',
          handle: 'reesmorris'
        }}
      />
    </>
  );
};

export default SEO;
