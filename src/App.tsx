import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./pages/Post/Post";
import Posts from "./pages/Posts/Posts";

const App: FC = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <Link className="nav__home-link" to="/about">
          PET PROJECT
        </Link>
        <div className="nav__main-links">
          <Link to="/about">О проекте</Link>
          <Link to="/posts">Посты</Link>
          <Link to="/users">Пользователи</Link>
        </div>
      </nav>
      <main>
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="page"
            timeout={500}
            exit={false}
          >
            <Routes location={location}>
              <Route path="/" element={<Posts />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
};

export default App;
