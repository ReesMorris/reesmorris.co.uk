import React from 'react';
import Text from '../text';
import Wrapper from '../wrapper';
import Styles from './header.styles';

const Header: React.FC = () => {
  return (
    <Styles.Header role='banner'>
      <Wrapper width='body'>
        <Styles.Content>
          <Styles.Nav>
            <Styles.NavLink href='/'>
              <Text as='span' dark>
                Home
              </Text>
            </Styles.NavLink>
            <Styles.NavLink href='/about'>
              <Text as='span' dark>
                About
              </Text>
            </Styles.NavLink>
            <Styles.NavLink href='/blog'>
              <Text as='span' dark>
                Blog
              </Text>
            </Styles.NavLink>
          </Styles.Nav>
          <Styles.Aside>Aside</Styles.Aside>
        </Styles.Content>
      </Wrapper>
    </Styles.Header>
  );
};

export default Header;
