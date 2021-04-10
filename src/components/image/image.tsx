import React from 'react';
import Styles from './image.styles';

interface ImageProps {
  src: string;
  alt: string;
  'aria-label'?: string;
  role?: 'presentation';
  className?: string;
}

const Image = ({
  src,
  alt,
  'aria-label': ariaLabel,
  role,
  className
}: ImageProps) => {
  return (
    <Styles.Image
      src={src}
      alt={alt}
      aria-label={ariaLabel}
      role={role}
      className={className}
    />
  );
};

export default Image;
