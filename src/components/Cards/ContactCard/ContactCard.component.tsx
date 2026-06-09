import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ContactInfoItemProps {
  icon: ReactNode;
  text: string;
}
export const ContactInfoItem = (props: ContactInfoItemProps) => {
  return (
    <Stack
      alignItems={'flex-end'}
      direction={'row'}
      spacing={2}
    >
      {props.icon}
      <Typography>{props.text}</Typography>
    </Stack>
  );
};
export const ContactCard = () => {
  return (
    <Card
      variant='elevation'
      sx={{
        maxWidth: '100%',
        //   maxHeight: '300px',
        marginY: '3rem',
      }}
    >
      <Stack direction={'row'}>
        <Stack
          direction={'column'}
          justifyContent={'center'}
          alignItems={'flex-start'}
          marginRight={'3rem'}
          minWidth={'50%'}
        >
          <CardHeader
            title='Sadat Rahman'
            subheader='Full-Stack Developer'
          />
          <CardContent
            sx={{
              width: '100%',
            }}
          >
            <Divider variant='fullWidth'>Location</Divider>
            <ContactInfoItem
              icon={<LocationPinIcon />}
              text='Alberta, Canada'
            />
          </CardContent>
          <CardContent
            sx={{
              width: '100%',
            }}
          >
            <Divider variant='fullWidth'>Links</Divider>
            <ContactInfoItem
              icon={<MarkunreadIcon />}
              text='sadatrahman001@gmail.com'
            />
            <ContactInfoItem
              icon={<LinkedInIcon />}
              text='sadatrahman001'
            />
            <ContactInfoItem
              icon={<GitHubIcon />}
              text='mosarah99'
            />
          </CardContent>
        </Stack>
        <Box
          sx={{
            aspectRatio: 1,
            objectFit: 'cover',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <CardMedia
            sx={{ objectFit: 'cover', aspectRatio: 1 }}
            image='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d'
            component={'img'}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default ContactCard;
