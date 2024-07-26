import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const posts = await axios.get(
    'https://json-placeholder.mock.beeceptor.com/posts'
  );
  return posts.data;
};

const usePosts = () =>
  useQuery({
    queryFn: fetchPosts,
    queryKey: ['posts'],
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
