// import { useEffect } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import Main from './components/main/Main';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

function App(): ReactJSXElement {
  return (
    <Box
      sx={{
        width: '90%',
        margin: '0 auto',
      }}
    >
      <Main />
    </Box>
  );
}

export default App;
