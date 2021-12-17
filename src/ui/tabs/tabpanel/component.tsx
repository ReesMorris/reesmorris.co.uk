import {
  TabPanel as ReachTabPanel,
  TabPanelProps as ReachTabPanelProps
} from '@reach/tabs';

export interface TabPanelProps extends ReachTabPanelProps {
  children?: React.ReactNode;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, ...rest } = props;

  return <ReachTabPanel {...rest}>{children}</ReachTabPanel>;
};
