import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import { IPost } from '../models/IPost';
import { IPostByID } from '../models/IPostByID';

export const PostAPI = createApi({
  reducerPath: "PostAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    getPosts: build.query<IPost[], number>({
      query: (limit: number = 10) => ({
        url: "/posts",
        params: {
          _limit: limit,
        },
      }),
    }),
    getPostByID: build.query<IPostByID, number>({
      query: (id: number = 1) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});
