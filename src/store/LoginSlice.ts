import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  isLoggedIn: boolean;
}

const initialState: LoginState = {
  isLoggedIn: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginStatus: (state, action: { payload: boolean }) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoginStatus } = LoginSlice.actions;
export default LoginSlice.reducer;
