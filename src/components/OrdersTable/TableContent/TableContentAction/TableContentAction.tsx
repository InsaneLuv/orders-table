import copyOrderData from "@/helper/copyOrderData";
import type { Distribution } from "@/type/main";
import React from "react";
import copy from "@/assets/copy.svg";
import linkIcon from "@/assets/link.svg";
import styles from "./table-content-action.module.css";

const TableContentAction: React.FC<{ order: Distribution }> = ({ order }) => {
  const handleCopyClick = () => {
    copyOrderData(order);
  };

  // Шифруем всю строку "otc_uid" в base64
  const encodedData = btoa(`otc_${order.order.uid || ''}`);
  const telegramLink = `https://t.me/opened_test_bot?start=${encodedData}`;

  return (
    <div className={styles.actions}>
      <button 
        onClick={handleCopyClick} 
        className={styles.btn}
        type="button"
      >
        <img src={copy} alt="Copy order data" />
      </button>

      <a 
        href={telegramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img src={linkIcon} alt="Open in Telegram" />
      </a>
    </div>
  );
};

export default TableContentAction;