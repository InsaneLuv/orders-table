import React, { memo } from "react";
import styles from "./orders-list.module.css";
import OrdersListItem from "./OrdersListItem/OrdersListItem";
import type { IOrder } from "@/type/main";

const OrdersList: React.FC<{ orders: IOrder[] }> = memo(({ orders }) => {
  return (
    <div className={styles.wrapper}>
      {orders.map((order) => (
        <OrdersListItem order={order} key={order.uid} />
      ))}
    </div>
  );
});

export default OrdersList;
