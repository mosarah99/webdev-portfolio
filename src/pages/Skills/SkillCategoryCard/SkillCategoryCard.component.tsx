import type {
  SkillCategory,
  SkillWithCategory,
} from '../../../assets/skills';
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Stack,
} from '@mui/material';
import SingleSkillCard from '../SingleSkillCard/SingleSkillCard.component';
import { useQueryState } from 'nuqs';
import { useEffect, useRef } from 'react';
import { LinkRounded } from '@mui/icons-material';
import useCopyToClipboard from '../../../hooks/Utilities/useCopyToClipboard';

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

  const copyToClipboard = useCopyToClipboard();
  const onCopyCatLinkButtonClick = () => {
    copyToClipboard(window.location.href);
  };

  return (
    <Box ref={skillCatRef}>
      <Card
        sx={(theme) => ({
          position: 'sticky',
          top: '60px',
          zIndex: theme.zIndex.mobileStepper,
        })}
      >
        <Stack
          direction={'row'}
          sx={(_theme) => ({
            ' .skill-header-icon': {
              opacity: {
                xs: 1,
                md: 0,
              },
            },
            ':hover': {
              '.skill-header-icon': {
                opacity: 1,
              },
            },
          })}
        >
          <CardActionArea
            onClick={() => setCatNav(category.slug)}
          >
            <CardHeader
              title={category.name}
              slotProps={{
                title: {
                  variant: 'h3',
                },
              }}
            >
              {category.name}
            </CardHeader>
          </CardActionArea>
          <CardActions
            sx={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <IconButton
              onClick={onCopyCatLinkButtonClick}
              className='skill-header-icon'
              sx={{
                ':focus': {
                  opacity: 1,
                },
              }}
            >
              <LinkRounded />
            </IconButton>
          </CardActions>
        </Stack>
      </Card>
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
