import {
  Display,
  ForwardLayout,
  JustifyContent,
  Link,
  IconButton,
  FlexWrap
} from '~/ui';

export const Footer = () => {
  return (
    <ForwardLayout margin={{ top: 5, bottom: 3, x: 'auto' }}>
      <footer>
        <ForwardLayout
          display={Display.Flex}
          justifyContent={JustifyContent.Center}
          flexWrap={FlexWrap.Wrap}
          gap={1}
        >
          <ul aria-label='Social links'>
            <li>
              <Link href='https://twitter.com/reesmorris' aria-label='Twitter'>
                <IconButton
                  as='div'
                  icon={{ name: 'twitter', weight: 'fab' }}
                />
              </Link>
            </li>
            <li>
              <Link href='https://github.com/reesmorris' aria-label='GitHub'>
                <IconButton as='div' icon={{ name: 'github', weight: 'fab' }} />
              </Link>
            </li>
            <li>
              <Link
                href='https://linkedin.com/reesmorris'
                aria-label='LinkedIn'
              >
                <IconButton
                  as='div'
                  icon={{ name: 'linkedin', weight: 'fab' }}
                />
              </Link>
            </li>
            <li>
              <Link href='mailto:contact@reesmorris.co.uk' aria-label='Email'>
                <IconButton as='div' icon={{ name: 'envelope' }} />
              </Link>
            </li>
          </ul>
        </ForwardLayout>
      </footer>
    </ForwardLayout>
  );
};
