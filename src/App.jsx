import ReactQuery from './components/ReactQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>jus use react</h1>
        <ReactQuery />
      </div>
    </QueryClientProvider>
  );
}

export default App;
