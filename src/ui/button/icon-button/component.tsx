import styled from '@emotion/styled';
import { Button, ButtonProps } from '../button';
import { BorderRadius, UISize } from '../../types';
import { Icon, IconProps } from '../..';
import { staticThemeVar } from '~/theme';
import { interpolateProp } from '../../utils';

export interface IconButtonProps extends ButtonProps {
  icon: IconProps;
  'aria-label'?: string;
}

const ScIconButton = styled(Button)`
  width: ${interpolateProp('$size', {
    [UISize.Small]: staticThemeVar('ui-nowrap-size-small'),
    [UISize.Medium]: staticThemeVar('ui-nowrap-size-medium'),
    [UISize.Large]: staticThemeVar('ui-nowrap-size-large')
  })};
`;

export const IconButton = (props: IconButtonProps) => {
  const { 'aria-label': ariaLabel, icon, $size, ...rest } = props;

  return (
    <ScIconButton
      {...rest}
      aria-label={ariaLabel}
      $size={$size || UISize.Medium}
      $radius={BorderRadius.Round}
    >
      <Icon {...icon} />
    </ScIconButton>
  );
};
