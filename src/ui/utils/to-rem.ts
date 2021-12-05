import { rem } from 'polished';
import { staticTokens } from '~/theme';

export const toRem = (value: string | number, base?: string | number) =>
  rem(value, base || staticTokens['base-rem-size']);
