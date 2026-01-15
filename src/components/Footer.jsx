import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-700 to-emerald-700 text-white mt-20">
      
      <motion.div
        className="max-w-7xl mx-auto px-10 py-12 grid md:grid-cols-3 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        {/* 🔰 Brand */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">Startonomics</h2>
          <p className="text-sm text-green-100 leading-relaxed">
            A data-driven platform showcasing how startups shape economic growth
            across Asia through innovation, technology, and impact.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Startups</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* 👩‍💻 Credits */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Built By</h3>
          <p className="text-green-100 text-sm">
            <strong>Archana Gurusamy</strong> & <strong>Deepika Selvaraj</strong>
          </p>
          <p className="text-green-200 text-sm mt-1">
            B.Tech – Information Technology
          </p>
          <p className="text-green-200 text-sm">
            Passionate about startups, economics & technology
          </p>
        </div>
      </motion.div>

      {/* ⚖ Copyright */}
      <div className="border-t border-green-500 text-center py-4 text-sm text-green-100">
        © {new Date().getFullYear()} Startonomics. All rights reserved.
      </div>
    </footer>
  );
}
