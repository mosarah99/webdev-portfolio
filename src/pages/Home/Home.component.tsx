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
  return (
    <Page>
      <HeroSection
        bgImageUrl='https://images.pexels.com/photos/8168567/pexels-photo-8168567.png'
        header='Sadat Rahman'
        subheader='Web Dev | Full-Stack | Wizard'
        sx={{
          minHeight: '100vh',
        }}
      />
      <PrimarySection
        className='homepage__about-section'
        id='about'
      >
        <SectionHeader
          preheader='A little more'
          header='About Me'
        />

        <Container maxWidth='lg'>
          <MarkdownFancy>
            {`As a full-stack developer, I specialize in building robust, scalable, and intuitive digital solutions that bridge front-end elegance with back-end strength. My technical foundation spans a wide range of languages—including Java, Kotlin, Python, C++, JavaScript, and TypeScript—and is supported by extensive experience with modern frameworks such as React, Angular, Spring Boot, ASP.NET, and Node.js. Whether it's architecting APIs, managing databases (SQL or NoSQL), or deploying to AWS or Azure, I approach every project with a deep commitment to reliability, maintainability, and performance.

In addition to my technical expertise, I've had the privilege of contributing to meaningful modernization projects during my time at the Canada Revenue Agency, where I developed internal tooling to streamline workflows and increase team productivity. Similarly, at J.D. Power, I played a key role in resolving technical issues, upgrading infrastructure, and helping onboard new hires—all of which sharpened my ability to troubleshoot quickly and work cross-functionally. These professional experiences have not only refined my technical approach but also instilled in me a strong sense of ownership, accountability, and attention to detail.

Moreover, I believe that strong collaboration and communication are just as important as clean code. I bring a team-first mindset, adaptability across roles and environments, and a willingness to learn and teach. This mindset has helped me consistently deliver value in both solo and team-based projects, and it's part of why I was recognized on the President's Honour Roll at Fanshawe College.

Ultimately, I see software development as both a science and an art—a craft that combines logic, creativity, and a bit of digital wizardry. Whether I'm developing production-ready features, automating internal tools, or designing user-focused experiences, I strive to create solutions that are not only functional but thoughtfully built and future-ready.
`}
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
      <SecondarySection
        className='homepage__projects-section'
        id='about'
      >
        <SectionHeader
          preheader='Sneak peek into my'
          header='Projects'
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
      <ContrastSection id='about'>
        <SectionHeader
          preheader={'Interested?'}
          header={"Let's Connect"}
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
