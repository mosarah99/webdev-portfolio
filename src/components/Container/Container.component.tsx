import {
  Container as MuiContainer,
  type ContainerOwnProps,
} from '@mui/material';
import { type PropsWithChildren } from 'react';

export interface ContainerProps extends PropsWithChildren<ContainerOwnProps> {}

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <MuiContainer
      maxWidth='lg'
      {...props}
    >
      {children}
    </MuiContainer>
  );
};

export default Container;
