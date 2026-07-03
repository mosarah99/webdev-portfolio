import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Fade,
  Grid,
  Pagination,
  Stack,
  Typography,
} from '@mui/material';
import type React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';
import * as uuid from 'uuid';

import './Projects.style.css';

import {
  featuredProjects,
  projectsWithSkills,
} from '../../assets/projects-skills';
import { useEffect, useState } from 'react';
import { ProjectGridCard } from '../../components/Cards/ProjectGridCard/ProjectGridCard';
import { ProjectListCard } from '../../components/Cards/ProjectListCard/ProjectListCard';

export const ProjectsPage: React.FC = () => {
  const viewModes = ['grid', 'list'] as const;
  const [viewMode, setViewMode] = useState<(typeof viewModes)[number]>('grid');
  const [page, setPage] = useState(1);
  const rowsPerPage = 6;
  const maxPageCount = Math.ceil(projectsWithSkills.length / rowsPerPage);
  const [projectsInView, setProjectsInView] = useState<
    typeof projectsWithSkills
  >(
    projectsWithSkills.slice(
      0,
      rowsPerPage * page < projectsWithSkills.length
        ? rowsPerPage * page
        : projectsWithSkills.length,
    ),
  );
  const [animate, setAnimate] = useState<boolean>(true);
  const animationSpeed = 600; // in milliseconds

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setProjectsInView(
        projectsWithSkills.slice(
          (page - 1) * rowsPerPage,
          rowsPerPage * page < projectsWithSkills.length
            ? rowsPerPage * page
            : projectsWithSkills.length,
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
        {featuredProjects.map((project) => (
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
                    <Grid
                      size={{ xs: 12, sm: 6, lg: 4 }}
                      key={uuid.v7()}
                    >
                      <ProjectGridCard
                        project={_project}
                        projectDetailsPageURL={`/projects/${_project.id}`}
                        showSkills
                      />
                    </Grid>
                  );
                else
                  return (
                    <Grid
                      size={{ xs: 12 }}
                      key={uuid.v7()}
                    >
                      <ProjectListCard
                        project={_project}
                        projectDetailsPageURL={`/projects/${_project.id}`}
                      />
                    </Grid>
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
