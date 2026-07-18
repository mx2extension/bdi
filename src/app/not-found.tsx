import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center pt-24 px-6">
        <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-4">Page Not Found</span>
        <h1 className="font-serif text-8xl text-gray-900 mb-6">404</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-10 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}