import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-start gap-4 py-24">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="text-2xl font-semibold text-ink">Page not found</h1>
      <p className="text-muted">The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        Back to home
      </Link>
    </div>
  );
}
