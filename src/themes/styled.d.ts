import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    site: {
      background: string;
    };
    colors: {
      heading: string;
    };
  }
}
