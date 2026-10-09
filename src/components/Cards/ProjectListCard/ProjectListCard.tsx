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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as uuid from 'uuid';
import type { ReactNode } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import { usePageNavigation } from '../../../hooks/Navigation/usePageNavigation';
import MarkdownFancy from '../../MarkdownFancy/MarkdownFancy.component';
import SkillChipsContainer from '../../../templates/SkillChipsContainer/SkillChipsContainer.component';

export const ProjectListCard: React.FC<{
  project: ProjectWithSkills;
  projectDetailsPageURL?: string;
  showSkills?: boolean;
}> = ({ project, projectDetailsPageURL, showSkills }) => {
  const navigate = usePageNavigation();

  const handleViewDetailsClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    navigate(
      projectDetailsPageURL || `/projects/${project.id}`,
    );
  };

  const theme = useTheme();
  const isMobileView = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Card
      component={Stack}
      direction={'row'}
      spacing={2}
    >
      <CardMedia
        image={project.image}
        sx={{
          objectFit: 'cover',
          alignSelf: 'stretch',
          minWidth: 25,
          width: '25%',
          flexShrink: 0,
        }}
      />
      <Box
        component={Stack}
        direction={'row'}
        spacing={2}
        sx={{
          flexGrow: 1,
          minWidth: 0,

          overflow: 'hidden',
        }}
      >
        <Stack
          spacing={2}
          sx={{
            flexGrow: 1,
          }}
        >
          <CardHeader
            title={
              <Box
                component={'span'}
                sx={{
                  marginRight: 2,
                }}
              >
                {project.title} {/* </Box> */}
                <Chip
                  variant='filled'
                  color='info'
                  label={'Featured'}
                  icon={<GradeIcon />}
                  sx={{
                    display: !!project.featured
                      ? 'inline-flex'
                      : 'none',
                  }}
                />
              </Box>
            }
            subheader={
              <Box
                sx={{
                  display: isMobileView ? 'none' : 'block',
                }}
              >
                <MarkdownFancy>
                  {project.description}
                </MarkdownFancy>
              </Box>
            }
          />
          {showSkills && (
            <SkillChipsContainer
              component={CardContent}
              skills={project.skills?.filter(
                (skill) => !!skill,
              )}
            />
          )}
        </Stack>
        <Stack
          component={CardActions}
          sx={{
            alignItems: 'flex-start',
            alignSelf: 'stretch',
            flexShrink: 0,
          }}
        >
          <IconButton onClick={handleViewDetailsClick}>
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
        </Stack>
      </Box>
    </Card>
  );
};

export default ProjectListCard;
