import styled from '@emotion/styled';
import { ButtonSize, ButtonVariant } from '../types';
import { BorderRadius, Transition } from '../../types';
import { staticThemeVar, themeVar } from '~/theme';
import { interpolateProp } from '../../utils';
import { transition } from '../../utils/transition';

interface ButtonStyleProps {
  $size?: ButtonSize;
  $radius?: BorderRadius;
  $variant?: ButtonVariant;
}

export interface ButtonProps
  extends ButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    [ButtonSize.Small]: staticThemeVar('button-size-small'),
    [ButtonSize.Medium]: staticThemeVar('button-size-medium'),
    [ButtonSize.Large]: staticThemeVar('button-size-large')
  })};

  border-radius: ${interpolateProp('$radius', {
    [BorderRadius.None]: staticThemeVar('border-radius-none'),
    [BorderRadius.Small]: staticThemeVar('border-radius-small'),
    [BorderRadius.Medium]: staticThemeVar('border-radius-medium'),
    [BorderRadius.Large]: staticThemeVar('border-radius-large'),
    [BorderRadius.Round]: staticThemeVar('border-radius-round')
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
  const { as, type, $variant, $size, $radius, children, ...rest } = props;

  return (
    <ScButton
      as={as}
      type={type || as ? undefined : 'button'}
      $size={$size || ButtonSize.Medium}
      $radius={$radius || BorderRadius.Small}
      data-variant={$variant || ButtonVariant.Text}
      {...rest}
    >
      {children}
    </ScButton>
  );
};
