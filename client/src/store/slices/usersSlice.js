import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid:null, 

};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      state.userid =action.payload
    },
    loggOutUser: (state) => {
      state.userid = null;
    }
  }
});

export const { loggedInUser,loggOutUser } = usersSlice.actions;
export const selectuser=(state)=>state.userid //selects userid can use this in multilple components more convienient less boiler plate code

export default usersSlice.reducer;//yooooo yes


