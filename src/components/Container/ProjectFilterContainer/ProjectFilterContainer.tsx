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
import type { SkillWithCategory } from '../../../assets/skills';
import * as uuid from 'uuid';

type ViewMode = 'grid' | 'list';

interface ProjectFilterContainerProps {
  allPossibleFilters: SkillWithCategory[];
  filters: SkillWithCategory[];
  onFilterChange(filters: SkillWithCategory[]): void;

  allPossibleViewModes: ViewMode[];
  currentViewMode: ViewMode;
  onViewModeChange(view: ViewMode): (event: React.MouseEvent) => void;
}

const ProjectFilterContainer = (props: ProjectFilterContainerProps) => {
  const onAppendFilter =
    (skill: SkillWithCategory) => (_e: React.MouseEvent<any>) => {
      const skillSet = new Set(props.filters);
      skillSet.add(skill);

      props.onFilterChange([...skillSet]);
    };
  const onDeleteFilter =
    (skill: SkillWithCategory) => (_e: React.MouseEvent<any>) => {
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
      sx={(theme) => ({
        maxWidth: theme.breakpoints.values.lg,
        width: {
          xs: '100%',
          xl: theme.breakpoints.values.xl - theme.breakpoints.values.lg,
        },
      })}
    >
      <Card variant='elevation'>
        {/************************************
         
            Active Filters

         */}
        <CardContent>
          {props.filters.length === 0 ? (
            <Typography variant='body1'>No filters set</Typography>
          ) : (
            <Box>
              <Stack
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
              >
                <Typography>Active Filters:</Typography>
                <Chip
                  label={'Clear'}
                  onClick={resetFilter}
                  color={'secondary'}
                />
              </Stack>
              {props.filters.map((skill) => (
                <Chip
                  key={uuid.v7()}
                  label={skill.name}
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
                  onDelete={onDeleteFilter(skill)}
                  sx={{
                    margin: 0.25,
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>
        <Divider variant='fullWidth' />
        {/***************************************
        
            Available Filters
        
         */}
        <CardContent>
          <Typography
            variant='h6'
            component={'h6'}
          >
            Filters
          </Typography>
        </CardContent>
        <CardContent
          sx={(theme) => ({
            maxHeight: {
              xs: '10rem',
              xl: '40rem',
            },
            overflow: 'auto',
          })}
        >
          {props.allPossibleFilters
            .sort((a, b) => a.shortname.localeCompare(b.shortname))
            .map((skill) => (
              <Chip
                key={uuid.v7()}
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
                label={skill.name}
                sx={{
                  margin: 0.25,
                }}
                onClick={onAppendFilter(skill)}
              />
            ))}
        </CardContent>
        <Divider variant='fullWidth' />
        {/***************************************
        
            View Mode
        
         */}
        <CardContent>
          <Typography
            variant='h6'
            component={'h6'}
          >
            Change View:
          </Typography>
          <Box>
            {props.allPossibleViewModes.map((mode) => (
              <Chip
                key={uuid.v7()}
                variant={mode === props.currentViewMode ? 'filled' : 'outlined'}
                label={mode.charAt(0).toUpperCase() + mode.slice(1)}
                onClick={props.onViewModeChange(mode)}
                color={mode === props.currentViewMode ? 'primary' : 'default'}
                sx={{ margin: 0.25 }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectFilterContainer;
