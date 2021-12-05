import { Breakpoint, BreakpointSize } from '../types';
import { staticTokens } from '~/theme';
import { mapProps } from './map-props';
import { toRem } from '../../utils/to-rem';

export const breakpoint = (size: BreakpointSize) => (props: Breakpoint) =>
  `@media screen and (max-width: ${toRem(
    staticTokens[`breakpoint-${size}`],
    16 /* default browser font size */
  )}) {
   ${mapProps(props)}
  }`;
