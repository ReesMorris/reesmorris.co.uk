import React from 'react';
import { IconProps } from '../icon/icon';
import Text from '../text';
import Styles from './button.styles';

interface ButtonProps {
  as?: React.ElementType;
  icon?: IconProps;
  text: string;
  hideText?: boolean;
  className?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button: React.FC<ButtonProps> = ({
  as,
  icon,
  text,
  hideText,
  className,
  onClick
}) => {
  return (
    <Styles.Button
      as={as || 'button'}
      iconOnly={icon && hideText}
      className={className}
      onClick={onClick}
    >
      {icon && <Styles.Icon icon={icon.icon} weight={icon.weight} />}
      <Text className={hideText ? 'visually-hidden' : ''}>{text}</Text>
    </Styles.Button>
  );
};

export default Button;
