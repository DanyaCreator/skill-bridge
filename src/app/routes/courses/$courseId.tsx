import { createFileRoute } from '@tanstack/react-router';

const Route = createFileRoute('/courses/$courseId')({
  component: CoursePage,
});

function CoursePage() {
  const { courseId } = Route.useParams();

  return <div>Hello "/courses/{courseId}"!</div>;
}

export { Route };
