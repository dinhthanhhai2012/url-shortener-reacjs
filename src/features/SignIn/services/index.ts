import { createAsyncThunk } from '@reduxjs/toolkit';
// @ts-ignore
import { Role } from 'src/interfaces/role';
// @ts-ignore
import axiosInstance from 'src/services/config';

export const signInPost = createAsyncThunk('/user/sign-in', async (data: { userName: string; password: string }) => {
  return axiosInstance.post('/user/sign-in', { userName: data.userName, password: data.password });
});

export const signUpPost = async (userName: string, password: string, role: Role) => {
  return axiosInstance.post('/user/create', { userName, password, role });
};
