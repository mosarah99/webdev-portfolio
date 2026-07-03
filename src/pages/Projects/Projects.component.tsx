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
  Fade,
  Grid,
  IconButton,
  Pagination,
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
import { useEffect, useState } from 'react';

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
  const viewModes = ['grid', 'list'] as const;
  const [viewMode, setViewMode] = useState<(typeof viewModes)[number]>('grid');
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const maxPageCount = Math.ceil(projectsList.length / rowsPerPage);
  const [projectsInView, setProjectsInView] = useState<typeof projectsList>(
    projectsList.slice(
      0,
      rowsPerPage * page < projectsList.length
        ? rowsPerPage * page
        : projectsList.length,
    ),
  );
  const [animate, setAnimate] = useState<boolean>(true);
  const animationSpeed = 600; // in milliseconds

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setProjectsInView(
        projectsList.slice(
          (page - 1) * rowsPerPage,
          rowsPerPage * page < projectsList.length
            ? rowsPerPage * page
            : projectsList.length,
        ),
      );
      setAnimate(true);
    }, animationSpeed);

    return () => {
      clearTimeout(timeout);
    };
  }, [page, viewMode]);

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onViewModeChange =
    (mode: (typeof viewModes)[number]) =>
    (_event: React.MouseEvent<HTMLButtonElement>) => {
      setViewMode(mode);
    };

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
                  {viewModes.map((mode) => (
                    <Button
                      key={uuid.v7()}
                      variant={viewMode === mode ? 'contained' : 'outlined'}
                      onClick={onViewModeChange(mode)}
                    >
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </Button>
                  ))}
                </ButtonGroup>
              </Stack>
            </CardContent>
          </Card>
        </Container>
        <Container maxWidth='lg'>
          <Fade
            in={animate}
            timeout={{
              appear: animationSpeed / 4,
              enter: animationSpeed * 1.2,
              exit: animationSpeed / 2,
            }}
          >
            <Grid
              container
              spacing={2}
            >
              {projectsInView.map((_project, _index) => {
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
          </Fade>
          <Stack
            margin={4}
            direction={'row'}
            justifyContent={'center'}
          >
            <Pagination
              size='large'
              count={maxPageCount}
              onChange={onPageChange}
              color='primary'
            />
          </Stack>
        </Container>
      </section>
    </Box>
  );
};
export default ProjectsPage;
