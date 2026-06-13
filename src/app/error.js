"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">
        Something went wrong!
      </h1>

      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}