import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  IconButton,
  Stack,
  Typography,
  type SxProps,
} from '@mui/material';
import type { ProjectWithSkills } from '../../assets/projects-skills';

interface FeaturedProjectProps {
  className?: string;
  project: ProjectWithSkills;
  style?: React.CSSProperties;
  sx?: SxProps;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  style,
  className,
  sx,
}) => {
  return (
    <Container
      className={` ${className || ''}`}
      maxWidth='lg'
      sx={{
        height: {
          md: '400px',
          sm: '300px',
          xs: '60vh',
        },

        ...sx,
      }}
      style={{
        ...style,
      }}
    >
      <Card
        variant='elevation'
        // elevation={25}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: {
            sm: 'row',
            xs: 'column',
          },
          gap: {
            md: '1rem',
            xs: 0,
          },
        }}
      >
        <Stack
          sx={{
            margin: '1rem',
            flexGrow: 1,
            overflow: 'auto',
            textOverflow: 'ellipsis',
          }}
        >
          <CardHeader title={project.title} />
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              textOverflow: 'ellipsis',
            }}
          >
            <Stack
              sx={{
                gap: '1rem',
                flexGrow: 1,
                textOverflow: 'ellipsis',
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  overflow: 'auto',
                }}
              >
                <Typography sx={{ textOverflow: 'ellipsis' }}>
                  {project.description}
                </Typography>
              </Box>
              <Stack
                direction={'row'}
                sx={{
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  gap: '.5rem',
                  textOverflow: 'ellipsis',
                }}
              >
                {project.skills
                  .slice(project.skills.length - 3)
                  .map((skill) => (
                    <Chip
                      key={`FeaturedProject-ProjectSkill-${JSON.stringify(skill)}--${JSON.stringify(project)}`}
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
                      label={skill?.name}
                    />
                  ))}
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
        <CardMedia
          component={'image'}
          image={project.image}
          sx={(theme) => ({
            margin: {
              md: '1rem',
              sm: '.50rem',
              xs: '.25rem',
            },
            aspectRatio: 1,
            borderRadius: {
              md: '1rem',
              sm: '.50rem',
              xs: '.75rem',
            },
            boxShadow: theme.shadows[15],
          })}
          // alt={`${project.title} image`}
        />
      </Card>
      {/* <Box
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
 */}
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
