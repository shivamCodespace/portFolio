import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/Background";
import './Home.css';
import backgroundImg from "../assets/background2.jpg"; // imported

const Home = () => {
  return (
    <section className="home-section">
      {/* 🔴 Animated blobs with enhanced styling */}
      <AnimatedBackground />

      {/* ✅ Background Image Applied Here */}
      <div
        className="home-background"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="line" style={{ width: '60px', top: '10%', left: '5%' }}></div>
        <div className="line" style={{ width: '90px', top: '25%', left: '15%' }}></div>
        <div className="line" style={{ width: '70px', top: '50%', left: '10%' }}></div>
        <div className="line" style={{ width: '100px', top: '70%', left: '20%' }}></div>
      </div>

      {/* ✅ Hero Content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 50, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold drop-shadow-lg text-red-400"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Shivam Shukla
        </motion.h1>
        <motion.p
          className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-2xl drop-shadow-md"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          Full Stack Developer | AI Enthusiast
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Home;
