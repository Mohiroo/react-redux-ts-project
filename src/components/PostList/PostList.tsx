import React, { useState } from "react";
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

export const PostList: React.FC<PostContainerProps> = ({posts, hide, goToPost}) => {
  if (!posts?.length)
    return (
      <h1 className={styles.post_list__title}>
        Посты отсутствуют
      </h1>
    );

  return (
    <div className={styles.post_list}>
      <h1 className={styles.post_list__title}>Посты</h1>
      <TransitionGroup>
        {posts?.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem key={post.id} post={post} hide={hide} goToPost={goToPost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
