import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div>
          <h1 className="text-6xl font-bold text-error">404</h1>
          <p className="my-4 text-xl">Page not found</p>
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
