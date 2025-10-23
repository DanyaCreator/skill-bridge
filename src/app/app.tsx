import { QueryClientWrapper, RouterWrapper } from './providers';

export function App() {
  return (
    <QueryClientWrapper>
      <RouterWrapper />
    </QueryClientWrapper>
  );
}
