import { useMemo } from "react";
import { IPost } from "../models/IPost";

export const usePosts = (posts: IPost[], query: string): IPost[] => {
  const searchedPosts = useMemo(() => {
    return [
      ...posts?.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      ),
      ...posts?.filter((post) => String(post.id).includes(query)),
    ].filter((item, pos, arr) => arr.indexOf(item) === pos);
  }, [query, posts]);

  return searchedPosts;
};
