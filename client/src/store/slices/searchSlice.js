import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    text:"", 
  
  };

const searchSliceReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Reducer functions for search (if any)
    Searchquery: (state, action) => {
        state.text=action.payload
       
      },
  },
});
export const {Searchquery}=searchSliceReducer.actions
export default searchSliceReducer.reducer;
