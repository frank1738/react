import { usePosts } from './hooks/useQueryPosts';
import { useState } from 'react';

import { useEffect } from 'react';
import { fetchPosts } from './hooks/useQueryPosts';
import { useQueryClient } from '@tanstack/react-query';
const ReactQuery = () => {
  const queryClient = useQueryClient();
  const [currentPage, setPage] = useState(1);
  const { data: posts, isLoading, isError } = usePosts(currentPage);

  useEffect(() => {
    if (currentPage < 5) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryFn: () => fetchPosts(nextPage),
        queryKey: ['posts', nextPage],
      });
    }
  }, [currentPage, queryClient]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>erro</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        margin: 'auto',
      }}
    >
      <span>{currentPage}</span>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: '1px solid red',
            width: '400px',
          }}
        >
          <p>{post.title}</p>
        </div>
      ))}

      <div
        style={{
          display: 'flex',
          gap: '30px',
        }}
      >
        <button
          disabled={currentPage == 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
        <button
          disabled={currentPage == 5}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReactQuery;
