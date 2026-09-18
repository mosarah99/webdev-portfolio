import {
  Box,
  Card,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import type { SkillWithCategory } from '../../assets/skills';

// TODO: move this component to templates folder
// TODO: reconsider UI/UX
export const SingleSkillCard = ({
  skill,
}: {
  skill: SkillWithCategory;
}) => (
  <Card variant='outlined'>
    <Stack
      direction={'row'}
      sx={{
        alignItems: 'center',
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: 1,
          height: '5rem',
        }}
        image={skill.icon}
        title={`${skill.name ?? skill.shortname} icon`}
      />
      <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
        <Typography
          variant='h6'
          // textAlign={'center'}
          // marginBottom={1}
        >
          {skill.name}
        </Typography>
      </Box>
    </Stack>
  </Card>
);

export default SingleSkillCard;
