import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false, items: [] };

const cartSlice = createSlice({
  name: "showShoppingCart",
  initialState,
  reducers: {
    toggleShowCart(state) {
      state.show = !state.show;
    },
    addToCart(state, action) {
      const existingItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItem === -1) {
        state.items.push(action.payload);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
