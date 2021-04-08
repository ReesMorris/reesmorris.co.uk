import React from 'react';
import Styles from './tabpanel.styles';

interface TabPanelProps {
  children: React.ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, ...rest }) => {
  return <Styles.TabPanel {...rest}>{children}</Styles.TabPanel>;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
TabPanel.tabsRole = 'TabPanel';

export default TabPanel;
