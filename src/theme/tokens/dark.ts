import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const darkTokens: ThemeTokens = {
  'blockquote-border-color': staticThemeVar('color-gray-2'),
  'color-background': staticThemeVar('color-gray-1'),
  'color-button-default-text': staticThemeVar('color-white'),
  'color-button-default-background-hover': staticThemeVar('opacity-white-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-3'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-2'),
  'color-code-background': staticThemeVar('opacity-black-1'),
  'color-code-class': staticThemeVar('color-brown-8'),
  'color-code-comment': staticThemeVar('color-gray-6'),
  'color-code-constant': staticThemeVar('color-blue-6'),
  'color-code-function': staticThemeVar('color-purple-9'),
  'color-code-keyword': staticThemeVar('color-red-8'),
  'color-code-string': staticThemeVar('color-blue-7'),
  'color-input-background': staticThemeVar('color-gray-1'),
  'color-input-border': staticThemeVar('color-gray-3'),
  'color-input-border-focus': staticThemeVar('color-blue-6'),
  'color-input-placeholder': staticThemeVar('opacity-white-6'),
  'color-input-text': staticThemeVar('color-white'),
  'color-text-lighter': staticThemeVar('color-gray-8'),
  'color-text-link': staticThemeVar('color-blue-6'),
  'color-text-link-hover': staticThemeVar('color-blue-7'),
  'color-text-base': staticThemeVar('color-white')
};
