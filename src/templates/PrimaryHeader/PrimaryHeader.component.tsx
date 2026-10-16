import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useMemo } from 'react';
// import { useNavigate } from 'react-router';
import {
  IconButton,
  Paper,
  useColorScheme,
  useScrollTrigger,
  useTheme,
} from '@mui/material';

import './PrimaryHeader.style.css';

import {
  Settings,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import NavButton from '../../components/NavButton/NavButton.component';
import Navbar from '../Navbar/Navbar.component';
import Mosarah99Logo from '../Logo/Mosarah99.component';

export const PrimaryHeader = () => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 4,
  });

  const ColorSchemeIcon = useMemo(() => {
    switch (mode) {
      case 'light':
        return (
          <LightMode data-testid='primary-header-color-scheme-icon__light' />
        );
      case 'dark':
        return (
          <DarkMode data-testid='primary-header-color-scheme-icon__dark' />
        );
      default:
        return (
          <Settings data-testid='primary-header-color-scheme-icon__system' />
        );
    }
  }, [mode]);

  const toggleMode = () => {
    switch (mode) {
      case 'system':
        setMode('light');
        break;
      case 'light':
        setMode('dark');
        break;
      case 'dark':
        setMode('system');
        break;

      default:
        setMode('system');
        break;
    }
  };

  return (
    <AppBar
      elevation={
        trigger
          ? theme.components?.MuiAppBar?.defaultProps
              ?.elevation || 15
          : 0
      }
      sx={[
        !trigger
          ? {
              backgroundColor: theme.alpha(
                theme.palette.common.white,
                0,
              ),
              backdropFilter: 'initial',
              boxShadow: 'initial',
            }
          : {
              //   position: 'sticky',
            },
      ]}
      data-testid='primary-header'
    >
      <Container maxWidth='xl'>
        <Toolbar
          variant={trigger ? 'dense' : 'regular'}
          disableGutters
          sx={{
            gap: 1,
            minHeight: !trigger
              ? {
                  xs: '60px',
                  md: '80px',
                }
              : null,
          }}
        >
          <Paper
            sx={{
              flexGrow: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            <NavButton
              link='/'
              sx={{
                flexGrow: 1,
                display: 'flex',
              }}
              data-testid='primary-header__favicon'
            >
              <Mosarah99Logo />
              <Box
                component={'span'}
                sx={{
                  display: {
                    xs: 'block',
                    sm: 'none',
                  },
                  flexGrow: 1,
                }}
              ></Box>
            </NavButton>
          </Paper>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                sm: 'block',
              },
            }}
          />
          <Paper
            component={'nav'}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <Navbar
              variant={'both'}
              data-testid='primary-header__navbar'
            />
          </Paper>
          <Paper sx={{ borderRadius: '50%' }}>
            <IconButton
              onClick={toggleMode}
              color='inherit'
              data-testid='primary-header__colorscheme-btn'
            >
              {ColorSchemeIcon}
            </IconButton>
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default PrimaryHeader;
