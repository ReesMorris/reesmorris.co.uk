import styled from '@emotion/styled';
import { Tabs as UITabs, Tab as UITab, TabList as UITabList } from 'react-tabs';

const Tabs = styled(UITabs)`
  border: 0.1rem solid ${props => props.theme.tablist.border};
  border-radius: 0.6rem;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme._consts.paddings.tablist_padding};
  }
`;

const TabList = styled(UITabList)`
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 0.1rem solid ${props => props.theme.tablist.border};
`;

interface TabProps {
  $active: boolean;
}
const Tab = styled(UITab)<TabProps>`
  display: inline-block;
  position: relative;
  padding: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};

  &.active,
  &.active:hover {
    color: ${props => props.theme.tablist.tab.active_text};
    &:after {
      display: block;
      background: ${props => props.theme.tablist.tab.active_text};
    }
  }

  &:hover:after,
  &:focus:after {
    display: block;
    background: ${props => props.theme.tablist.tab.marker};
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    bottom: 0;
    left: ${props => props.theme._consts.paddings.tablist_padding};
    right: ${props => props.theme._consts.paddings.tablist_padding};
    margin: 0 0.5rem;
    height: 0.3rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export default { Tabs, TabList, Tab };
