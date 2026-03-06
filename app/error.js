"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="hero min-h-[400px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="mb-4 text-2xl font-bold text-error">
            Something went wrong
          </h2>
          <p className="mb-6 text-base-content/80">{error.message}</p>
          <button className="btn btn-primary" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
