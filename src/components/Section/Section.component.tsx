import { Box, type BoxProps } from '@mui/material';
import { type PropsWithChildren } from 'react';

export interface SectionProps extends PropsWithChildren<BoxProps> {}

export const Section = ({
  component = 'section',
  sx,
  ...props
}: SectionProps) => {
  return (
    <Box
      component={component}
      sx={[
        {
          padding: {
            md: '1rem',
            sm: '.75rem',
            xs: '.5rem',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Section;
