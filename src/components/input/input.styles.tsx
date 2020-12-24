import styled, { css } from 'styled-components';
import IconC from '../icon';

const InputWrapper = styled.div`
  position: relative;
`;

const Icon = styled(IconC)`
  position: absolute;
  top: 50%;
  left: 1.3rem;
  transform: translateY(-50%);
  font-size: 1.3rem;
  color: ${props => props.theme.colors.secondary};
`;

interface InputProps {
  icon: 'left' | 'none';
}
const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 1.3rem;
  border-radius: 0.6rem;
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.input.background};
  border: 0.1rem solid ${props => props.theme.input.border};
  transition: all 0.2s ease;

  &:focus {
    border-color: ${props => props.theme.input.focus_border};
  }

  ${props =>
    props.icon === 'left' &&
    css`
      padding-left: 3.2rem;
    `}
`;

export default { InputWrapper, Icon, Input };
