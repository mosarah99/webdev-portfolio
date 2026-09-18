import { Box } from '@mui/material';
import './App.css';
import { PrimaryHeader } from './templates/PrimaryHeader/PrimaryHeader.component';

import { pages } from './pages/pagesSchema';
import { Router as PageRouter } from './components/Navigation/Router/Router.component';
import { FloatingBottomHeader } from './templates/FloatingBottomHeader/FloatingBottomHeader.component';

const App = () => {
  return (
    <Box>
      <PrimaryHeader />
      <PageRouter
        pages={pages}
        title='Sadat R. Portfolio'
      />
      <FloatingBottomHeader />
    </Box>
  );
};

export default App;
