import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const fetchPosts = async (page) => {
  const posts = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  return posts.data;
};

const usePosts = (page) =>
  useQuery({
    queryFn: () => fetchPosts(page),
    queryKey: ['posts', page],
    keepPreviousData: true,
    staleTime: 0,
  });

const addPost = async (newPost) => {
  const response = await axios.post(
    'https://json-placeholder.mock.beeceptor.com/login',
    newPost
  );
  return response.data;
};

const useCreatePost = () => {
  return useMutation({
    mutationFn: addPost,
  });
};

export { usePosts, useCreatePost };
