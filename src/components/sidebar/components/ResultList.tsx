import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, List, Typography, CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import UserView from '../../../utils/UserView';

const ResultList = (): ReactJSXElement => {
  const { users, status } = useAppSelector((state) => state.users);
  return (
    <Box>
      <Typography>Результаты</Typography>
      {status ? (
        <CircularProgress />
      ) : (
        <List>
          {users.map((user) => {
            return UserView(user);
          })}
        </List>
      )}
    </Box>
  );
};

export default ResultList;
