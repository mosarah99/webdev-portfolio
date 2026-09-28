import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../../assets/skills';
import * as uuid from 'uuid';

type ViewMode = 'grid' | 'list';

interface ProjectFilterContainerProps {
  allPossibleFilters: SkillWithCategory[];
  filters: SkillWithCategory[] | SkillBasic[];
  onFilterChange(
    filters: SkillWithCategory[] | SkillBasic[],
  ): void;
}

const ProjectFilterContainer = (
  props: ProjectFilterContainerProps,
) => {
  const onAppendFilter =
    (skill: SkillWithCategory) =>
    (_e: React.MouseEvent<any>) => {
      const skillSet = new Set(props.filters);
      skillSet.add(skill);

      props.onFilterChange([...skillSet]);
    };
  const onDeleteFilter =
    (skill: SkillWithCategory | SkillBasic) =>
    (_e: React.MouseEvent<any>) => {
      const filterSet = props.filters.filter(
        (existingSkill) => skill.id !== existingSkill.id,
      );

      props.onFilterChange(filterSet);
    };
  const resetFilter = () => {
    props.onFilterChange([]);
  };

  return (
    <Box
      component={Stack}
      sx={{
        alignSelf: 'stretch',
        minWidth: 'fit-content',
      }}
    >
      <CardContent>
        <SkillsList
          listSubHeader={
            <Typography
              variant='h6'
              component={'h3'}
              noWrap
            >
              {(filters.skills ?? []).length < 1
                ? 'No '
                : null}
              Active Filters
            </Typography>
          }
          skills={filters.skills ?? []}
          actionButtonIcon={<DeleteRounded />}
          onActionButtonClick={(skill) =>
            filterOperations.skills.remove(skill)
          }
          showSkillShortName
        />
      </CardContent>
      <CardContent>
        <Divider variant='fullWidth' />
      </CardContent>
      <CardContent>
        <SkillsList
          skills={skillsWithCategory}
          listSubHeader={
            <Typography
              variant='h6'
              component={'h3'}
              noWrap
            >
              Skill Filters
            </Typography>
          }
          actionButtonIcon={<AddRounded />}
          onActionButtonClick={(skill) =>
            filterOperations.skills.append(skill)
          }
        />
      </CardContent>
    </Box>
  );
};

export default ProjectFilterContainer;
