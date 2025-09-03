import Link from "next/link";
export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-800 bg-gray-900 px-6">
      <h1 className="text-2xl font-bold text-teal-400">BrokaZero</h1>
      <div className="flex items-center space-x-4">
        {/* Placeholder for user info/buttons */}
        <span className="text-gray-400">User: Guest</span>
        <button className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-semibold text-gray-200 hover:bg-gray-700">
          Login
        </button>
      </div>
    </header>
  );
}