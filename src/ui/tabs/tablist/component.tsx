import styled from '@emotion/styled';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels as ReachTabPanels,
  TabsProps as ReachTabsProps
} from '@reach/tabs';
import { useEffect, useState } from 'react';
import { themeVar, staticThemeVar } from '~/theme';
import { useTabProvider } from '..';
import { cn } from '../../utils';

export interface TabListProps extends ReachTabsProps {
  tabs: string[];
  className?: string;
  children: React.ReactNode;
}

const ScTabs = styled(ReachTabs)`
  border-radius: ${staticThemeVar('border-radius-medium')};
  border: 1px solid ${themeVar('color-tablist-border')};
`;

const ScTabList = styled(ReachTabList)`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 1px solid ${themeVar('color-tablist-border')};
`;

interface TabStyleProps {
  $active?: boolean;
}
const ScTab = styled(ReachTab)<TabStyleProps>`
  position: relative;
  padding: ${staticThemeVar('space-2')};
  font-weight: ${staticThemeVar('font-weight-medium')};
  font-size: ${staticThemeVar('font-size-6')};
  color: ${({ $active }) =>
    themeVar($active ? 'color-text-link' : 'color-text-lighter')};
  cursor: pointer;
  background: transparent; /* Remove default button CSS */
  border: none; /* Remove default button CSS */

  &:after {
    display: none;
    content: '';
    position: absolute;
    bottom: 0;
    height: 3px;
    background: ${themeVar('color-text-link')};
    left: ${staticThemeVar('space-25')};
    right: ${staticThemeVar('space-25')};
    border-top-left-radius: ${staticThemeVar('border-radius-medium')};
    border-top-right-radius: ${staticThemeVar('border-radius-medium')};
    opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  }

  &[data-selected]:after,
  &:hover:after {
    display: block;
  }
`;

export const TabList = (props: TabListProps) => {
  const { currentTab, setCurrentTab } = useTabProvider();
  const [activeIndex, setActiveIndex] = useState(0);
  const { tabs, className, children, ...rest } = props;

  // Called when this tab list's active tab index changes
  const onTabChange = (index: number) => {
    setActiveIndex(index);
    setCurrentTab(tabs[index]);
  };

  // If another tab group is changed, try to replace this tab group's active index
  // with a tab of the same name (only if one exists, of course)
  useEffect(() => {
    const index = tabs.indexOf(currentTab);
    if (index !== -1) setActiveIndex(index);
  }, [currentTab, tabs]);

  return (
    <ScTabs
      {...rest}
      index={activeIndex}
      onChange={onTabChange}
      className={cn('tabs', className)}
    >
      <ScTabList>
        {tabs.map((tab, index) => (
          <ScTab key={tab} $active={activeIndex === index}>
            {tab}
          </ScTab>
        ))}
      </ScTabList>
      <ReachTabPanels>{children}</ReachTabPanels>
    </ScTabs>
  );
};
