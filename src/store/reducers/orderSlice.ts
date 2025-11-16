import type { OrderState, SortByType } from "@/type/main";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
  uid: "",
  source: "",
  fromPoint: "",
  toPoint: "",
  sortBy: "loading_dt",
  page: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
      state.page = 1;
    },
    setSource: (state, action: PayloadAction<string>) => {
      state.source = action.payload;
      state.page = 1;
    },
    setToPoint: (state, action: PayloadAction<string>) => {
      state.toPoint = action.payload;
      state.page = 1;
    },
    setFromPoint: (state, action: PayloadAction<string>) => {
      state.fromPoint = action.payload;
      state.page = 1;
    },
    setSortBy: (state, action: PayloadAction<SortByType>) => {
      state.sortBy = action.payload;
    },
    clearFilter: (state) => {
      state.uid = "";
      state.source = "";
      state.fromPoint = "";
      state.toPoint = "";
      state.sortBy = "loading_dt";
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const {
  setSource,
  setToPoint,
  setFromPoint,
  setUid,
  setPage,
  setSortBy,
  clearFilter,
} = orderSlice.actions;

export default orderSlice.reducer;
