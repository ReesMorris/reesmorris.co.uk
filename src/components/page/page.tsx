import React from 'react';
import Header from '../header';
import Footer from '../footer';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
