import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import global from './global';
import code from './code';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${global}
  ${code}
`;

export default GlobalStyle;
