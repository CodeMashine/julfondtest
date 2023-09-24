import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { setUserId } from '../../../slices/currentUserIdSlice';
import { IUser } from '../../../types/interfaces';

const UserView = (user: IUser): ReactJSXElement => {
  const dispatch = useAppDispatch();

  const chooseHandler = (pointer: number): void => {
    dispatch(setUserId(pointer));
  };

  return (
    <ListItem
      sx={{
        cursor: 'pointer',
      }}
      alignItems='flex-start'
      onClick={(): void => {
        chooseHandler(user.id);
      }}
    >
      <ListItemAvatar>
        <Avatar>{user.name[1]}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={user.username}
        secondary={
          <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>
            {user.email}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default UserView;
