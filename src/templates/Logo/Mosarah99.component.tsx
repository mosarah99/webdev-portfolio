import {
  Typography,
  type TypographyProps,
} from '@mui/material';

export interface Mosarah99LogoProps extends Omit<
  TypographyProps,
  'children'
> {}

export const Mosarah99 = ({
  sx,
  ...props
}: Mosarah99LogoProps) => {
  return (
    <Typography
      sx={[
        {
          textTransform: 'none',

          fontFamily: [
            `'Plaster'`,
            `'Eagle Lake'`,
            `'Roboto'`,
            `'sans-serif'`,
            `'ui-sans-serif'`,
          ].join(', '),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      mosarah99
    </Typography>
  );
};

export default Mosarah99;
