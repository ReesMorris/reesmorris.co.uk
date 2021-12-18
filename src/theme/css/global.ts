import { css } from '@emotion/react';
import { themeVar, staticThemeVar } from '../utils';

export const globalCSS = css`
  *:focus-visible {
    outline: none;
    transition: box-shadow 0.25s ease !important;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5) !important;
  }

  body {
    background-color: ${themeVar('color-background')};
    color: ${themeVar('color-text-base')};
    font-family: ${staticThemeVar('font-family-base')};
    font-size: ${staticThemeVar('font-size-base')};
    line-height: ${staticThemeVar('line-height-base')};
  }
`;
