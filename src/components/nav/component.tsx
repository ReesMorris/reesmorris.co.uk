import { ForwardLayout, Display } from '~/ui';
import { NavLink } from './components/nav-link';
import { ThemeToggle } from './components/theme-toggle';

export const Nav = () => {
  return (
    <ForwardLayout
      display={Display.Flex}
      padding={{ y: 4 }}
      margin={{ x: 'auto' }}
      width='725px'
    >
      <header role='banner'>
        <ForwardLayout
          display={Display.Flex}
          margin={{ right: 'auto' }}
          gap={2}
        >
          <nav aria-label='Main navigation'>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/blog'>Blog</NavLink>
          </nav>
        </ForwardLayout>
        <nav aria-label='Secondary navigation'>
          <ThemeToggle />
        </nav>
      </header>
    </ForwardLayout>
  );
};
