import React, { FC } from "react";
import { IPost } from "../../models/IPost";
import Button, { ButtonMode } from "../UI/button/Button";
import styles from "./PostItem.module.scss";

interface PostItemProps {
  post: IPost;
  hide: (post: IPost) => void;
  goToPost: (id: number) => void;
}

const PostItem: FC<PostItemProps> = ({ post, hide, goToPost }) => {
  return (
    <div className={styles.post_item}>
      <div className={styles.post_body}>
        <p className={styles.post_title}>
          {post.id}. {post.title}
        </p>
        <p className={styles.post_text}>{post.body}</p>
      </div>
      <div className={styles.post_btn}>
        <Button
          mode={ButtonMode.default}
          onClick={() => goToPost(post.id)}
          text={"Посмотреть"}
        />
        <Button
          mode={ButtonMode.hide}
          onClick={() => hide(post)}
          text={"Скрыть"}
        />
      </div>
    </div>
  );
};

export default PostItem;
