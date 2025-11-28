import type { AxiosResOrders } from "@/type/main";
import React, { memo } from "react";
import TableContent from "./TableContent/TableContent";
import styles from "./orders-table.module.css";
import Filter from "../Filter/Filter";
import Absence from "../Absence/Absence";

interface Props {
  isFilter: boolean;
  orders: AxiosResOrders | undefined;
}

const OrdersTable: React.FC<Props> = memo(({ orders, isFilter }) => {
  return (
    <div className={`${styles.wrapper} ${isFilter && styles.active}`}>
      <div className={styles.table_wrapper}>
        {orders && orders.items.length > 0 ? (
          <TableContent orders={orders.items} />
        ) : (
          <Absence />
        )}
      </div>
      <div className={`${styles.filter} ${isFilter && styles.active}`}>
        <Filter />
      </div>
    </div>
  );
});

export default OrdersTable;
