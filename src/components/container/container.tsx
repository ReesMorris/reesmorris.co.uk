import React from 'react';
import Styles from './container.styles';

interface ContainerProps {
  small?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ small, children }) => {
  return <Styles.Container small={small}>{children}</Styles.Container>;
};

export default Container;
