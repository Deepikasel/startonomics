import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import StartupStory from "./pages/StartupStory";
import EconomicInsights from "./pages/EconomicInsights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      {/* 🌐 Global Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-green-700 text-white flex flex-wrap justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50"
      >
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-wide hover:text-green-100"
        >
          Startonomics
        </Link>

        <div className="flex gap-6 flex-wrap">
          {[
            { to: "/gallery", label: "Gallery" },
            { to: "/insights", label: "Insights" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="hover:text-green-200 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* 📄 Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/startup/:id" element={<StartupStory />} />
        <Route path="/insights" element={<EconomicInsights />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 🧱 Global Footer */}
      <Footer />
    </Router>
  );
}
