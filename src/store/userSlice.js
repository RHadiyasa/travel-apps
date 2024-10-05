// sebuah store yang menyimpan state si user
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      // Menyimpan ke dalam store redux
      state.user = action.payload.user;
      state.token = action.payload.token;

      // Simpan ke dalam localStorage
      Cookies.set("token", action.payload.token);
    },
    logout: (state, action) => {
      state.user = null;
      state.token = null;

      Cookies.remove("token");
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
