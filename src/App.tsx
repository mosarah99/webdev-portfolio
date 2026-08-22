import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { Route, Routes } from 'react-router';
import * as uuid from 'uuid';

import { pages } from './pages/pages';
import {Router as PageRouter} from './components/Navigation/Router/Router.component';

const App = () => {
  return (
    <Box>
      <Navbar />
      {/* <Routes>
        {pages.map(({ label, link, index, element }) => (
          <Route
            index={!!index}
            path={link}
            element={element}
            key={uuid.v7()}
          />
        ))}
      </Routes> */}
      <PageRouter pages={pages} />
    </Box>
  );
};

export default App;
