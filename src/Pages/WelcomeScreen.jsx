import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import background2 from "../assets/background2.jpg";
import '../index.css';

const WelcomeScreen = () => {
  const [enableAnimations, setEnableAnimations] = useState(true);
  const bgLayer1Ref = useRef(null);
  const bgLayer2Ref = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setEnableAnimations(!mediaQuery.matches);
  }, []);

  useEffect(() => {
    if (!enableAnimations) return;

    const handleMouseMove = (e) => {
      const x1 = (window.innerWidth / 2 - e.clientX) / 40;
      const y1 = (window.innerHeight / 2 - e.clientY) / 40;
      const x2 = (window.innerWidth / 2 - e.clientX) / 60;
      const y2 = (window.innerHeight / 2 - e.clientY) / 60;

      bgLayer1Ref.current.style.transform = `translate(${x1}px, ${y1}px)`;
      bgLayer2Ref.current.style.transform = `translate(${x2}px, ${y2}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableAnimations]);

  const subtext = "Crafting innovative tech with elegant design and clean code";
  const words = subtext.trim().split(/\s+/);

  const laserGlow = {
    animate: enableAnimations
      ? {
          textShadow: [
            "0 0 8px #ff004d, 0 0 15px #ff004d, 0 0 20px #ff004d",
            "0 0 15px #ff004d, 0 0 20px #ff004d, 0 0 25px #ff004d",
            "0 0 8px #ff004d, 0 0 15px #ff004d, 0 0 20px #ff004d",
          ],
          transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        }
      : {},
  };

  const buttonGlow = {
    animate: enableAnimations
      ? {
          boxShadow: [
            "0 0 8px #ff004d, 0 0 15px #ff004d, 0 0 20px #ff004d",
            "0 0 15px #ff004d, 0 0 20px #ff004d, 0 0 25px #ff004d",
            "0 0 8px #ff004d, 0 0 15px #ff004d, 0 0 20px #ff004d",
          ],
          transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
        }
      : {},
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black text-white px-4 sm:px-6 md:px-8">
      <div
        ref={bgLayer1Ref}
        className="absolute inset-0 bg-layer1 opacity-30 z-0"
        style={{ background: `url(${background2}) no-repeat center center/contain`, transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={bgLayer2Ref}
        className="absolute inset-0 bg-layer2 opacity-20 z-1"
        style={{ background: `radial-gradient(circle, rgba(255,0,0,0.2), transparent)`, transition: 'transform 0.1s ease-out' }}
      />
      {enableAnimations && (
        <div className="absolute inset-0 liquid-effect z-2" />
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-purple-900/40 z-3"
        animate={enableAnimations ? { opacity: [0.6, 0.7, 0.6] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 grainy-effect z-4" />
      {enableAnimations && (
        <>
          {/* Laser strips */}
          <motion.div className="absolute w-1 sm:w-2 h-64 sm:h-96 bg-gradient-to-b from-transparent via-white to-transparent z-5"
            style={{ left: '10%', top: '0%', filter: 'blur(1px) sm:blur(2px)', clipPath: 'polygon(50% 0%, 45% 20%, 55% 30%, 40% 50%, 60% 70%, 50% 100%)' }}
            animate={{ opacity: [0, 1, 0], scaleY: [1, 1.2, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: Math.random() * 4 + 2 }}
          />
          <motion.div className="absolute w-1 sm:w-2 h-64 sm:h-96 bg-gradient-to-b from-transparent via-blue-300 to-transparent z-5"
            style={{ right: '15%', top: '0%', filter: 'blur(1px) sm:blur(2px)', clipPath: 'polygon(50% 0%, 55% 15%, 45% 25%, 60% 40%, 40% 60%, 50% 100%)' }}
            animate={{ opacity: [0, 0.7, 0], scaleY: [1, 1.2, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
          />
          <motion.div className="absolute w-1 sm:w-2 h-64 sm:h-96 bg-gradient-to-b from-transparent via-white to-transparent z-5"
            style={{ left: '30%', top: '0%', filter: 'blur(1px) sm:blur(2px)', clipPath: 'polygon(50% 0%, 40% 25%, 60% 35%, 45% 55%, 55% 75%, 50% 100%)' }}
            animate={{ opacity: [0, 0.9, 0], scaleY: [1, 1.1, 1] }}
            transition={{ duration: 0.15, repeat: Infinity, repeatDelay: Math.random() * 3 + 2 }}
          />
        </>
      )}
      <motion.div className="z-10 text-center"
        initial={enableAnimations ? { opacity: 0, scale: 0.8 } : {}}
        animate={enableAnimations ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, type: "spring", stiffness: 60 }}
      >
        <motion.h1
          className="headline text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          initial={enableAnimations ? { y: 100, opacity: 0 } : {}}
          animate={{ ...laserGlow.animate, y: 0, opacity: 1, scale: [1, 1.03, 1] }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          whileHover={enableAnimations ? { textShadow: "0 0 15px #fff, 0 0 20px #ff004d" } : {}}
        >
          Welcome to My Universe
        </motion.h1>

        {/* ✅ Updated Word Spacing */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-2xl text-gray-100 max-w-xl mx-auto flex flex-wrap justify-center gap-x-2" style={{ fontFamily: "'Roboto Mono', monospace" }}>
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="word-reveal inline-block"
              initial={enableAnimations ? { opacity: 0, y: 20 } : {}}
              animate={enableAnimations ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {word}
            </motion.span>
          ))}
        </p>

        <motion.button
          className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-red-600 rounded-full font-semibold shadow-lg glow-hover"
          initial={enableAnimations ? { opacity: 0 } : {}}
          animate={{ ...buttonGlow.animate, opacity: 1, scale: [1, 1.05, 1] }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatDelay: 1 }}
          whileHover={enableAnimations ? { scale: 1.05, boxShadow: "0 0 12px #fff, 0 0 20px #ff004d" } : {}}
        >
          Explore Now
        </motion.button>
      </motion.div>

      {/* Floating Particles */}
      <motion.div className="absolute inset-0 z-6">
        {enableAnimations && [...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 bg-gradient-to-br from-yellow-400 to-purple-500 rounded-full"
            style={{ left: `${Math.random() * 100}vw`, top: `${Math.random() * 100}vh` }}
            animate={{ scale: [0.5, 1, 0.5], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1.5 + Math.random(), repeat: Infinity }}
            whileHover={{ scale: 1.5, opacity: 0.8 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default WelcomeScreen;
