import Head from 'next/head';
import { pageTitle } from './utils';
import { NextSeo } from 'next-seo';

export interface SEOProps {
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

export const SEO = (props: SEOProps) => {
  const metadata = {
    title: pageTitle(props.title),
    description:
      props.description ||
      'Rees Morris is a full-time React frontend developer, JavaScript enthusiast, and coffee drinker living in London.',
    canonical: props.canonical,
    article: props.article
  };

  return (
    <>
      <Head>
        <link
          rel='icon'
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
            props.emoji || `🧔🏻`
          }</text></svg>`}
        />
      </Head>

      <NextSeo
        title={metadata.title}
        description={metadata.description}
        canonical={metadata.canonical}
        openGraph={{
          url: metadata.canonical,
          title: metadata.title,
          description: metadata.description,
          locale: 'en_GB',
          type: metadata.article ? 'article' : 'website',
          site_name: 'Rees Morris',
          article: metadata.article
            ? {
                publishedTime: metadata.article.datePublished,
                section: metadata.article.section,
                authors: ['https://reesmorris.co.uk'],
                tags: metadata.article.tags
              }
            : undefined
        }}
        twitter={{
          handle: '@reesmorris',
          site: '@reesmorris',
          cardType: 'summary_large_image'
        }}
      />
    </>
  );
};
