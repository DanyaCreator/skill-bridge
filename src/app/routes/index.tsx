import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  return <div>HOME ROUTE</div>;
}

export { Route };
