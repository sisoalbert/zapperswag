import { createSelector } from "@reduxjs/toolkit";
import { cartState, StateType, uiStateType } from "../types/types";

const cartSelector = (state: StateType) => state.cart;

interface cartCurrentType {
  quantity: number;
  price: number;
}

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total: number, current: cartCurrentType) =>
      (total += current.price * current.quantity),
    0
  )
);
