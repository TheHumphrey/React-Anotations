import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      chart: {
        text: string;
      };

      status: {
        success: string;
        warning: string;
        danger: string;
        info: string;
        pending: string;
      };

      colorStatus: {
        success: string;
        warning: string;
        danger: string;
        info: string;
        pending: string;
      };
    };
  }
}
