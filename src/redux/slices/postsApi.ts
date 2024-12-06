import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../../type/type';

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://jsonplaceholder.typicode.com' 
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPost[], void>({
            query: () => '/posts?_limit=9',
        }),

        createNewUser: builder.mutation<void, IPost>({
            query: (newUser) => ({
              url: "/posts",
              method: "POST",
              body: newUser,
            }),
          }),

    }),
});

export const { useGetPostsQuery, useCreateNewUserMutation} = postsApi;
