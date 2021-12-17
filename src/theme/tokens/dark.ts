import { ThemeTokens } from './types';
import { staticThemeVar } from '../utils';

export const darkTokens: ThemeTokens = {
  'color-background': staticThemeVar('color-gray-14'),
  'color-blockquote-border': staticThemeVar('color-gray-12'),
  'color-blockquote-text': staticThemeVar('color-gray-6'),
  'color-button-default-text': staticThemeVar('color-white'),
  'color-button-default-background-hover': staticThemeVar('opacity-white-1'),
  'color-button-primary-text': staticThemeVar('color-white'),
  'color-button-primary-background': staticThemeVar('color-blue-12'),
  'color-button-primary-background-hover': staticThemeVar('color-blue-11'),
  'color-code-background': staticThemeVar('opacity-black-2'),
  'color-code-class': staticThemeVar('color-brown-4'),
  'color-code-comment': staticThemeVar('color-gray-6'),
  'color-code-constant': staticThemeVar('color-blue-4'),
  'color-code-function': staticThemeVar('color-purple-3'),
  'color-code-keyword': staticThemeVar('color-red-3'),
  'color-code-string': staticThemeVar('color-blue-5'),
  'color-input-background': staticThemeVar('color-gray-14'),
  'color-input-border': staticThemeVar('color-gray-11'),
  'color-input-border-focus': staticThemeVar('color-blue-10'),
  'color-input-placeholder': staticThemeVar('opacity-white-6'),
  'color-input-text': staticThemeVar('color-white'),
  'color-note-border': staticThemeVar('color-gray-13'),
  'color-text-lighter': staticThemeVar('color-gray-2'),
  'color-text-link': staticThemeVar('color-blue-5'),
  'color-text-link-hover': staticThemeVar('color-blue-4'),
  'color-text-base': staticThemeVar('color-white')
};
