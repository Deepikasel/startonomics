import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "Startup Intelligence",
    description:
      "Analyze business models, funding trajectories, and innovation patterns across sectors.",
  },
  {
    title: "Economic Impact Assessment",
    description:
      "Understand how startups influence employment, productivity, and regional growth.",
  },
  {
    title: "Research-Driven Insights",
    description:
      "Data-backed analysis curated for students, researchers, and policy thinkers.",
  },
];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto h-64 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-xl rounded-3xl p-12 text-center border"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            {slides[index].title}
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {slides[index].description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
