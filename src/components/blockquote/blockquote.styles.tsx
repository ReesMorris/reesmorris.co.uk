import styled from 'styled-components';

const Blockquote = styled.blockquote`
  border-left: 0.5rem solid ${props => props.theme.blockquote.border};
  padding: 0 1.5rem;

  &,
  p,
  span {
    color: ${props => props.theme.blockquote.color};
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export default { Blockquote };
