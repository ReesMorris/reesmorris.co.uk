export interface ThemeMeta {
  name: string;
}

type Val = string | number;
export interface ThemeStyles {
  // Site
  'color-site-bg': Val;

  // Colours
  'color-primary': Val;
  'color-secondary': Val;
  'color-link': Val;

  // Button
  'color-button-bg': Val;
  'color-button-border': Val;
  'color-button-bg-hover': Val;

  // UI Elements
  'color-content-bg': Val;
  'color-content-border': Val;
  'color-content-border-focus': Val;

  // Notes
  'color-note-info': Val;
  'color-note-info-bg': Val;

  // Code
  'color-code-bg-inline': Val;
  'color-code-bg-block': Val;
  'color-code-tag': Val;
  'color-code-string': Val;
  'color-code-keyword': Val;
  'color-code-selector': Val;
  'color-code-property': Val;
  'color-code-number': Val;
  'color-code-comment': Val;
  'color-code-function': Val;
  'color-code-classname': Val;
  'color-code-variable': Val;
}

export interface Consts {
  header_width: number;
  body_width: number;
  tablist_padding: number;
}

export interface Theme extends ThemeMeta {
  styles: ThemeStyles;
}
