import {
  alpha,
  createTheme,
  type Theme,
  type ThemeOptions,
} from '@mui/material';
import { type ThemePalette } from './palettes';

export const generateThemeOptions = (
  colorSchemes: ThemePalette,
): ThemeOptions => ({
  colorSchemes: colorSchemes,
  components: {
    MuiPaper: {
      variants: [
        {
          props: (_props) => true, // Apply this variant to all Paper components
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(.5rem)',
            boxShadow: theme.shadows[4],
          }),
        },
      ],
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: 8,
        },
        switchBase: {
          'padding': 1,
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            'transform': 'translateX(16px)',
            'color': '#fff',
            '& + $track': {
              opacity: 1,
              border: 'none',
            },
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
  shape: {
    borderRadius: 15,
  },
});

export const generateTheme = (palette: ThemePalette): Theme =>
  createTheme(generateThemeOptions(palette));

export default generateTheme;
