import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import profileImg from "../assets/profile.jpg";
import backgroundImg from "../assets/background2.jpg";

const Portfolio = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 px-4 sm:px-6 md:px-[10%] mt-[10%] sm:mt-[8%] md:mt-[5%] animate-fade-in">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight font-cursive tracking-wide animate-slide-in">
            Hey, I’m <span className="text-[#ff3c3c]">Shivam Shukla</span>
          </h1>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base animate-fade-in delay-200">
            A frontend developer building stunning experiences with React, Tailwind CSS & futuristic design systems.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center md:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-yellow-500 text-white px-4 sm:px-5 py-2 sm:py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Let's Connect <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
              <a href="https://github.com/shivamCodespace" target="_blank" rel="noopener noreferrer">
                <Github className="text-white hover:text-yellow-400 transition duration-300 w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/in/shivam-shukla-3a66b5375/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-white hover:text-yellow-400 transition duration-300 w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:sonu8565shukla@gmail.com">
                <Mail className="text-white hover:text-yellow-400 transition duration-300 w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] border-4 border-red-600 rounded-full overflow-hidden shadow-2xl animate-glow">
            <img
              src={profileImg}
              alt="Shivam Shukla"
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;