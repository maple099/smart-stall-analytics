export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-blue-600"></div>

          <div>
            <h2 className="font-bold text-gray-900">
              Smart Stall
            </h2>

            <p className="text-sm text-gray-500">
              Analytics System
            </p>
          </div>
        </a>

        {/* NAV LINKS */}
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

        {/* BUTTON */}
        <a
          href="/dashboard"
          className="hidden md:block px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          View Dashboard
        </a>

        {/* MOBILE MENU */}
        <button className="md:hidden text-3xl text-gray-700">
          ☰
        </button>

      </div>
    </nav>
  );
}