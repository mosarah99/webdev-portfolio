import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type React from 'react';
import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router';
import { usePageNavigation } from '../../hooks/Navigation/usePageNavigation';
import {
  Button as MuiButton,
  type ButtonProps as MuiButtonProps,
} from '@mui/material';
import * as uuid from 'uuid';

import './Navbar.style.css';

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
  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          <Box>
            {/* <Typography
              variant='h1'
              noWrap
              component={'a'}
              color='inherit'
            > */}
            <NavButton
              link='/'
              sx={{
                textTransform: 'none',
              }}
            >
              mosarah99
            </NavButton>
            {/* </Typography> */}
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
