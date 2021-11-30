import { css } from '@linaria/core';
import { themeVar } from '..';

export const globalCSS = css`
  :global() {
    body {
      background-color: ${themeVar('color-background')};
      color: ${themeVar('color-text-primary')};
    }
  }
`;
