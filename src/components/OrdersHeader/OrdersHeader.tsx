import React from "react";
import styles from "./orders-header.module.css";

const OrdersHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <span className={styles.info}>
          <span>🪖 Открытые</span>
          <span className={styles.text}>рейсы</span>
        </span>
      </div>
    </header>
  );
};

export default OrdersHeader;
