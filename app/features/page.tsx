import Navbar from "@/components/Navbar";

const features = [
  {
    icon: "🧠",
    title: "Visitor Detection",
    description:
      "Track customer movement and visitor traffic using real-time AI detection.",
  },
  {
    icon: "⏱️",
    title: "Dwell Time Analytics",
    description:
      "Measure how long customers stay and engage within product zones.",
  },
  {
    icon: "🔥",
    title: "Heatmap Monitoring",
    description:
      "Visualize high-traffic and low-traffic areas inside the stall.",
  },
  {
    icon: "🌡️",
    title: "Environmental Monitoring",
    description:
      "Monitor temperature and humidity using IoT sensor integration.",
  },
  {
    icon: "🚨",
    title: "Smart Alerts",
    description:
      "Receive anomaly alerts and unusual traffic notifications instantly.",
  },
  {
    icon: "📈",
    title: "Forecast Analytics",
    description:
      "Predict customer traffic trends using AI-powered analytics.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              AI Features
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Features
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Smart analytics features designed to help stall owners understand
              visitors, monitor engagement, and make better decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}