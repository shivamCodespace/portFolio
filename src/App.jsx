import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect, useRef, createRef } from "react";
import "./index.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";
import NotFoundPage from "./Pages/404";

import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import ProjectDetails from "./components/ProjectDetail";
import Certificates from "./components/Certificates";

import { AnimatePresence } from "framer-motion";

// Footer Component
const Footer = ({ github = false }) => (
  <footer className="w-full mt-4 sm:mt-6 md:mt-12 text-white bg-black border-t border-gray-700 px-4 sm:px-6">
    <hr className="my-2 sm:my-3 border-gray-600 opacity-25" />
    <span className="block text-xs sm:text-sm pb-2 sm:pb-4 text-gray-400 text-center">
      © 2025{" "}
      <a
        href={
          github
            ? "https://github.com/shivamCodespace"
            : "https://www.linkedin.com/in/shivam-shukla-3a66b5375/"
        }
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shivam Shukla™
      </a>
      . All Rights Reserved.
    </span>
  </footer>
);

// LandingPage
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  const scrollRefs = useRef(
    Array(5)
      .fill()
      .map(() => createRef())
  );

  const sections = [
    { id: "Home", Component: Home },
    { id: "About", Component: About },
    { id: "Portfolio", Component: Portfolio },
    { id: "Certificates", Component: Certificates },
    { id: "Contact", Component: ContactPage },
  ];

  const scrollToSection = (index) => {
    scrollRefs.current[index]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence initial={false} mode="wait">
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <div className="relative w-screen h-screen snap-y snap-mandatory overflow-y-scroll">
          <AnimatedBackground />
          <Navbar
            activeSection={null}
            setActiveSection={(id) => {
              const idx = sections.findIndex((s) => s.id === id);
              if (idx >= 0) scrollToSection(idx);
            }}
          />
          {sections.map(({ id, Component }, idx) => (
            <section
              key={id}
              ref={scrollRefs.current[idx]}
              className="h-screen snap-start flex justify-center items-center"
            >
              <Component />
            </section>
          ))}
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectPageLayout = () => (
  <div className="relative w-screen h-screen sm:h-[100vh]">
    <AnimatedBackground />
    <div className="absolute inset-0 z-10 flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-auto px-4 sm:px-6">
        <ProjectDetails />
      </div>
      <Footer github />
    </div>
  </div>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShowWelcome(false), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
