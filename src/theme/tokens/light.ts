import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const lightTokens: ThemeTokens = {
  'color-background': staticThemeVar('color-white'),
  'color-blockquote-border': staticThemeVar('color-gray-3'),
  'color-blockquote-text': staticThemeVar('color-gray-9'),
  'color-button-default-text': staticThemeVar('color-black'),
  'color-button-default-background-hover': staticThemeVar('opacity-black-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-7'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-8'),
  'color-code-background': staticThemeVar('color-gray-1'),
  'color-code-class': staticThemeVar('color-brown-11'),
  'color-code-comment': staticThemeVar('color-gray-8'),
  'color-code-constant': staticThemeVar('color-blue-8'),
  'color-code-function': staticThemeVar('color-purple-8'),
  'color-code-keyword': staticThemeVar('color-red-10'),
  'color-code-string': staticThemeVar('color-blue-11'),
  'color-input-background': staticThemeVar('color-white'),
  'color-input-border': staticThemeVar('color-gray-3'),
  'color-input-border-focus': staticThemeVar('color-blue-5'),
  'color-input-placeholder': staticThemeVar('opacity-black-6'),
  'color-input-text': staticThemeVar('color-black'),
  'color-note-border': staticThemeVar('color-gray-2'),
  'color-text-lighter': staticThemeVar('color-gray-13'),
  'color-text-link': staticThemeVar('color-blue-8'),
  'color-text-link-hover': staticThemeVar('color-blue-9'),
  'color-text-base': staticThemeVar('color-black')
};
