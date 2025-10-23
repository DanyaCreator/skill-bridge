import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/about/')({
  component: AboutPage,
});

function AboutPage() {
  return <div>Hello "/about/"!</div>;
}

export { Route };
