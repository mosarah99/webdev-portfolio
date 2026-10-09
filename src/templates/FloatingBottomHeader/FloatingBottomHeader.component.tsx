import { AppBar, Box, Paper, Toolbar } from '@mui/material';
import Navbar from '../Navbar/Navbar.component';

export const FloatingBottomHeader = () => {
  return (
    <Toolbar
      sx={(theme) => ({
        display: ['flex', 'flex', 'none'],
        justifyContent: 'center',
        position: 'fixed',
        bottom: 2,
        width: '100%',
        zIndex: theme.zIndex.appBar,
      })}
    >
      <Paper component={'nav'}>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'initial',
            },
          }}
        >
          <Navbar variant={'both'} />
        </Box>
        <Box
          sx={{
            display: {
              xs: 'initial',
              sm: 'none',
            },
          }}
        >
          <Navbar variant={'icon'} />
        </Box>
      </Paper>
    </Toolbar>
  );
};

export default FloatingBottomHeader;
