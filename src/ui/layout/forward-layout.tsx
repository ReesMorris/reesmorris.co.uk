import { Children, cloneElement, isValidElement } from 'react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { LayoutProps } from '.';
import { mapProps } from './utils/map-props';

export const ForwardLayout = styled((props: LayoutProps) => {
  const child = Children.only(props.children);

  if (!isValidElement(child)) return null;

  return cloneElement(child, {
    className: cx(props.className, child.props.className)
  });
})(props => mapProps(props));
