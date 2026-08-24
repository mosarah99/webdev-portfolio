import { Box, type BoxProps } from '@mui/material';
import { type PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren<BoxProps> {}

export const Section = ({ sx, children, ...props }: SectionProps) => {
  return (
    <Box
      component={'section'}
      sx={{
        padding: {
          md: '1rem',
          sm: '.75rem',
          xs: '.5rem',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Section;
