import styled from '@emotion/styled';
import { mapProps } from './utils/map-props';
import { propMap } from './utils/prop-map';

export const Layout = styled('div', {
  shouldForwardProp: prop => !(prop in propMap)
})(props => mapProps(props));
