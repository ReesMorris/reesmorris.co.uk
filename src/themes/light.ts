import { DefaultTheme } from 'styled-components';
import _consts from './_consts';

const theme: DefaultTheme = {
  _consts,
  name: 'light',
  site: {
    background: '#ffffff'
  },
  colors: {
    heading: '#000000',
    primary: '#000000',
    secondary: '#2d3748'
  },
  button: {
    background: '#ffffff',
    border: '#cbd5e0',
    hover_background: '#f7fafc'
  }
};

export default theme;
