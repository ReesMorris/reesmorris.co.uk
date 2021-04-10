import React from 'react';
import Styles from './image.styles';

interface ImageProps {
  src: string;
  alt: string;
  'aria-label'?: string;
  role?: 'image' | 'presentation';
  className?: string;
}

const Image = ({
  src,
  alt,
  'aria-label': ariaLabel,
  role = 'image',
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
