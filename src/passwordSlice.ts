import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
}

const initialState: PasswordState = {
  value: '',
};

export const passwordSlice = createSlice({
  name: 'screen password',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    clean: (state) => {
      state.value = state.value.slice(0, -1);
    },
  },
});

export const passwordReducer = passwordSlice.reducer;
export const {add, clean} = passwordSlice.actions;
