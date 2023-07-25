import { createSlice } from "@reduxjs/toolkit";



const initialState = false

const drawerSliceReducer = createSlice({
    name: "drawer",
    initialState,
    reducers: {
      openDrawer: (state, action) => {
        return action.payload; // Return the new value for the state
      },
    },
  });
export const {openDrawer}=drawerSliceReducer.actions
export default drawerSliceReducer.reducer;
