import { Box, Typography } from '@mui/material';

/**
 * TODO: rename title to something else
 *      "title" triggers browser tooltip
 */
export interface SectionHeaderProps {
  pretitle?: string;
  title: string;
  subtitle?: string;

  pretitleProps?: React.ComponentProps<typeof Typography>;
  titleProps?: React.ComponentProps<typeof Typography>;
  subtitleProps?: React.ComponentProps<typeof Typography>;
}

export const SectionHeader = ({
  pretitle,
  title,
  subtitle,
  pretitleProps,
  titleProps,
  subtitleProps,
}: SectionHeaderProps) => (
  <Box
    // maxWidth='lg'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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
      variant='h2'
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
