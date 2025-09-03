import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 text-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-teal-400">Welcome to BrokaZero</h1>
        <p className="mt-4 text-xl">The next generation trading platform.</p>
        <Link href="/dashboard" className="mt-8 inline-block rounded-lg bg-teal-600 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-teal-500">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}