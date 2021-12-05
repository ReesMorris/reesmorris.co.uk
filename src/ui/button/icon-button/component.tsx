import styled from '@emotion/styled';
import { Button, ButtonProps } from '../button';
import { BorderRadius, Icon, IconProps } from '../..';
import { staticThemeVar } from '~/theme';
import { ButtonSize } from '../types';
import { interpolateProp } from '../../utils';

export interface IconButtonProps extends ButtonProps {
  icon: IconProps;
  'aria-label'?: string;
}

const ScIconButton = styled(Button)`
  width: ${interpolateProp('$size', {
    [ButtonSize.Small]: staticThemeVar('button-size-small'),
    [ButtonSize.Medium]: staticThemeVar('button-size-medium'),
    [ButtonSize.Large]: staticThemeVar('button-size-large')
  })};
`;

export const IconButton = (props: IconButtonProps) => {
  const { 'aria-label': ariaLabel, icon, $size, ...rest } = props;

  return (
    <ScIconButton
      {...rest}
      aria-label={ariaLabel}
      $size={$size || ButtonSize.Large}
      $radius={BorderRadius.Round}
    >
      <Icon {...icon} />
    </ScIconButton>
  );
};
