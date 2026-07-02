// src/theme/ThemeContext.jsx
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
} from 'react';
import {
  ThemeProvider,
  createTheme,
  type PaletteOptions,
  type ThemeOptions,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { themePalettes } from './palettes';

/** 
const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Check system preference
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  // 2. State for the mode (defaulting to system preference)
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');

  // Update mode if system preference changes and user hasn't manually overridden it yet
  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  // 3. Create the actual MUI theme object
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // You can customize colors here
          primary: {
            main: mode === 'light' ? '#1976d2' : '#90caf9',
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

 */

//////////////////////////////////////////////////////////
// const ThemeConfigContext = createContext(() => {});

// export const useThemeConfig = () => useContext(ThemeConfigContext);

// export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   // Set the default theme name
//   const [themeName, setThemeName] = useState<'light' | 'dark' | 'ocean' | 'forest'>('light');

//   const theme = useMemo(() => {
//     return createTheme({
//       palette: themePalettes[themeName],
//       // You can also add global component overrides here that
//       // change based on the themeName
//     //   shape: { borderRadius: themeName === 'forest' ? 16 : 4 },
//     });
//   }, [themeName]);

//   return (
//     <ThemeConfigContext.Provider value={{ themeName, setThemeName }}>
//       <ThemeProvider theme={theme}>
//         {children}
//       </ThemeProvider>
//     </ThemeConfigContext.Provider>
//   );
// };
