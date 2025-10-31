import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image.png"; // same logo as Home

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields before submitting.");
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    if (submitted) setTimeout(() => setSubmitted(false), 3000);
  }, [submitted]);

  const bubbles = Array(10).fill(0);

  return (
    <div className="relative flex flex-col items-center text-center min-h-screen bg-animated overflow-hidden bg-gradient-to-b from-green-50 to-white">

      {/* ✅ Same Navbar from Home.jsx */}
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

      {/* 🌈 Animated Background GIF */}
      <motion.img
        src="https://cdn.dribbble.com/users/195948/screenshots/15490915/media/ffbba20c05659abf8b090b85ef601dc7.gif"
        alt="Startup Animation"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-0 right-0 w-72 opacity-30"
      />

      {/* 💬 Feedback Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md mt-40 z-10"
      >
        <h2 className="text-3xl font-bold text-green-700 text-center mb-4">
          We Value Your Feedback 💬
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Your thoughts help us improve and grow our platform.
        </p>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-green-100 text-green-700 text-center py-2 rounded-lg mb-4"
          >
            ✅ Thank you for your feedback!
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Share your feedback..."
            value={form.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
          >
            Submit Feedback
          </button>
        </form>
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
