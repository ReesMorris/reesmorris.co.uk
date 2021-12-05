import styled from '@emotion/styled';
import { LayoutProps } from './types';
import { mapProps } from './utils/map-props';
import { propMap } from './utils/prop-map';

export const Layout = styled('div', {
  shouldForwardProp: prop => !(prop in propMap)
})<LayoutProps>(props => mapProps(props));
