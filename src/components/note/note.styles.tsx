import styled from 'styled-components';
import { NoteType } from './note';
import UIIcon from '../icon';

interface NoteProps {
  $type?: NoteType;
}
const Note = styled.div<NoteProps>`
  display: flex;
  padding: 2rem;
  border-radius: 0.6rem;
  border: 0.5rem solid
    ${props => props.$type === 'info' && props.theme.note.info.background};
  color: ${props => props.$type === 'info' && props.theme.note.info.color};

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const Content = styled.div``;

const IconContainer = styled.div`
  margin-right: 1.5rem;
  width: 2rem;
`;

const Icon = styled(UIIcon)`
  margin: 0.8rem 1.5rem 0 0;
  color: inherit;
`;

export default { Note, Content, IconContainer, Icon };
