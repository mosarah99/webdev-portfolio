import CloseRounded from '@mui/icons-material/CloseRounded';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';

export interface ProjectFilterModalProps {
  open: boolean;
  onModalClose: () => any;
  filerComponent: React.ReactElement;
}
export const ProjectFilterModal = (
  props: ProjectFilterModalProps,
) => {
  const contentRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (props.open) contentRef.current?.focus();
  }, [props]);

  const theme = useTheme();
  const isMobileView = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  return (
    <Dialog
      open={props.open}
      onClose={props.onModalClose}
      scroll='paper'
      fullScreen={isMobileView}
      fullWidth
    >
      <DialogTitle
        component={Stack}
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          boxShadow: theme.shadows[5],
        }}
      >
        <Box component={'span'}>Filters</Box>
        <Button
          variant='outlined'
          onClick={props.onModalClose}
          endIcon={<CloseRounded />}
        >
          Close
        </Button>
      </DialogTitle>
      <DialogContent ref={contentRef}>
        {props.filerComponent}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectFilterModal;
