import styled from '@emotion/styled';
import { LayoutProps } from './types';
import { mapProps, propMap } from './utils';

export const Layout = styled('div', {
  shouldForwardProp: prop => !(prop in propMap)
})<LayoutProps>(props => mapProps(props));
