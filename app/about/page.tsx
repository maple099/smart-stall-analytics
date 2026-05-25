import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">

        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">

          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            About The Project
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Smart Stall Analytics System
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An AI + IoT powered analytics system designed for pasar and retail
            stalls to monitor visitor activity, customer engagement,
            environmental conditions, and predictive business insights.
          </p>

        </section>

        {/* OBJECTIVES */}
        <section className="max-w-7xl mx-auto px-6 pb-24">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="text-5xl mb-6">🎯</div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Project Objective
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Build an affordable AI analytics platform for small retail and pasar businesses.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="text-5xl mb-6">🤖</div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                AI + IoT Integration
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Combine computer vision, sensors, and analytics dashboard into one smart ecosystem.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm">
              <div className="text-5xl mb-6">🏪</div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Retail Focused
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Designed specifically for stalls, pasar environments, and small retail operations.
              </p>
            </div>

          </div>

        </section>

      </main>
    </>
  );
}