import type {
  SkillCategory,
  SkillWithCategory,
} from '../../assets/skills';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SingleSkillCard from '../SingleSkillCard/SingleSkillCard.component';

interface SkillCategoryCardProps {
  skillCategory: SkillCategory;
  skills: SkillWithCategory[];
}

export const SkillCategoryCard = (
  props: SkillCategoryCardProps,
) => {
  const { skillCategory: category, skills } = props;

  return (
    <Box>
      <Box
        component={Paper}
        sx={(theme) => ({
          padding: theme.spacing(2),
          position: 'sticky',
          top: '60px',
          zIndex: theme.zIndex.mobileStepper,
        })}
      >
        <Typography variant='h3'>
          {category.name}
        </Typography>
      </Box>

      <Box>
        <CardContent>
          <Grid
            container
            spacing={1}
            sx={{
              justifyContent: 'center',
            }}
          >
            {skills.map((skill) => (
              <Grid
                key={`${skill.id}-${skill}`}
                size={{ xs: 6, md: 3, lg: 2 }}
              >
                <SingleSkillCard skill={skill} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Box>
    </Box>
  );
};

export default SkillCategoryCard;
