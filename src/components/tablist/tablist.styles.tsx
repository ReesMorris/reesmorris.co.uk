import styled from '@emotion/styled';
import { consts, themeVar } from '../../themes';

const Tabs = styled.div`
  border: 0.1rem solid ${themeVar('color-content-border')};
  border-radius: 0.6rem;

  &:not(:last-child) {
    margin-bottom: ${consts.tablist_padding}rem;
  }
`;

const TabList = styled.ul`
  overflow-x: auto;
  white-space: nowrap;
  border-bottom: 0.1rem solid ${themeVar('color-content-border')};
`;

const Tab = styled.li`
  display: inline-block;
  position: relative;
  padding: 2rem;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  color: ${themeVar('color-secondary')};

  &.active,
  &.active:hover {
    color: ${themeVar('color-link')};
    &:after {
      display: block;
      background: ${themeVar('color-link')};
    }
  }

  &:hover:after {
    display: block;
    background: ${themeVar('color-content-border-focus')};
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
    bottom: 0;
    left: ${consts.tablist_padding}rem;
    right: ${consts.tablist_padding}rem;
    margin: 0 0.5rem;
    height: 0.3rem;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

export default { Tabs, TabList, Tab };
