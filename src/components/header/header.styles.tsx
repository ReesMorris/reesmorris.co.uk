import styled from 'styled-components';
import LinkWrapper from '../link-wrapper';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 4rem;
  backdrop-filter: saturate(180%) blur(20px);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav``;

const NavLink = styled(LinkWrapper)`
  &:not(:first-child) {
    margin-left: 2rem;
  }
`;

const Aside = styled.aside``;

export default { Header, Content, Nav, NavLink, Aside };
