import { StaticThemeToken, ThemeToken } from '../tokens';

// NB: adding a semicolon (;) to the end will break any calc() functions

export const themeVar = (token: ThemeToken) => `var(--${token})`;

export const staticThemeVar = (token: StaticThemeToken) => `var(--${token})`;
