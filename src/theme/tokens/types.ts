export type ThemeToken = 'color-background' | 'color-text-primary';

export type StaticThemeToken = 'color-white' | 'color-black';

type Value = string | number;
export type ThemeTokens = Record<ThemeToken, Value>;
export type StaticThemeTokens = Record<StaticThemeToken, Value>;
