import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  email: string | null;
  id: string | null;
  refreshToken: string | null;
}
const initialState: UserState = {
  email: null,
  id: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (
      state,
      action: PayloadAction<UserState>
    ) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
