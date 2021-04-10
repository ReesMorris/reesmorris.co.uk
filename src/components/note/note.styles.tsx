import styled from '@emotion/styled';
import { NoteType } from './note';
import UIIcon from '../icon';
import { themeVar } from '../../themes';

interface NoteProps {
  $type?: NoteType;
}
const Note = styled.div<NoteProps>`
  display: flex;
  padding: 2rem;
  border-radius: 0.6rem;
  border: 0.5rem solid
    ${props => props.$type === 'info' && themeVar('color-note-info-bg')};
  color: ${props => props.$type === 'info' && themeVar('color-note-info')};

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
