import React from 'react';
import Text from '../text';
import Styles from './list-item.styles';

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <Styles.ListItem>
      <Text as='span'>{children}</Text>
    </Styles.ListItem>
  );
};

export default List;
