import React from 'react';
import Styles from './wrapper.styles';

interface WrapperProps {
  width?: 'body' | 'header';
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ width, children }) => {
  return <Styles.Wrapper width={width}>{children}</Styles.Wrapper>;
};

export default Wrapper;
