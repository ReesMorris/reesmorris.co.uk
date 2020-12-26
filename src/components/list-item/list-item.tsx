import React from 'react';
import Styles from './list-item.styles';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return <Styles.ListItem>{children}</Styles.ListItem>;
};

export default List;
