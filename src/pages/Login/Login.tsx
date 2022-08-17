import { FC } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../store/reducers/AuthSlice";
import styles from "./Login.module.scss";

interface stateType {
  pathname: string | null;
}

const Login: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pathname = location.state !== null ? (location.state as stateType).pathname! : '/';

  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>Авторизация</h1>
      <p className={styles.info_text}>Введите любые значения или оставте поля пустыми, нажмите на кнопку (БД нет)</p>
      <input
        className={styles.login__input}
        type={"text"}
        placeholder={"Логин"}
      />
      <input
        className={styles.login__input}
        type={"password"}
        autoComplete={"on"}
        placeholder={"Пароль"}
      />
      <button
        className={styles.login__button}
        onClick={() => {
          dispatch(login());
          setTimeout(() => {
            navigate(pathname);
          }, 200);
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
