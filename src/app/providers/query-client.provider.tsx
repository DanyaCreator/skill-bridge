import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 минут
      gcTime: 1000 * 60 * 10, // 10 минут
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function QueryClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {import.meta.env.DEV && (
        <ReactQueryDevtools initialIsOpen={false} position='top' />
      )}
    </QueryClientProvider>
  );
}

// FIXME: вынести queryClient
// eslint-disable-next-line react-refresh/only-export-components
export { queryClient, QueryClientWrapper };
