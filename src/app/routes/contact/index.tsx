import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/contact/')({
  component: ContactPage,
});

function ContactPage() {
  return <div>Hello "/contact/"!</div>;
}

export { Route };
