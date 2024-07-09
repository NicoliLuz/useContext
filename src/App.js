// App.js
import React from 'react';
import { ThemeProvider } from './theme';
import ThemeToggler from './themeToogler';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
};

export default App;
