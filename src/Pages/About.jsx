import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import about from "../Pages/image.jpg";
import background2 from "../assets/background2.jpg";

function AboutPage() {
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handshakeVariants = {
    rest: { y: 0, rotate: 0 },
    shake: {
      y: [0, -10, 0, 10, 0],
      rotate: [0, -5, 0, 5, 0],
      transition: {
        duration: 0.8,
        times: [0, 0.2, 0.4, 0.6, 1],
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative text-white py-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <img
        src={background2}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 animate-pulse z-0"
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-5xl font-bold text-red-500 mb-12 text-center drop-shadow-lg"
          style={{ fontFamily: "'Pacifico', cursive" }}
          initial={{ opacity: 0, y: -50, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={about}
              alt="Profile"
              className="rounded-3xl max-w-xs w-full shadow-2xl hover:shadow-red-500/70 duration-500 border-4 border-red-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-semibold text-red-400 flex items-center gap-2"
              style={{ fontFamily: "'Roboto', sans-serif" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Hello!
              <motion.span
                variants={handshakeVariants}
                animate={shake ? "shake" : "rest"}
                className="inline-block"
              >
                😊
              </motion.span>
            </motion.h3>

            <motion.span
              className="block mt-1 text-lg text-yellow-400"
              style={{ fontFamily: "'Roboto', sans-serif" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Shivam Shukla
            </motion.span>

            <motion.p
              className="mt-4 text-base sm:text-lg text-gray-300 leading-loose text-justify"
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Hi, I’m Shivam Shukla. I’m currently learning Java and building up my skills in backend systems (DBMS) and DSA.
              I enjoy turning ideas into real projects — even small ones like a number guessing game.
              Right now, I’m working on this portfolio website and planning to build my own AI assistant, called Manav.
              <br />
              <br />
              I practice daily DSA on HackerRank and my goal is to land my first tech job within a year.
              Let’s connect or collaborate — I’m always open to learning something new!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
