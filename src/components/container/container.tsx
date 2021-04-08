import React from 'react';
import Styles from './container.styles';

interface ContainerProps {
  small?: boolean;
  children: React.ReactNode;
}

const Container = ({ small, children }: ContainerProps) => {
  return <Styles.Container small={small}>{children}</Styles.Container>;
};

export default Container;
