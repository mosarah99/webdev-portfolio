import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import useCopyToClipboard from '../../../hooks/Utilities/useCopyToClipboard';
import ContactInfoItem from './ContactInfoItem/ContactInfoItem.component';

export const ContactCard = () => {
  const copyToClipboard = useCopyToClipboard();

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
          sx={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginRight: '3',
            minWidth: '50%',
            flexGrow: 1,
          }}
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
                  onClick={() =>
                    copyToClipboard(
                      'sadatrahman001@gmail.com',
                    )
                  }
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
            //TODO: replace url (https://avatars.githubusercontent.com/u/48929049)
            image='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d'
            component={'img'}
          />
        </Box>
      </Stack>
    </Card>
  );
};

export default ContactCard;
