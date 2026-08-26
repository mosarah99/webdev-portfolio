import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { themePalettes } from './theme/palettes.ts';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme.ts';
import './index.css';
import App from './App.tsx';
import { NuqsAdapter } from 'nuqs/adapters/react';

export const Root = () => {
  return (
    <StrictMode>
      <ThemeProvider
        theme={responsiveFontSizes(theme(themePalettes['default']))}
        defaultMode='system'
      >
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
