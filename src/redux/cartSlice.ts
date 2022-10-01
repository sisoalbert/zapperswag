import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { cartState, ItemType } from "../types/types";

type initialStateType = {
  cartList: ItemType[];
};
const cartList: ItemType[] = [];

const initialState: initialStateType = {
  cartList,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ItemType>) => {
      console.log("payload:", action.payload);
      const { id } = action.payload;
      console.log("id:", id);
      console.log("state:", state);

      // const find = state.find((item:number) => item.id === id);

      state.cartList.push({ ...action.payload, quantity: 1 });
    },

    // addToCart(state, { payload }) {
    //   console.log(state);
    //   const { uid } = payload;
    //   console.log(payload);
    //   const find = state.find((item) => item.uid === uid);

    //   if (find) {
    //     return state.map((item) =>
    //       item.uid === uid
    //         ? {
    //             ...item,
    //             quantity: item.quantity + 1,
    //           }
    //         : item
    //     );
    //   } else {
    //     state.push({
    //       ...payload,
    //       quantity: 1,
    //     });
    //   }
    // },

    removeItem: (state, action) => {
      console.log(cartList);
      console.log(action);
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
    // increament(state, { payload }) {
    //   console.log(state);
    //   console.log(payload);
    //   return state.map((item) =>
    //     item.uid === payload
    //       ? {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         }
    //       : item
    //   );
    // },
    // decrement(state, { payload }) {
    //   return state.map((item) =>
    //     item.uid === payload
    //       ? {
    //           ...item,
    //           quantity: item.quantity - 1,
    //         }
    //       : item
    //   );
    // },
    // clear(state) {
    //   return [];
    // },
  },
});

export const {
  addToCart,
  // increament, decrement, clear,
  removeItem,
} = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
