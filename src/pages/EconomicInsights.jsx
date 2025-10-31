import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import logo from "../assets/image.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function EconomicInsights() {
  const data = {
    labels: ["2015", "2017", "2019", "2021", "2023"],
    datasets: [
      {
        label: "Startup Funding (in $Billion)",
        data: [3, 6, 12, 24, 30],
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="relative flex flex-col items-center text-center min-h-screen bg-animated overflow-hidden">

      {/* ✅ Navbar (same as Home.jsx) */}
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
          <Link to="/economic" className="hover:text-green-600">Insights</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* 🌈 Floating animation (same as Home.jsx) */}
      <motion.img
        src="https://cdn.dribbble.com/users/195948/screenshots/15490915/media/ffbba20c05659abf8b090b85ef601dc7.gif"
        alt="Startup Animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-72 opacity-30"
      />

      {/* ✨ Page Heading */}
      <motion.h2
        className="text-5xl font-extrabold text-green-700 mt-32 mb-6 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Economic Insights 📊
      </motion.h2>

      {/* 📈 Chart Section */}
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl w-full z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Bar data={data} />
        <div className="mt-8 text-left space-y-4 text-gray-700">
          <p>• FinTech startups improved access to digital payments by <span className="font-semibold text-green-700">70%</span>.</p>
          <p>• EdTech startups boosted rural education reach across India.</p>
          <p>• HealthTech and AgriTech sectors are driving inclusive innovation.</p>
        </div>
      </motion.div>

      {/* ✨ Floating Decorative Circles */}
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
    </div>
  );
}
