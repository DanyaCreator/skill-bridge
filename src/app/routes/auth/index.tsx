import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/auth/')({
  component: AuthPage,
});

function AuthPage() {
  return <div>Hello "/auth/"!</div>;
}

export { Route };
