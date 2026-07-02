import { Box, Card, CardContent, Container } from '@mui/material';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const ContactsPage = () => {
  const [ghReadme, setGhReadme] = useState<string>('# Loading REAME...');

  useEffect(() => {
    const fetchGhReadme = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/mosarah99/mosarah99/main/README.md',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch README.md');
        }
        const readmeText = await response.text();
        setGhReadme(readmeText);
      } catch (error) {
        console.error('Error fetching README.md:', error);
        setGhReadme('# Failed to load README.md');
      }
    };

    fetchGhReadme();
  }, []);

  return (
    <Box>
      <section>
        <SectionHeader title='Connection is just a few clicks away' />
        <Container maxWidth='lg'>
          <ContactCard />
        </Container>
      </section>
      <section>
        <Container maxWidth='lg'>
          <SectionHeader
            pretitle='Professional presence on'
            title='LinkedIn'
          />
          <Card>
            <Box
              component='iframe'
              src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25693876'
              sx={{
                width: '100%',
                border: 0,
                height: '20rem',
                maxHeight: '800px',
                margin: 0,
              }}
            />
          </Card>
        </Container>
      </section>
      <section>
        <Container maxWidth='lg'>
          <SectionHeader
            pretitle='Having fun on'
            title='GitHub'
          />
          <Card
            // variant='outlined'
            sx={{
              'backgroundColor': '#0d1117',
              'p,h1, h2,h3,h4,h5,h6': {
                color: '#c9d1d9',
              },
              'a': {
                color: '#58a6ff',
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  overflow: 'auto',
                  img: {
                    maxWidth: '100%',
                  },
                }}
              >
                <Markdown rehypePlugins={[rehypeRaw]}>{ghReadme}</Markdown>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </section>
      <section>
        <Container maxWidth='lg'>
          <SectionHeader
            pretitle='Locate me on'
            title='Google Maps'
          />
          <Card
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              display={'block'}
              component='iframe'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160600.64768221346!2d-114.25263613551553!3d51.02750740792613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1782748259671!5m2!1sen!2sbd'
              width='100%'
              height={{
                xs: '500px',
                md: '800px',
                // lg: '1200px',
              }}
              sx={{
                border: 0,
                // borderRadius: 2,
              }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='strict-origin-when-cross-origin'
            />
          </Card>
        </Container>
      </section>
    </Box>
  );
};

export default ContactsPage;
