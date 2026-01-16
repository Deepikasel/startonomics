import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import WorldMap from "../components/WorldMap";
import startupImpact from "../assets/startup-global-impact.png";


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
<section className="w-full py-28 bg-white px-10">

  {/* ===== Section Header (KEEP THIS ONLY) ===== */}
  <div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
      Startup Ecosystem Across Asia
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
      Visualizing how innovation-driven startups are distributed across Asian
      economies and emerging markets.
    </p>
  </div>

  {/* ===== Map + Content (Same Height, No Divider Feel) ===== */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-stretch">

    {/* LEFT → MAP */}
    <div className="flex items-center justify-center h-full">
      <WorldMap />
    </div>

    {/* RIGHT → CONTENT */}
<div className="flex flex-col justify-center space-y-8">

  <div>
    <h3 className="text-2xl font-bold text-green-800 mb-3">
      Economic Perspective
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Asia’s startup ecosystem reflects varying economic maturity,
      regulatory policies, and access to venture capital across regions.
    </p>
  </div>

  <div>
    <h3 className="text-2xl font-bold text-green-800 mb-3">
      Regional Comparison
    </h3>
    <p className="text-gray-700 text-lg leading-relaxed">
      Mapping startup concentration enables comparison between
      established hubs and fast-growing emerging markets.
    </p>
  </div>

  <div className="border-l-4 border-green-600 pl-6">
    <p className="text-gray-800 text-lg font-medium">
      Data-driven visualization helps understand how innovation
      influences employment, investment, and long-term growth.
    </p>
  </div>

  <div>
    <Link
      to="/gallery"
      className="inline-block bg-green-600 hover:bg-green-700
                 text-white px-10 py-3 rounded-full text-lg
                 font-semibold transition transform hover:scale-105"
    >
      Explore Startups
    </Link>
  </div>

</div>

  </div>
</section>


{/* ================= SECTION 3: GLOBAL STARTUP IMPACT ================= */}
<section className="w-full py-32 bg-gradient-to-b from-green-50 to-white px-10">

  {/* ===== Section Header ===== */}
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
      Global Startup Impact
    </h2>
    <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
      Understanding how startups drive innovation, employment, and economic growth worldwide.
    </p>
  </div>

  <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center gap-10">

    {/* TEXT CARD (left overlapping on desktop) */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white/95 backdrop-blur-md shadow-lg border border-green-100
  p-8 w-full md:w-96
  min-h-[420px] md:min-h-[480px]
  flex flex-col justify-between
  absolute md:relative
  top-1/2 md:top-0
  -translate-y-1/2 md:translate-y-0
  md:-mr-24
  z-20">
      <h3 className="text-2xl md:text-3xl font-extrabold text-green-800 mb-4">
        Startups as Economic Catalysts
      </h3>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
        Startups drive global innovation, create employment opportunities, and transform economies.
        Learning about them inspires entrepreneurship and meaningful impact.
      </p>
      <Link
        to="/gallery"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-base md:text-lg font-semibold transition transform hover:scale-105"
      >
        Explore Startup Stories
      </Link>
    </motion.div>

    {/* IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex-1 z-10"
    >
      <img
        src={startupImpact}
        alt="Global Startup Impact on Economy"
        className="object-cover w-full h-[500px] md:h-[520px]" // increased height for better balance
      />
    </motion.div>

  </div>
</section>


    </div>
  );
}
