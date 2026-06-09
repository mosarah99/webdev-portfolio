import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  type SxProps,
} from '@mui/material';
import { useNavigate } from 'react-router';
import type { Project } from '../../assets/projectsList';

interface FeaturedProjectProps {
  className?: string;
  project: Project;
  style?: React.CSSProperties;
  sx?: SxProps;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  style,
  className,
  sx,
}) => {
  const navigate = useNavigate();
  return (
    <Container
      className={` ${className || ''}`}
      maxWidth='xl'
      sx={{
        backgroundImage: `url(${project.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '30vh',
        minHeight: '300px',
        maxHeight: '1000px',

        ...sx,
      }}
      style={{
        ...style,
      }}
    >
      <Box
        sx={{
          // flexGrow: 1,
          // height: '100%',
          'minWidth': '300px',
          'width': '20%',
          'backgroundColor': 'rgba(255, 255, 255, 0.8)',

          'padding': '5rem',

          'borderRadius': '1rem',

          'textAlign': 'left',

          // marginTop: 'auto',
          // marginBottom: 'auto',

          // display: 'flex',
          // direction: 'column',
          // justifyContent: 'center',
          // alignItems: 'center',

          'transition': 'all 200ms ease-in-out',

          '&:hover': {
            // textAlign: 'center',

            backgroundColor: 'rgba(255, 255, 255, 0.9)',

            borderRadius: '.1rem',

            transform: 'translateX(1rem)',

            // transition: 'all 500ms ease-in-out',
          },
        }}
      >
        <Box>
          <Typography variant='h3'>{project.title}</Typography>
          <Typography variant='body1'>{project.description}</Typography>
        </Box>
        <Box sx={{ height: '1rem' }}></Box>
        <Box>
          <ButtonGroup
            variant='contained'
            fullWidth
          >
            <Button onClick={() => navigate(`/projects/${project.id}`)}>
              View details
            </Button>
            {project.githubLink && (
              <Button
                variant='outlined'
                href={project.githubLink}
                target={'_blank'}
                referrerPolicy='no-referrer'
              >
                GitHub
              </Button>
            )}
          </ButtonGroup>
        </Box>
      </Box>
      <Box
        sx={{
          minWidth: '5px',
          width: '1rem',
        }}
      ></Box>

      {/* <Box
        component={'img'}
        src={project.image}
        alt={`${project.title} image`}
        sx={{
          objectFit: 'cover',
          height: '100%',
          aspectRatio: 20 / 9,
          boxShadow: '5px 5px 5px #ccc',
        }}
      /> */}
    </Container>
  );
};

export default FeaturedProject;
