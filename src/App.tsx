import { Box } from '@mui/material';
import './App.css';
import Navbar from './templates/PrimaryHeader/PrimaryHeader.component';

import { pages } from './pages/pagesSchema';
import { Router as PageRouter } from './components/Navigation/Router/Router.component';

const App = () => {
  return (
    <Box>
      <Navbar />
      <PageRouter
        pages={pages}
        siteTitle='Sadat R. Portfolio'
      />
    </Box>
  );
};

export default App;
