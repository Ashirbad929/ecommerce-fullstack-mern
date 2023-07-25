import { createSlice } from "@reduxjs/toolkit";

let initialState = [];
if (typeof window !== 'undefined') {
  if (localStorage.getItem('cart')) {
    initialState = JSON.parse(localStorage.getItem('cart'));
  } else {
    initialState = [];
  }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Addtocart: (state, action) => {
      return action.payload; // Replace the existing state with the new array of cart items
    },
  },
});

export const { Addtocart } = cartSlice.actions;
export default cartSlice.reducer;
