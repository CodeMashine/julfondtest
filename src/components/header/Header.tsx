import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Typography } from '@mui/material';

const Header = (): ReactJSXElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography> Жилфонд </Typography>
      <Typography> Пользователь </Typography>
    </Box>
  );
};

export default Header;
