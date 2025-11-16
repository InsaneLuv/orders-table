import React from "react";
import styles from "./select.module.css";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;

  setValue: (value: string) => void;
}

const Select: React.FC<Props> = ({ options, value, setValue }) => {
  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={styles.select}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className={styles.option}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
