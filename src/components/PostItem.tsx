import React, { FC } from 'react';
import { IPost } from '../models/IPost';

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div>
      {post.id}. {post.title}
      <button>Посмотреть</button>
      <button>Удалить</button>
      <div>{post.body}</div>
    </div>
  );
};

export default PostItem;