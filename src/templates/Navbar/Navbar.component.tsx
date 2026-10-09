import { ButtonGroup } from '@mui/material';
import { NavButton } from '../../components/NavButton/NavButton.component';
import * as uuid from 'uuid';
import {
  HomeRounded,
  BookRounded,
  LightbulbRounded,
  PhoneRounded,
} from '@mui/icons-material';

const navLinks = [
  {
    label: 'Home',
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
    icon: <PhoneRounded />,
  },
];

const uuidSet = [...Array(navLinks.length)].map(() =>
  uuid.v7(),
);

export interface NavbarProps {
  variant?: 'icon' | 'text' | 'both';
}

const Navbar = ({ variant = 'text' }: NavbarProps) => {
  return (
    <ButtonGroup
      variant='text'
      sx={{
        border: 'none',
      }}
    >
      {navLinks.map(({ label, link, icon }, index) => (
        <NavButton
          link={link}
          key={`nav-button-${link}-${label}-${uuidSet[index]}`}
          sx={{
            paddingX: 3,
          }}
          startIcon={variant === 'both' ? icon : undefined}
        >
          {variant !== 'icon' ? label : icon}
        </NavButton>
      ))}
    </ButtonGroup>
  );
};

export default Navbar;
