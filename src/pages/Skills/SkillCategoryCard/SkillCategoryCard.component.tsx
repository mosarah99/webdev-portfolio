import type {
  SkillCategory,
  SkillWithCategory,
} from '../../../assets/skills';
import {
  Box,
  CardContent,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import SingleSkillCard from '../SingleSkillCard/SingleSkillCard.component';
import { useQueryState } from 'nuqs';
import { useEffect, useRef } from 'react';
import { LinkRounded } from '@mui/icons-material';

interface SkillCategoryCardProps {
  skillCategory: SkillCategory;
  skills: SkillWithCategory[];
}

export const SkillCategoryCard = (
  props: SkillCategoryCardProps,
) => {
  const { skillCategory: category, skills } = props;
  const skillCatRef = useRef<HTMLElement>(null);

  const [catNav, setCatNav] = useQueryState('category', {
    history: 'replace',
    clearOnDefault: true,
  });

  useEffect(() => {
    if (catNav === category.slug) {
      skillCatRef.current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [catNav]);

  return (
    <Box ref={skillCatRef}>
      <Box
        component={Paper}
        sx={(theme) => ({
          padding: theme.spacing(2),
          position: 'sticky',
          top: '60px',
          zIndex: theme.zIndex.mobileStepper,
          '.skill-header-icon': {
            opacity: {
              xs: 1,
              md: 0,
            },
          },
          ':hover': {
            cursor: 'pointer',
            '.skill-header-icon': {
              opacity: 1,
            },
          },
        })}
        onClick={() => setCatNav(category.slug)}
      >
        <Typography
          variant='h3'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {category.name}
          <span className='skill-header-icon'>
            <LinkRounded />
          </span>
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
