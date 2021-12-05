import { LayoutProps } from '../types';
import { propMap } from './prop-map';

export const mapProps = (props: LayoutProps) => {
  let css = '';

  Object.entries(props).forEach(([k, v]) => {
    const propName = k as keyof LayoutProps;

    if (propName in propMap) {
      const value = propMap[propName];

      if (value) css += value(v);
    }
  });

  return css;
};
