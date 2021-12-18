import { LayoutProps } from '../types';
import { TokenValue } from '../../../theme';
import { breakpoint } from './breakpoint';
import { declaration } from './declaration';
import { spacing, spacingMap } from './spacing';
import { color } from './color';
import { radius } from './radius';
import { fontSize } from './font-size';

type PropMap = {
  [P in keyof LayoutProps]: (
    value: NonNullable<LayoutProps[P]>
  ) => TokenValue | undefined;
};

export const propMap: PropMap = {
  margin: spacing('margin'),
  padding: spacing('padding'),
  display: declaration('display'),
  width: declaration('width'),
  gap: v => declaration('gap')(spacingMap[v]),
  justifyContent: declaration('justify-content'),
  alignItems: declaration('align-items'),
  flexWrap: declaration('flex-wrap'),
  color: color,
  borderRadius: radius,
  fontSize: fontSize,
  breakpointSmall: breakpoint('small'),
  breakpointMedium: breakpoint('medium'),
  breakpointLarge: breakpoint('large')
};
