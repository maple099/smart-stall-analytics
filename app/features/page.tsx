"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Flame,
  Thermometer,
  BellRing,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Visitor Detection",
    description:
      "Track customer movement and visitor traffic using real-time AI detection.",
  },
  {
    icon: Clock,
    title: "Dwell Time Analytics",
    description:
      "Measure how long customers stay and engage within product zones.",
  },
  {
    icon: Flame,
    title: "Heatmap Monitoring",
    description:
      "Visualize high-traffic and low-traffic areas inside the stall.",
  },
  {
    icon: Thermometer,
    title: "Environmental Monitoring",
    description:
      "Monitor temperature and humidity using IoT sensor integration.",
  },
  {
    icon: BellRing,
    title: "Smart Alerts",
    description:
      "Receive anomaly alerts and unusual traffic notifications instantly.",
  },
  {
    icon: TrendingUp,
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
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}