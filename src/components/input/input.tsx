import React from 'react';
import Icon from '../icon';
import { IconProps } from '../icon/icon';
import Styles from './input.styles';

interface InputTypes {
  as?: React.ElementType;
  type?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  name?: string;
  iconLeft?: IconProps;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

const Input: React.FC<InputTypes> = ({
  as,
  type = 'text',
  placeholder,
  value,
  id,
  name,
  iconLeft,
  onChange
}) => {
  return (
    <Styles.InputWrapper id={id}>
      {iconLeft && <Styles.Icon icon='search' />}
      <Styles.Input
        icon={(iconLeft && 'left') || 'none'}
        as={as}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </Styles.InputWrapper>
  );
};

export default Input;
