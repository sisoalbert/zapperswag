import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  list: [],
};

type requestOptionsType = {
  method: string;
  redirect: string;
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

export type FetcherOptions = {
  queryString: string;
  variables?: FetcherVariables;
};

export type FetcherVariables = { [key: string]: string | any | undefined };

export type FetcherResults<T> = {
  data: T;
};

const API_URL =
  "https://us-east-1.aws.data.mongodb-api.com/app/zapperswag-oifze/endpoint/zapper";

export const fetchProductsNew = async <T>({
  queryString,
  variables,
}: FetcherOptions): Promise<FetcherResults<T>> => {
  const res = await fetch(API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // You can add more headers
    },
    body: JSON.stringify({
      queryString,
      variables,
    }),
  });
  const { data, errors } = await res.json();

  if (errors) {
    // if errors.message null or undefined returns the custom error
    throw new Error(errors.message ?? "Custom Error");
  }

  return { data };
};

export const fetchProducts =
  () => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(save([]));
    dispatch(startFetch());
    const requestOptions = {
      method: "POST",
      // redirect: "follow"
    };
    const response = await fetch(
      "https://us-east-1.aws.data.mongodb-api.com/app/zapperswag-oifze/endpoint/zapper",
      requestOptions
    );
    const data = await response.json();
    dispatch(save(data));
  };

const productsReducer = productsSlice.reducer;

export default productsReducer;
