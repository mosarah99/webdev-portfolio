import { Box, Typography } from '@mui/material';

export interface SectionHeaderProps {
  preheader?: string;
  header: string;
  subheader?: string;

  preheaderProps?: React.ComponentProps<typeof Typography>;
  headerProps?: React.ComponentProps<typeof Typography>;
  subheaderProps?: React.ComponentProps<typeof Typography>;
}

export const SectionHeader = ({
  preheader: pretitle,
  header: title,
  subheader: subtitle,
  preheaderProps: pretitleProps,
  headerProps: titleProps,
  subheaderProps: subtitleProps,
}: SectionHeaderProps) => {
  return (
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
};

export default SectionHeader;
