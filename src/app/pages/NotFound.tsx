import { Link } from 'react-router';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-deep-espresso flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="font-['Crimson_Pro'] text-8xl text-burnished-bronze mb-4">404</h1>
        <h2 className="font-['Crimson_Pro'] text-4xl text-soft-ivory mb-4">
          This page drifted
        </h2>
        <p className="text-lg text-parchment/80 mb-8">
          The page you are looking for does not seem to exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="primary" size="lg">Return Home</Button>
          </Link>
          <Link to="/music">
            <Button variant="secondary" size="lg">Listen to Music</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
