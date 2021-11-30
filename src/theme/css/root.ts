import { css } from '@linaria/core';
import { buildStyleRule } from '../utils';
import { darkTokens, lightTokens, staticTokens } from '..';

export const rootCSS = css`
  :global() {
    :root {
      ${buildStyleRule(staticTokens)}
    }

    :root,
    :root[data-theme='light'] {
      ${buildStyleRule(lightTokens)}
    }

    :root[data-theme='dark'] {
      ${buildStyleRule(darkTokens)}
    }
  }
`;
