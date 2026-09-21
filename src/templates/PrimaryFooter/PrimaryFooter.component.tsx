import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from '@mui/material';
import Mosarah99Logo from '../Logo/Mosarah99.component';
import {
  EmailRounded,
  GitHub,
  LinkedIn,
} from '@mui/icons-material';
import footerLinks from '../../assets/footer-site-links';
import FooterHeader from './FooterHeader/FooterHeader.component';

const PrimaryFooter = () => {
  return (
    <Box component={'footer'}>
      <Container
        maxWidth={'xl'}
        sx={{
          transform: 'translateY(-50%)',
        }}
      >
        <Stack
          sx={{
            alignItems: 'center',
          }}
        >
          <Divider
            variant='fullWidth'
            orientation='horizontal'
            sx={(theme) => ({
              borderWidth: 5,
              borderColor: theme.palette.getContrastText(
                theme.palette.background.default,
              ),
              maxWidth: '65vw',
              width: '100%',
            })}
          />
        </Stack>
      </Container>
      <Container
        maxWidth={'xl'}
        sx={{
          paddingY: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={2}
          sx={{
            justifyContent: 'space-around',
          }}
          divider={
            <Divider
              variant='middle'
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            />
          }
        >
          <Box>
            <Stack spacing={4}>
              <Card>
                <CardMedia
                  component={'img'}
                  image='https://avatars.githubusercontent.com/u/48929049'
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
          </Box>
          <Box>
            <Stack>
              <FooterHeader>Site Links</FooterHeader>

              <List dense>
                {footerLinks.map((link, index) => (
                  <ListItem
                    key={`${index}-${link}`}
                    disableGutters
                    dense
                  >
                    <ListItemButton href={link.href}>
                      {link.title}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={2}>
              <Box>
                <FooterHeader>Send an email</FooterHeader>

                <Typography>
                  <ListItem
                    component={'div'}
                    dense
                    disableGutters
                  >
                    <ListItemButton href='mailto:sadatrahman001@gmail.com'>
                      <ListItemIcon>
                        <EmailRounded />
                      </ListItemIcon>
                      sadatrahman001@gmail.com
                    </ListItemButton>
                  </ListItem>
                </Typography>
              </Box>
              <Box>
                <FooterHeader>Socials</FooterHeader>
                <List dense>
                  <ListItem
                    disableGutters
                    dense
                  >
                    <ListItemButton href='https://www.linkedin.com/sadatrahman001'>
                      <ListItemIcon>
                        <LinkedIn />
                      </ListItemIcon>
                      https://www.linkedin.com/sadatrahman001
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disableGutters
                    dense
                  >
                    <ListItemButton href='https://github.com/mosarah99'>
                      <ListItemIcon>
                        <GitHub />
                      </ListItemIcon>
                      https://github.com/mosarah99
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrimaryFooter;
