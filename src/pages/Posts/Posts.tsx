import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../../components/PostList/PostList";
import Button, { ButtonMode } from "../../components/UI/button/Button";
import PostInput from "../../components/UI/input/PostInput";
import Loader from "../../components/UI/loader/Loader";
import { usePosts } from "../../hooks/useSortedPosts";
import { IPost } from "../../models/IPost";
import { PostAPI } from "../../services/PostService";
import styles from "./Posts.module.scss";
import "./Posts.module.scss";

const Posts = () => {
  const navigate = useNavigate();

  const [postsLimit, setPostsLimit] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [posts, setPosts] = useState<IPost[]>([]);
  const sortedPosts = usePosts(posts, searchQuery);

  const { serverPosts, totalPosts, errorPosts, isLoadingPosts } =
    PostAPI.useGetPostsQuery(postsLimit, {
      selectFromResult: ({ data, error, isLoading }) => ({
        serverPosts: data?.serverPosts,
        totalPosts: data?.totalPosts,
        errorPosts: error,
        isLoadingPosts: isLoading,
      }),
    });

  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver>();

  // totalPosts! - если данных нет, то условие не пройдет на этапе !errorPosts
  const loadingAvailable =
    !errorPosts &&
    !isLoadingPosts &&
    postsLimit < totalPosts! &&
    searchQuery === "";

  useEffect(() => {
    serverPosts && setPosts(serverPosts);
  }, [serverPosts]);

  useEffect(() => {
    if (isLoadingPosts) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPostsLimit((postsLimit) => postsLimit + 5);
      }
    });
    lastElement.current && observer.current.observe(lastElement.current);
  }, [isLoadingPosts]);

  const hidePost = (post: IPost) => setPosts(posts.filter((p) => p.id !== post.id));

  const goToPost = (id: number) => navigate(`/post/${id}`);

  return (
    <div>
      {isLoadingPosts && <Loader />}
      {errorPosts && <h1 className={styles.posts__title}>Произошла ошибка</h1>}
      {!errorPosts && !isLoadingPosts && (
        <>
          <div className={styles.searching}>
            <PostInput
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={"Поиск..."}
            />
            <Button
              mode={ButtonMode.default}
              onClick={() => setPostsLimit(totalPosts!)}
              text={"Показать все посты"}
            />
            <p>
              Загружено {postsLimit} из {totalPosts} постов
            </p>
          </div>
          <PostList posts={sortedPosts} hide={hidePost} goToPost={goToPost} />
          {loadingAvailable && (
            <div ref={lastElement} className={styles.observer}>
              <Loader />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Posts;
