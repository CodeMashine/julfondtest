import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Typography, Box, CircularProgress } from '@mui/material';
import { useAppSelector } from '../../store/hooks';
import DetailedUser from './components/DetailedUser';

const Content = (): ReactJSXElement => {
  const { users } = useAppSelector((state) => state.users);
  const { currentUserId } = useAppSelector((state) => state);

  const currentUser = users.find((user) => user.id === currentUserId);

  return (
    <Box
      sx={{
        height: '100%',
      }}
    >
      {currentUser ? (
        <DetailedUser user={currentUser} />
      ) : (
        <Typography>Выберите сотрудника что бы посмотреть его профиль</Typography>
      )}
    </Box>
  );
};

export default Content;
