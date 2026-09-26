import { Box, Fade, Grid, Stack } from '@mui/material';
import { ProjectGridCard } from '../../Cards/ProjectGridCard/ProjectGridCard';
import ProjectListCard from '../../Cards/ProjectListCard/ProjectListCard';
import type { ProjectWithSkills } from '../../../assets/projects-skills';

interface ProjectDisplayContainerProps {
  projects: ProjectWithSkills[];
  viewMode?: 'grid' | 'list';
  animationTimeout?: number;
  disableTransition?: boolean;
}

export const ProjectDisplayContainer = ({
  projects,
  viewMode = 'grid',
  animationTimeout = 1000,
  ...props
}: ProjectDisplayContainerProps) => {
  return (
    <Box>
      <Fade
        key={projects.toString()}
        in={true}
        // in={animate}
        timeout={animationTimeout}
      >
        <Grid
          spacing={2}
          container
        >
          {projects.map((project) => (
            <Grid
              key={`project-display-grid-item-${JSON.stringify(project)}`}
              component={Stack}
              size={
                viewMode === 'grid'
                  ? {
                      xs: 12,
                      sm: 4,
                      md: 6,
                      lg: 4,
                    }
                  : 12
              }
              sx={[
                props.disableTransition
                  ? {
                      transition: 'none',
                    }
                  : {},
              ]}
            >
              {viewMode === 'grid' ? (
                <ProjectGridCard
                  project={project}
                  showSkills
                />
              ) : (
                <ProjectListCard
                  project={project}
                  showSkills
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default ProjectDisplayContainer;
