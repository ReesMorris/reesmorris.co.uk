import { css } from '@emotion/react';
import { themeVar, staticThemeVar } from '../utils';

export const globalCSS = css`
  body {
    background-color: ${themeVar('color-background')};
    color: ${themeVar('color-text-primary')};
    font-family: ${staticThemeVar('font-family')};
    font-size: ${staticThemeVar('base-font-size')};
  }
`;
