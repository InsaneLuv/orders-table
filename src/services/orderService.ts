import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
import type { IOrder, SortByType } from "@/type/main";

export interface GetOrderArg {
  uid: string;
  from_point: string;
  to_point: string;
  source: string;
  limit: number;
  page: number;
  sort_by: SortByType;
}

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://api.alt-crg.tw1.su/opened-monitor-bot/api/" }),
  endpoints: (build) => ({
    getOrder: build.query<IOrder[], GetOrderArg>({
      query: (args) => ({
        url: "trips",
        method: "get",
        params: args,
      }),
    }),
  }),
});

export const { useGetOrderQuery } = orderApi;

export default orderApi;
