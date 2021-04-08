import React from 'react';
import { IconProps } from '../icon/icon';
import Styles from './note.styles';

export type NoteType = 'info';
interface NoteProps {
  type?: NoteType;
  icon?: IconProps;
  children: React.ReactNode;
}

const Note: React.FC<NoteProps> = ({ type, icon, children }) => {
  return (
    <Styles.Note $type={type}>
      {icon && (
        <Styles.IconContainer>
          <Styles.Icon {...icon} />
        </Styles.IconContainer>
      )}
      {children}
    </Styles.Note>
  );
};

export default Note;
