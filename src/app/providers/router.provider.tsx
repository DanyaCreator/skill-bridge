import { createRouter, RouterProvider } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { queryClient } from '@/app/providers/query-client.provider';
import { routeTree } from '@/routeTree.gen';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadDelay: 100,
  context: {
    queryClient,
  },
});

function RouterWrapper() {
  return (
    <>
      <RouterProvider router={router} />
      {import.meta.env.DEV && (
        <TanStackRouterDevtools position='bottom-left' router={router} />
      )}
    </>
  );
}

export { RouterWrapper };
