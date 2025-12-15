import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-100"
      style={{ backgroundImage: "url('/BROKABG.svg')" }}
    >
      {/* Overlay for readability */}
      <div className="bg-black/70 min-h-screen flex flex-col">
        
        {/* Top Navigation Bar */}
        <header className="flex justify-between items-center px-6 py-4 border-b border-teal-500">
          <h1 className="text-teal-400 font-bold text-2xl tracking-wide">
            BrokaZero
          </h1>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-teal-300 transition">Home</Link>
            <Link href="/dashboard" className="hover:text-teal-300 transition">Dashboard</Link>
            <Link href="/about" className="hover:text-teal-300 transition">About</Link>
            <Link href="/contact" className="hover:text-teal-300 transition">Contact</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center flex-1 text-center px-6">
          <h2 className="text-5xl font-extrabold text-teal-400 drop-shadow-[0_0_10px_#00ffff]">
            Welcome to BrokaZero
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
            The next generation trading & analytics platform — cyberpunk inspired, data‑driven, and AI‑powered.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/dashboard"
              className="rounded-lg bg-teal-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-teal-500"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/learn-more"
              className="rounded-lg border border-teal-500 px-6 py-3 text-lg font-semibold text-teal-400 transition hover:bg-teal-500 hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </section>

        {/* Feature Grid (TradingView‑style cards) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16">
          <div className="bg-black/50 border border-teal-500 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-teal-300 mb-2">📊 Real‑Time Charts</h3>
            <p className="text-gray-400 text-sm">
              Interactive, lightweight charts powered by TradingView’s open‑source library.
            </p>
          </div>
          <div className="bg-black/50 border border-teal-500 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-teal-300 mb-2">⚡ AI Analytics</h3>
            <p className="text-gray-400 text-sm">
              Smart insights into resumes, skills, and job fit — visualized like market data.
            </p>
          </div>
          <div className="bg-black/50 border border-teal-500 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-teal-300 mb-2">🤖 Chatbot Assistant</h3>
            <p className="text-gray-400 text-sm">
              Ask questions, get instant feedback, and practice interviews in a futuristic chat UI.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t border-teal-500">
          © {new Date().getFullYear()} BrokaZero. Built with Next.js & Tailwind.
        </footer>
      </div>
    </div>
  );
}
