import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;

export const currentUserIdSlice = createSlice({
  name: 'currentUserId',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserId } = currentUserIdSlice.actions;

export default currentUserIdSlice.reducer;
