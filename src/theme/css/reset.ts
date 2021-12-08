import { css } from '@emotion/react';

/*
Josh's Custom CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/
*/
export const resetCSS = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; /* Set the base font to 10px */
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  ul {
    list-style-type: none;
  }
`;
