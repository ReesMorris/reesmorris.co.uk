import '@emotion/react';
import 'styled-components';

// Consts
export interface Widths {
  header_width: string;
  body_width: string;
}
export interface Paddings {
  tablist_padding: string;
}

// Theme
declare module '@emotion/react' {
  export interface Theme {
    name: ThemeName;
    _consts: {
      widths: Widths;
      paddings: Paddings;
    };
    site: {
      background: string;
    };
    colors: {
      heading: string;
      primary: string;
      secondary: string;
      link: string;
    };
    button: {
      background: string;
      border: string;
      hover_background: string;
    };
    input: {
      background: string;
      border: string;
      focus_border: string;
    };
    tablist: {
      border: string;
      tab: {
        marker: string;
        active_text: string;
      };
    };
    note: {
      info: {
        background: string;
        color: string;
      };
    };
    code: {
      background_light: string;
      background_dark: string;
      colors: {
        tag: string;
        string: string;
        keyword: string;
        selector: string;
        property: string;
        number: string;
        comment: string;
        function: string;
        classname: string;
        variable: string;
      };
    };
    blockquote: {
      color: string;
      border: string;
    };
  }
}
