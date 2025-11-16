import React from "react";
import styles from "./error-message.module.css";

const ErrorMessage: React.FC<{ text: string | undefined }> = ({ text }) => {
  return (
    <div className={styles.wrapper}>{text ? text : "Произошла ошибка"}</div>
  );
};

export default ErrorMessage;
