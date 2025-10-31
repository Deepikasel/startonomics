import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import startups from "../data/startups";
import logo from "../assets/image.png"; // same logo as Home.jsx

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [year, setYear] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = startups.filter((s) => {
    const matchesSector = filter === "All" || s.sector === filter;
    const matchesYear = year === "All" || s.founded === Number(year);
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchesSector && matchesYear && matchesSearch;
  });

  const uniqueYears = [...new Set(startups.map((s) => s.founded))];

  return (
    <div className="relative min-h-screen bg-animated flex flex-col items-center text-center overflow-hidden">
      {/* ✅ Navbar same as Home.jsx */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-4 backdrop-blur-md bg-white/40 shadow-sm z-50">
        <div className="flex items-center space-x-3">
          <motion.img
            src={logo}
            alt="Startonomics Logo"
            className="w-12 h-12 rounded-full border-2 border-green-500 shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
          />
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Startonomics
          </h1>
        </div>

        <div className="flex space-x-6 text-green-800 font-semibold">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/gallery" className="text-green-600 underline">Startups</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* 🌈 Floating animation same as Home */}
      <motion.img
        src="https://cdn.dribbble.com/users/195948/screenshots/15490915/media/ffbba20c05659abf8b090b85ef601dc7.gif"
        alt="Animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-72 opacity-30"
      />

      {/* ✨ Decorative Circles */}
      <motion.div
        className="absolute top-16 left-16 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* 🧭 Page Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-green-700 mt-32 mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Startup Gallery
      </motion.h2>

      {/* Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="🔍 Search startups..."
          className="border rounded-full px-4 py-2 w-64 focus:ring-2 focus:ring-green-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-full px-3 py-2"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Sectors</option>
          {["FinTech", "EdTech", "FoodTech", "Mobility", "E-Commerce", "SaaS", "Logistics"].map(
            (s) => (
              <option key={s} value={s}>
                {s}
              </option>
            )
          )}
        </select>

        <select
          className="border rounded-full px-3 py-2"
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="All">All Years</option>
          {uniqueYears.map((y) => (
            <option key={y}>{y}</option>
          ))}
        </select>
      </motion.div>

      {/* 🏙️ Startups Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-8 pb-16 z-10">
        {filtered.map((startup, index) => (
          <motion.div
            key={startup.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.03] transition"
          >
            <img src={startup.img} alt={startup.name} className="h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700">{startup.name}</h3>
            <p className="text-gray-600">{startup.sector}</p>
            <p className="mt-2 italic text-gray-700">“{startup.tagline}”</p>
            <Link
              to={`/startup/${startup.id}`}
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              View Story
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
