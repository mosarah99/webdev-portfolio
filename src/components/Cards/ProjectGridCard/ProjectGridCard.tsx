import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
// import { useNavigate } from 'react-router';
import { type ProjectWithSkills } from '../../../assets/projects-skills';
import GradeIcon from '@mui/icons-material/Grade';
import * as uuid from 'uuid';
import { usePageNavigation } from '../../../hooks/Navigation/usePageNavigation';

export const ProjectGridCard: React.FC<{
  project: ProjectWithSkills;
  projectDetailsPageURL?: string;
  showSkills?: boolean;
}> = ({ project, projectDetailsPageURL, showSkills }) => {
  const navigate = usePageNavigation();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
    >
      <Chip
        variant='filled'
        color='info'
        label={'Featured'}
        icon={<GradeIcon />}
        sx={{
          display: project.featured ? 'flex' : 'none',
          position: 'absolute',
          top: '.25rem',
          right: '.5rem',
        }}
      />
      <CardMedia
        image={project.image}
        component={'img'}
        alt={`${project.title} image`}
        sx={{
          height: '25rem',
          maxHeight: '200px',
          objectFit: 'cover',
          aspectRatio: 1,
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <CardHeader
          title={project.title}
          subheader={project.description}
        />
        <Box
          sx={{
            flexGrow: 1,
          }}
        ></Box>
        <Box
          sx={{
            display: 'block',
          }}
        >
          {showSkills && (
            <CardContent>
              <Stack
                direction={'row'}
                spacing={1}
                sx={{
                  flexWrap: 'wrap',
                }}
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
  );
};
