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

export interface ContactCardProps {
  imageLink?: URL;
  location?: string;
  email?: string;
  linkedInUsername?: string;
  githubUsername?: string;
}
export const ContactCard = (props: ContactCardProps) => {
  const copyToClipboard = useCopyToClipboard();

  return (
    <Card
      variant='outlined'
      elevation={0}
    >
      <Stack
        direction={'row'}
        sx={{
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
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
              text={props.location || 'Alberta, Canada'}
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
              text={
                props.email || 'sadatrahman001@gmail.com'
              }
              actionButton={
                <IconButton
                  onClick={() =>
                    copyToClipboard(
                      props.email ||
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
              text={
                props.linkedInUsername || 'sadatrahman001'
              }
              actionButton={
                <IconButton
                  href={`https://www.linkedin.com/in/${
                    props.linkedInUsername ||
                    'sadatrahman001'
                  }/`}
                  target='_blank'
                >
                  <LaunchIcon />
                </IconButton>
              }
            />
            <ContactInfoItem
              icon={<GitHubIcon />}
              text={props.githubUsername || 'mosarah99'}
              actionButton={
                <IconButton
                  href={`https://github.com/${
                    props.githubUsername || 'mosarah99'
                  }`}
                  target='_blank'
                >
                  <LaunchIcon />
                </IconButton>
              }
            />
          </CardContent>
        </Box>
        {props.imageLink && (
          <CardMedia
            sx={{
              objectFit: 'cover',
              alignSelf: 'stretch',
              width: '50%',
            }}
            image={props.imageLink?.toString()}
          />
        )}
      </Stack>
    </Card>
  );
};

export default ContactCard;
