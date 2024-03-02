import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import experimentsSlice from './features/experimentsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    experiments: experimentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
