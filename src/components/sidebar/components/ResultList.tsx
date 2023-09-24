import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, List, Typography, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

const ResultList = (): ReactJSXElement => {
  const users = useAppSelector((state) => state.users);
  return (
    <Box>
      <Typography>Результаты</Typography>
      {/* {users.test ? <List>{users.test}</List> : <CircularProgress />} */}
    </Box>
  );
};

export default ResultList;
