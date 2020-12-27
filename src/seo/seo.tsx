import React from 'react';
import { NextSeo } from 'next-seo';
import { OpenGraph } from 'next-seo/lib/types';

interface SEOProps {
  title: string;
  description?: string;
  canonical?: string;
  type?: 'basic' | 'article';
  publishedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  type = 'basic',
  publishedTime
}) => {
  return (
    <NextSeo
      title={title}
      titleTemplate='%s · Rees Morris'
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
  );
};

export default SEO;
