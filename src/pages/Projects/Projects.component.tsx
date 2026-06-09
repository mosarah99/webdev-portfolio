import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Container,
  Grid,
} from '@mui/material';
import type React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import FeaturedProject from '../../components/FeaturedProject/FeaturedProject.component';
import * as uuid from 'uuid';

import './Projects.style.css';

import { projects as projectsList } from '../../assets/projectsList';
import { useNavigate } from 'react-router';

export const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

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
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={2}
          >
            {projectsList.map((_project, _index) => (
              <Grid
                key={uuid.v7()}
                size={{ xs: 12, md: 6 }}
              >
                <Card>
                  <CardMedia
                    image={_project.image}
                    component={'img'}
                    alt={`${_project.title} image`}
                    sx={{
                      objectFit: 'cover',
                      aspectRatio: 1,
                      boxShadow: '5px 5px 5px #eee',
                    }}
                  />
                  <Box>
                    <CardHeader
                      title={_project.title}
                      subheader={_project.description}
                    />
                    <CardActions>
                      <ButtonGroup
                        variant='outlined'
                        fullWidth
                      >
                        <Button
                          variant='outlined'
                          onClick={() => {
                            // setModalContent(project);
                            // setModalOpen(true);

                            navigate(`/projects/${_project.id}`);
                          }}
                        >
                          View details
                        </Button>
                        {!!_project.githubLink && (
                          <Button
                            variant='contained'
                            href={_project.githubLink}
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
            ))}
          </Grid>
        </Container>
      </section>
    </Box>
  );
};
export default ProjectsPage;
