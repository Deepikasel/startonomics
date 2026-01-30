import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/image.png"; // ✅ your existing logo

export default function About() {
  const team = [
    {
      name: "Deepika Selvaraj",
      role: "Founder & Full Stack Developer",
      education: "B.Tech IT (Pursuing)",
      college: "Sri Shakthi Institute of Engineering and Technology",
      email: "studiesfor456@gmail.com",
      quote: "Building impactful digital experiences through data and design.",
    },
    {
      name: "Archana Gurusamy",
      role: "Founder & Full Stack Developer",
      education: "B.Tech IT (Pursuing)",
      college: "Sri Shakthi Institute of Engineering and Technology",
      email: "archanagurusamy648@gmail.com",
      quote: "Turning startup data into meaningful economic insights.",
    },
  ];

  return (
    <div className="relative flex flex-col items-center text-center min-h-screen bg-animated overflow-hidden bg-gradient-to-b from-green-50 via-white to-green-50">

      {/* ✅ Reused Navbar from Home.jsx */}
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
          <Link to="/about" className="text-green-700 border-b-2 border-green-600 pb-1">About</Link>
          <Link to="/gallery" className="hover:text-green-600">Startups</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </div>
      </nav>


{/* 🌿 Soft Animated Background Elements */}
<motion.div
  className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-green-300 rounded-full blur-3xl opacity-25"
  animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] bg-emerald-400 rounded-full blur-3xl opacity-20"
  animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.div
  className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-20"
  animate={{ y: [0, -25, 0] }}
  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
/>

 
      {/* 🌈 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-32 px-6 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6 tracking-tight">
          About <span className="text-green-600">Startonomics</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Created by <span className="font-semibold text-green-700">Deepika Selvaraj</span> and{" "}
          <span className="font-semibold text-green-700">Archana Gurusamy</span> — passionate Full Stack Developers
          currently pursuing <span className="font-semibold">B.Tech IT</span> at{" "}
          <span className="font-semibold">Sri Shakthi Institute of Engineering and Technology</span>.
          <br />
          Startonomics visualizes how startups across Asia are redefining innovation and driving economic growth.
        </p>
      </motion.div>

      {/* Mission Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="https://img.freepik.com/free-vector/business-growth-illustration_1284-39032.jpg"
          alt="Our Mission"
          className="rounded-3xl shadow-2xl"
        />
        <div>
          <h2 className="text-3xl font-bold text-green-700 mb-5">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-justify">
            We aim to bridge the gap between startup innovation and economics — using storytelling,
            clean data visualization, and meaningful insights to highlight the global startup ecosystem.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our vision is to make startup data more interactive, transparent, and globally connected — focusing on
            empowering young innovators and developers to understand economic impact through technology.
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Meet the Founders
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-lg p-8 text-center border border-green-100 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-1">{member.name}</h3>
              <p className="text-gray-600 font-medium mb-1">{member.role}</p>
              <p className="text-sm text-gray-500">{member.education}</p>
              <p className="text-sm text-gray-500 mb-4">{member.college}</p>
              <p className="italic text-gray-600 mb-4">“{member.quote}”</p>
              <p className="text-green-700 font-semibold">{member.email}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ Decorative animated circles */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
}
