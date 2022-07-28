import React, { FC } from 'react';
import { IPost } from '../../models/IPost';
import PostButton from '../UI/button/PostButton';
import styles from './PostItem.module.scss'

interface PostItemProps {
  post: IPost;
  hide: (post: IPost) => void;
  goToPost: (id: number) => void;
}

const PostItem: FC<PostItemProps> = ({post, hide, goToPost}) => {
  return (
    <div className={styles.post_item}>
      <div className={styles.post_body}>
        <p className={styles.post_title}>
          {post.id}. {post.title}
        </p>
        <p className={styles.post_text}>{post.body}</p>
      </div>
      <div className={styles.post_btn}>
        <PostButton
          onClick={() => goToPost(post.id)}
        />
        <PostButton
          delete={true}
          onClick={() => hide(post)}
        />
      </div>
    </div>
  );
};

export default PostItem;