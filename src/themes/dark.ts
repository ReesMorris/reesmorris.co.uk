import { DefaultTheme } from 'styled-components';
import _consts from './_consts';

const theme: DefaultTheme = {
  _consts,
  name: 'dark',
  site: {
    background: '#1a212c'
  },
  colors: {
    heading: '#ffffff',
    primary: '#ffffff',
    secondary: '#e5e7eb'
  },
  button: {
    background: '#2d3748',
    border: '#4a5568',
    hover_background: '#2c323d'
  }
};

export default theme;
