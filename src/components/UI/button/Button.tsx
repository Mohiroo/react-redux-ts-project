import React, { FC } from "react";
import styles from "./Button.module.scss";

export const enum ButtonMode {
  hide,
  user,
  default,
}

interface ButtonProps {
  text: string;
  mode?: ButtonMode;
  disabled?: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  let className: string = "";

  switch (props.mode) {
    case ButtonMode.hide: {
      className = styles.btn_delete;
      break;
    }
    case ButtonMode.user: {
      className = styles.btn_user;
      break;
    }
    case ButtonMode.default: {
      className = styles.btn;
      break;
    }
    default: {
      className = styles.btn;
      break;
    }
  }

  className = props.disabled
    ? `${className} ${styles.btn_disabled}`
    : className;

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
