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

type SiteLink = {
  title: string;
  href: string;
  subLinks?: SiteLink[];
  icon?: HTMLElement;
};

const siteLinks: SiteLink[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/?p=projects',
  },
  {
    title: 'Skills',
    href: '/?p=skills',
  },
];

const PrimaryFooter = () => {
  return (
    <Box component={'footer'}>
      <Container
        maxWidth={'xl'}
        sx={{
          paddingX: 10,
          transform: 'translateY(-50%)',
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
          })}
        />
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
              <Typography
                variant='h4'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Site Links
              </Typography>
              <List dense>
                {siteLinks.map((site, index) => (
                  <ListItem
                    disableGutters
                    dense
                  >
                    <ListItemButton href={site.href}>
                      {site.title}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={2}>
              <Box>
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Send an email
                </Typography>
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
                <Typography
                  variant='h4'
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Socials
                </Typography>
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
