import styled from '@emotion/styled';
import { TabPanel as UITabPanel } from 'react-tabs';

const TabPanel = styled(UITabPanel)`
  &.active {
    padding: ${props => props.theme._consts.paddings.tablist_padding};
  }
`;

export default { TabPanel };
