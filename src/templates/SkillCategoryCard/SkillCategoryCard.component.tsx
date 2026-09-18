import type { FC } from 'react';
import type {
  SkillCategory,
  SkillWithCategory,
} from '../../assets/skills';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
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
    <Card
      elevation={5}
      sx={{ marginBottom: 4 }}
    >
      <CardHeader
        title={category.name}
        slotProps={{
          title: {
            component: 'h6',
            align: 'center',
          },
        }}
        sx={
          {
            //   position: 'sticky',
            // top: '60px',
            //   zIndex: 1000,
          }
        }
      />

      <Divider variant='fullWidth' />
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
    </Card>
  );
};

export default SkillCategoryCard;
