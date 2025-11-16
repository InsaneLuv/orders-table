import React from "react";
import styles from "./table.module.css";

interface Props {
  children: React.ReactNode;
}

const TableCell: React.FC<Props> = ({ children }) => {
  return <td className={styles.td}>{children}</td>;
};

export default TableCell;
