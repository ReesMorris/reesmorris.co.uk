import { BorderRadius } from '../..';
import { staticThemeVar } from '~/theme';

export const radius = (radius: BorderRadius) =>
  `border-radius: ${staticThemeVar(`border-radius-${radius}`)};`;
