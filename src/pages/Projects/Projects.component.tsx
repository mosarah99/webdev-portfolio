import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import type React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';
import * as uuid from 'uuid';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

import './Projects.style.css';

import { projects as projectsList } from '../../assets/projectsList';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const ProjectGridCard: React.FC<{
  project: (typeof projectsList)[number];
  projectDetailsPageURL?: string;
}> = ({ project, projectDetailsPageURL }) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
  };

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Card>
        <CardMedia
          image={project.image}
          component={'img'}
          alt={`${project.title} image`}
          sx={{
            objectFit: 'cover',
            aspectRatio: 1,
            boxShadow: '5px 5px 5px #eee',
          }}
        />
        <Box>
          <CardHeader
            title={project.title}
            subheader={project.description}
          />
          <CardActions>
            <ButtonGroup
              variant='outlined'
              fullWidth
            >
              <Button
                variant='outlined'
                href={projectDetailsPageURL || `/projects/${project.id}`}
                onClick={handleViewDetailsClick}
              >
                View details
              </Button>
              {!!project.githubLink && (
                <Button
                  variant='contained'
                  href={project.githubLink}
                  target='_blank'
                  referrerPolicy='no-referrer'
                >
                  View on GitHub
                </Button>
              )}
            </ButtonGroup>
          </CardActions>
        </Box>
      </Card>
    </Grid>
  );
};

const ProjectListCard: React.FC<{
  project: (typeof projectsList)[number];
  projectDetailsPageURL?: string;
}> = ({ project, projectDetailsPageURL }) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
  };

  return (
    <Grid size={{ xs: 12 }}>
      <Card
        sx={
          {
            // display: 'flex',
            // flexDirection: 'row',
            // alignItems: 'center',
            // minHeight: '200px',
          }
        }
      >
        <Stack
          flexDirection={'row'}
          alignItems={'center'}
        >
          <CardMedia
            image={project.image}
            component={'img'}
            alt={`${project.title} image`}
            sx={{
              objectFit: 'cover',
              aspectRatio: 1,

              width: '15rem',
              maxWidth: '120px',
            }}
          />
          <Box sx={{ flex: 1, margin: 1, marginLeft: 2 }}>
            <Stack
              flexDirection={'row'}
              alignItems={'flex-start'}
              justifyContent={'space-between'}
            >
              <CardHeader
                title={project.title}
                subheader={project.description}
              />
              <CardActions>
                <ButtonGroup
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'column',
                      md: 'row',
                    },
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton
                    // variant='outlined'
                    // href={projectDetailsPageURL || `/projects/${project.id}`}
                    onClick={handleViewDetailsClick}
                  >
                    <LaunchIcon />
                  </IconButton>
                  {!!project.githubLink && (
                    <IconButton
                      // variant='contained'
                      href={project.githubLink}
                      target='_blank'
                      referrerPolicy='no-referrer'
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </ButtonGroup>
              </CardActions>
            </Stack>
          </Box>
        </Stack>
      </Card>
    </Grid>
  );
};

export const ProjectsPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <Box>
      <section className='projectspage__hero-section'>
        <SectionHeader
          title='The Showcase'
          subtitle='A selection of my most impactful projects'
          titleProps={{
            variant: 'h2',
            color: 'primary',
            textTransform: 'uppercase',
            fontWeight: 'bolder',
          }}
          subtitleProps={{
            variant: 'h4',
            color: 'textSecondary',
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        />
      </section>
      <section className='projectspage__featured-section'>
        {projectsList
          .filter((project) => project.featured)
          .map((project) => (
            <FeaturedProject
              key={uuid.v7()}
              // className='projectspage__featured-project'
              project={project}
              sx={{
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems': 'center',
                ':nth-child(odd)': {
                  justifyContent: 'flex-start',
                },
                ':nth-child(even)': {
                  flexDirection: 'row-reverse',
                  // justifyContent: 'flex-end',
                },
              }}
            />
          ))}
      </section>
      <section className='projectspage__projects-list-section'>
        <SectionHeader
          pretitle='A bit more detailed'
          title='Projects List'
        />
        <Container
          maxWidth='lg'
          sx={{ marginBottom: 2 }}
        >
          <Card variant='outlined'>
            <CardContent>
              <Stack
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Typography variant='button'>View</Typography>
                <ButtonGroup
                  variant='outlined'
                  aria-label='outlined button group'
                >
                  <Button
                    variant={viewMode === 'grid' ? 'contained' : 'outlined'}
                    onClick={() => setViewMode('grid')}
                  >
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'contained' : 'outlined'}
                    onClick={() => setViewMode('list')}
                  >
                    List
                  </Button>
                </ButtonGroup>
              </Stack>
            </CardContent>
          </Card>
        </Container>
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            {projectsList.map((_project, _index) => {
              if (viewMode === 'grid')
                return (
                  <ProjectGridCard
                    key={uuid.v7()}
                    project={_project}
                    projectDetailsPageURL={`/projects/${_project.id}`}
                  />
                );
              else
                return (
                  <ProjectListCard
                    key={uuid.v7()}
                    project={_project}
                    projectDetailsPageURL={`/projects/${_project.id}`}
                  />
                );
            })}
          </Grid>
        </Container>
      </section>
    </Box>
  );
};
export default ProjectsPage;
