import { StaticThemeTokens, ThemeTokens } from '..';

export const buildStyleRule = (theme: ThemeTokens | StaticThemeTokens) => {
  return Object.entries(theme)
    .map(([k, v]) => `--${k}: ${v}`)
    .join(';');
};
