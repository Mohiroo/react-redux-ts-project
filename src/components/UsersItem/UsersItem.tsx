import React, { FC } from "react";
import { IUser } from "../../models/IUser";
import Button, { ButtonMode } from "../UI/button/Button";
import styles from "./UsersItem.module.scss";

interface UsersItemProps {
  user: IUser;
  goToProfile: (id: number) => void;
}

const UsersItem: FC<UsersItemProps> = (props) => {
  return (
    <div className={styles.user_item}>
      <span>
        {props.user.id}. {props.user.username}
      </span>
      <Button
        mode={ButtonMode.user}
        text={"Профиль"}
        onClick={() => props.goToProfile(props.user.id)}
      />
    </div>
  );
};

export default UsersItem;
