/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// @ts-ignore
import { signInPost } from 'src/features/SignIn/services';
// @ts-ignore
import { Role } from 'src/interfaces/role';

export interface Auth {
  _id: string;
  userName: string;
  role: Role | '';
}

const initialState: Auth = {
  _id: '',
  userName: '',
  role: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      state._id = '';
      state.userName = '';
      state.role = '';
    }
  },
  extraReducers: {
    [`${signInPost.pending}`]: (state) => {},
    [`${signInPost.fulfilled}`]: (state, action) => {
      const { _id, userName, role } = action.payload.data;
      state._id = _id;
      state.userName = userName;
      state.role = role;
    },
    [`${signInPost.rejected}`]: (state, action) => {
      state = initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { clearAuth } = authSlice.actions;

const { reducer: authReducer } = authSlice;

export default authReducer;
