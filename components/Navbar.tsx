"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600"></div>

          <div>
            <h2 className="font-bold text-gray-900">Smart Stall</h2>
            <p className="text-sm text-gray-500">Analytics System</p>
          </div>
        </a>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="/features" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="/hardware" className="hover:text-blue-600 transition">
            Hardware
          </a>

          <a href="/dashboard" className="hover:text-blue-600 transition">
            Dashboard
          </a>

          <a href="/about" className="hover:text-blue-600 transition">
            About
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-6 space-y-4">
          <a href="/" className="block text-gray-700 font-medium">
            Home
          </a>

          <a href="/features" className="block text-gray-700 font-medium">
            Features
          </a>

          <a href="/hardware" className="block text-gray-700 font-medium">
            Hardware
          </a>

          <a href="/dashboard" className="block text-gray-700 font-medium">
            Dashboard
          </a>

          <a href="/about" className="block text-gray-700 font-medium">
            About
          </a>
        </div>
      )}
    </nav>
  );
}