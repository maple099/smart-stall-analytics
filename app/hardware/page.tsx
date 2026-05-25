import Navbar from "@/components/Navbar";

const hardware = [
  {
    icon: "🖥️",
    title: "Raspberry Pi 5",
    description: "Main processing unit for AI analytics and edge computing.",
  },
  {
    icon: "📷",
    title: "Camera Module",
    description: "Captures visitor activity for AI-powered monitoring.",
  },
  {
    icon: "📡",
    title: "ESP32",
    description: "Microcontroller for sensor communication and IoT integration.",
  },
  {
    icon: "🌡️",
    title: "DHT22 Sensor",
    description: "Measures temperature and humidity inside the stall.",
  },
  {
    icon: "📍",
    title: "IR Sensor",
    description: "Detects movement and visitor activity in monitoring zones.",
  },
  {
    icon: "🚨",
    title: "Buzzer & LED",
    description: "Provides local alert and visual system notifications.",
  },
];

export default function HardwarePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              IoT Hardware
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Hardware Components
            </h1>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Low-cost AI and IoT hardware used to monitor visitor activity,
              environmental conditions, and stall performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardware.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}