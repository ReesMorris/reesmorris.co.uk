import 'styled-components';

// Consts
export interface IWidths {
  header_width: string;
  body_width: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    _consts: {
      widths: IWidths;
    };
    site: {
      background: string;
    };
    colors: {
      heading: string;
      primary: string;
      secondary: string;
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
  }
}
