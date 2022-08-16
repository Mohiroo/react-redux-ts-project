import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostList from "../../components/PostList/PostList";
import Loader from "../../components/UI/loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedSelector";
import { IPost } from "../../models/IPost";
import {
  fetchUserById,
  fetchUserPosts,
} from "../../store/action-creators/FetchData";
import styles from "./User.module.scss";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams().id!;

  const { userId, isLoadingUserId, errorUserId } = useAppSelector(
    (state) => state.userByIdReducer
  );

  const { userPosts, isLoadingUserPosts, errorUserPosts } = useAppSelector(
    (state) => state.userPostsReducer
  );

  const [posts, setPosts] = useState<IPost[]>([]);

  const loading = isLoadingUserId && isLoadingUserPosts;
  const error = errorUserId && errorUserPosts;
  const success = !loading && !error;

  useEffect(() => {
    dispatch(fetchUserById(params));
    dispatch(fetchUserPosts(params));
  }, []);

  useEffect(() => {
    userPosts && setPosts(userPosts);
  }, [userPosts]);

  const hidePost = (post: IPost) => setPosts(posts.filter((p) => p.id !== post.id));

  const goToPost = (id: number) => navigate(`/post/${id}`);

  return (
    <div className={styles.user}>
      {isLoadingUserId && <Loader />}
      {errorUserId && <h1>Произошла ошибка</h1>}
      {success && (
        <>
          <h1 className={styles.user_title}>{userId.username}</h1>
          <div className={styles.user_info}>
            <div className={styles.user_posts}>
              <PostList posts={posts} hide={hidePost} goToPost={goToPost} />
            </div>
            <div className={styles.user_details}>
              <h2 className={styles.user_title}>Информация о пользователе</h2>
              <p>Имя и Фамилия - {userId.name}</p>
              <p>E-mail - {userId.email}</p>
              <p>Телефон - {userId.phone}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
