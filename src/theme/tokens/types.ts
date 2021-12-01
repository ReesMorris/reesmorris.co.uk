export type ThemeToken = 'color-background' | 'color-text-primary';

export type StaticThemeToken =
  | 'color-white'
  | 'color-black'
  | 'font-family'
  | 'font-size-base'
  | 'space-0'
  | 'space-05'
  | 'space-1'
  | 'space-2'
  | 'space-3'
  | 'space-4'
  | 'space-5';

export type TokenValue = string | number;
export type ThemeTokens = Record<ThemeToken, TokenValue>;
export type StaticThemeTokens = Record<StaticThemeToken, TokenValue>;
