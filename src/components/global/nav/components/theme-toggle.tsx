import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ButtonVariant, IconButton } from '~/ui';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <IconButton
      variant={ButtonVariant.Text}
      icon={{ name: theme === 'light' ? 'sun' : 'moon' }}
      aria-label={`Toggle theme (current: ${theme})`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  );
};
