import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/auth/login')({
  component: LoginPage,
});

function LoginPage() {
  return <div>Hello "/auth/login"!</div>;
}

export { Route };
