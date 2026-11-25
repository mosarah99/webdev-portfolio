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
import React, {
  useCallback,
} from 'react';

export interface ProjectFilterModalProps {
  open: boolean;
  onModalClose: () => void;
  filerComponent: React.ReactElement;
}

export const ProjectFilterModal = (
  props: ProjectFilterModalProps,
) => {
  const theme = useTheme();
  const isMobileView = useMediaQuery(
    theme.breakpoints.down('sm'),
  );

  // Use useCallback for stable handlers
  const handleClose = useCallback(() => {
    props.onModalClose();
  }, [props.onModalClose]);

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      scroll='paper'
      fullScreen={isMobileView}
      fullWidth
      aria-label='Filters for the Projects'
      aria-labelledby='filter-modal-title'
    >
      <DialogTitle
        id='filter-modal-header'
        component={Stack}
        direction={'row'}
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          boxShadow: theme.shadows[5],
        }}
      >
        {/* Changed Box to a semantic heading element */}
        <Box
          component='h2'
          id='filter-modal-title'
        >
          Filters
        </Box>
        <Button
          id='filter-modal-close-button'
          aria-label='Close Modal Button'
          variant='outlined'
          onClick={handleClose}
          endIcon={<CloseRounded />}
        >
          Close
        </Button>
      </DialogTitle>
      <DialogContent>{props.filerComponent}</DialogContent>
    </Dialog>
  );
};

export default ProjectFilterModal;
