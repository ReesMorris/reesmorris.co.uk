import styled from '@emotion/styled';
import { themeVar } from '../../themes';

const Blockquote = styled.blockquote`
  border-left: 0.5rem solid ${themeVar('color-content-border')};
  padding: 0 1.5rem;
  opacity: 0.9;

  &,
  p,
  span {
    color: ${themeVar('color-secondary')};
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export default { Blockquote };
