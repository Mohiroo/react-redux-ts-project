import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Button, { ButtonMode } from "./components/UI/button/Button";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./hooks/useTypedSelector";
import { RootState } from "./store/store";
import { logout } from "./store/reducers/AuthSlice";
import Post from "./pages/Post/Post";
import Posts from "./pages/Posts/Posts";
import User from "./pages/User/User";
import Users from "./pages/Users/Users";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";

const App: FC = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const isAuth = useAppSelector((state: RootState) => state.AuthReducer.isAuth);

  return (
    <>
      <header>
        <nav>
          <Link className="nav__home-link" to="/pet-project">
            PET PROJECT
          </Link>
          <div className="nav__main-links">
            <Link to="/about">О проекте</Link>
            <Link to="/posts">Посты</Link>
            <Link to="/users">Пользователи</Link>
          </div>
          <div className="nav__user_button">
            {isAuth ? (
              <Button
                text={"Выйти"}
                mode={ButtonMode.logout}
                onClick={() => dispatch(logout())}
              />
            ) : (
              <Link to="/login">
                <Button
                  text={"Войти"}
                  mode={ButtonMode.login}
                  onClick={() => null}
                />
              </Link>
            )}
          </div>
        </nav>
      </header>

      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="page"
            timeout={500}
            exit={false}
          >
            <Routes>
              {isAuth ? (
                <>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/posts" element={<Posts />} />
                  <Route path="/post/:id" element={<Post />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/user/:id" element={<User />} />
                  <Route path="*" element={<Error />} />
                  <Route path="/login" element={<Login />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="*"
                    element={<Navigate to={"/login"} state={location} />}
                  />
                </>
              )}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
};

export default App;
