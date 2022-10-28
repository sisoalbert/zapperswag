import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { cartState } from "../types/types";

export interface ItemType {
  id: number;
  name: string | undefined;
  price: number;
  imageSrc?: string | undefined;
  quantity: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as ItemType[],

  reducers: {
    addToCart: (state, action: PayloadAction<ItemType>) => {
      console.log("payload:", action.payload);
      const { id } = action.payload;
      console.log("id:", id);
      console.log("state:", state);

      const find = state.find((item) => item.id === id);
      console.log(find);
      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        state.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeItem: (state, action: PayloadAction<number>) =>
      state.filter((item) => item.id !== action.payload),

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
