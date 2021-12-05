import { staticThemeVar } from '../../../theme';
import { Margin, MarginValue, Padding, PaddingValue } from '../types';

export const spacingMap: Record<MarginValue | PaddingValue, string> = {
  auto: 'auto',
  0: staticThemeVar('space-0'),
  0.5: staticThemeVar('space-05'),
  1: staticThemeVar('space-1'),
  2: staticThemeVar('space-2'),
  3: staticThemeVar('space-3'),
  4: staticThemeVar('space-4'),
  5: staticThemeVar('space-5')
};

export const spacing =
  (name: 'margin' | 'padding') => (value: Margin | Padding) => {
    let css = '';

    if (value.top) css += `${name}-top: ${spacingMap[value.top]};`;
    if (value.right) css += `${name}-right: ${spacingMap[value.right]};`;
    if (value.bottom) css += `${name}-bottom: ${spacingMap[value.bottom]};`;
    if (value.left) css += `${name}-left: ${spacingMap[value.left]};`;

    if (value.x) {
      css += `${name}-left: ${spacingMap[value.x]};`;
      css += `${name}-right: ${spacingMap[value.x]};`;
    }
    if (value.y) {
      css += `${name}-top: ${spacingMap[value.y]};`;
      css += `${name}-bottom: ${spacingMap[value.y]};`;
    }

    return css;
  };
