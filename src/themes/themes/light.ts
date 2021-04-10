import { Theme } from '../types';

const light: Theme = {
  name: 'light',
  styles: {
    // Site
    'color-site-bg': '#ffffff',

    // Colours
    'color-primary': '#000000',
    'color-secondary': '#2d3748',
    'color-link': '#1a73e8',

    // Button
    'color-button-bg': '#ffffff',
    'color-button-border': '#cbd5e0',
    'color-button-bg-hover': '#f7fafc',

    // UI Elements
    'color-content-bg': '#ffffff',
    'color-content-border': '#e5e7eb',
    'color-content-border-focus': '#71b0dc',

    // Notes
    'color-note-info-border': '#f1f1f1',

    // Code
    'color-code-bg-inline': '#f3f4f4',
    'color-code-bg-block': '#f5f8fa',
    'color-code-tag': '#000000',
    'color-code-string': '#032f62',
    'color-code-keyword': '#d73a49',
    'color-code-selector': '#22863a',
    'color-code-property': '#000000',
    'color-code-number': '#005cc3',
    'color-code-comment': '#6a737d',
    'color-code-function': '#6f42c1',
    'color-code-classname': '#22863a',
    'color-code-variable': '#005cc5'
  }
};

export default light;
