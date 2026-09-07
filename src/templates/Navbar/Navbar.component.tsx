import { ButtonGroup } from '@mui/material';
import { NavButton } from '../../components/NavButton/NavButton.component';
import * as uuid from 'uuid';
import {
  HomeRounded,
  BookRounded,
  LightbulbRounded,
} from '@mui/icons-material';

const navLinks = [
  {
    label: 'About',
    link: '/home',
    icon: <HomeRounded />,
  },
  {
    label: 'Projects',
    link: '/projects',
    icon: <LightbulbRounded />,
  },
  {
    label: 'Skills',
    link: '/skills',
    icon: <BookRounded />,
  },
  {
    label: 'Contact',
    link: '/contact',
  },
];

const uuidSet = [...Array(navLinks.length)].map(() => uuid.v7());

const Navbar = () => {
  return (
    <ButtonGroup
      variant='text'
      sx={{
        border: 'none',
      }}
    >
      {navLinks.map(({ label, link }, index) => (
        <NavButton
          link={link}
          key={`nav-button-${link}-${label}-${uuidSet[index]}`}
          sx={{
            paddingX: 3,
          }}
        >
          {label}
        </NavButton>
      ))}
    </ButtonGroup>
  );
};

export default Navbar;
