import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import startups from "../data/startups";
import logo from "../assets/image.png";

export default function Gallery() {
  // 🔎 Filter States
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sector, setSector] = useState("All");
  const [year, setYear] = useState("All");
  const [country, setCountry] = useState("All");
  const [region, setRegion] = useState("All");
  const [hq, setHq] = useState("All");

  const [filtered, setFiltered] = useState(startups);

  // ⏱ Debounce search (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // 🎯 Apply filters
  const applyFilters = () => {
    const result = startups.filter((s) => {
      return (
        (sector === "All" || s.sector === sector) &&
        (year === "All" || s.founded === Number(year)) &&
        (country === "All" || s.country === country) &&
        (region === "All" || s.region === region) &&
        (hq === "All" || s.headquarters === hq) &&
        s.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    });
    setFiltered(result);
  };

  // ♻ Clear filters
  const clearFilters = () => {
    setSearch("");
    setSector("All");
    setYear("All");
    setCountry("All");
    setRegion("All");
    setHq("All");
    setFiltered(startups);
  };

  // 🔁 Dropdown data (auto-derived)
  const uniqueYears = [...new Set(startups.map((s) => s.founded))];
  const uniqueCountries = [...new Set(startups.map((s) => s.country))];
  const uniqueRegions = [...new Set(startups.map((s) => s.region))];
  const uniqueHQ = [...new Set(startups.map((s) => s.headquarters))];
  const uniqueSectors = [...new Set(startups.map((s) => s.sector))];

  return (
    <div className="relative min-h-screen bg-animated flex flex-col items-center text-center overflow-hidden">

      {/* Navbar */}
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
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery" className="text-green-600 underline">Startups</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-green-700 mt-32 mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Startup Gallery
      </motion.h2>

      {/* 🔍 Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 z-10">

        <input
          type="text"
          placeholder="🔍 Search by name"
          className="border rounded-full px-4 py-2 w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className="border rounded-full px-3 py-2" onChange={(e) => setSector(e.target.value)}>
          <option value="All">All Sectors</option>
          {uniqueSectors.map((s) => <option key={s}>{s}</option>)}
        </select>

        <select className="border rounded-full px-3 py-2" onChange={(e) => setCountry(e.target.value)}>
          <option value="All">All Countries</option>
          {uniqueCountries.map((c) => <option key={c}>{c}</option>)}
        </select>

        <select className="border rounded-full px-3 py-2" onChange={(e) => setRegion(e.target.value)}>
          <option value="All">All Regions</option>
          {uniqueRegions.map((r) => <option key={r}>{r}</option>)}
        </select>

        <select className="border rounded-full px-3 py-2" onChange={(e) => setHq(e.target.value)}>
          <option value="All">All HQ</option>
          {uniqueHQ.map((h) => <option key={h}>{h}</option>)}
        </select>

        <select className="border rounded-full px-3 py-2" onChange={(e) => setYear(e.target.value)}>
          <option value="All">All Years</option>
          {uniqueYears.map((y) => <option key={y}>{y}</option>)}
        </select>

        {/* Buttons */}
        <button
          onClick={applyFilters}
          className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
        >
          Apply Filters
        </button>

        <button
          onClick={clearFilters}
          className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-400"
        >
          Clear
        </button>
      </div>

      {/* 🏙 Startup Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-8 pb-16 z-10">
        {filtered.map((startup, index) => (
          <motion.div
            key={startup.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 hover:scale-[1.03] transition"
          >
            <img src={startup.img} alt={startup.name} className="h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-700">{startup.name}</h3>
            <p className="text-gray-600">{startup.sector}</p>
            <p className="text-sm text-gray-500">{startup.country}</p>
            <Link
              to={`/startup/${startup.id}`}
              className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              View Story
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
