import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Divider,
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

import './Projects.style.css';

import {
  featuredProjects,
  projectsWithSkills,
} from '../../assets/projects-skills';
import { skillsWithCategory } from '../../assets/skills';
import { useEffect, useMemo, useState } from 'react';
import { ProjectGridCard } from '../../components/Cards/ProjectGridCard/ProjectGridCard';
import { ProjectListCard } from '../../components/Cards/ProjectListCard/ProjectListCard';
import type { SkillWithCategory } from '../../assets/skills';

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
  const [filter, setFilter] = useState<SkillWithCategory[]>([]);
  const calculateProjectsList = useMemo(() => {
    return projectsWithSkills.slice(
      (page - 1) * rowsPerPage,
      rowsPerPage * page < projectsWithSkills.length
        ? rowsPerPage * page
        : projectsWithSkills.length,
    );
  }, [page, rowsPerPage]);
  const addToFilter = (skill: SkillWithCategory) => (_e: any) => {
    setFilter([...filter, skill]);
  };
  const deleteFilter = (skill: SkillWithCategory) => (_e: any) => {
    setFilter(filter.filter((existingSkill) => skill.id !== existingSkill.id));
  };
  const resetFilter = () => {
    setPage(1);
    setFilter([]);
    setProjectsInView(calculateProjectsList);
  };

  useEffect(() => {
    setAnimate(false);

    const timeout = setTimeout(() => {
      setProjectsInView(calculateProjectsList);
      setAnimate(true);
    }, animationSpeed);

    return () => {
      clearTimeout(timeout);
    };
  }, [page, viewMode, filter]);

  const onPageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onViewModeChange =
    (mode: (typeof viewModes)[number]) => (_event: React.MouseEvent<any>) => {
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
        <Container maxWidth={'xl'}>
          <Stack
            direction={{ xs: 'column', xl: 'row' }}
            // justifyContent={'center'}
            alignItems={{ xs: 'center', xl: 'flex-start' }}
            gap={1}
          >
            <Box
              sx={(theme) => ({
                maxWidth: theme.breakpoints.values.lg,
                width: {
                  xs: '100%',
                  xl: theme.breakpoints.values.xl - theme.breakpoints.values.lg,
                },
              })}
            >
              <Card variant='elevation'>
                <CardContent>
                  {filter.length === 0 ? (
                    <Typography variant='body1'>No filters set</Typography>
                  ) : (
                    <>
                      <Typography>Active Filters:</Typography>
                      {filter.map((skill) => (
                        <Chip
                          key={uuid.v7()}
                          label={skill.name}
                          avatar={
                            <Avatar
                              src={skill?.icon}
                              alt={`${skill?.name} icon`}
                              slotProps={{
                                img: {
                                  loading: 'lazy',
                                },
                              }}
                            />
                          }
                          onDelete={deleteFilter(skill)}
                          sx={{
                            margin: 0.25,
                          }}
                        />
                      ))}
                    </>
                  )}
                </CardContent>
                <Divider variant='fullWidth' />
                <CardContent>
                  <Typography
                    variant='h6'
                    component={'h6'}
                  >
                    Filters
                  </Typography>
                </CardContent>
                <CardContent>
                  {skillsWithCategory.map((skill) => (
                    <Chip
                      variant='filled'
                      avatar={
                        <Avatar
                          src={skill?.icon}
                          alt={`${skill?.name} icon`}
                          slotProps={{
                            img: {
                              loading: 'lazy',
                            },
                          }}
                        />
                      }
                      label={skill.name}
                      sx={{
                        margin: 0.25,
                      }}
                      onClick={addToFilter(skill)}
                    />
                  ))}
                </CardContent>
                <Divider variant='fullWidth' />
                <CardContent>
                  <Typography
                    variant='h6'
                    component={'h6'}
                  >
                    Change View:
                  </Typography>
                  <Box>
                    {viewModes.map((mode) => (
                      <Chip
                        variant={mode === viewMode ? 'filled' : 'outlined'}
                        label={mode.charAt(0).toUpperCase() + mode.slice(1)}
                        onClick={onViewModeChange(mode)}
                        color={mode === viewMode ? 'primary' : 'default'}
                        sx={{ margin: 0.25 }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <>
              {/*   <Container
              maxWidth={'lg'}
              sx={{
                padding: 0,
                margin: 0,
                flexGrow: 1,
              }}
            >

               <Card variant='outlined'>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Box sx={{ flexGrow: 1 }}>
                <CardContent>
                  <Typography
                    variant='button'
                    marginRight={0.5}
                  >
                    Filters:
                  </Typography>
                  {filter.length === 0 ? (
                    <Typography
                      variant='body2'
                      color='textSecondary'
                    >
                      No active filters
                    </Typography>
                  ) : (
                    <Typography
                      variant='body2'
                      color='textSecondary'
                    >
                      {filter.length} active filter
                      {filter.length !== 1 ? 's' : ''}
                    </Typography>
                  )}
                </CardContent>
              </Box>
              <Box>
                <CardContent>
                  <Stack
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'flex-end'}
                  >
                    <Typography
                      variant='button'
                      sx={{
                        marginRight: 2,
                      }}
                    >
                      View
                    </Typography>
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
              </Box>
            </Stack>
          </Card> 
          </Container>*/}
            </>
            <Container
              maxWidth='lg'
              style={{
                padding: 0,
              }}
              sx={(theme) => ({
                padding: 0,
                margin: 0,
                display: {
                  xs: 'block',
                  // xl: 'inline-block',
                },
              })}
            >
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
                          size={{ xs: 12, sm: 6, md: 4 }}
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
                            showSkills
                          />
                        </Grid>
                      );
                  })}
                </Grid>
              </Fade>
            </Container>
          </Stack>
        </Container>
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
      </section>
    </Box>
  );
};
export default ProjectsPage;
