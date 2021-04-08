import 'styled-components';

// Consts
export interface IWidths {
  header_width: string;
  body_width: string;
}
export interface IPaddings {
  tablist_padding: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    _consts: {
      widths: IWidths;
      paddings: IPaddings;
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
