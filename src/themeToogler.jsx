// ThemeToggler.js

import React from 'react';
import { useTheme } from './theme';

function ThemeToggler () {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme.background, color: theme.color, height: '100vh' }}>
      <button onClick={toggleTheme}>
        Alternar Tema
      </button>
    </div>
  );
};

export default ThemeToggler;
