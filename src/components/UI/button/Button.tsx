import React, { FC } from "react";
import styles from "./Button.module.scss";

export enum ButtonMode {
  hide = "btn_hide",
  user = "btn_user",
  default = "btn",
}

interface ButtonProps {
  text: string;
  mode: ButtonMode;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  let className: string = props.disabled
    ? `${styles[props.mode]} ${styles.btn_disabled}`
    : styles[props.mode];

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
