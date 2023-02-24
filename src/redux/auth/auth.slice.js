import { STATUS } from "constants/status.constants";
import { authLoginThunk } from "./auth.thunk";

const { createSlice } = require("@reduxjs/toolkit");
const { authInitState } = require("./auth.init-state");

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
    
  extraReducers: builder => {
    builder.addCase(authLoginThunk.pending, state => {
      state.status = STATUS.loading;
    }).addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.status = STATUS.success;
      state.data = payload;
    }).addCase(authLoginThunk.rejected, state => {
      state.status = STATUS.error;
    })
  },
});

export const authReducer = authSlice.reducer;