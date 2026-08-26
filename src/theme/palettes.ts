import type { ColorSystemOptions } from '@mui/material';

export interface ThemePalette {
  light: ColorSystemOptions;
  dark: ColorSystemOptions;
}

// src/theme/palettes.ts
export const themePalettes: { [key: string]: ThemePalette } = {
  default: {
    dark: {
      palette: {
        primary: {
          main: '#bdd3ff',
        },
        secondary: {
          main: '#bdf4ff',
        },
        info: {
          main: '#c8bdff',
        },
        error: {
          main: '#ffc8bd',
        },
        warning: {
          main: '#f4ffbd',
        },
        success: {
          main: '#C6FFBD',
        },
        background: {
          default: '#112',
          paper: '#080820',
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: '#2a407d',
        },
        secondary: {
          main: '#2a6a7d',
        },
        info: {
          main: '#3d2a7d',
        },
        error: {
          main: '#7d3d2a',
        },
        warning: {
          main: '#6a7d2a',
        },
        success: {
          main: '#2a7d2e',
        },
        background: {
          default: '#e3e3e3',
          paper: '#eee',
        },
      },
    },
  },
};

export default themePalettes;
