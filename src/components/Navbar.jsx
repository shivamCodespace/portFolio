import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setActiveSection, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Portfolio", label: "Portfolio" },
    { href: "#Certificates", label: "Certificates" },
    { href: "#Contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleSectionChange = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        setActiveSection(sectionId);
      }, 100);
    } else {
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isOpen
          ? "bg-gradient-to-br from-black to-red-900"
          : scrolled
          ? "bg-gradient-to-br from-black to-red-900/70 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-[5%] lg:px-[10%]">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <motion.a
            href="#Home"
            onClick={(e) => handleSectionChange(e, "#Home")}
            className="text-xl sm:text-2xl font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text tracking-wider drop-shadow-[0_1px_10px_rgba(255,0,0,0.5)]"
            style={{ fontFamily: "'Pacifico', cursive" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shivam
          </motion.a>

          <motion.div
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSectionChange(e, item.href)}
                className={`relative text-xs sm:text-sm font-semibold transition-all duration-300 px-2 py-1 group ${
                  location.pathname === "/" && activeSection === item.href.substring(1)
                    ? "text-yellow-400"
                    : "text-white hover:text-red-500"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    location.pathname === "/" && activeSection === item.href.substring(1)
                      ? "scale-x-100"
                      : ""
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white transition-transform duration-300 ease-in-out transform"
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <motion.div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
        initial={{ y: -50 }}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 bg-black/90">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSectionChange(e, item.href)}
              className={`block px-4 py-2 sm:py-3 text-base sm:text-lg font-medium transition-all duration-300 ease ${
                location.pathname === "/" && activeSection === item.href.substring(1)
                  ? "text-yellow-400"
                  : "text-white hover:text-red-500"
              }`}
              initial={{ x: -100, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;