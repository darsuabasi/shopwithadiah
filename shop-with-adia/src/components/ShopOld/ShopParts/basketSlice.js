import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    clearBasket: () => [],
    removeFromBasket: (state, action) => {
      let basketIndex = state.findIndex((basketItem) => {
        return basketItem.id === action.payload.id;
      });
      if (basketIndex >= 0) {
        state.splice(basketIndex, 1);
      }
    },
  },
});

export const basketCount = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
} = counterSlice.actions;
export default counterSlice.reducer;