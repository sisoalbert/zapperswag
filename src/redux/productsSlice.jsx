import { createSlice } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";

const initialState = {
  loading: true,
  list: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    startFetch(state) {
      state.loading = true;
    },
    save(state, action) {
      const { payload } = action;
      state.loading = false;
      state.list = payload;
    },
  },
});

export const { startFetch, save } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(save([]));
  dispatch(startFetch());
  const response = await fetch(
    "https://magneto-backend-production.herokuapp.com/v1/products"
  );
  const data = await response.json();
  dispatch(save(data));
};

const productsReducer = productsSlice.reducer;

export default productsReducer;
