import styled from '@emotion/styled';
import { ButtonVariant } from '../types';
import { UISize, BorderRadius, Transition } from '../../types';
import { staticThemeVar, themeVar } from '~/theme';
import { interpolateProp, transition } from '../../utils';
import { ForwardLayout } from '../..';

interface ButtonStyleProps {
  $size?: UISize;
  $variant?: ButtonVariant;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: UISize;
  radius?: BorderRadius;
  variant?: ButtonVariant;
  as?: React.ElementType;
}

const ScButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: none;
  cursor: pointer;
  border: none;
  border: 1px solid transparent;
  transition: background-color ${transition(Transition.Medium)} ease-in;

  height: ${interpolateProp('$size', {
    [UISize.Small]: staticThemeVar('ui-nowrap-size-small'),
    [UISize.Medium]: staticThemeVar('ui-nowrap-size-medium'),
    [UISize.Large]: staticThemeVar('ui-nowrap-size-large')
  })};

  &[data-variant=${ButtonVariant.Text}] {
    color: ${themeVar('color-button-default-text')};
    &:hover {
      background-color: ${themeVar('color-button-default-background-hover')};
    }
  }

  &[data-variant=${ButtonVariant.Contained}] {
    background-color: ${themeVar('color-button-primary-background')};
    color: ${themeVar('color-button-primary-text')};
    &:hover {
      background-color: ${themeVar('color-button-primary-background-hover')};
    }
  }
`;

export const Button = (props: ButtonProps) => {
  const { as, type, variant, size, radius, children, ...rest } = props;

  return (
    <ForwardLayout borderRadius={radius}>
      <ScButton
        as={as}
        type={type || as ? undefined : 'button'}
        $size={size || UISize.Medium}
        data-variant={variant || ButtonVariant.Text}
        {...rest}
      >
        {children}
      </ScButton>
    </ForwardLayout>
  );
};
