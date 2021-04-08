import React, { useEffect, useState } from 'react';
import { useTabs } from '../../contexts/tabs';
import Styles from './tablist.styles';

interface TabListProps {
  tabs: string[];
  children: React.ReactNode;
}

const TabList: React.FC<TabListProps> = ({ tabs, children }) => {
  const { lastChoice, setTab } = useTabs();
  const [selected, setSelected] = useState(0);

  // Called when the tab is changed
  const onSelect = (index: number): void => {
    setSelected(index);
    setTab(tabs[index]);
  };

  // If the user changes tabs elsewhere on the site and we have the
  // same-named tab here, let's change to that to keep things flowing.
  useEffect(() => {
    const tabIndex = tabs.indexOf(lastChoice);
    if (tabIndex !== -1 && selected !== tabIndex) setSelected(tabIndex);
  }, [lastChoice]);

  return (
    <Styles.Tabs
      selectedIndex={selected}
      onSelect={onSelect}
      selectedTabClassName='active'
      selectedTabPanelClassName='active'
    >
      <Styles.TabList>
        {tabs.map((tab, index) => (
          <Styles.Tab key={tab} $active={selected === index}>
            {tab}
          </Styles.Tab>
        ))}
      </Styles.TabList>
      {children}
    </Styles.Tabs>
  );
};

export default TabList;
