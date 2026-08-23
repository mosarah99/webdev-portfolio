import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import * as uuid from 'uuid';

import './Home.style.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
// import { useNavigate } from 'react-router';
import ContactCard from '../../components/Cards/ContactCard/ContactCard.component';
import { ProjectGridCard } from '../../components/Cards/ProjectGridCard/ProjectGridCard';
import { featuredProjects } from '../../assets/projects-skills';
import { usePageNavigation } from '../../hooks/Navigation/usePageNavigation';
import Page from '../Page.component';

export const Homepage: React.FC = () => {
  const theme = useTheme();
  const navigate = usePageNavigation();
  const onButtonClickNavigate =
    (destination: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      navigate(destination);
    };

  return (
    <Page>
      <section
        className='homepage__hero-section'
        style={{
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <SectionHeader
          title='Sadat Rahman'
          subtitle='Web Dev | Full-Stack | Wizard'
          titleProps={{
            variant: 'h3',
            // textTransform: 'uppercase',
            // fontWeight: 'bolder',
            color: theme.palette.getContrastText(theme.palette.primary.main),
          }}
          subtitleProps={{
            color: theme.palette.getContrastText(theme.palette.primary.main),
          }}
        />
        {/* <Container maxWidth='lg'>
          <Typography
            color={theme.palette.getContrastText(theme.palette.primary.main)}
            variant='h2'
            textTransform={'uppercase'}
            fontWeight={'bolder'}
            textAlign={'center'}
          >
            Sadat Rahman
          </Typography>
          <Typography
            variant='subtitle1'
            textAlign={'center'}
          >
            Web Dev | Full-Stack | Wizard
          </Typography>
        </Container> */}
      </section>
      <section
        className='homepage__about-section'
        id='about'
      >
        <SectionHeader
          pretitle='A little more'
          title='About Me'
        />

        <Container maxWidth='lg'>
          <Typography>
            As a full-stack developer, I specialize in building robust,
            scalable, and intuitive digital solutions that bridge front-end
            elegance with back-end strength. My technical foundation spans a
            wide range of languages—including Java, Kotlin, Python, C++,
            JavaScript, and TypeScript—and is supported by extensive experience
            with modern frameworks such as React, Angular, Spring Boot, ASP.NET,
            and Node.js. Whether it's architecting APIs, managing databases (SQL
            or NoSQL), or deploying to AWS or Azure, I approach every project
            with a deep commitment to reliability, maintainability, and
            performance.
          </Typography>
          <Typography>
            In addition to my technical expertise, I've had the privilege of
            contributing to meaningful modernization projects during my time at
            the Canada Revenue Agency, where I developed internal tooling to
            streamline workflows and increase team productivity. Similarly, at
            J.D. Power, I played a key role in resolving technical issues,
            upgrading infrastructure, and helping onboard new hires—all of which
            sharpened my ability to troubleshoot quickly and work
            cross-functionally. These professional experiences have not only
            refined my technical approach but also instilled in me a strong
            sense of ownership, accountability, and attention to detail.
          </Typography>
          <Typography>
            Moreover, I believe that strong collaboration and communication are
            just as important as clean code. I bring a team-first mindset,
            adaptability across roles and environments, and a willingness to
            learn and teach. This mindset has helped me consistently deliver
            value in both solo and team-based projects, and it's part of why I
            was recognized on the President's Honour Roll at Fanshawe College.
          </Typography>
          <Typography>
            Ultimately, I see software development as both a science and an
            art—a craft that combines logic, creativity, and a bit of digital
            wizardry. Whether I'm developing production-ready features,
            automating internal tools, or designing user-focused experiences, I
            strive to create solutions that are not only functional but
            thoughtfully built and future-ready.
          </Typography>
        </Container>
        <Container maxWidth='lg'>
          <ButtonGroup
            fullWidth
            sx={{ marginY: 5 }}
          >
            <Button
              variant='outlined'
              onClick={onButtonClickNavigate('/skills')}
              href='/skills'
            >
              View all skills
            </Button>
            <Button
              variant='contained'
              onClick={onButtonClickNavigate('/contact')}
              href='/contact'
            >
              Contact Me
            </Button>
          </ButtonGroup>
        </Container>
      </section>
      <section
        className='homepage__projects-section'
        id='about'
      >
        <SectionHeader
          pretitle='Sneak peek into my'
          title='Projects'
        />
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            {featuredProjects.map((project) => (
              <Grid
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
        <Container maxWidth='md'>
          <ButtonGroup
            fullWidth
            sx={{ marginY: 5 }}
          >
            <Button
              variant='outlined'
              onClick={onButtonClickNavigate('/skills')}
              href='/skills'
            >
              Check out my skills
            </Button>
            <Button
              variant='contained'
              onClick={onButtonClickNavigate('/projects')}
              href='/projects'
            >
              See all projects
            </Button>
          </ButtonGroup>
        </Container>
      </section>
      <section
        className='homepage__contact-section'
        id='about'
      >
        <SectionHeader
          pretitle={'Interested?'}
          title={"Let's Connect"}
        />
        <Container maxWidth='md'>
          <ContactCard />
        </Container>
      </section>
    </Page>
  );
};

export default Homepage;
