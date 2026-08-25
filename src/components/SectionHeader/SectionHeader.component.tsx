import { Box, Container, Typography } from '@mui/material';

export const SectionHeader = ({
  pretitle,
  title,
  subtitle,
  pretitleProps,
  titleProps,
  subtitleProps,
}: {
  pretitle?: string;
  title: string;
  subtitle?: string;

  pretitleProps?: React.ComponentProps<typeof Typography>;
  titleProps?: React.ComponentProps<typeof Typography>;
  subtitleProps?: React.ComponentProps<typeof Typography>;
}) => (
  <Box
    // maxWidth='lg'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '5rem',
      marginBottom: '3rem',
      textAlign: 'center',
    }}
  >
    {pretitle && (
      <Typography
        variant='caption'
        {...pretitleProps}
      >
        {pretitle}
      </Typography>
    )}
    <Typography
      variant='h4'
      {...titleProps}
    >
      {title}
    </Typography>
    {subtitle && (
      <Typography
        variant='subtitle1'
        {...subtitleProps}
      >
        {subtitle}
      </Typography>
    )}
  </Box>
);

export default SectionHeader;
