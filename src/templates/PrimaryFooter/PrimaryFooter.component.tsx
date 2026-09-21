import {
  Box,
  Container,
  Divider,
  Stack,
} from '@mui/material';
import footerLinks from '../../assets/footer-site-links';
import FooterSiteLinksWidget from './FooterSiteLinksWidget/FooterSiteLinksWidget.component';
import FooterSiteIdentityWidget from './FooterSiteIdentityWidget/FooterSiteIdentityWidget.component';
import FooterContactLinksWidget from './FooterContactLinksWidget/FooterContactLinksWidget.component';

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
          <FooterSiteIdentityWidget
            imageURL={
              new URL(
                'https://avatars.githubusercontent.com/u/48929049',
              )
            }
          />
          <FooterSiteLinksWidget
            footerLinks={footerLinks}
          />
          <Box>
            <FooterContactLinksWidget />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PrimaryFooter;
