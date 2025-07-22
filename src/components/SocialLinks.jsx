import React from "react";
import { motion } from "framer-motion";

const SocialLinks = () => {
  return (
    <motion.div
      className="p-6 text-white bg-gradient-to-br from-black via-zinc-900 to-red-950 backdrop-blur-md rounded-2xl shadow-xl border border-red-700 max-w-md mx-auto animate-pulse-slow"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 text-red-500 border-b-2 border-yellow-500 pb-2"
        initial={{ x: -60 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        💼 About Me
      </motion.h2>

      <motion.p
        className="mb-4 text-gray-300 leading-relaxed text-[15px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        I'm <strong className="text-yellow-400">Shivam Shukla</strong> — a creative dev building meaningful tools, cool projects, and shaping ideas into reality.
      </motion.p>

      <hr className="border-red-700 my-4" />

      <motion.h2
        className="text-xl font-semibold mb-2 text-yellow-400 border-b border-yellow-600 pb-1"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        🔗 Connect With Me
      </motion.h2>

      <motion.ul
        className="space-y-2 pl-4 text-[15px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <li>
          <a
            href="https://www.linkedin.com/in/shivam-shukla-3a66b5375/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-200 transition duration-200 hover:underline"
          >
            💼 LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/shivam.shuklla/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:text-pink-300 transition duration-200 hover:underline"
          >
            📸 Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/shivamCodespace"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-green-300 transition duration-200 hover:underline"
          >
            💻 GitHub
          </a>
        </li>
      </motion.ul>

      <hr className="border-red-700 my-4" />

      <motion.h2
        className="text-xl font-semibold mb-2 text-red-400 border-b border-red-600 pb-1"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        🚧 Projects
      </motion.h2>
      <motion.p
        className="mb-4 text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        I'm cooking up some powerful and visually stunning tools. Coming soon 👨‍💻🚀
      </motion.p>

      <hr className="border-red-700 my-4" />

      <motion.h2
        className="text-xl font-semibold mb-2 text-blue-400 border-b border-blue-700 pb-1"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        📬 Contact
      </motion.h2>
      <motion.p
        className="text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        Email:{" "}
        <a
          href="mailto:sonu8565shukla@gmail.com"
          className="text-yellow-400 hover:text-yellow-300 transition duration-200 hover:underline"
        >
          sonu8565shukla@gmail.com
        </a>
      </motion.p>
    </motion.div>
  );
};

export default SocialLinks;
