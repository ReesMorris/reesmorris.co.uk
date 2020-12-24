import React from 'react';
import Styles from './heading.styles';

interface HeadingProps {
  as?: React.ElementType;
  design?: string;
  className?: string;
  children?: React.ReactNode;
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  as = 'h1',
  design,
  className,
  children
}) => {
  return (
    <Styles.Heading as={as} design={design || as} className={className}>
      {children}
    </Styles.Heading>
  );
};

export default Heading;
