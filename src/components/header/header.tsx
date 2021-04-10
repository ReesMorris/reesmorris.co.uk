import React from 'react';
import Text from '../text';
import ToggleThemeButton from '../toggle-theme-button';
import Wrapper from '../wrapper';
import Styles from './header.styles';

const Header = () => {
  return (
    <Styles.Header role='banner'>
      <Wrapper type='header'>
        <Styles.Content>
          <Styles.Nav>
            <Styles.NavLink href='/'>
              <Text as='span' dark>
                Home
              </Text>
            </Styles.NavLink>
            <Styles.NavLink href='/blog'>
              <Text as='span' dark>
                Blog
              </Text>
            </Styles.NavLink>
          </Styles.Nav>
          <Styles.AsideNav>
            <ToggleThemeButton />
          </Styles.AsideNav>
        </Styles.Content>
      </Wrapper>
    </Styles.Header>
  );
};

export default Header;
