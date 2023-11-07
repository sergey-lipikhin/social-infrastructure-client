/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User } from '@cutomTypes/User';
import { LoginOutputPayload, RefreshOutputPayload } from '@cutomTypes/auth';
import { accessTokenService } from '@services/accessTokenService';

interface StateType {
  isChecked: boolean;
  user: User | null;
}

const initialState: StateType = {
  isChecked: false,
  user: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginOutputPayload>) => {
      state.user = action.payload.user;
      accessTokenService.save(action.payload.accessToken);
    },
    check: (state, action: PayloadAction<RefreshOutputPayload | undefined>) => {
      state.isChecked = true;

      if (action.payload) {
        state.user = action.payload.user;
        accessTokenService.save(action.payload.accessToken);
      }
    },
    logout: (state) => {
      accessTokenService.remove();
      state.user = null;
    },
  },
});

export const { login, check, logout } = authSlice.actions;

export default authSlice.reducer;
