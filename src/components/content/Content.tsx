import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Typography, Box, CircularProgress } from '@mui/material';

const Content = (): ReactJSXElement => {
  return (
    <Box>
      <Typography>Контент</Typography>
      <CircularProgress />
    </Box>
  );
};

export default Content;
