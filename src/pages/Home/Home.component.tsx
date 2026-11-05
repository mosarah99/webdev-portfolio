import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as uuid from 'uuid';

import './Home.style.css';
import SectionHeader from '../../templates/SectionHeader/SectionHeader.component';
// import { useNavigate } from 'react-router';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import { ProjectGridCard } from '../../components/Cards/ProjectGridCard/ProjectGridCard';
import { featuredProjects } from '../../assets/projects-skills';
import { usePageNavigation } from '../../hooks/Navigation/usePageNavigation';
import Page from '../Page.component';
import PrimarySection from '../../components/Section/PrimarySection/PrimarySection.component';
import SecondarySection from '../../components/Section/SecondarySection/SecondarySection.component';
import ContrastSection from '../../components/Section/ContrastSection/ContrastSection.component';
import HeroSection from '../../templates/HeroSection/HeroSection.component';
import MarkdownFancy from '../../components/MarkdownFancy/MarkdownFancy.component';
import useContentFetch from '../../hooks/Utilities/useContentFetch';
import type { ISection } from '../../types/content/PageContent';

interface SectionActionsProps {
  buttons?: React.ReactNode[];
}
const SectionActions = (props: SectionActionsProps) => {
  return (
    <Container maxWidth='md'>
      <ButtonGroup
        fullWidth
        sx={{
          marginTop: {
            xs: 5,
            sm: 7,
            md: 10,
          },
          textAlign: 'center',
        }}
      >
        {props.buttons}
      </ButtonGroup>
    </Container>
  );
};
export const Homepage: React.FC = () => {
  const navigate = usePageNavigation();
  const onButtonClickNavigate =
    (destination: string) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(destination);
    };

  const theme = useTheme();
  const isMobileView = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  const content = useContentFetch(
    new URL('./content/homepage.json', document.baseURI),
  );
  const getData = (sectionName: ISection['name']) =>
    content.getSection.byName(sectionName)?.content;

  return (
    <Page>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/8168567/pexels-photo-8168567.png'
        header={getData('hero')?.header || 'Sadat R.'}
        subheader={
          getData('hero')?.subheader ||
          'Web Dev | Full-Stack | Wizard'
        }
        sx={{
          minHeight: '100vh',
        }}
      />
      <PrimarySection
        className='homepage__about-section'
        id='about'
      >
        <SectionHeader
          preheader={
            getData('about')?.preheader || 'A little more'
          }
          header={getData('about')?.header || 'About Me'}
        />

        <Container maxWidth='lg'>
          <MarkdownFancy>
            {getData('about')?.body || 'Curiously wounded'}
          </MarkdownFancy>
        </Container>
        <SectionActions
          buttons={[
            <Button
              variant='outlined'
              onClick={onButtonClickNavigate('/skills')}
              href='/skills'
            >
              View all skills
            </Button>,
            <Button
              variant='contained'
              onClick={onButtonClickNavigate('/contact')}
              href='/contact'
            >
              Contact Me
            </Button>,
          ]}
        />
      </PrimarySection>
      <SecondarySection className='homepage__projects-section'>
        <SectionHeader
          preheader={
            getData('projects')?.preheader ||
            'Sneak peek into my'
          }
          header={getData('projects')?.header || 'Projects'}
        />
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            {featuredProjects.map((project) => (
              <Grid
                component={Stack}
                size={{ xs: 12, sm: 6, md: 4 }}
                key={uuid.v7()}
              >
                <ProjectGridCard
                  project={project}
                  projectDetailsPageURL={`/projects/${project.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
        <SectionActions
          buttons={[
            <Button
              variant='outlined'
              onClick={onButtonClickNavigate('/skills')}
              href='/skills'
            >
              Check out my skills
            </Button>,
            <Button
              variant='contained'
              onClick={onButtonClickNavigate('/projects')}
              href='/projects'
            >
              See all projects
            </Button>,
          ]}
        />
      </SecondarySection>
      <ContrastSection>
        <SectionHeader
          preheader={
            getData('contact')?.preheader ||
            'Never gonna give you up'
          }
          header={
            getData('contact')?.header ||
            'Never gonna let you down'
          }
        />
        <Container maxWidth='md'>
          <ContactCard
            {...(!isMobileView && {
              imageLink: new URL(
                'https://avatars.githubusercontent.com/u/48929049',
              ),
            })}
          />
        </Container>
      </ContrastSection>
    </Page>
  );
};

export default Homepage;
