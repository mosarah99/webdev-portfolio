import {
  Box,
  Card,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Mosarah99Logo from '../../Logo/Mosarah99.component';
import type { HTMLAttributes } from 'react';

export interface FooterSiteIdentityWidgetProps extends HTMLAttributes<HTMLDivElement> {
  imageURL?: URL;
}
export const FooterSiteIdentityWidget = ({
  imageURL,
  ...props
}: FooterSiteIdentityWidgetProps) => {
  return (
    <Stack
      spacing={4}
      {...props}
    >
      <Box
        sx={{
          maxWidth: '15rem',
        }}
      >
        <Card>
          <CardMedia
            image={
              imageURL?.toString() ||
              'https://avatars.githubusercontent.com/u/48929049'
            }
            sx={{
              width: '100%',
              aspectRatio: 1,
              objectFit: 'cover',
            }}
          />
        </Card>
      </Box>
      <Box>
        <Mosarah99Logo variant='h4' />
        <Typography>
          Personal Portfolio of Sadat R.
        </Typography>
      </Box>
    </Stack>
  );
};

export default FooterSiteIdentityWidget;
