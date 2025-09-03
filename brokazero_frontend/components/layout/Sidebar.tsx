import Link from 'next/link';

export default function Sidebar() {
  return (
    <nav className="flex h-screen w-64 flex-col border-r border-gray-800 bg-gray-900 p-4">
      <div className="mb-8 text-3xl font-bold text-teal-400">BZ</div>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard" className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-800">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/charts" className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-800">
            Charts
          </Link>
        </li>
        <li>
          <Link href="/screener" className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-800">
            Screener
          </Link>
        </li>
        <li>
          <Link href="/signals" className="block rounded-lg px-4 py-2 text-lg font-medium hover:bg-gray-800">
            Signals
          </Link>
        </li>
      </ul>
    </nav>
  );
}