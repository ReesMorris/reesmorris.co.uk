import {
  Display,
  ForwardLayout,
  JustifyContent,
  Link,
  IconButton,
  FlexWrap
} from '~/ui';
import { FooterItem } from './components';

export const Footer = () => {
  return (
    <ForwardLayout margin={{ top: 5, x: 'auto' }} padding={{ bottom: 2 }}>
      <footer>
        <ForwardLayout
          display={Display.Flex}
          justifyContent={JustifyContent.Center}
          flexWrap={FlexWrap.Wrap}
          gap={1}
        >
          <ul aria-label='Social links'>
            <li>
              <FooterItem
                href='https://twitter.com/reesmorris'
                label='Twitter'
                icon={{ name: 'twitter', weight: 'fab' }}
              />
            </li>
            <li>
              <FooterItem
                href='https://github.com/reesmorris'
                label='GitHub'
                icon={{ name: 'github', weight: 'fab' }}
              />
            </li>
            <li>
              <FooterItem
                href='https://linkedin.com/reesmorris'
                label='LinkedIn'
                icon={{ name: 'linkedin', weight: 'fab' }}
              />
            </li>
            <li>
              <FooterItem
                href='mailto:contact@reesmorris.co.uk'
                label='Email'
                icon={{ name: 'envelope' }}
              />
            </li>
          </ul>
        </ForwardLayout>
      </footer>
    </ForwardLayout>
  );
};
