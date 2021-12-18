import styled from '@emotion/styled';
import { staticThemeVar } from '~/theme';

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const ScTabContent = styled.div`
  padding: ${staticThemeVar('space-2')};
`;

export const TabContent = (props: TabContentProps) => {
  const { children, ...rest } = props;
  return <ScTabContent {...rest}>{children}</ScTabContent>;
};
