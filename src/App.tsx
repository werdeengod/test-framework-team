import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '@/components/Header/Header';
import Main from '@/components/Main/Main';

import { DEFAULT_THEME } from '@/consts';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
    </QueryClientProvider>
  );
}

export default App;
