import React from 'react';
import Styles from './list.styles';

interface ListProps {
  as?: React.ElementType;
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ as, children }) => {
  return <Styles.List as={as}>{children}</Styles.List>;
};

export default List;
