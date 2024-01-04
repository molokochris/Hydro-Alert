import { createSlice } from "@reduxjs/toolkit";

const CartItemsSlice = createSlice({
  name: "CartItems",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
    clearList: (state) => {
      // Clear the state by setting it back to the initial state (an empty array)
      state.splice(0); // Efficiently clear the array
    },
  },
});

export const { addItem, removeItem, clearList } = CartItemsSlice.actions;
export default CartItemsSlice.reducer;
