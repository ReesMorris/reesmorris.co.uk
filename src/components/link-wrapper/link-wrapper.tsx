import React from 'react';
import Link from 'next/link';

interface LinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({ href, children }) => {
  // Broken link
  if (href[0] === '#') return <>{children}</>;

  // Internal link
  if (href[0] === '/')
    return (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );

  // External link
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  );
};

export default LinkWrapper;
