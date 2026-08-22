// import { useNavigate } from 'react-router';
import type { ProjectWithSkills } from '../../../assets/projects-skills';
import {
  Avatar,
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Stack,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as uuid from 'uuid';
import type { ReactNode } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import { usePageNavigation } from '../../../hooks/Navigation/usePageNavigation';

export const ProjectListCard: React.FC<{
  project: ProjectWithSkills;
  projectDetailsPageURL?: string;
  showSkills?: boolean;
}> = ({ project, projectDetailsPageURL, showSkills }) => {
  const navigate = usePageNavigation();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
  };

  const getProjectTitle = (): ReactNode => {
    return project.featured ? (
      <Box sx={{ flexDirection: 'row' }}>
        <span>{project.title}</span>{' '}
        <Chip
          variant='filled'
          color='info'
          label={'Featured'}
          icon={<GradeIcon />}
          sx={{
            // display: project.featured ? 'flex' : 'none',
            // position: 'absolute',
            // top: '.25rem',
            // right: '.5rem',
          }}
        />
      </Box>
    ) : (
      <span>{project.title}</span>
    );
  };

  return (
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
            // objectFit: 'cover',
            // aspectRatio: 1 / 1,
            height: '10rem',
            width: '10rem',
            // maxHeight: '60px',
          }}
        />
        <Box sx={{ flex: 1, margin: 1, marginLeft: 2 }}>
          <Stack
            flexDirection={'row'}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
          >
            <Box>
              <CardHeader
                title={getProjectTitle()}
                subheader={project.description}
              />
              <Box
                sx={{
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                }}
              >
                {showSkills && (
                  <CardContent
                    sx={{ paddingY: 0, marginY: 0, marginBottom: 0 }}
                  >
                    <Stack
                      direction={'row'}
                      spacing={1}
                      rowGap={1}
                      columnGap={1}
                      flexWrap={'wrap'}
                    >
                      {project.skills?.map((skill) => (
                        <Chip
                          key={uuid.v7()}
                          label={skill?.name}
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
                        />
                      ))}
                    </Stack>
                  </CardContent>
                )}
              </Box>
            </Box>
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
  );
};

export default ProjectListCard;
