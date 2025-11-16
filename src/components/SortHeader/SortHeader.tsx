import React from "react";
import arrow from "@/assets/arrow.svg";
import styles from "./sort-header.module.css";

interface Props {
  text: string;
  onClick: () => void;
}

const SortHeader: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div className={styles.sort_header}>
      <div className={styles.sort_clickable} onClick={onClick}>
        <p>{text}</p>
      <span>
        <img src={arrow} alt="sort" />
      </span>
      </div>
    </div>
  );
};

export default SortHeader;
