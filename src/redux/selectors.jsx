import { createSelector } from "@reduxjs/toolkit";
import { cartState, StateType, uiStateType } from "../types/types";

const cartSelector = (state) => state.cart;

export const cartTotalSelector = createSelector([cartSelector], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
