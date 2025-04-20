'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MainContent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Navbar with fade-in animation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={isMounted ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 z-40 bg-black bg-opacity-80 text-white p-4 backdrop-blur-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <span className="text-orange-500 mr-1">●</span> HOOPIQ
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-orange-500 transition-colors">Features</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Demo</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Pricing</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full text-sm transition-all">
            Sign Up
          </button>
        </div>
      </motion.nav>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/nba-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content with staggered animation */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Revolutionizing <span className="text-orange-500">Basketball</span> with AI
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Advanced analytics and insights powered by artificial intelligence
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isMounted ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg">
              Get Started - It's Free
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}