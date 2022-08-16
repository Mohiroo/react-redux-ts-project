import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/UI/loader/Loader";
import UsersList from "../../components/UsersList/UsersList";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { fetchUsers } from "../../store/action-creators/FetchData";
import styles from "./Users.module.scss";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { users, isLoadingUsers, errorUsers } = useAppSelector(
    (state) => state.usersReducer
  );
  const success = !isLoadingUsers && !errorUsers;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const goToProfile = (id: number) => navigate(`/user/${id}`);

  return (
    <div className={styles.users}>
      {isLoadingUsers && <Loader />}
      {errorUsers && <h1 className={styles.users_title}>Произошла ошибка</h1>}
      {success && (
        <>
          <h1 className={styles.users_title}>Пользователи</h1>
          <UsersList users={users} goToProfile={goToProfile} />
        </>
      )}
    </div>
  );
};

export default Users;
