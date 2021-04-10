import { css } from '@emotion/react';
import { Theme } from '../themes';

const global = (theme: Theme) => {
  return css`
    html {
      font-size: 62.5%;
    }

    body {
      background: ${theme.site.background};
      font-size: 1.6rem;
    }

    body,
    input,
    textarea,
    button,
    select,
    label,
    span,
    p,
    b,
    strong,
    kbd {
      color: red; // $props => props.theme.colors.secondary};
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    }

    a {
      display: inline-block;
      color: ${theme.colors.link};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        text-decoration-color: ${theme.colors.link};
      }
    }

    b,
    strong {
      font-weight: 600;
    }
    i,
    em {
      font-style: italic;
    }
    del {
      text-decoration: line-through;
    }

    *:focus {
      outline: none;
    }
    body.tabbing *:focus {
      transition: box-shadow 0.25s ease !important;
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5) !important;
    }

    body.theme-transition *,
    body.theme-transition {
      transition: all 0.15s ease !important;
    }

    .visually-hidden {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  `;
};

export default global;
