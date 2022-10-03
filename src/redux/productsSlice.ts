import { createSlice } from "@reduxjs/toolkit";

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

export const fetchProducts =
  () => async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(save([]));
    dispatch(startFetch());
    const requestOptions = {
      method: "POST",
      redirect: "follow",
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
