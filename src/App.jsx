import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactQuery from './components/ReactQuery';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ButtonTest from './components/RandomTests/ButtonTest';

import './App.css';
import Weather from './components/RandomTests/Weather';

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
        <Weather />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
