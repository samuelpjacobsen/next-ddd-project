import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js DDD Project</h1>
      <p className="text-xl mb-8">
        A demonstration of Domain-Driven Design with Next.js
      </p>
      <div className="flex flex-col space-y-4">
        <Link
          href="/users"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          View Users
        </Link>
      </div>
    </main>
  );
}
