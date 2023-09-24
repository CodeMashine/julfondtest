import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box, Typography, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setUsers } from '../../../slices/usersSlice';
// import { useState } from 'react';

const Search = (): ReactJSXElement => {
  const dispatch = useAppDispatch();

  const getUsers = async (): Promise<void> => {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await responce.json();
    return json;
  };

  const inputHandler = async (searchString: string): Promise<void> => {
    const users = await getUsers;
    const searchReq = searchString.split(',').map((string) => string.trim());

    // dispatch(setUsers(json));
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
