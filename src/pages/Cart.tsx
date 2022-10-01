import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../types/types";

export default function Cart() {
  const cart = useSelector((state: StateType) => state.cart);

  console.log("====================================");
  console.log("cart:", cart);
  console.log("====================================");

  return <div>Cart</div>;
}
