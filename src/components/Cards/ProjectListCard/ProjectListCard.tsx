import { useNavigate } from 'react-router';
import type { ProjectWithSkills } from '../../../assets/projects-skills';
import {
  Box,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectListCard: React.FC<{
  project: ProjectWithSkills;
  projectDetailsPageURL?: string;
}> = ({ project, projectDetailsPageURL }) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
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
  );
};

export default ProjectListCard;
