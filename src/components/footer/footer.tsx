import React from 'react';
import Button from '../button';
import LinkWrapper from '../link-wrapper';
import Styles from './footer.styles';

const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.Links>
        <Styles.Link>
          <LinkWrapper href='https://twitter.com/reesmorris'>
            <Button
              as='span'
              icon={{ icon: 'twitter', weight: 'fab' }}
              text='Twitter'
              hideText
            />
          </LinkWrapper>
        </Styles.Link>
        <Styles.Link>
          <LinkWrapper href='https://github.com/reesmorris'>
            <Button
              as='span'
              icon={{ icon: 'github', weight: 'fab' }}
              text='GitHub'
              hideText
            />
          </LinkWrapper>
        </Styles.Link>
        <Styles.Link>
          <LinkWrapper href='https://linkedin.com/reesmorris'>
            <Button
              as='span'
              icon={{ icon: 'linkedin', weight: 'fab' }}
              text='LinkedIn'
              hideText
            />
          </LinkWrapper>
        </Styles.Link>
        <Styles.Link>
          <LinkWrapper href='mailto:contact@reesmorris.co.uk'>
            <Button
              as='span'
              icon={{ icon: 'envelope' }}
              text='Email'
              hideText
            />
          </LinkWrapper>
        </Styles.Link>
      </Styles.Links>
    </Styles.Footer>
  );
};

export default Footer;
