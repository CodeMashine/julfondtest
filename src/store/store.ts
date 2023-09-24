import { configureStore } from '@reduxjs/toolkit';
import usersSliceReducer from '../slices/usersSlice';
import currentUserSliceReducer from '../slices/currentUserIdSlice';

export const store = configureStore({
  reducer: {
    users: usersSliceReducer,
    currentUserId: currentUserSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
