import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  img?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, img }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      data-testid="btn"
    >
      {img && <img src={img} alt="img" />}
      <p>{text}</p>
    </button>
  );
};

export default Button;
