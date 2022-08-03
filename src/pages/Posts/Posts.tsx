import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PostList from "../../components/PostList/PostList";
import PostInput from "../../components/UI/input/PostInput";
import Loader from "../../components/UI/loader/Loader";
import { usePosts } from "../../hooks/useSortedPosts";
import { IPost } from "../../models/IPost";
import { PostAPI } from "../../services/PostService";
import styles from "./Posts.module.scss";

const Posts = () => {
  const navigate = useNavigate();

  const [postsLimit, setPostsLimit] = useState<number>(20);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: serverPosts,
    error,
    isLoading,
  } = PostAPI.useGetPostsQuery(postsLimit);
  const [posts, setPosts] = useState<IPost[]>([]);
  const sortedPosts = usePosts(posts, searchQuery);

  const lastElement = useRef<HTMLDivElement | null>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    serverPosts && setPosts((posts) => [...posts, ...serverPosts]);
  }, [serverPosts]);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPostsLimit((postsLimit) => postsLimit + 5);
      }
    });
    lastElement.current && observer.current.observe(lastElement.current);
  }, [isLoading]);

  const hidePost = (post: IPost) =>
    setPosts(posts.filter((p) => p.id !== post.id));

  const goToPost = (id: number) => navigate(`/post/${id}`);

  return (
    <div>
      <div className={styles.searching}>
        <PostInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={"Поиск..."}
        />
      </div>
      {error && <h1 className={styles.posts__title}>Произошла ошибка</h1>}
      <PostList posts={sortedPosts} hide={hidePost} goToPost={goToPost} />
      {!error && (
        <div ref={lastElement} className={styles.observer}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Posts;
