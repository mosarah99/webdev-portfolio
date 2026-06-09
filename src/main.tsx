import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
// import { ThemeProvider } from '@mui/material/styles';
// import { themePalettes } from './theme/palettes.ts';
// import CssBaseline from '@mui/material/CssBaseline';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <ThemeProvider theme={themePalettes.light}> */}
      {/* <CssBaseline /> */}
      <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>,
);
