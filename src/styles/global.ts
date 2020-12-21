import { css } from 'styled-components';

export default css`
  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.site.background};
    font-size: 1.6rem;
  }

  body,
  input,
  textarea,
  button,
  select,
  label,
  span,
  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
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
