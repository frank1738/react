import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Form from './components/Form';

import './App.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>jus use react</h1>
        {/* <ReactQuery /> */}
        <Form />
      </div>
    </QueryClientProvider>
  );
}

export default App;
