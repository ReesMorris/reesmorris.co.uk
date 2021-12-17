export type ThemeToken =
  | 'color-background'
  | 'color-blockquote-border'
  | 'color-blockquote-text'
  | 'color-button-default-text'
  | 'color-button-default-background-hover'
  | 'color-button-primary-text'
  | 'color-button-primary-background'
  | 'color-button-primary-background-hover'
  | 'color-code-background'
  | 'color-code-class'
  | 'color-code-comment'
  | 'color-code-constant'
  | 'color-code-function'
  | 'color-code-keyword'
  | 'color-code-string'
  | 'color-input-background'
  | 'color-input-border'
  | 'color-input-border-focus'
  | 'color-input-placeholder'
  | 'color-input-text'
  | 'color-note-border'
  | 'color-text-lighter'
  | 'color-text-link'
  | 'color-text-link-hover'
  | 'color-text-base';

export type StaticThemeToken =
  | 'base-rem-size'
  | 'border-radius-none'
  | 'border-radius-small'
  | 'border-radius-medium'
  | 'border-radius-large'
  | 'border-radius-round'
  | 'border-width-blockquote'
  | 'border-width-note'
  | 'breakpoint-small'
  | 'breakpoint-medium'
  | 'breakpoint-large'
  | 'color-black'
  | 'color-blue-1'
  | 'color-blue-2'
  | 'color-blue-3'
  | 'color-blue-4'
  | 'color-blue-5'
  | 'color-blue-6'
  | 'color-blue-7'
  | 'color-blue-8'
  | 'color-blue-9'
  | 'color-blue-10'
  | 'color-blue-11'
  | 'color-blue-12'
  | 'color-blue-13'
  | 'color-blue-14'
  | 'color-blue-15'
  | 'color-brown-1'
  | 'color-brown-2'
  | 'color-brown-3'
  | 'color-brown-4'
  | 'color-brown-5'
  | 'color-brown-6'
  | 'color-brown-7'
  | 'color-brown-8'
  | 'color-brown-9'
  | 'color-brown-10'
  | 'color-brown-11'
  | 'color-brown-12'
  | 'color-brown-13'
  | 'color-brown-14'
  | 'color-brown-15'
  | 'color-gray-1'
  | 'color-gray-2'
  | 'color-gray-3'
  | 'color-gray-4'
  | 'color-gray-5'
  | 'color-gray-6'
  | 'color-gray-7'
  | 'color-gray-8'
  | 'color-gray-9'
  | 'color-gray-10'
  | 'color-gray-11'
  | 'color-gray-12'
  | 'color-gray-13'
  | 'color-gray-14'
  | 'color-gray-15'
  | 'color-purple-1'
  | 'color-purple-2'
  | 'color-purple-3'
  | 'color-purple-4'
  | 'color-purple-5'
  | 'color-purple-6'
  | 'color-purple-7'
  | 'color-purple-8'
  | 'color-purple-9'
  | 'color-purple-10'
  | 'color-purple-11'
  | 'color-purple-12'
  | 'color-purple-13'
  | 'color-purple-14'
  | 'color-purple-15'
  | 'color-red-1'
  | 'color-red-2'
  | 'color-red-3'
  | 'color-red-4'
  | 'color-red-5'
  | 'color-red-6'
  | 'color-red-7'
  | 'color-red-8'
  | 'color-red-9'
  | 'color-red-10'
  | 'color-red-11'
  | 'color-red-12'
  | 'color-red-13'
  | 'color-red-14'
  | 'color-red-15'
  | 'color-white'
  | 'font-family-base'
  | 'font-family-mono'
  | 'line-height-base'
  | 'line-height-small'
  | 'line-height-medium'
  | 'line-height-large'
  | 'opacity-black-1'
  | 'opacity-black-2'
  | 'opacity-black-3'
  | 'opacity-black-4'
  | 'opacity-black-5'
  | 'opacity-black-6'
  | 'opacity-black-7'
  | 'opacity-black-8'
  | 'opacity-black-9'
  | 'opacity-white-1'
  | 'opacity-white-2'
  | 'opacity-white-3'
  | 'opacity-white-4'
  | 'opacity-white-5'
  | 'opacity-white-6'
  | 'opacity-white-7'
  | 'opacity-white-8'
  | 'opacity-white-9'
  | 'space-0'
  | 'space-05'
  | 'space-1'
  | 'space-15'
  | 'space-2'
  | 'space-25'
  | 'space-3'
  | 'space-4'
  | 'space-5'
  | 'font-size-1'
  | 'font-size-2'
  | 'font-size-3'
  | 'font-size-4'
  | 'font-size-5'
  | 'font-size-6'
  | 'font-size-7'
  | 'font-size-base'
  | 'font-weight-light'
  | 'font-weight-normal'
  | 'font-weight-semibold'
  | 'font-weight-bold'
  | 'transition-short'
  | 'transition-medium'
  | 'transition-long'
  | 'ui-nowrap-size-small'
  | 'ui-nowrap-size-medium'
  | 'ui-nowrap-size-large';

export type TokenValue = string | number;
export type ThemeTokens = Record<ThemeToken, TokenValue>;
export type StaticThemeTokens = Record<StaticThemeToken, TokenValue>;
