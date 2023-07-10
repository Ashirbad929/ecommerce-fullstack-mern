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
export const selectuser=(state)=>state.userid
export default usersSlice.reducer;


