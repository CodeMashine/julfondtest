/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { IUsersList } from '../types/interfaces';

interface IUserState {
  users: IUsersList;
  status: boolean;
}

const initialState: IUserState = {
  users: [],
  status: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    toggleStatus: (state) => {
      state.status = !state.status;
    },
  },
});

export const { setUsers, toggleStatus } = usersSlice.actions;

export default usersSlice.reducer;
