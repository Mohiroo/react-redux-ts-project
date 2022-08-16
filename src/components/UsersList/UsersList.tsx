import React, { FC } from "react";
import { IUser } from "../../models/IUser";
import UsersItem from "../UsersItem/UsersItem";
import styles from "./UsersList.module.scss";

interface UsersListProps {
  users: IUser[];
  goToProfile: (id: number) => void;
}

const UsersList: FC<UsersListProps> = (props) => {
  return (
    <div className={styles.user_list}>
      {props.users?.length ? (
        <>
          {props.users?.map((user) => (
            <UsersItem key={user.id} user={user} goToProfile={props.goToProfile} />
          ))}
        </>
      ) : (
        <h1>Произошла ошибка</h1>
      )}
    </div>
  );
};

export default UsersList;
