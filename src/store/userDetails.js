// sebuah store yang menyimpan state si user
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    detailUser: (state, action) => {
      // Menyimpan ke dalam store redux
      state.user = action.payload;
    },
  },
});

export const { detailUser } = userDetailSlice.actions;
export const userDetailsReducer = userDetailSlice.reducer;
