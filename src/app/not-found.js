'use client'
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-white">
          404
        </h1>

        <div className="w-32 h-1 bg-green-500 mx-auto my-6 rounded-full"></div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-400 text-lg mb-8">
          The page you are looking for doesn't exist, has been moved,
          or the URL may be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-xl text-white font-semibold"
          >
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 transition rounded-xl text-white font-semibold"
          >
            Go Back
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/20 rounded-full"></div>
            <div className="relative text-7xl">⚽</div>
          </div>
        </div>
      </div>
    </div>
  );
}