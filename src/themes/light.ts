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
  },
  input: {
    background: '#ffffff',
    border: '#e5e7eb',
    focus_border: '#71b0dc'
  }
};

export default theme;
