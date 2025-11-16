import React from "react";
import styles from "./input.module.css";

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
}

const Input: React.FC<Props> = ({
  value,
  setValue,
  placeholder,
  type,
  onKeyDown,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
      onKeyDown={onKeyDown}
    />
  );
};
export default Input;
