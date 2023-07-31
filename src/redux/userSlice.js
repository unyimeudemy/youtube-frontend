import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },

    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },

    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },

    subscribtion: (state, action) => {
      if (state.currentUser.data.subscribedChannels.includes(action.payload)) {
        state.currentUser.data.subscribedChannels.splice(
          state.currentUser.data.subscribedChannels.findIndex(
            (channelID) => channelID === action.payload
          ),
          1
        );
      } else {
        state.currentUser.data.subscribedChannels.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscribtion } =
  userSlice.actions;

export default userSlice.reducer;
