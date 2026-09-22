import { Box } from '@mui/material';
import './App.css';
import { PrimaryHeader } from './templates/PrimaryHeader/PrimaryHeader.component';

import { pages } from './pages/pagesSchema';
import { Router as PageRouter } from './components/Navigation/Router/Router.component';
import { FloatingBottomHeader } from './templates/FloatingBottomHeader/FloatingBottomHeader.component';
import PrimaryFooter from './templates/PrimaryFooter/PrimaryFooter.component';

const App = () => {
  return (
    <Box>
      <PrimaryHeader />
      <FloatingBottomHeader />
      <PageRouter
        pages={pages}
        header='Sadat R. Portfolio'
      />
      <PrimaryFooter />
    </Box>
  );
};

export default App;
