import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  name: "",
  surname: "",
  email: "",
  cellphone_number: "",
  date: "",
  time: "",
};

const userAccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addUserAccount(state, action) {
      //console log date and time
      // console.log(action.payload);
      //replace initialState with action.payload
      state = action.payload;
      return state;
    },
    deleteUserAccount(state, action) {
      state = {};
      return state;
    },

    clear(state) {
      return [];
    },
  },
});

export const {
  addUserAccount,
  deleteUserAccount,
  deleteFromTrades,
  addToCart,
  increment,
  decrement,
  removeItem,
  clear,
} = userAccountSlice.actions;
const userAccountReducer = userAccountSlice.reducer;

export default userAccountReducer;
