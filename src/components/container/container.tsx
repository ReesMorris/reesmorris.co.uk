import React from 'react';
import Styles from './container.styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Styles.Container>{children}</Styles.Container>;
};

export default Container;
