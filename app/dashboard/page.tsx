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

export default function DashboardPage() {
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

      console.log(data);

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

            <div className="space-y-5">
              <div className="bg-blue-600 rounded-xl px-4 py-3 font-medium">
                Live Monitor
              </div>

              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                Analytics
              </div>

              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                Heatmap
              </div>

              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                Forecast
              </div>

              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                Alerts
              </div>

              <div className="text-gray-300 hover:text-white transition cursor-pointer">
                Settings
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className="lg:col-span-4 p-8">
            {/* PAGE TITLE */}
            <div className="mb-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                Analytics Dashboard
              </h1>

              <p className="text-gray-600">
                Real-time AI monitoring and IoT analytics overview.
              </p>
            </div>

            {/* ANALYTICS CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Total Visitors</p>

                <h3 className="text-4xl font-bold text-gray-900">
                  {dashboardData.visitors}
                </h3>

                <p className="text-green-600 mt-3 text-sm">
                  Live from Firebase
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Avg Dwell Time</p>

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

            {/* CHARTS */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
              {/* TRAFFIC CHART */}
              <div className="xl:col-span-2 bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Traffic Analytics
                  </h3>

                  <div className="text-sm text-gray-500">Last 7 Hours</div>
                </div>

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

              {/* HEATMAP */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Heatmap
                </h3>

                <div className="h-72 rounded-2xl bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 flex items-center justify-center text-gray-600 font-medium">
                  Heatmap Preview
                </div>
              </div>
            </div>

            {/* ALERT SECTION */}
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
          </section>
        </div>
      </main>
    </>
  );
}