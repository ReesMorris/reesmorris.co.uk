import React from 'react';
import Styles from './text.styles';

interface TextProps {
  as?: React.ElementType;
  design?: string;
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({
  as = 'p',
  design,
  bold,
  className,
  children
}) => {
  return (
    <Styles.Text
      as={as}
      design={design || as}
      bold={bold}
      className={className}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
