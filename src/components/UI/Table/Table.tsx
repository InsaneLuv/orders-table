import React from "react";
import styles from "./table.module.css";

interface Props {
  children: React.ReactNode;
}

const Table: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.table_wrapper}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default Table;
