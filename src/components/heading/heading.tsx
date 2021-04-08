import React from 'react';
import Styles from './heading.styles';

interface HeadingProps {
  as?: React.ElementType;
  design?: string;
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

const Heading = ({
  as = 'h1',
  design,
  id,
  className,
  children
}: HeadingProps) => {
  return (
    <Styles.Heading as={as} design={design || as} id={id} className={className}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
