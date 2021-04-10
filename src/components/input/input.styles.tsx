import styled from '@emotion/styled';
import { css } from '@emotion/react';
import IconC from '../icon';
import { themeVar } from '../../themes';

const InputWrapper = styled.div`
  position: relative;
`;

const Icon = styled(IconC)`
  position: absolute;
  top: 50%;
  left: 1.3rem;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: ${themeVar('color-secondary')};
`;

interface InputProps {
  icon: 'left' | 'none';
}
const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 1.3rem;
  border-radius: 0.6rem;
  color: ${themeVar('color-secondary')};
  background: transparent;
  border: 0.1rem solid ${themeVar('color-content-border')};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${themeVar('color-content-border-focus')};
  }

  ${props =>
    props.icon === 'left' &&
    css`
      padding-left: 3.8rem;
    `}
`;

export default { InputWrapper, Icon, Input };
