import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "ok",
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeValue: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { changeValue } = searchSlice.actions;
export default searchSlice.reducer;
