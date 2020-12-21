import React from 'react';
import Link from 'next/link';

interface LinkWrapperProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  className,
  children
}) => {
  // Broken link
  if (href[0] === '#') return <>{children}</>;

  // Internal link
  if (href[0] === '/')
    return (
      <Link href={href}>
        <a className={className}>{children}</a>
      </Link>
    );

  // External link
  return (
    <a
      href={href}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default LinkWrapper;
