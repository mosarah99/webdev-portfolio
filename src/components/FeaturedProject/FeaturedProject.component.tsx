import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
} from '@mui/material';
import type { ProjectWithSkills } from '../../assets/projects-skills';
import SkillChipsContainer from '../../templates/SkillChipsContainer/SkillChipsContainer.component';
import type { SkillWithCategory } from '../../assets/skills';

interface FeaturedProjectProps {
  project: ProjectWithSkills;
}

export const FeaturedProject: React.FC<
  FeaturedProjectProps
> = ({ project }) => {
  return (
    <Card
      component={Grid}
      container
      spacing={2}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Stack
        component={Grid}
        size={{ xs: 12, sm: 6 }}
        sx={{
          justifyContent: 'space-between',
          overflow: 'auto',
        }}
      >
        <CardHeader
          title={project.title}
          subheader={project.description}
          slotProps={{
            title: {
              gutterBottom: true,
            },
            subheader: {
              sx: {
                overflow: 'clip',
                textOverflow: 'ellipsis',
              },
            },
          }}
        />
        <CardContent>
          <SkillChipsContainer
            skills={
              project.skills.slice(
                0,
                4,
              ) as SkillWithCategory[]
            }
          />
        </CardContent>
      </Stack>
      <CardMedia
        component={Grid}
        size={{ xs: 12, sm: 6 }}
        image={project.image}
        sx={{
          position: 'center',
          backgroundRepeat: 'no-repeat',

          minHeight: {
            xs: '250px',
            sm: '300px',
          },
          objectFit: 'cover',
        }}
      />
    </Card>
  );
};

export default FeaturedProject;
