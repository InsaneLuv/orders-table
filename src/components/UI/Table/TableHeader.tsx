import React from "react";
import styles from "./table.module.css";

interface Props {
  children: React.ReactNode;
}

const TableHeader: React.FC<Props> = ({ children }) => {
  return <th className={styles.th}>{children}</th>;
};

export default TableHeader;
