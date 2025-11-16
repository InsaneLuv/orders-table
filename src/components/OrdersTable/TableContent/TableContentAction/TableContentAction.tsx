import copyOrderData from "@/helper/copyOrderData";
import type { IOrder } from "@/type/main";
import React from "react";
import copy from "@/assets/copy.svg";
import linkIcon from "@/assets/link.svg";
import styles from "./table-content-action.module.css";

const TableContentAction: React.FC<{ order: IOrder }> = ({ order }) => {
  return (
    <div>
      <button onClick={() => copyOrderData(order)} className={styles.btn}>
        <img src={copy} alt="copy" />
      </button>

      <a href={`https://t.me`} target="_blank" rel="noopener noreferrer">
        <img src={linkIcon} alt="link" />
      </a>
    </div>
  );
};

export default TableContentAction;
