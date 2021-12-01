import { StaticThemeToken, ThemeToken } from '../tokens';

export const themeVar = (token: ThemeToken) => `var(--${token})`;

export const staticThemeVar = (token: StaticThemeToken) => `var(--${token})`;
