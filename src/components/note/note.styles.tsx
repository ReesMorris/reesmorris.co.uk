import styled from 'styled-components';
import { NoteType } from './note';
import UIIcon from '../icon';

interface NoteProps {
  $type?: NoteType;
}
const Note = styled.div<NoteProps>`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 0.6rem;
  background: ${props =>
    props.$type === 'info' && props.theme.note.info.background};
  color: ${props => props.$type === 'info' && props.theme.note.info.color};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const IconContainer = styled.div`
  margin-right: 1.5rem;
  width: 2rem;
`;

const Icon = styled(UIIcon)`
  margin-right: 1.5rem;
  color: inherit;
`;

export default { Note, IconContainer, Icon };
