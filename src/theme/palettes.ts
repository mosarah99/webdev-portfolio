import type { PaletteOptions } from '@mui/material';

// src/theme/palettes.ts
export const themePalettes: { [key: string]: PaletteOptions } = {
  light: {
    mode: 'light',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#009688',
    },
  },
  dark: {
    mode: 'dark',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#009688',
    },
    background: {
      default: '#111111',
      paper: 'rgba(68,68,68,0.5)',
    },
    text: {
      primary: '#ffffff',
    },
    divider: 'rgba(255,255,255,0.94)',
  },
  ocean: {
    mode: 'dark',
    primary: { main: '#00bcd4' },
    background: { default: '#001b2e' },
    secondary: { main: '#ff4081' },
  },
  forest: {
    mode: 'light',
    primary: { main: '#2e7d32' },
    background: { default: '#f1f8e9' },
  },
};

export default themePalettes;
