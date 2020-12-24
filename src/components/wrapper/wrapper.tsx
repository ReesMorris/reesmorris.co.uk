import React from 'react';
import Styles from './wrapper.styles';

interface WrapperProps {
  type?: 'body' | 'header';
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ type = 'body', children }) => {
  return <Styles.Wrapper type={type}>{children}</Styles.Wrapper>;
};

export default Wrapper;
