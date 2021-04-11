import React from 'react';
import Styles from './tabpanel.styles';

export interface TabPanelProps {
  _parentProps?: {
    id: string;
    hidden: boolean;
    'aria-labelledby': string;
  };
  children: React.ReactNode;
}

const TabPanel = ({ _parentProps, children }: TabPanelProps) => {
  return (
    <Styles.TabPanel
      role='tabpanel'
      id={_parentProps?.id}
      hidden={_parentProps?.hidden}
      aria-labelledby={_parentProps?.['aria-labelledby']}
    >
      {children}
    </Styles.TabPanel>
  );
};

export default TabPanel;
