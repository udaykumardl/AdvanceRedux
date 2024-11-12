// import { cartSlice, createSlice } from "@reduxjs/toolkit";

// createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     totalQuantity: 0,
//     totalAmount: 0,
//   },
//   reducers: {
//     addItemToCart(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       if (!existingItem) {
//         state.push.items({
//           itemId: newItem.id,
//           price: newItem.price,
//           quantity: 1,
//           totalPrice: newItem.price,
//           name:newItem.title
//         });
//       }
//       else{
//         existingItem.quantity++;
//         existingItem.totalPrice=existingItem.totalPrice+newItem.price
//       }
//     },
//     removeItemFromCart(state) {},
//   },
// });

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;
        }
      }
    },
  },
});

// Export the actions
export const cartActions = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
