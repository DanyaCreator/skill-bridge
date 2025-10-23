import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/auth/register')({
  component: RegisterPage,
});

function RegisterPage() {
  return <div>Hello "/auth/register"!</div>;
}

export { Route };
