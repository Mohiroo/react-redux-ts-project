import { Link, Route, Routes } from "react-router-dom";
import Post from "./pages/Post/Post";
import Posts from "./pages/Posts/Posts";

const App = () => {
  return (
    <>
      <Link to="/posts">Посты</Link>
      <Link to="/post">Пост</Link>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </>
  );
};

export default App;
