import { useMemo } from "react";
import { IPost } from "../models/IPost";

interface UsePostsState {
  (posts: IPost[], query: string): IPost[]
}

export const usePosts: UsePostsState = (posts, query) => {

  const searchedPosts = useMemo(() => {
    return [...posts?.filter(post => post.title.toLowerCase().includes(query.toLowerCase())), 
            ...posts?.filter(post => String(post.id).includes(query))];
  }, [query, posts])

  return searchedPosts;
}