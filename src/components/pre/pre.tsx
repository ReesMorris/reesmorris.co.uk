import React from 'react';
import Styles from './pre.styles';

interface PreProps {
  children: React.ReactNode;
}

const Pre = ({ children }: PreProps) => {
  return <Styles.Pre tabIndex={0}>{children}</Styles.Pre>;
};

export default Pre;
