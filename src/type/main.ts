export interface IOrder {
  uid: string;
  status: string;
  loading_dt: string;
  points: string[];
  cargo: string | null;
  veh: string;
  cost: null | number;
  cost_nds: null | number;
  source: string;
  comment: null;
  worker: null;
  pending: null;
  pending_queue: never[];
}

export interface AxiosResOrders {
  orders: IOrder[];
  totalPages: number;
}

export type SortByType = "loading_dt" | "points.0" | "points.1";

export interface OrderState {
  uid: string;
  source: string;
  fromPoint: string;
  toPoint: string;
  page: number;
  sortBy: SortByType;
}
