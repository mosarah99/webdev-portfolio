import {
  Box,
  CardContent,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../../assets/skills';
import SkillsList from '../../../templates/ProjectsSkillsList/SkillsList.component';
import {
  AddRounded,
  DeleteRounded,
} from '@mui/icons-material';

interface ProjectFilterContainerProps {
  allSkills: SkillBasic[] | SkillWithCategory[];
  activeSkillFilters: SkillBasic[] | SkillWithCategory[];
  onFilterAdd?: (
    skill: SkillBasic | SkillWithCategory,
  ) => any;
  onFilterRemove?: (
    skill: SkillBasic | SkillWithCategory,
  ) => any;
}

const ProjectFilterContainer = (
  props: ProjectFilterContainerProps,
) => {
  return (
    <Box
      component={Stack}
      sx={{
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
              {props.activeSkillFilters.length < 1
                ? 'No '
                : null}
              Active Filters
            </Typography>
          }
          skills={props.activeSkillFilters}
          actionButtonIcon={<DeleteRounded />}
          onActionButtonClick={props.onFilterRemove}
          showSkillShortName
        />
      </CardContent>
      <CardContent>
        <Divider variant='fullWidth' />
      </CardContent>
      <CardContent>
        <SkillsList
          listSubHeader={
            <Typography
              variant='h6'
              component={'h3'}
              noWrap
            >
              Skill Filters
            </Typography>
          }
          skills={props.allSkills}
          actionButtonIcon={<AddRounded />}
          onActionButtonClick={props.onFilterAdd}
        />
      </CardContent>
    </Box>
  );
};

export default ProjectFilterContainer;
