import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image.png"; // your logo
import WorldMap from "../components/WorldMap";


export default function Home() {
  return (
    <div className="relative flex flex-col items-center text-center min-h-screen bg-animated overflow-hidden">

      {/* ✅ Single Navbar (kept the lower one only) */}
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
          <Link to="/gallery" className="hover:text-green-600">Startups</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* 🌈 Floating animated icons */}
      <motion.img
        src="https://cdn.dribbble.com/users/195948/screenshots/15490915/media/ffbba20c05659abf8b090b85ef601dc7.gif"
        alt="Startup Animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-72 opacity-30"
      />

      {/* 🏷️ Moving Title */}
      <motion.h1
        className="text-6xl font-extrabold z-10 mt-40 bg-gradient-to-r from-green-600 via-emerald-500 to-green-800 bg-clip-text text-transparent animate-pulse"
        initial={{ opacity: 0, y: -30 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        Startonomics
      </motion.h1>

      {/* ✨ Title & Tagline */}
      <motion.p
        className="text-2xl font-semibold mt-4 text-green-800 z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        “Stories of Indian Startups & Economics”
      </motion.p>

      <motion.p
        className="text-lg mt-3 text-gray-700 italic z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        Where Innovation Meets India’s Economic Growth
      </motion.p>

      {/* 💬 Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg mt-8 text-gray-800 max-w-2xl z-10"
      >
        An insight-driven platform by{" "}
        <span className="font-bold text-green-700">Deepika Selvaraj</span> &{" "}
        <span className="font-bold text-green-700">Archana Gurusamy</span> — exploring how Asian startups fuel
        innovation and economic growth.
      </motion.p>

      {/* 🚀 Explore Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        className="mt-10 z-10"
      >
        <Link
          to="/gallery"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transform transition"
        >
          Explore Startups 🚀
        </Link>
      </motion.div>

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
      <WorldMap />
    </div>
  );
}
