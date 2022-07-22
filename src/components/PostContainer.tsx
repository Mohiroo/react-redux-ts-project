import React from 'react';
import { PostAPI } from '../services/PostService';
import PostItem from './PostItem';

export const PostContainer: React.FC = () => {
  const {data: posts, error, isLoading} = PostAPI.useFetchAllPostsQuery(5)

  return (
    <div>
      <div>
        {isLoading && <h1>Идет загрузка...</h1>}
        {error && <h1>Произошла ошибка при загрузке</h1>}
        {posts?.map(post => <PostItem key={post.id} post={post}/>)}
      </div>
    </div>
  );
};

export default PostContainer;

