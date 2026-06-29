import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import type { ReactNode } from 'react';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';

export interface ContactInfoItemProps {
  actionButton?: ReactNode;
  icon: ReactNode;
  text: string;
}
export const ContactInfoItem = (props: ContactInfoItemProps) => {
  const spacing = 2;

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={spacing}
    >
      <Stack
        alignItems={'flex-end'}
        direction={'row'}
        spacing={spacing}
        flexGrow={1}
      >
        {props.icon}
        <Typography>{props.text}</Typography>
      </Stack>
      {props.actionButton && props.actionButton}
    </Stack>
  );
};
export const ContactCard = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
          flexGrow={1}
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
              actionButton={
                <IconButton
                  onClick={() => copyToClipboard('sadatrahman001@gmail.com')}
                >
                  <ContentCopyIcon />
                </IconButton>
              }
            />
            <ContactInfoItem
              icon={<LinkedInIcon />}
              text='sadatrahman001'
              actionButton={
                <IconButton
                  href='https://www.linkedin.com/in/sadatrahman001/'
                  target='_blank'
                >
                  <LaunchIcon />
                </IconButton>
              }
            />
            <ContactInfoItem
              icon={<GitHubIcon />}
              text='mosarah99'
              actionButton={
                <IconButton
                  href='https://github.com/mosarah99'
                  target='_blank'
                >
                  <LaunchIcon />
                </IconButton>
              }
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
