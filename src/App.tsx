import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar.component';
import { Route, Routes } from 'react-router';
import * as uuid from 'uuid';

import { pages } from './assets/pages';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        {pages.map(({ label, link, index, element }) => (
          <Route
            index={!!index}
            path={link}
            element={element}
            key={uuid.v7()}
          />
        ))}
      </Routes>
    </Box>
  );
};

export default App;
