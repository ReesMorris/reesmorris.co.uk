import React from 'react';
import Styles from './wrapper.styles';

interface WrapperProps {
  type?: 'body' | 'header';
  children: React.ReactNode;
}

const Wrapper = ({ type = 'body', children }: WrapperProps) => {
  return <Styles.Wrapper type={type}>{children}</Styles.Wrapper>;
};

export default Wrapper;
