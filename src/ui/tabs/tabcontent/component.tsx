import styled from '@emotion/styled';
import { staticThemeVar } from '~/theme';
import { cn } from '../../utils';

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const ScTabContent = styled.div`
  padding: ${staticThemeVar('space-2')};
`;

export const TabContent = (props: TabContentProps) => {
  const { children, className, ...rest } = props;
  return (
    <ScTabContent {...rest} className={cn('tabcontent', className)}>
      {children}
    </ScTabContent>
  );
};
