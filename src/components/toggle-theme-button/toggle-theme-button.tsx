import React from 'react';
import Button from '../button';
import NoScript from '../noscript';
import { useTheme } from 'next-themes';

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <NoScript>
        <style>{`#toggle-theme-button {display: none;}`}</style>
      </NoScript>

      <Button
        id='toggle-theme-button'
        icon={{ icon: theme === 'light' ? 'sun' : 'moon' }}
        text={`Change to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        hideText
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </>
  );
};

export default ToggleThemeButton;
