import React from "react";
import styles from "./orders-actions.module.css";
import Button from "../UI/Button/Button";
import filter from "@/assets/filter.svg";

interface Props {
  toggler: () => void;
}

const OrdersActions: React.FC<Props> = ({ toggler }) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={toggler} text="Фильтрация" img={filter} />
    </div>
  );
};

export default OrdersActions;
