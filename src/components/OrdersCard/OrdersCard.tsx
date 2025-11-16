import type { IOrder } from "@/type/main";
import React from "react";
import OrdersList from "../OrdersList/OrdersList";
import Filter from "../Filter/Filter";
import styles from "./orders-card.module.css";
import useOutsideClick from "@/hooks/useOutsideClick";
import Absence from "../Absence/Absence";
import CardSortHeader from "./CardSortHeader/CardSortHeader";

interface Props {
  orders: IOrder[] | undefined;
  isFilter: boolean;
  toggle: () => void;
}

const OrdersCard: React.FC<Props> = ({ orders, isFilter, toggle }) => {
  const ref = useOutsideClick(toggle);

  return (
    <div>
      <CardSortHeader />
      <div>
        {orders && orders.length > 0 ? (
          <OrdersList orders={orders} />
        ) : (
          <Absence />
        )}
      </div>
      <span
        className={`${styles.filter} ${isFilter && styles.active}`}
        ref={isFilter ? ref : null}
      >
        <Filter />
      </span>
    </div>
  );
};

export default OrdersCard;
