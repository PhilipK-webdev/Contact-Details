import { configureStore } from "@reduxjs/toolkit";
import getUrlParamsId from "../features/urlParams/urlParams";
import userReducer from "../features/user/user";
export const store = configureStore({
  reducer: {
    id: getUrlParamsId,
    users: userReducer,
  },
});
