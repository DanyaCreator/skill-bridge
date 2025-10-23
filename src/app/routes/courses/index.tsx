import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/courses/')({
  component: CoursesPage,
});

function CoursesPage() {
  return <div>Hello "/courses/"!</div>;
}

export { Route };
