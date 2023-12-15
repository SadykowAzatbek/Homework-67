import {configureStore} from '@reduxjs/toolkit';
import {passwordReducer} from './passwordSlice';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;