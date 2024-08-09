import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactQuery from './components/ReactQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>jus use react</h1>
        <ReactQuery />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
