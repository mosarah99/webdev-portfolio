import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import type React from 'react';
import { useMemo } from 'react';
// import { useNavigate } from 'react-router';
import { usePageNavigation } from '../../hooks/Navigation/usePageNavigation';
import {
  IconButton,
  Button as MuiButton,
  Typography,
  useColorScheme,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';
import * as uuid from 'uuid';

import './Navbar.style.css';

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
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Box>
            <NavButton
              link='/'
              sx={{
                textTransform: 'none',

                fontFamily: [
                  'sans-serif',
                  'ui-sans-serif',
                  'Roboto',
                  'Eagle Lake',
                  'Plaster',
                ],
                fontWeight: 'bold',
                fontStyle: 'normal',
              }}
            >
              mosarah99
            </NavButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            component={'nav'}
            color={'inherit'}
          >
            {navLinks.map(({ label, link }) => (
              <NavButton
                className='nav-btn'
                link={link}
                key={uuid.v7()}
              >
                {label}
              </NavButton>
            ))}
          </Box>
          <Box>
            <IconButton
              onClick={toggleMode}
              color='inherit'
            >
              {ColorSchemeIcon}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
