import React from 'react';
import usePageNavigation from '../../hooks/Navigation/usePageNavigation';
import { Button } from '@mui/material';

export interface NavButtonProps extends React.ComponentProps<typeof Button> {
  link: string;
}

export const NavButton = ({ link, href = link, ...props }: NavButtonProps) => {
  const navigate = usePageNavigation();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(link);
  };

  return (
    <Button
      color='inherit'
      href={href}
      onClick={handleClick}
      {...props}
    />
  );
};

export default NavButton;
