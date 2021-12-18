import { FontSize } from '../..';
import { staticThemeVar } from '../../../theme';

export const fontSize = (size: FontSize) =>
  `font-size: ${staticThemeVar(`font-size-${size}`)};`;
