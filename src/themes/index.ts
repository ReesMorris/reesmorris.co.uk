import light from './themes/light';
import dark from './themes/dark';
import consts from './consts';
import { ThemeStyles } from './types';

// List of themes
const themes = { light, dark };

// Returns a theme property as a CSS Variable
const themeVar = (property: keyof ThemeStyles) => `var(--${property})`;

// Converts all of our theme objects into a single string of CSS Variables
// This actually happens during build time, so this method doesn't even run on the site.
const stylesheet = () => {
  return Object.values(themes)
    .map((vals, index) => {
      const data = Object.entries(vals.styles)
        .map(([key, val]) => {
          return `--${key}: ${val}`;
        })
        .filter(val => !!val)
        .join(';');
      return `${index === 0 && ':root,'}[data-theme='${vals.name}']{${data}}`;
    })
    .join(';');
};

export { themes, consts, themeVar, stylesheet };
