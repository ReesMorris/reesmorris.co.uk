export type ThemeToken =
  | 'color-background'
  | 'color-button-default-text'
  | 'color-button-default-background-hover'
  | 'color-button-primary-text'
  | 'color-button-primary-background'
  | 'color-button-primary-background-hover'
  | 'color-text-link'
  | 'color-text-link-hover'
  | 'color-text-primary';

export type StaticThemeToken =
  | 'base-rem-size'
  | 'base-font-size'
  | 'border-radius-none'
  | 'border-radius-small'
  | 'border-radius-medium'
  | 'border-radius-large'
  | 'border-radius-round'
  | 'breakpoint-small'
  | 'breakpoint-medium'
  | 'breakpoint-large'
  | 'button-size-small'
  | 'button-size-medium'
  | 'button-size-large'
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
  | 'color-gray-1'
  | 'color-gray-2'
  | 'color-gray-3'
  | 'color-gray-4'
  | 'color-gray-5'
  | 'color-gray-6'
  | 'color-gray-7'
  | 'color-gray-8'
  | 'color-gray-9'
  | 'color-white'
  | 'font-family'
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
  | 'space-2'
  | 'space-3'
  | 'space-4'
  | 'space-5'
  | 'transition-short'
  | 'transition-medium'
  | 'transition-long';

export type TokenValue = string | number;
export type ThemeTokens = Record<ThemeToken, TokenValue>;
export type StaticThemeTokens = Record<StaticThemeToken, TokenValue>;
