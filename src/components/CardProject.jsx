import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // For 3D-like animations
import { ExternalLink, ArrowRight } from 'lucide-react';

const CardProject = ({ Img, Title, Description, Link: ProjectLink, id }) => {
  // Handle kasus ketika ProjectLink kosong
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };
  
  const handleDetails = (e) => {
    if (!id) {
      console.log("ID kosong");
      e.preventDefault();
      alert("Project details are not available");
    }
  };
  

  return (
    <motion.div
      className="group relative w-full"
      initial={{ opacity: 0, y: 50, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative overflow-hidden rounded-xl bg-gradient-to-br from-black to-red-900/80 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-red-500/30"
        whileHover={{ scale: 1.05, rotateZ: 2 }}
        transition={{ duration: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-black/10 to-red-900/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
          
          <div className="mt-4 space-y-3">
            <motion.h3
              className="text-xl font-semibold bg-gradient-to-r from-red-400 via-red-300 to-red-500 bg-clip-text text-transparent"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {Title}
            </motion.h3>
            
            <motion.p
              className="text-gray-300/80 text-sm leading-relaxed line-clamp-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {Description}
            </motion.p>
            
            <div className="pt-4 flex items-center justify-between">
              {ProjectLink ? (
                <motion.a
                  href={ProjectLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              ) : (
                <span className="text-gray-500 text-sm">Demo Not Available</span>
              )}
              
              {id ? (
                <motion.Link
                  to={`/project/${id}`}
                  onClick={handleDetails}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-900/50 hover:bg-red-800/50 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm font-medium">Details</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.Link>
              ) : (
                <span className="text-gray-500 text-sm">Details Not Available</span>
              )}
            </div>
          </div>
          
          <div className="absolute inset-0 border border-white/0 group-hover:border-red-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardProject;