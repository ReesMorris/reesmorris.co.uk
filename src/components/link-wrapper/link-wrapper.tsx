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
  if (!href) return <>{children}</>;

  // Anchor link
  // TODO: Add JS override to fix issue with sticky header
  if (href[0] === '#') {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

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
