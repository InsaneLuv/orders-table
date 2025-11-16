import React from "react";
import styles from "./loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default Loading;
