import { Avatar, Chip, Stack } from '@mui/material';
import type {
  SkillBasic,
  SkillWithCategory,
} from '../../assets/skills';

export interface SkillChipsContainerProps {
  skills?: SkillBasic[] | SkillWithCategory[] | null;
}

export const SkillChipsContainer = (
  props: SkillChipsContainerProps,
) => {
  return (
    <Stack
      direction={'row'}
      spacing={1}
      sx={{
        flexWrap: 'wrap',
      }}
    >
      {props.skills?.map((skill) => (
        <Chip
          key={`${skill}`}
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
    </Stack>
  );
};

export default SkillChipsContainer;
