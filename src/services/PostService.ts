import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IComment } from "../models/IComment";
import { IPost } from "../models/IPost";
import { IPostByID } from "../models/IPostByID";

export const PostAPI = createApi({
  reducerPath: "PostAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<{ serverPosts: IPost[]; totalPosts: number }, number>(
      {
        query: (limit: number = 10) => ({
          url: "/posts",
          params: {
            _limit: limit,
          },
        }),
        transformResponse: (
          serverPosts: IPost[],
          meta
        ): { serverPosts: IPost[]; totalPosts: number } => {
          const totalPosts = Number(
            meta?.response?.headers.get("x-total-count")
          );
          return { serverPosts, totalPosts };
        },
      }
    ),
    getPostByID: build.query<IPostByID, number>({
      query: (id: number) => ({
        url: `/posts/${id}`,
      }),
    }),
    getCommentsToPost: build.query<IComment[], number>({
      query: (id: number) => ({
        url: `/posts/${id}/comments`,
      }),
    }),
  }),
});
