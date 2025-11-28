import React from "react";
import styles from "./orders-header.module.css";
import OrdersActions from "../OrdersActions/OrdersActions";
import useKeyPress from "@/hooks/userKeyPress";

interface Props {
  toggler: () => void;
};


const OrdersHeader: React.FC<Props> = ({toggler}) => {
  useKeyPress("Escape", toggler)
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.info}>
          <span>🪖 Открытые</span>
          <span className={styles.text}>рейсы</span>
        </span>
      </div>
      <OrdersActions toggler={toggler} />
      
    </header>
  );
};

export default OrdersHeader;
