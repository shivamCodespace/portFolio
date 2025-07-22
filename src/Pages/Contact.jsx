import React, { useRef } from "react";
import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import backgroundImg from "../assets/background2.jpg";
import { motion } from "framer-motion";

function Contact() {
  const formRef1 = useRef();
  const formRef2 = useRef();

  const sendEmail = (e, formRef) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4k3suur",
        "template_004e1ax",
        formRef.current,
        "YN97zk4pqyNVunxtq"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-12 font-sans z-10">
      {/* ✅ Background Image - Full Screen Fit */}
      <motion.img
        src={backgroundImg}
        alt="Background"
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1, 1.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔴 Left Card */}
      <div className="relative w-full max-w-md rounded-[25px] overflow-hidden z-10">
        <div className="absolute inset-0 bg-red-600 opacity-30 z-0" />
        <div className="relative z-10 bg-black bg-opacity-80 rounded-[25px] overflow-hidden p-6 backdrop-blur-sm">
          {/* Curves */}
          <div className="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20 text-red-600">
              <path d="M0.00,49.98 C150.00,150.00 349.64,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full rotate-180">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20 text-red-600">
              <path d="M0.00,49.98 C150.00,150.00 349.64,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill="currentColor" />
            </svg>
          </div>

          <h2 className="text-white text-3xl font-bold mb-2">Let’s Talk!</h2>
          <p className="text-white mb-6">Sign in to your account</p>

          <form ref={formRef1} onSubmit={(e) => sendEmail(e, formRef1)} className="space-y-4">
            <div className="bg-[#4d0000] flex items-center rounded-lg px-4 py-3">
              <FaEnvelope className="text-white mr-3" />
              <input name="email" type="email" placeholder="Email" className="bg-transparent text-white placeholder-white outline-none w-full" />
            </div>
            <div className="bg-[#4d0000] flex items-center rounded-lg px-4 py-3">
              <FaCommentDots className="text-white mr-3" />
              <input name="message" type="text" placeholder="Your message" className="bg-transparent text-white placeholder-white outline-none w-full" />
            </div>
            <input type="hidden" name="device" value="React Portfolio" />
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full w-full">
              Send
            </button>
          </form>

          <div className="mt-8 text-white text-center font-semibold">
            <h3 className="text-xl">Welcome Back!</h3>
            <p className="text-sm mt-1">“Talk is cheap. <br /> Show me the code”</p>
          </div>
        </div>
      </div>

      {/* 🟡 Right Card */}
      <div className="relative w-full max-w-md rounded-[25px] overflow-hidden z-10">
        <div className="absolute inset-0 bg-yellow-400 opacity-30 z-0" />
        <div className="relative z-10 bg-black bg-opacity-80 rounded-[25px] overflow-hidden p-6 backdrop-blur-sm">
          {/* Curves */}
          <div className="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20 text-yellow-400">
              <path d="M0.00,49.98 C150.00,150.00 349.64,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full rotate-180">
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-20 text-yellow-400">
              <path d="M0.00,49.98 C150.00,150.00 349.64,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" fill="currentColor" />
            </svg>
          </div>

          <h2 className="text-yellow-400 text-3xl font-bold mb-2">Comment.</h2>
          <p className="text-white mb-6">Sign in to your account</p>

          <form ref={formRef2} onSubmit={(e) => sendEmail(e, formRef2)} className="space-y-4">
            <div className="bg-[#2b2b2b] flex items-center rounded-lg px-4 py-3">
              <FaUser className="text-yellow-400 mr-3" />
              <input name="email" type="email" placeholder="Enter your email" className="bg-transparent text-white placeholder-white outline-none w-full" />
            </div>
            <div className="bg-[#2b2b2b] flex items-center rounded-lg px-4 py-3">
              <FaCommentDots className="text-yellow-400 mr-3" />
              <input name="message" type="text" placeholder="Write your message here..." className="bg-transparent text-white placeholder-white outline-none w-full" />
            </div>
            <input type="hidden" name="device" value="React Portfolio" />
            <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full w-full">
              Send message
            </button>
          </form>

          <div className="mt-8 text-yellow-400 text-center font-semibold">
            <h3 className="text-xl text-white">Thank You!</h3>
            <p className="text-sm mt-1">“Code hard, <br /> stay curious!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
