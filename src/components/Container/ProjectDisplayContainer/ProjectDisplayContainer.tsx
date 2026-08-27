import { Container, Fade, Grid } from '@mui/material';
import { ProjectGridCard } from '../../Cards/ProjectGridCard/ProjectGridCard';
import ProjectListCard from '../../Cards/ProjectListCard/ProjectListCard';
import * as uuid from 'uuid';
import type { ProjectWithSkills } from '../../../assets/projects-skills';
import { useEffect } from 'react';

interface ProjectDisplayContainerProps {
  projects: ProjectWithSkills[];
  viewMode?: 'grid' | 'list';
  animationTimeout?: number;
}

export const ProjectDisplayContainer = ({
  projects,
  viewMode = 'grid',
  animationTimeout = 1000,
}: ProjectDisplayContainerProps) => {
  return (
    <Container
      maxWidth='lg'
      style={{
        padding: 0,
      }}
      sx={() => ({
        padding: 0,
        margin: 0,
        display: 'block',
      })}
    >
      <Fade
        key={projects.toString()}
        in={true}
        // in={animate}
        timeout={animationTimeout}
      >
        <Grid
          container
          spacing={2}
        >
          {projects.map((_project, _index) => {
            if (viewMode === 'grid')
              return (
                <Grid
                  size={{ xs: 12, sm: 6, md: 4 }}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
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
  );
};

export default ProjectDisplayContainer;
