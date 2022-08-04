import styled from '@emotion/styled';
import { staticThemeVar, themeVar } from '~/theme';
import { Icon, IconProps } from '..';
import { cn } from '../utils';

export interface NoteProps {
  children?: React.ReactNode;
  icon?: IconProps;
  className?: string;
}

const ScNote = styled.aside`
  display: flex;
  padding: ${staticThemeVar('space-2')};
  border-radius: ${staticThemeVar('border-radius-large')};
  border-width: ${staticThemeVar('border-width-note')};
  border-color: ${themeVar('color-note-border')};
  border-style: solid;
`;

const ScIconWrapper = styled.div`
  flex-shrink: 0;
  margin-right: ${staticThemeVar('space-15')};
  width: ${staticThemeVar('space-2')};
`;

const ScContent = styled.div`
  overflow: auto;
`;

export const Note = (props: NoteProps) => {
  return (
    <ScNote className={cn('note', props.className)}>
      {props.icon && (
        <ScIconWrapper>
          <Icon {...props.icon} />
        </ScIconWrapper>
      )}
      <ScContent>{props.children}</ScContent>
    </ScNote>
  );
};
