import styled from 'styled-components';

const Footer = styled.footer``;

const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled.li`
  font-size: 1.8rem;

  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

export default { Footer, Links, Link };
