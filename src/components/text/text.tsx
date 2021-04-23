import React from 'react';
import Styles from './text.styles';

export interface TextProps {
  as?: React.ElementType;
  design?: React.ElementType;
  bold?: boolean;
  dark?: boolean;
  thinHeight?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Text = ({
  as = 'p',
  design,
  bold,
  dark,
  thinHeight,
  className,
  children
}: TextProps) => {
  return (
    <Styles.Text
      as={as}
      design={design || as}
      bold={bold}
      dark={dark}
      thinHeight={thinHeight}
      className={className}
    >
      {children}
    </Styles.Text>
  );
};

export default Text;
