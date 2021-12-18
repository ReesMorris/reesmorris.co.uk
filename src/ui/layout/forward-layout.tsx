import { Children, cloneElement, isValidElement } from 'react';
import { cx } from '@emotion/css';
import styled from '@emotion/styled';
import { LayoutProps } from './types';
import { mapProps } from './utils';

export const ForwardLayout = styled((props: LayoutProps) => {
  const child = Children.only(props.children);

  if (!isValidElement(child)) return null;

  return cloneElement(child, {
    className: cx(props.className, child.props.className)
  });
})(props => mapProps(props));
