import { Avatar, Stack, Typography } from '@mui/material';
import type { SkillWithCategory } from '../../../assets/skills';

export const SingleStackSkillCard = ({
  skill,
}: {
  skill: SkillWithCategory;
}) => (
  <Stack direction={'row'}>
    <Avatar
      src={skill?.icon}
      alt={`${skill?.name ?? skill?.shortname} icon`}
      variant='square'
    />
    <Typography
      variant='h6'
      sx={{
        marginLeft: 2,
      }}
    >
      {skill?.name}
    </Typography>
  </Stack>
);

export default SingleStackSkillCard;
