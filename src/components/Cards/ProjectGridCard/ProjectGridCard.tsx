import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router';
import { type ProjectWithSkills } from '../../../assets/projects-skills';

export const ProjectGridCard: React.FC<{
  project: ProjectWithSkills;
  projectDetailsPageURL?: string;
}> = ({ project, projectDetailsPageURL }) => {
  const navigate = useNavigate();

  const handleViewDetailsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate(projectDetailsPageURL || `/projects/${project.id}`);
  };

  return (
    <Card>
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
  );
};
