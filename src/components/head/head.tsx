import React from 'react';
import NextHead from 'next/head';
import { NextSeo } from 'next-seo';

export interface HeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  article?: {
    datePublished?: string;
    section?: string;
    tags?: string[];
  };
  emoji?: string;
}

const Head = ({ title, description, canonical, article, emoji }: HeadProps) => {
  // Break down the received props to make sure there's always content
  const meta = {
    title: title ? `${title} · Rees Morris` : 'Rees Morris',
    description:
      description ||
      'Rees Morris is a full-time React frontend developer, JavaScript enthusiast, and coffee drinker living in London.',
    canonical,
    article
  };

  console.log(meta.title, meta.description, meta.canonical, meta.article);

  return (
    <>
      <NextHead>
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
            emoji || `🧔🏻`
          }</text></svg>`}
        />
      </NextHead>

      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={meta.canonical}
        openGraph={{
          url: meta.canonical,
          title: meta.title,
          description: meta.description,
          locale: 'en_IE',
          type: meta.article ? 'article' : 'website',
          site_name: 'Rees Morris',
          article: meta.article
            ? {
                publishedTime: meta.article.datePublished,
                section: meta.article.section,
                authors: ['https://reesmorris.co.uk'],
                tags: meta.article.tags
              }
            : undefined
        }}
        twitter={{
          handle: '@ReesMorris',
          site: '@ReesMorris',
          cardType: 'summary'
        }}
      />
    </>
  );
};

export default Head;
