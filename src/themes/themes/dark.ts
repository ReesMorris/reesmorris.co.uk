import { Theme } from '../types';

const dark: Theme = {
  name: 'dark',
  styles: {
    // Site
    'color-site-bg': '#1a212c',

    // Colours
    'color-primary': '#ffffff',
    'color-secondary': '#e5e7eb',
    'color-link': '#81e7ff',

    // Button
    'color-button-bg': '#2d3748',
    'color-button-border': '#4a5568',
    'color-button-bg-hover': '#2c323d',

    // UI Elements
    'color-content-bg': '#1a212c',
    'color-content-border': '#4a5568',
    'color-content-border-focus': '#6a788a',

    // Notes
    'color-note-info-border': '#121820',

    // Code
    'color-code-bg-inline': '#2f3438',
    'color-code-bg-block': '#161c23',
    'color-code-tag': '#ffffff',
    'color-code-string': '#a5d6ff',
    'color-code-keyword': '#ff7b72',
    'color-code-selector': '#22863a',
    'color-code-property': '#ffffff',
    'color-code-number': '#005cc3',
    'color-code-comment': '#8b949e',
    'color-code-function': '#d2a8ff',
    'color-code-classname': '#7ee787',
    'color-code-variable': '#79c0ff'
  }
};

export default dark;
