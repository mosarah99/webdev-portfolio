import {
  Box,
  Card,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Mosarah99Logo from '../../Logo/Mosarah99.component';

export interface FooterSiteIdentityWidgetProps {
  imageURL?: URL;
}
export const FooterSiteIdentityWidget = (
  props: FooterSiteIdentityWidgetProps,
) => {
  return (
    <Stack spacing={4}>
      <Card>
        <CardMedia
          component={'img'}
          image={
            props.imageURL?.toString() ||
            'https://avatars.githubusercontent.com/u/48929049'
          }
          alt='Site Logo Avatar'
          width={'100%'}
        />
      </Card>
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
