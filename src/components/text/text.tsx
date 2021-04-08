import React from 'react';
import Styles from './text.styles';

interface TextProps {
  as?: React.ElementType;
  design?: string;
  bold?: boolean;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Text = ({
  as = 'p',
  design,
  bold,
  dark,
  className,
  children
}: TextProps) => {
  return (
    <Styles.Text
      as={as}
      design={design || as}
      bold={bold}
      dark={dark}
      className={className}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
