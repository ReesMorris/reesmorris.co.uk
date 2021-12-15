import { LayoutProps } from '../types';
import { propMap } from '.';

export const mapProps = (props: LayoutProps) => {
  let css = '';

  Object.entries(props).forEach(([k, v]) => {
    const propName = k as keyof LayoutProps;

    if (propName in propMap) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const value: any = propMap[propName];

      if (value && v) css += value(v);
    }
  });

  return css;
};
