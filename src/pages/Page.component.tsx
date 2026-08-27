import { Box, type BoxProps } from '@mui/material';
import { type PropsWithChildren } from 'react';

interface PageProps extends PropsWithChildren<BoxProps> {}

export const Page = ({ children, ...props }: PageProps) => {
  return (
    <Box
      component={'main'}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Page;
