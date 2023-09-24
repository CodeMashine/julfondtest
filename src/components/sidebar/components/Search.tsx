import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Typography, TextField } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { setUsers, toggleStatus } from '../../../slices/usersSlice';
import type { IUsersList } from '../../../types/interfaces';

const Search = (): ReactJSXElement => {
  const dispatch = useAppDispatch();

  const getUsers = async (): Promise<IUsersList> => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json: IUsersList = await responce.json();
    return json;
  };

  const inputHandler = async (searchString: string): Promise<void> => {
    dispatch(toggleStatus());

    const users: IUsersList = await getUsers();
    console.log('users', users);
    const searchReq = searchString.split(',').map((string) => string.trim());

    const filtredUsers = searchReq
      .map((req) => {
        return users.filter((user) => {
          return user.username.includes(req) || user.id === Number(req);
        });
      })
      .flat();

    dispatch(setUsers(filtredUsers));
    setTimeout(() => {
      dispatch(toggleStatus());
    }, 500);
  };

  return (
    <Box>
      <Typography>Поиск сотрудников</Typography>
      <TextField
        label='id или имя'
        placeholder='введите id или имя сотрудника'
        onChange={async (event): Promise<void> => {
          await inputHandler(event.target.value);
        }}
      ></TextField>
    </Box>
  );
};

export default Search;
