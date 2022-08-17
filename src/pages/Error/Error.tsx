import { useAppSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store/store";
import styles from "./Error.module.scss";

const Error = () => {
  const isAuth = useAppSelector((state: RootState) => state.AuthReducer.isAuth);

  return (
    <h1 className={styles.error_page}>
      {isAuth ? `Данной страницы не существует` : `Войдите в аккаунт`}
    </h1>
  );
};

export default Error;
