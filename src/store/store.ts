import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducers/orderSlice";
import orderApi from "@/services/orderService";

const rootReducer = combineReducers({
  [orderApi.reducerPath]: orderApi.reducer,
  orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(orderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
