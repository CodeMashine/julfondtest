// import { useEffect } from 'react';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import Main from './components/main/Main';

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
