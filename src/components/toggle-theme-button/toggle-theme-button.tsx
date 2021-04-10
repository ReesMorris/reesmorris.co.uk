import React from 'react';
import Button from '../button';
import NoScript from '../noscript';
import { useTheme } from '../../contexts/theme/theme';

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <NoScript>
        <style>{`#toggle-theme-button {display: none;}`}</style>
      </NoScript>
      <Button
        id='toggle-theme-button'
        icon={{ icon: theme.name === 'light' ? 'sun' : 'moon' }}
        text={`Change to ${theme.name === 'dark' ? 'light' : 'dark'} theme`}
        hideText
        onClick={() => setTheme(theme.name === 'light' ? 'dark' : 'light')}
      />
    </>
  );
};

export default ToggleThemeButton;
