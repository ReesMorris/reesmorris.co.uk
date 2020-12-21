import React from 'react';
import { IconProps } from '../icon/icon';
import Text from '../text';
import Styles from './button.styles';

interface ButtonProps {
  icon?: IconProps;
  text: string;
  hideText?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon, text, hideText, className }) => {
  return (
    <Styles.Button iconOnly={icon && hideText} className={className}>
      {icon && <Styles.Icon icon={icon.icon} weight={icon.weight} />}
      <Text className={hideText ? 'visually-hidden' : ''}>{text}</Text>
    </Styles.Button>
  );
};

export default Button;
