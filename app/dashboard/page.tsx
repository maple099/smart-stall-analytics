"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { database } from "@/lib/firebase";
import { ref, onValue } from "firebase/database";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const trafficData = [
  { time: "8AM", visitors: 120 },
  { time: "10AM", visitors: 280 },
  { time: "12PM", visitors: 450 },
  { time: "2PM", visitors: 320 },
  { time: "4PM", visitors: 560 },
  { time: "6PM", visitors: 720 },
  { time: "8PM", visitors: 480 },
];

const forecastData = [
  { time: "Now", visitors: 420 },
  { time: "1H", visitors: 520 },
  { time: "2H", visitors: 610 },
  { time: "3H", visitors: 700 },
];

const menuItems = [
  "Live Monitor",
  "Analytics",
  "Heatmap",
  "Forecast",
  "Alerts",
  "Settings",
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Live Monitor");

  const [dashboardData, setDashboardData] = useState({
    visitors: 0,
    dwellTime: "",
    temperature: 0,
    humidity: 0,
    alert: "",
  });

  useEffect(() => {
    const dashboardRef = ref(database, "dashboard");

    const unsubscribe = onValue(dashboardRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        setDashboardData(data);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* SIDEBAR */}
          <aside className="bg-gray-900 text-white p-8 lg:min-h-screen">
            <h2 className="text-3xl font-bold mb-12">Smart Stall</h2>

            <div className="space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left rounded-xl px-4 py-3 font-medium transition ${
                    activeTab === item
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className="lg:col-span-4 p-8">
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Analytics Dashboard
              </h1>

              <p className="text-gray-600">
                Real-time AI monitoring and IoT analytics overview.
              </p>

              <p className="text-sm text-blue-600 font-medium mt-2">
                Current Section: {activeTab}
              </p>
            </div>

            {/* LIVE MONITOR */}
            {activeTab === "Live Monitor" && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">
                      Total Visitors
                    </p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {dashboardData.visitors}
                    </h3>
                    <p className="text-green-600 mt-3 text-sm">
                      Live from Firebase
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">
                      Avg Dwell Time
                    </p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {dashboardData.dwellTime}
                    </h3>
                    <p className="text-green-600 mt-3 text-sm">
                      Updated in realtime
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">Temperature</p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {dashboardData.temperature}°C
                    </h3>
                    <p className="text-gray-500 mt-3 text-sm">
                      Sensor-ready value
                    </p>
                  </div>

                  <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <p className="text-sm text-gray-500 mb-2">Humidity</p>
                    <h3 className="text-4xl font-bold text-gray-900">
                      {dashboardData.humidity}%
                    </h3>
                    <p className="text-gray-500 mt-3 text-sm">
                      Sensor-ready value
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Live Traffic Analytics
                  </h3>

                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="visitors"
                          stroke="#2563EB"
                          strokeWidth={3}
                          dot={{ r: 5 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}

            {/* ANALYTICS */}
            {activeTab === "Analytics" && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Visitor Trend
                  </h3>

                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={trafficData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="visitors" fill="#2563EB" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Analytics Summary
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    This section summarizes visitor traffic, dwell time, and
                    engagement performance. Later, this can include historical
                    reports and comparison by day, week, or month.
                  </p>
                </div>
              </div>
            )}

            {/* HEATMAP */}
            {activeTab === "Heatmap" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Zone Heatmap
                </h3>

                <div className="h-96 rounded-3xl bg-gradient-to-br from-green-100 via-yellow-100 to-red-200 flex items-center justify-center text-gray-700 font-semibold">
                  Heatmap Preview
                </div>

                <p className="text-gray-600 mt-6">
                  Red areas represent high visitor activity. Green areas
                  represent lower activity zones.
                </p>
              </div>
            )}

            {/* FORECAST */}
            {activeTab === "Forecast" && (
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Visitor Forecast
                </h3>

                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={forecastData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#16A34A"
                        strokeWidth={3}
                        dot={{ r: 5 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <p className="text-gray-600 mt-6">
                  Forecast shows estimated visitor traffic for the next few
                  hours.
                </p>
              </div>
            )}

            {/* ALERTS */}
            {activeTab === "Alerts" && (
              <div className="space-y-6">
                <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8">
                  <div className="flex items-start gap-5">
                    <div className="text-4xl">🚨</div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        Smart Alert
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {dashboardData.alert}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    System Status
                  </h3>

                  <p className="text-green-600 font-medium">
                    All systems are running normally.
                  </p>
                </div>
              </div>
            )}

            {/* SETTINGS */}
            {activeTab === "Settings" && (
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Dashboard Settings
                </h3>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Temperature Alert Threshold
                    </label>
                    <input
                      type="number"
                      placeholder="35"
                      className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-3"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Low Traffic Alert Threshold
                    </label>
                    <input
                      type="number"
                      placeholder="30"
                      className="w-full max-w-md border border-gray-300 rounded-xl px-4 py-3"
                    />
                  </div>

                  <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                    Save Settings
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}