import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-gray-950 text-gray-100">
            {/* Sidebar - hidden on small screens */}
            <aside className="hidden md:block">
                <Sidebar />
            </aside>

            <div className="flex flex-1 flex-col">
                {/* Header */}
                <Header />

                {/* Main Content Area */}
                <main className="p-4 md:p-8 flex-1">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {/* Main Chart Area */}
                        <section className="col-span-1 lg:col-span-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                            <h2 className="mb-4 text-xl font-bold">Trading Chart</h2>
                            {/* Placeholder for the TradingChart component */}
                            <div className="h-96 w-full flex items-center justify-center text-gray-400">
                                Chart Placeholder
                            </div>
                        </section>

                        {/* Right Widgets Column */}
                        <div className="col-span-1 space-y-6">
                            {/* Watchlist Widget */}
                            <section className="rounded-lg bg-gray-900 p-4 shadow-lg">
                                <h2 className="mb-4 text-xl font-bold">Watchlist</h2>
                                {/* Placeholder for the Watchlist component */}
                                <div className="text-gray-400">
                                    <p>Watchlist Placeholder</p>
                                </div>
                            </section>

                            {/* News Ticker Widget */}
                            <section className="rounded-lg bg-gray-900 p-4 shadow-lg">
                                <h2 className="mb-4 text-xl font-bold">News Ticker</h2>
                                {/* Placeholder for the News Ticker component */}
                                <div className="text-gray-400">
                                    <p>News Ticker Placeholder</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}