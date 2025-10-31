import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import startups from "../data/startups";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ImpactMeter from "../components/ImpactMeter";
import logo from "../assets/image.png"; // same logo as Home

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StartupStory() {
  const { id } = useParams();
  const startup = startups.find((s) => s.id === Number(id));
  if (!startup) return <p className="text-center p-8">Startup not found</p>;

  const chartData = {
    labels: ["2015", "2017", "2019", "2021", "2023"],
    datasets: [
      {
        label: "Funding (in $Billion)",
        data: startup.funding,
        backgroundColor: "#10b981",
      },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-animated overflow-hidden bg-gradient-to-b from-white to-green-50">
      
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
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>

      {/* 🌈 Floating Animated Background Elements */}
      <motion.img
        src="https://cdn.dribbble.com/users/195948/screenshots/15490915/media/ffbba20c05659abf8b090b85ef601dc7.gif"
        alt="Startup Animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-72 opacity-30"
      />
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

      {/* 📖 Startup Story Content */}
      <motion.div
        className="max-w-3xl mx-auto text-center mt-32 z-10 p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={startup.img}
          alt={startup.name}
          className="h-24 mx-auto mb-4 drop-shadow-lg"
        />
        <h2 className="text-4xl font-extrabold text-green-700 mb-2">
          {startup.name}
        </h2>
        <p className="text-lg text-gray-600 mb-4">{startup.tagline}</p>
        <p className="text-gray-700 mb-2">
          Founded in <b>{startup.founded}</b> by <b>{startup.founder}</b>
        </p>
        <p className="text-gray-700 mb-8 italic">“{startup.mission}”</p>

        {/* Impact Overview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">Impact Overview</h3>
          <ImpactMeter impact={startup.impact} />
        </motion.div>

        {/* Funding Growth */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 mb-8"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">Funding Growth</h3>
          <Bar data={chartData} />
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">Milestones</h3>
          <ul className="text-left list-disc pl-6 space-y-2">
            {startup.milestones.map((m) => (
              <li key={m.year}>
                <b>{m.year}</b> — {m.event}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <Link
            to="/gallery"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 hover:scale-105 transform transition"
          >
            ← Back to Gallery
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
