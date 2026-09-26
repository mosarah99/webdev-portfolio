import {
  Avatar,
  Box,
  Chip,
  type BoxProps,
} from '@mui/material';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../assets/skills';
import * as uuid from 'uuid';

export interface SkillChipsContainerProps extends Omit<
  BoxProps,
  'children'
> {
  skills?: SkillBasic[] | SkillWithCategory[] | null;
}

export const SkillChipsContainer = ({
  sx,
  ...props
}: SkillChipsContainerProps) => {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 1,
          rowGap: 1,
          columnGap: 1,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {props.skills?.map((skill) => (
        <Chip
          key={`skill-chip-container-${uuid.v1()}-${JSON.stringify(skill)}`}
          label={skill?.name}
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
        />
      ))}
    </Box>
  );
};

export default SkillChipsContainer;
