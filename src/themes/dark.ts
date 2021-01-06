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
    secondary: '#e5e7eb',
    link: '#58a6ff'
  },
  button: {
    background: '#2d3748',
    border: '#4a5568',
    hover_background: '#2c323d'
  },
  input: {
    background: '#1a212c',
    border: '#4a5568',
    focus_border: '#6a788a'
  },
  code: {
    background_light: '#2f3438',
    background_dark: '#161c23',
    colors: {
      tag: '#ffffff',
      string: '#a5d6ff',
      keyword: '#ff7b72',
      selector: '#22863a',
      property: '#ffffff',
      number: '#005cc3',
      comment: '#8b949e',
      function: '#d2a8ff',
      classname: '#7ee787',
      variable: '#79c0ff'
    }
  },
  blockquote: {
    color: '#8b949e',
    border: '#3c4854'
  }
};

export default theme;
