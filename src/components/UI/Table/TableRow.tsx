import React from "react";
import styles from "./table.module.css";

interface Props {
  children: React.ReactNode;
}

const TableRow: React.FC<Props> = ({ children }) => {
  return <tr className={styles.tr}>{children}</tr>;
};

export default TableRow;
