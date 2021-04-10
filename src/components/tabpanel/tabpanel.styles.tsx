import styled from '@emotion/styled';
import { TabPanel as UITabPanel } from 'react-tabs';
import { consts } from '../../themes';

const TabPanel = styled(UITabPanel)`
  &.active {
    padding: ${consts.tablist_padding}rem;
  }
`;

export default { TabPanel };
