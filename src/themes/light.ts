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
    secondary: '#2d3748',
    link: '#0366d6'
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
  },
  code: {
    background_light: '#f3f4f4',
    background_dark: '#f5f8fa',
    colors: {
      tag: '#000000',
      string: '#032f62',
      keyword: '#d73a49',
      selector: '#22863a',
      property: '#000000',
      number: '#005cc3',
      comment: '#6a737d',
      function: '#6f42c1',
      classname: '#22863a',
      variable: '#005cc5'
    }
  },
  blockquote: {
    color: '#6a737d',
    border: '#dfe2e5'
  }
};

export default theme;
