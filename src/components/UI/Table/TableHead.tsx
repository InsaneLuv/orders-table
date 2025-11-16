import React from "react";
import styles from "./table.module.css";

interface Props {
  children: React.ReactNode;
}

const TableHead: React.FC<Props> = ({ children }) => {
  return <thead className={styles.thead}>{children}</thead>;
};

export default TableHead;
