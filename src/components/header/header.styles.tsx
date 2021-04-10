import styled from '@emotion/styled';
import LinkWrapper from '../link-wrapper';

const Header = styled.header`
  /* position: sticky; */
  top: 0;
  z-index: 10;
  padding: 4rem 0;
  background: ${props => props.theme.site.background};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav``;

const NavLink = styled(LinkWrapper)`
  padding: 1rem;
  &:not(:first-of-type) {
    margin-left: 2rem;
  }
`;

const AsideNav = styled.nav`
  display: flex;
`;

export default { Header, Content, Nav, NavLink, AsideNav };
