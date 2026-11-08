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
            component={'img'}
            image={
              imageURL?.toString() ||
              'https://avatars.githubusercontent.com/u/48929049'
            }
            alt='Site Logo Avatar'
            width={'100%'}
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
