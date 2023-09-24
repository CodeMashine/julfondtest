/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../types/interfaces';

type UsersList = IUser[];

const initialState: UsersList = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
