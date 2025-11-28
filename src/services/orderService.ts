import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
import type { AxiosResOrders, AxiosResSources, SortByType, SortDirType } from "@/type/main";

export interface GetOrderArg {
  trip_id: string;
  from_point: string;
  to_point: string;
  source: string;
  limit: number;
  page: number;
  sort_by: SortByType;
  sort_dir: SortDirType;
}

const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://mntr.ru.tuna.am/api/" }),
  endpoints: (build) => ({
    getOrder: build.query<AxiosResOrders, GetOrderArg>({
      query: (args) => ({
        url: "distr",
        method: "get",
        params: args,
      }),
    }),
    getSources: build.query<AxiosResSources, void>({
      query: () => ({
        url: "sources",
        method: "get",
      }),
    }),
  }),
});

export const { useGetOrderQuery, useGetSourcesQuery } = orderApi;

export default orderApi;
