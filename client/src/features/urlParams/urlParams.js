import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  paramsId: 0,
};
export const urlParamsId = createSlice({
  name: "id",
  initialState,
  reducers: {
    setIdParams: (state, action) => {
      state.paramsId = action.payload;
      state.status = "succeeded";
    },
  },
});

export const { setIdParams } = urlParamsId.actions;

export default urlParamsId.reducer;
