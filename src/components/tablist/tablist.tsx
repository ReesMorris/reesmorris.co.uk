import React, { useEffect, useRef, useState } from 'react';
import Styles from './tablist.styles';
import { randomBytes } from 'crypto';
import { TabPanelProps } from '../tabpanel/tabpanel';
import { useTabs } from '../../contexts/tabs';

interface TabListProps {
  tabs: string[];
  children: React.ReactNode;
}

const TabList = ({ tabs, children }: TabListProps) => {
  const [id] = useState(randomBytes(12).toString('base64')); // random ID for aria labels
  const [hasFocus, setHasFocus] = useState(false); // for keyboard events (L&R)
  const [modChildren, setModChildren] = useState<
    React.ReactElement<TabPanelProps>[]
  >([]); // array of modified `children`, where we can pass in specific props
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // active tab index
  const tabRefs = useRef([]); // array of tabs, to change focus when using keyboard navigation
  const { tab, setTab } = useTabs();

  // Update the active index
  const setActiveTab = (index: number) => {
    setActiveIndex(index);
    setTab(tabs[index]);
  };

  // Update all of the TabPanel children to pass in the props we need
  const updateChildren = () => {
    const updated = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        const elementChild: React.ReactElement<TabPanelProps> =
          React.cloneElement(child, {
            _parentProps: {
              id: `tablist-${id}-panel-${index}`,
              hidden: activeIndex !== index,
              'aria-labelledby': `tablist-${id}-tab-${index}`
            }
          } as TabPanelProps);
        return elementChild;
      }
    });
    setModChildren(updated as React.ReactElement<TabPanelProps>[]);
  };

  // When the user clicks on a tab in a different TabList component, we'll
  // check if we also have a tab with the same name. If so, set our tab to that.
  useEffect(() => {
    if (tab) {
      const index = tabs.indexOf(tab);
      if (index > -1) setActiveIndex(index); // update the state directly, rather than the hook
    }
  }, [tab]);

  // Update children if the index changes, and on component mount
  useEffect(() => {
    updateChildren();
  }, [activeIndex]);

  const onKeyUp = (key: KeyboardEvent) => {
    if (activeIndex !== null && hasFocus) {
      const totalChildren = modChildren.length;
      let newIndex = null;

      if (key.code === 'ArrowRight')
        newIndex = (activeIndex + 1) % totalChildren;
      if (key.code === 'ArrowLeft')
        newIndex = (activeIndex - 1 + totalChildren) % totalChildren;
      if (key.code === 'Home' && activeIndex !== 0) newIndex = 0;
      if (key.code === 'End' && activeIndex !== totalChildren - 1)
        newIndex = totalChildren - 1;

      if (newIndex !== null) {
        (tabRefs.current[newIndex] as HTMLElement).focus();
        setActiveTab(newIndex);
      }
    }
  };

  // Listen for focus changes
  useEffect(() => {
    window.addEventListener('keyup', onKeyUp);
    return () => window.removeEventListener('keyup', onKeyUp);
  }, [hasFocus, activeIndex]);

  return (
    <Styles.Tabs className='tabs'>
      <Styles.TabList role='tablist'>
        {tabs.map((tab, index) => {
          const active = activeIndex === index;

          return (
            <Styles.Tab
              key={tab}
              role='tab'
              ref={el => ((tabRefs.current[index] as HTMLElement | null) = el)}
              id={`tablist-${id}-tab-${index}`}
              aria-selected={active}
              aria-controls={`tablist-${id}-panel-${index}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setActiveTab(index)}
              className={active ? 'active' : ''}
              onFocus={() => setHasFocus(true)}
              onBlur={() => setHasFocus(false)}
            >
              {tab}
            </Styles.Tab>
          );
        })}
      </Styles.TabList>
      {modChildren}
    </Styles.Tabs>
  );
};

export default TabList;
