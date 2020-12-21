import React from 'react';
import Button from '../button';
import { ThemeContext } from '../theme-wrapper/theme-wrapper';

const ToggleThemeButton: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <Button
          icon={{ icon: theme?.name === 'light' ? 'sun' : 'moon' }}
          text={`Change to ${theme?.name === 'dark' ? 'light' : 'dark'} theme`}
          hideText
          onClick={changeTheme}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default ToggleThemeButton;
