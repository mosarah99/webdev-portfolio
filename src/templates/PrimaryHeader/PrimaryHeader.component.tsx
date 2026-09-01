import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import type React from 'react';
import { useMemo } from 'react';
// import { useNavigate } from 'react-router';
import { usePageNavigation } from '../../hooks/Navigation/usePageNavigation';
import {
  ButtonGroup,
  IconButton,
  Button as MuiButton,
  Paper,
  useColorScheme,
  useScrollTrigger,
  useTheme,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';
import * as uuid from 'uuid';

import './PrimaryHeader.style.css';

import { Settings, LightMode, DarkMode } from '@mui/icons-material';

interface NavButtonProps extends MuiButtonProps {
  link: string;
}

const NavButton = ({ link, ...props }: NavButtonProps) => {
  const navigate = usePageNavigation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(link);
  };

  return (
    <MuiButton
      color='inherit'
      {...props}
      href={props.href || link}
      onClick={handleClick}
    />
  );
};

const navLinks = [
  { label: 'About', link: '/home' },
  { label: 'Projects', link: '/projects' },
  { label: 'Skills', link: '/skills' },
  { label: 'Contact', link: '/contact' },
];

export const Navbar = () => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const ColorSchemeIcon = useMemo(() => {
    switch (mode) {
      case 'light':
        return <LightMode />;
      case 'dark':
        return <DarkMode />;
      default:
        return <Settings />;
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
        trigger ? theme.components?.MuiAppBar?.defaultProps?.elevation || 15 : 0
      }
      sx={[
        !trigger
          ? {
              backgroundColor: theme.alpha(theme.palette.common.white, 0),
              backdropFilter: 'initial',
              boxShadow: 'initial',
            }
          : {},
      ]}
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
          <Paper>
            <NavButton
              link='/'
              sx={{
                textTransform: 'none',

                fontFamily: [
                  `'Plaster'`,
                  `'Eagle Lake'`,
                  `'Roboto'`,
                  `'sans-serif'`,
                  `'ui-sans-serif'`,
                ].join(', '),
              }}
            >
              mosarah99
            </NavButton>
          </Paper>
          <Box sx={{ flexGrow: 1 }} />
          <Paper component={'nav'}>
            <ButtonGroup
              variant='text'
              sx={{
                border: 'none',
              }}
            >
              {navLinks.map(({ label, link }) => (
                <NavButton
                  link={link}
                  key={uuid.v7()}
                  sx={{
                    paddingX: 3,
                  }}
                >
                  {label}
                </NavButton>
              ))}
            </ButtonGroup>
          </Paper>
          <Paper sx={{ borderRadius: '50%' }}>
            <IconButton
              onClick={toggleMode}
              color='inherit'
            >
              {ColorSchemeIcon}
            </IconButton>
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
