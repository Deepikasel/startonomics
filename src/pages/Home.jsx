import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import WorldMap from "../components/WorldMap";
import AutoCarousel from "../components/AutoCarousel";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-animated overflow-hidden">

      {/* ================= NAVBAR ================= */}
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
          <Link to="/gallery">Startups</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

{/* ================= SECTION 1: HERO ================= */}
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="text-6xl md:text-7xl font-extrabold leading-tight
               bg-gradient-to-r from-green-700 via-emerald-600 to-green-800
               bg-clip-text text-transparent"
  >
    Understanding Startups <br /> Through Economics
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="mt-6 text-2xl text-green-800 font-medium"
  >
    Where Innovation, Data, and Economic Growth Converge
  </motion.p>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7 }}
    className="mt-6 max-w-3xl text-lg text-gray-700 leading-relaxed"
  >
    Startonomics is a research-driven platform that analyzes startup ecosystems
    through the lens of economics. We explore how innovation influences
    employment, regional development, sustainability, and long-term growth
    across emerging markets.
  </motion.p>
</section>


      {/* ================= SECTION 2: GEOGRAPHIC INSIGHTS ================= */}
<section className="w-full py-28 bg-white px-8">

  {/* Centered Heading */}
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
      Startup Ecosystem Across Asia
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
      Visualizing how innovation-driven startups are distributed across Asian
      economies and emerging markets.
    </p>
  </div>

  {/* Content Grid */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">

    {/* Left: Map */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center rounded-3xl shadow-2xl border border-gray-200 bg-gray-50 p-6 min-h-[400px]"
    >
      <WorldMap />
    </motion.div>

    {/* Right: Text + CTA */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center space-y-6 p-6 bg-white rounded-3xl shadow-xl min-h-[400px]"
    >
      <h3 className="text-3xl font-bold text-green-700">
        Regional Innovation Footprint
      </h3>

      <p className="text-gray-700 leading-relaxed">
        The Asian startup landscape reflects diverse economic maturity levels,
        policy environments, and funding access.
      </p>

      <p className="text-gray-700 leading-relaxed">
        This interactive map allows comparison of startup concentration
        across countries, highlighting innovation hubs and rising ecosystems.
      </p>

      <Link
        to="/gallery"
        className="inline-block mt-4 bg-green-600 hover:bg-green-700
                   text-white px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
      >
        Explore Startups 
      </Link>
    </motion.div>

  </div>
</section>


    {/* ================= SECTION 3: INSIGHT CAROUSEL ================= */}
<section className="w-full py-28 bg-gradient-to-b from-green-50 to-white">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold text-green-800">
      Platform Capabilities
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
      Structured insights designed to understand startups beyond surface-level stories.
    </p>
  </div>

  <AutoCarousel />

</section>


    </div>
  );
}
