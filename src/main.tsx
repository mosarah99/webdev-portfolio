import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { themePalettes } from './theme/palettes.ts';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme.ts';
import './index.css';
import App from './App.tsx';
import { useMediaQuery } from '@mui/material';
import { NuqsAdapter } from 'nuqs/adapters/react';

export const Root = () => {
  // 1. Detect system preference initially
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light',
  );
  const palette = mode === 'light' ? themePalettes.light : themePalettes.dark;

  // 2. Optional: Keep state synced if the user changes their system OS setting
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  return (
    <StrictMode>
      <ThemeProvider theme={responsiveFontSizes(theme(palette))}>
        <BrowserRouter>
          <NuqsAdapter>
            <CssBaseline />
            <App />
          </NuqsAdapter>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);
