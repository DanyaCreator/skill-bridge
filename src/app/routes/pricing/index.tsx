import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/pricing/')({
  component: PricingPage,
});

function PricingPage() {
  return <div>Hello "/pricing/"!</div>;
}

export { Route };
