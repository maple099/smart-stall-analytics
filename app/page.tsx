import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                AI + IoT Powered Analytics
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Smart Stall Analytics System{" "}
                <span className="text-blue-600">
                  for Pasar & Retail Spaces
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Monitor customer activity, dwell time, environmental conditions,
                and retail insights using an affordable AI + IoT analytics system.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/dashboard"
                  className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                >
                  View Dashboard
                </a>

                <a
                  href="/features"
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* RIGHT DASHBOARD MOCKUP */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-gray-50">
                  <p className="text-sm text-gray-500">Visitors Today</p>
                  <h3 className="text-3xl font-bold text-gray-900">1,248</h3>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50">
                  <p className="text-sm text-gray-500">Avg Dwell Time</p>
                  <h3 className="text-3xl font-bold text-gray-900">2m 14s</h3>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50">
                  <p className="text-sm text-gray-500">Temperature</p>
                  <h3 className="text-3xl font-bold text-gray-900">29°C</h3>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50">
                  <p className="text-sm text-gray-500">Humidity</p>
                  <h3 className="text-3xl font-bold text-gray-900">71%</h3>
                </div>
              </div>

              <div className="h-48 rounded-2xl bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center text-gray-500 font-medium mb-6">
                Traffic Analytics Chart
              </div>

              <div className="h-32 rounded-2xl bg-gradient-to-r from-green-100 to-yellow-100 flex items-center justify-center text-gray-500 font-medium">
                Heatmap Preview
              </div>
            </div>
          </div>
        </section>

        {/* PREVIEW SECTION */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/features"
              className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-5">🧠</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                AI Features
              </h3>
              <p className="text-gray-600">
                Explore visitor detection, dwell time, heatmaps, alerts, and
                forecasting.
              </p>
            </a>

            <a
              href="/hardware"
              className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-5">📡</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Hardware
              </h3>
              <p className="text-gray-600">
                View Raspberry Pi, ESP32, camera, DHT22, IR sensor, buzzer, and
                LED components.
              </p>
            </a>

            <a
              href="/dashboard"
              className="p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="text-4xl mb-5">📊</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Dashboard
              </h3>
              <p className="text-gray-600">
                Preview analytics cards, traffic chart, heatmap, forecast, and
                alerts.
              </p>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}