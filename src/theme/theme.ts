import {
  alpha,
  createTheme,
  type PaletteOptions,
  type Theme,
  type ThemeOptions,
} from '@mui/material';
import themePalettes from './palettes';

/**
 * TODO: Consider migrating to the newer theme creation approach in MUI v6 for better type safety and flexibility.
 * Use color-presets instead of color palettes for more granular control over theme customization.
 */

export const generateThemeOptions = (
  palette: PaletteOptions,
): ThemeOptions => ({
  palette: palette,
  components: {
    MuiPaper: {
      variants: [
        {
          props: (_props) => true, // Apply this variant to all Paper components
          style: ({ theme }) => ({
            backgroundColor: alpha(theme.palette.background.paper, 0.4),
            backdropFilter: 'blur(100px)',
            // WebkitBackdropFilter: 'blur(100px)',
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
  },
  shape: {
    borderRadius: 15,
  },
});

export const generateTheme = (palette: PaletteOptions): Theme =>
  createTheme(generateThemeOptions(palette));

export default generateTheme;
