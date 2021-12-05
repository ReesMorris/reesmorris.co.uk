import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const lightTokens: ThemeTokens = {
  'color-background': staticThemeVar('color-white'),
  'color-button-default-text': staticThemeVar('color-black'),
  'color-button-default-background-hover': staticThemeVar('opacity-black-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-4'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-3'),
  'color-text-link': staticThemeVar('color-blue-5'),
  'color-text-link-hover': staticThemeVar('color-blue-6'),
  'color-text-primary': staticThemeVar('color-black')
};
