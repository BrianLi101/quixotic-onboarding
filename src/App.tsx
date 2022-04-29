import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '@mui/material';
import { muiTheme } from './styling/MUITheme';

import { AutomaticOnboardingPage } from './components/pages/AutomaticOnboardingPage';
import { TextOnboardingPage } from './components/pages/TextOnboardingPage';

function App() {
  const [mode, setMode] = useState<'automatic' | 'text'>('automatic');

  const handleChange = (event: any, newMode: any) => {
    setMode(newMode);
  };

  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="automatic">Automatic</ToggleButton>
          <ToggleButton value="text">Text</ToggleButton>
        </ToggleButtonGroup>
        {mode === 'automatic' ? (
          <AutomaticOnboardingPage />
        ) : (
          <TextOnboardingPage />
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
