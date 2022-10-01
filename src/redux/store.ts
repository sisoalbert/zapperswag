import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// import productsReducer from "./productsSlice";
import uiReducer from "./uiSlice";
// import userAccountReducer from "./account/userAccountSlice";
// import userOrdersReducer from "./account/userOrdersSlice";

const store = configureStore({
  reducer: {
    // products: productsReducer,
    cart: cartReducer,
    ui: uiReducer,
    // account: userAccountReducer,
    // order: userOrdersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
