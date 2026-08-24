import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Stack,
} from '@mui/material';
import type { ProjectWithSkills } from '../../assets/projects-skills';

interface FeaturedProjectProps {
  project: ProjectWithSkills;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
}) => {
  return (
    <Card
      variant='elevation'
      elevation={15}
      sx={{
        width: '100%',
        height: '100%',

        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },

        gap: {
          xs: 1,
        },
      }}
    >
      <Box
        sx={{
          flexGrow: 1,

          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardHeader title={project.title} />
        <CardContent
          sx={{
            // overflow: 'auto',

            flexGrow: 1,
            minHeight: 0,
            display: 'flex',
            // overflow: 'auto',
            lineClamp: 3,
          }}
        >
          {project.description}
        </CardContent>
        <CardContent>
          <Stack
            direction={'row'}
            sx={{
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              gap: '.5rem',
              textOverflow: 'ellipsis',
            }}
          >
            {project.skills.slice(0, 5).map((skill) => (
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
        </CardContent>
      </Box>
      <CardMedia
        loading='lazy'
        component={'img'}
        image={project.image}
        sx={(theme) => ({
          aspectRatio: 1,
          objectFit: 'cover',
          margin: {
            md: '1rem',
            sm: '.50rem',
            xs: '.25rem',
          },
          borderRadius: {
            md: '1rem',
            sm: '.50rem',
            xs: '.75rem',
          },

          boxShadow: theme.shadows[15],
        })}
      />
    </Card>
  );
};

export default FeaturedProject;
