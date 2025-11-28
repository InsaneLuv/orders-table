export interface UserData {
  id: number;
  first_name: string;
  last_name?: string | null;
  username?: string | null;
}

export interface Interactor extends UserData {
  joined_dt: string; // datetime as ISO string
  requested_min: number;
  left: boolean;
  left_reason?: string | null;
  left_dt?: string | null; // datetime as ISO string
  exiration_dt?: string | null; // datetime as ISO string
  was_prolonged: boolean;
  expired?: boolean;
}

export interface SavedMessage {
  message_id: number;
  chat_id: number;
  message_thread_id?: number | null;
  html_text: string;
}

export interface WorkingData {
  worker?: Interactor | null;
  pending?: Interactor | null;
  pending_queue: Interactor[];
  left_queue: Interactor[];
  queue_history?: Interactor[];
}

export type PayType = 
  | "1-3 БД"
  | "3-5 БД"
  | "10 БД"
  | "10-15 БД"
  | "15-20 БД"
  | "20-25 БД"
  | "50/50 1-3 БД"
  | "50/50 10 БД"
  | "50/50 10-15 БД"
  | "50/50 20-25 БД"
  | "Другой";

export interface ApprovedResult {
  sender_id?: number | null;
  new_cost?: number | null;
  new_cost_with_nds?: boolean | null;
  new_date?: string | null; // datetime as ISO string
  new_pay?: PayType | null;
  created_dt?: string | null; // datetime as ISO string
  confirmation_message_id?: number | null;
  confirmed?: boolean | null;
  answer_by?: number | null;
  answer_by_name?: string | null;
  answer_dt?: string | null; // datetime as ISO string
  any_requested?: boolean;
}

export const StatusEnum = {
  opened: 1,
  closed: 2,
  canceled: 4,
  deleted: 8,
  outdated: 16
};

export interface Info {
  status: typeof StatusEnum;
  cost?: number | null;
  cost_nds?: number | null;
}

export interface SubData {
  approved_result?: ApprovedResult | null;
  closed_message?: SavedMessage | null;
  stored_message?: SavedMessage | null;
  marked?: boolean | null;

  fact_cost?: number | null;
  fact_cost_nds?: number | null;
}

export interface Distribution extends WorkingData, Info, SubData {
  order: Order;
  distr_id: string;
  _id?: string; // MongoDB document ID
}

export type VehicleType = "ISO" | "REF" | "TANK" | "TENT" | string;

export interface Veh {
  type: VehicleType;
  tonnage: number;
}

export interface Coords {
  latitude?: number | null;
  longitude?: number | null;
}

export const RoutePointTypeEnum = {
  LOADING: "loading",
  UNLOADING: "unloading"
};

export interface RoutePointAccord {
  planed_date: string;
  operation_type?: typeof RoutePointTypeEnum | null;
  warehouse_name?: string | null;
  region_name?: string | null;
  city_name: string | null;
  city_id?: number | null;
  coords?: Coords | null;
  index?: string | null;
  country_name?: string | null;
  pos?: number | null;
  timezone?: string | null;
}

export interface Route {
  points: RoutePointAccord[];
  raw_points: RoutePointAccord[];
}

export interface Meta {
  id: number;
  trip_id: string;
  client_name: string;
  service_name: string;
  external_id: number;
  number: string;
}

export interface Cargo {
  list: string[];
  weight?: number | null;
  pallet?: number | null;
  volume?: number | null;
  hazardous: boolean;
}


export interface Info {
  comment?: string | null;
}

export interface Order {
  uid: string;
  meta: Meta;
  route: Route;
  veh: Veh;
  cargo: Cargo;
  info: Info;
}

export interface AxiosResOrders {
  items: Distribution[];
  current_page: number;
  page_size: number;
  total_pages: number;
}

export interface AxiosResSources {
  sources: string[];
}

export type SortByType = "departure.planed_date" | "departure.city_name" | "destination.city_name";

export type SortDirType = 1 | -1;

export interface OrderState {
  trip_id: string;
  source: string;
  fromPoint: string;
  toPoint: string;
  page: number;
  sortBy: SortByType;
  sortDir: SortDirType;
}
