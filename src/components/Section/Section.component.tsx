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
            md: 1,
            sm: 0.75,
            xs: 0.5,
          },
          paddingY: {
            md: 5,
            sm: 3,
            xs: 2,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default Section;
