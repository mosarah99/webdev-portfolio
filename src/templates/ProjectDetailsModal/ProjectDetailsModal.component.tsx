import {
  Avatar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  forwardRef,
  type ComponentPropsWithRef,
} from 'react';
import type { ProjectWithSkills } from '../../assets/projects-skills';
import type { TransitionProps } from '@mui/material/transitions';
import MarkdownFancy from '../../components/MarkdownFancy/MarkdownFancy.component';
import SkillChipsContainer from '../SkillChipsContainer/SkillChipsContainer.component';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Slide
      direction='up'
      ref={ref}
      {...props}
    />
  );
});

export interface ProjectDetailsModalProps extends Omit<
  ComponentPropsWithRef<typeof Box>,
  'children' | 'role'
> {
  open: boolean;
  onClose?: () => any;
  project: ProjectWithSkills;
}
export const ProjectDetailsModal = ({
  project,
  ...props
}: ProjectDetailsModalProps) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Box
      component={Dialog}
      keepMounted
      scroll='paper'
      fullWidth
      fullScreen={isMobileView}
      maxWidth='lg'
      slots={{
        transition: Transition,
      }}
      {...props}
    >
      <DialogTitle>
        <Typography
          variant='h3'
          component={'h1'}
        >
          {project.title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box
          component={'img'}
          src={project.image}
          sx={{
            width: '100%',
          }}
        />
        <MarkdownFancy>
          {project.detail_description}
        </MarkdownFancy>
        <Divider
          variant='middle'
          sx={{
            marginY: 5,
          }}
        />
        <SkillChipsContainer
          skills={project.skills?.filter(
            (skill) => !!skill,
          )}
          sx={{
            marginTop: '2rem',
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          fullWidth
          onClick={props.onClose}
        >
          Close
        </Button>
      </DialogActions>
    </Box>
  );
};

export default ProjectDetailsModal;
