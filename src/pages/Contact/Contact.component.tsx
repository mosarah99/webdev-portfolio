import {
  Box,
  Card,
  CardContent,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import SectionHeader from '../../templates/SectionHeader/SectionHeader.component';
import { useEffect, useState } from 'react';
import Page from '../Page.component';
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import MarkdownFancy from '../../components/MarkdownFancy/MarkdownFancy.component';
import useContentFetch from '../../hooks/Utilities/useContentFetch';
import type { ISection } from '../../types/content/PageContent';

/**
 * The URL of the README file for the GitHub repository.
 */
const GH_README_URL =
  'https://raw.githubusercontent.com/mosarah99/mosarah99/main/README.md';

/**
 * A basic custom hook for fetching data from a provided URL and returning the data, loading state and error.
 * @template T - The type of the JSON data. Default - `string`
 * @param url - The URL to fetch data from.
 * @returns The JSON data, loading state and error. 
 */
const useFetchBasic = <T = string,>(url: URL) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: URL): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `[${response.status}][${response.statusText}] Failed to fetch from url: ${url.href}`,
      );
    }
    const contentType =
      response.headers.get('content-type');
    if (
      contentType &&
      contentType.includes('application/json')
    ) {
      return response.json() as Promise<T>;
    }
    return response.text() as Promise<T>;
  };

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const result = await fetchData(url);
        setData(result);
        setError(null);
      } catch (error: unknown) {
        setData(null);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [url.href]);

  return {
    data,
    loading,
    error,
  };
};

export const ContactsPage = () => {
  const { data: ghReadme, loading: ghLoading } =
    useFetchBasic(new URL(GH_README_URL));

  const theme = useTheme();
  const isMobileView: boolean = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const content = useContentFetch(
    new URL('./content/contactpage.json', document.baseURI),
  );
  const getData = (sectionName: ISection['name']) =>
    content.getSection.byName(sectionName)?.content;

  return (
    <Page data-testid='contactpage'>
      <HeroSection
        // bgImageUrl='https://images.pexels.com/photos/36028393/pexels-photo-36028393.jpeg'
        bgImageUrl='https://images.pexels.com/photos/6587323/pexels-photo-6587323.jpeg'
        subheader={
          getData('hero')?.subheader ||
          'Connection is just a few clicks away'
        }
        header={getData('hero')?.header || 'Contact'}
        sx={{
          backgroundPositionY: 'bottom 25%',
        }}
        data-testid='contactpage__hero-section'
      />
      <PrimarySection data-testid='contactpage__contact-section'>
        <Container maxWidth='lg'>
          <ContactCard
            {...(!isMobileView && {
              imageLink: new URL(
                'https://avatars.githubusercontent.com/u/48929049',
              ),
            })}
          />
        </Container>
      </PrimarySection>
      <SecondarySection data-testid='contactpage__linkedin-section'>
        <Container maxWidth='lg'>
          <SectionHeader
            preheader={
              getData('linkedin')?.preheader ||
              'Professional presence on'
            }
            header={
              getData('linkedin')?.subheader || 'LinkedIn'
            }
          />
          <Box
            component='iframe'
            src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25693876'
            loading='lazy'
            role='region'
            title={'LinkedIn Information Summary'}
            aria-label='Embedded LinkedIn Widget provided by an external source: SociableKit'
            sx={{
              width: '100%',
              border: 0,
              height: '20rem',
              maxHeight: '800px',
            }}
          />
        </Container>
      </SecondarySection>
      <PrimarySection data-testid='contactpage__github-section'>
        <Container maxWidth='lg'>
          <SectionHeader
            preheader={
              getData('github')?.preheader ||
              'Having fun on'
            }
            header={getData('github')?.header || 'GitHub'}
          />
          <Card
            // variant='outlined'
            sx={{
              backgroundColor: '#0d1117',
              'p,h1, h2,h3,h4,h5,h6': {
                color: '#c9d1d9',
              },
              a: {
                color: '#58a6ff',
              },
            }}
          >
            <CardContent
              sx={{
                overflow: 'auto',
                img: {
                  maxWidth: '100%',
                },
              }}
            >
              <MarkdownFancy>
                {ghLoading
                  ? 'Loading README...'
                  : ghReadme ||
                    'Sorry, cannot fetch the README at the moment...'}
              </MarkdownFancy>
            </CardContent>
          </Card>
        </Container>
      </PrimarySection>
      <SecondarySection data-testid='contactpage__gmaps-section'>
        <Container maxWidth='lg'>
          <SectionHeader
            preheader={
              getData('map')?.preheader || 'Locate me on'
            }
            header={getData('map')?.header || 'Google Maps'}
          />
          <Card
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              component='iframe'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160600.64768221346!2d-114.25263613551553!3d51.02750740792613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sbd!4v1782748259671!5m2!1sen!2sbd'
              width='100%'
              sx={{
                display: 'block',
                border: 0,
                height: {
                  xs: '500px',
                  md: '800px',
                  // lg: '1200px',
                },
                // borderRadius: 2,
              }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='strict-origin-when-cross-origin'
            />
          </Card>
        </Container>
      </SecondarySection>
    </Page>
  );
};

export default ContactsPage;
