import { themeVar } from '~/theme';
import { interpolateProp } from '../../utils';
import { Color } from '../types';

export const color = (value: Color) => {
  return interpolateProp<Record<'color', Color>, 'color'>('color', {
    [Color.Inherit]: 'color: inherit',
    [Color.Base]: `color: ${themeVar('color-text-base')}`,
    [Color.Lighter]: `color: ${themeVar('color-text-lighter')}`
  })({ color: value });
};
