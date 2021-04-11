import React from 'react';
import Head, { HeadProps } from '../head';
import Header from '../header';
import Footer from '../footer';

interface PageProps {
  seo?: HeadProps;
  children: React.ReactNode;
}

const Page = ({ seo, children }: PageProps) => {
  return (
    <>
      <Head {...seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
