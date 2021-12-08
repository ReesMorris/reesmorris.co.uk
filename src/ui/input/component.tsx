import styled from '@emotion/styled';
import { staticThemeVar, staticTokens, themeVar } from '~/theme';
import { BorderRadius, UISize } from '../types';
import { interpolateProp } from '../utils';
import { placeholder } from '../utils/placeholder';
import { Icon, IconProps } from '..';
import { toRem } from '../utils/to-rem';

interface InputStyleProps {
  $size?: UISize;
  $radius?: BorderRadius;
  $hasIconLeft?: boolean;
}

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: UISize;
  radius?: BorderRadius;
  iconLeft?: IconProps;
}

const ScInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ScElement = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  left: 0;
  width: ${toRem(staticTokens['space-4'])};
  pointer-events: none;
`;

const ScInput = styled.input<InputStyleProps>`
  display: block;
  width: 100%;
  color: ${themeVar('color-input-text')};
  background-color: ${themeVar('color-input-background')};
  border: 1px solid ${themeVar('color-input-border')};
  font-size: ${staticThemeVar('font-size-6')};

  height: ${interpolateProp('$size', {
    [UISize.Small]: staticThemeVar('ui-nowrap-size-small'),
    [UISize.Medium]: staticThemeVar('ui-nowrap-size-medium'),
    [UISize.Large]: staticThemeVar('ui-nowrap-size-large')
  })};

  border-radius: ${interpolateProp('$radius', {
    [BorderRadius.None]: staticThemeVar('border-radius-none'),
    [BorderRadius.Small]: staticThemeVar('border-radius-small'),
    [BorderRadius.Medium]: staticThemeVar('border-radius-medium'),
    [BorderRadius.Large]: staticThemeVar('border-radius-large'),
    [BorderRadius.Round]: staticThemeVar('border-radius-round')
  })};

  padding: 12px;
  padding-left: ${props =>
    props.$hasIconLeft ? toRem(staticTokens['space-4']) : undefined};

  ${placeholder`
    color: ${themeVar('color-input-placeholder')};
  `};

  &:focus {
    outline: none;
    border-color: ${themeVar('color-input-border-focus')};
  }
`;

export const Input = (props: InputProps) => {
  const { radius, size, iconLeft, ...rest } = props;

  return (
    <ScInputWrapper>
      {iconLeft && (
        <ScElement>
          <Icon {...iconLeft} />
        </ScElement>
      )}

      <ScInput
        $size={size || UISize.Medium}
        $radius={radius || BorderRadius.Medium}
        $hasIconLeft={Boolean(iconLeft)}
        {...rest}
      />
    </ScInputWrapper>
  );
};
