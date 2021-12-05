import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const darkTokens: ThemeTokens = {
  'color-background': staticThemeVar('color-gray-1'),
  'color-button-default-text': staticThemeVar('color-white'),
  'color-button-default-background-hover': staticThemeVar('opacity-white-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-3'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-2'),
  'color-text-link': staticThemeVar('color-blue-6'),
  'color-text-link-hover': staticThemeVar('color-blue-7'),
  'color-text-primary': staticThemeVar('color-white')
};
