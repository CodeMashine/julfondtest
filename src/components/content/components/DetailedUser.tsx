import { Avatar, Box, Typography } from '@mui/material';
import { IUser } from '../../../types/interfaces';

type DetailedUserProps = {
  user: IUser;
};

const DetailedUser = ({ user }: DetailedUserProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          width: '40%',
          height: '100%',
        }}
      >
        <Avatar
          variant='square'
          sx={{
            width: '100%',
            height: 'auto',
          }}
        >
          {user.username[1]}
        </Avatar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        P
        <Typography variant='h4' gutterBottom>
          {user.name}
        </Typography>
        <Typography variant='h5'>
          электрическая почта : <Typography>{user.email}</Typography>
        </Typography>
        <Typography variant='h5'>
          телефон : <Typography>{user.email}</Typography>{' '}
        </Typography>
        <Box>
          <Typography variant='h5' gutterBottom>
            {' '}
            о себе :
          </Typography>
          <Typography>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, labore? Dolorem inventore quia ab
            dolorum magnam laboriosam id reprehenderit, hic culpa minus, vero neque exercitationem architecto ipsum
            earum ut. Alias!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DetailedUser;
