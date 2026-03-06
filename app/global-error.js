"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body>
        <div className="hero min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="mb-4 text-4xl font-bold text-error">
                Application Error
              </h1>
              <p className="mb-6 text-base-content/80">{error.message}</p>
              <button className="btn btn-primary" onClick={() => reset()}>
                Try again
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
