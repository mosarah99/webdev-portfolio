import {
  Typography,
  type TypographyProps,
} from '@mui/material';

export interface FooterHeaderProps extends TypographyProps {}

export const FooterHeader = ({
  sx,
  variant,
  ...props
}: FooterHeaderProps) => {
  return (
    <Typography
      variant={variant || 'h5'}
      sx={[
        {
          fontWeight: 'bold',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  );
};

export default FooterHeader;
