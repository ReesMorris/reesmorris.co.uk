import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const lightTokens: ThemeTokens = {
  'color-background': staticThemeVar('color-white'),
  'color-button-default-text': staticThemeVar('color-black'),
  'color-button-default-background-hover': staticThemeVar('opacity-black-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-4'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-3'),
  'color-input-background': staticThemeVar('color-white'),
  'color-input-border': staticThemeVar('color-gray-8'),
  'color-input-border-focus': staticThemeVar('color-blue-6'),
  'color-input-placeholder': staticThemeVar('opacity-black-6'),
  'color-input-text': staticThemeVar('color-black'),
  'color-text-lighter': staticThemeVar('color-gray-2'),
  'color-text-link': staticThemeVar('color-blue-5'),
  'color-text-link-hover': staticThemeVar('color-blue-6'),
  'color-text-base': staticThemeVar('color-black')
};
