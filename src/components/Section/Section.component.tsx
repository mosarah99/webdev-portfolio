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
          paddingX: {
            md: 3,
            sm: 2.25,
            xs: 1.5,
          },
          paddingY: {
            md: 15,
            sm: 9,
            xs: 6,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Section;
