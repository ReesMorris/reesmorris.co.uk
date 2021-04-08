import React from 'react';
import Text from '../text';
import Styles from './list-item.styles';

interface ListItemProps {
  children: React.ReactNode;
}

const ListItem = ({ children }: ListItemProps) => {
  return (
    <Styles.ListItem>
      <Text as='span'>{children}</Text>
    </Styles.ListItem>
  );
};

export default ListItem;
