import styled from '@emotion/styled';
import { themeVar } from '../../themes';
import { css } from '@emotion/react';
import IconC from '../icon';

const Icon = styled(IconC)`
  margin-right: 1rem;
`;

interface ButtonProps {
  autoWidth?: boolean;
  iconOnly?: boolean;
}
const Button = styled.button<ButtonProps>`
  cursor: pointer;
  padding: 1rem 1.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  border: 1px solid ${themeVar('color-button-border')};
  background: ${themeVar('color-button-bg')};
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 0.3rem;
  color: ${themeVar('color-secondary')};

  &:hover {
    background: ${themeVar('color-button-bg-hover')};
  }

  /* Icon only button (circle) */
  ${props =>
    props.iconOnly &&
    css`
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 50%;
      box-shadow: none;
      background: transparent;

      ${Icon} {
        margin-right: 0;
      }
    `}
`;

export default { Button, Icon };
