import { css } from '@emotion/react';
import { staticTokens, lightTokens, darkTokens } from '../tokens';
import { buildStyleRule } from '../utils';

export const rootCSS = css`
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
`;
