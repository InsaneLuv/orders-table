import React from "react";
import styles from "./orders-list-item.module.css";
import type { Distribution } from "@/type/main";
import convertToReadableDate from "@/helper/readableDate";
import copy from "@/assets/copy.svg";
import linkIcon from "@/assets/link.svg";
import ButtonText from "@/components/UI/ButtonText/ButtonText";
import copyOrderData from "@/helper/copyOrderData";

const OrdersListItem: React.FC<{ order: Distribution }> = ({ order }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.uid}>{order.distr_id}</p>
        {/* <p>{order.distribution.status}</p> */}
      </div>
      <div className={styles.info}>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Погрузка:</p>
          <p className={styles.info_value}>
            {convertToReadableDate(order.order.route.points[0].planed_date)}
          </p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Откуда:</p>
          <p className={styles.info_value}>{order.order.route.points[0].city_name}</p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Куда:</p>
          <p className={styles.info_value}>
            {order.order.route.points[order.order.route.points.length - 1].city_name}
          </p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Груз:</p>
          <p className={styles.info_value}>{order.order.cargo.list}</p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>TC:</p>
          <p className={styles.info_value}>{order.order.veh.type}</p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Ставка:</p>
          <p className={styles.info_value}>666</p>
        </div>
        <div className={styles.info_row}>
          <p className={styles.info_label}>Источник:</p>
          <p className={styles.info_value}>{order.order.meta.client_name}</p>
        </div>
        {/* <div className={styles.info_row}>
          <p className={styles.info_label}>Исполнитель:</p>
          <p className={styles.info_value}>{order.worker}</p>
        </div> */}
      </div>
      <div className={styles.footer}>
        <div className={styles.footer_item}>
          <ButtonText
            onClick={() => copyOrderData(order)}
            text="копировать"
            img={copy}
          />
        </div>
        <div className={styles.footer_item}>
          <a href={`https://t.me`} target="_blank" rel="noopener noreferrer">
            <ButtonText onClick={() => {}} text="перейти" img={linkIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrdersListItem;
