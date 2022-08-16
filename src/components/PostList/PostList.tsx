import { IPost } from "../../models/IPost";
import PostItem from "../PostItem/PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./PostList.module.scss";
import "./PostList.animation.scss";

interface PostContainerProps {
  posts: IPost[];
  hide: (post: IPost) => void;
  goToPost: (id: number) => void;
}

export const PostList: React.FC<PostContainerProps> = (props) => {
  return (
    <div className={styles.post_list}>
      {props.posts?.length ? (
        <>
          <h1 className={styles.post_list__title}>Посты</h1>
          <TransitionGroup>
            {props.posts?.map((post) => (
              <CSSTransition key={post.id} timeout={500} classNames="post">
                <PostItem
                  key={post.id}
                  post={post}
                  hide={props.hide}
                  goToPost={props.goToPost}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      ) : (
        <h1 className={styles.post_list__title}>Посты отсутствуют</h1>
      )}
    </div>
  );
};

export default PostList;
