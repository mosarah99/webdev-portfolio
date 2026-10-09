import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

export interface ViewMenuButtonGroupProps {
  activeViewMode?: string;
  viewModes: string[];
  onClick?: (mode: string) => any;
}
export const ViewMenuButtonGroup = (
  props: ViewMenuButtonGroupProps,
) => {
  const handleButtonClick =
    (mode: string) => (event: React.MouseEvent) => {
      event.preventDefault();
      props.onClick && props.onClick(mode);
    };
  return (
    <ButtonGroup>
      {props.viewModes.map((mode) => (
        <Button
          key={mode}
          variant={
            mode === props.activeViewMode
              ? 'contained'
              : 'outlined'
          }
          onClick={handleButtonClick(mode)}
        >
          {mode}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ViewMenuButtonGroup;
