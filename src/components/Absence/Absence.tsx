import React from "react";
import absence from "@/assets/absence.svg";
import styles from "./absence.module.css";

const Absence: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img src={absence} alt="absence" />
      <p>ничего не найдено</p>
    </div>
  );
};

export default Absence;
