import { LayoutProps } from '..';
import { TokenValue } from '../../../theme';
import { declaration } from './declaration';
import { spacing } from './spacing';

type PropMap = {
  [P in keyof LayoutProps]: (value: LayoutProps[P]) => TokenValue | undefined;
};

export const propMap: PropMap = {
  margin: spacing('margin'),
  padding: spacing('padding'),
  display: declaration('display'),
  width: declaration('width')
};
