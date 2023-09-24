import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import { IUser } from '../types/interfaces';

const UserView = (user: IUser): ReactJSXElement => {
  return (
    <ListItem alignItems='flex-start'>
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
