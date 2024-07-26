import { usePosts, useCreatePost } from './hooks/useQueryPosts';
const ReactQuery = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const { mutate: login } = useCreatePost();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>erro</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
      <button
        onClick={() =>
          login({
            username: 'frank',
            password: 'success-password',
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default ReactQuery;
