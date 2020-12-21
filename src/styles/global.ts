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
`;
