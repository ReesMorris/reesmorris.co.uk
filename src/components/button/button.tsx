import React from 'react';
import { IconProps } from '../icon/icon';
import Text from '../text';
import Styles from './button.styles';

interface ButtonProps {
  as?: React.ElementType;
  id?: string;
  icon?: IconProps;
  text: string;
  hideText?: boolean;
  className?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

const Button = ({
  as,
  id,
  icon,
  text,
  hideText,
  className,
  onClick
}: ButtonProps) => {
  return (
    <Styles.Button
      as={as || 'button'}
      id={id}
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
