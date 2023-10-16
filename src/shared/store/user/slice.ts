import {  createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IUser } from 'widgets/loginForm/model/types';


export interface UserState {
  user: IUser | null;
  isAuth:boolean
}

const initialState: UserState = {
  user: null,
  isAuth:false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
      state.isAuth = true
    },
    logOutUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
      state.isAuth = false
    },
  },
});

export const { setUser,logOutUser } = userSlice.actions;

const userPersistConfig = {
  key: 'user',
  storage,
};

export const persistedUserReducer = persistReducer(userPersistConfig, userSlice.reducer);
