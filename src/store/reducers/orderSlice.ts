import type { OrderState, SortByType } from "@/type/main";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: OrderState = {
  trip_id: "",
  source: "",
  fromPoint: "",
  toPoint: "",
  sortBy: "departure.planed_date",
  sortDir: 1,
  page: 1,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setTripId: (state, action: PayloadAction<string>) => {
      state.trip_id = action.payload;
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
      state.sortDir = state.sortDir === 1 ? -1 : 1;
      state.sortBy = action.payload;
      console.log(action.payload, state.sortDir);
    },
    clearFilter: (state) => {
      state.trip_id = "";
      state.source = "";
      state.fromPoint = "";
      state.toPoint = "";
      state.sortBy = "departure.planed_date";
      state.sortDir = 1; // сбрасываем направление тоже
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
  setTripId,
  setPage,
  setSortBy,
  clearFilter,
} = orderSlice.actions;

export default orderSlice.reducer;