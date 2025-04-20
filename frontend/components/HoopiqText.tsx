'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function HoopiqText() {
  const [animationState, setAnimationState] = useState({
    letters: ['H', '', '', '', '', ''], // H, O, O, P, I, Q
    basketballs: [
      { id: 1, show: false, bounce: false },
      { id: 2, show: false, bounce: false },
      { id: 3, show: false, bounce: false }
    ]
  });

  useEffect(() => {
    // Letter animation sequence
    const letterTimers = [
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', '', '', '', '', '']
      })), 800),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', 'O', '', '', '', ''],
        basketballs: prev.basketballs.map((ball, i) => 
          i === 0 ? { ...ball, show: true } : ball
        )
      })), 1600),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        basketballs: prev.basketballs.map((ball, i) => 
          i === 0 ? { ...ball, bounce: true } : ball
        )
      })), 2000),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', 'O', 'O', '', '', ''],
        basketballs: prev.basketballs.map((ball, i) => 
          i === 1 ? { ...ball, show: true } : ball
        )
      })), 2800),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        basketballs: prev.basketballs.map((ball, i) => 
          i === 1 ? { ...ball, bounce: true } : ball
        )
      })), 3400),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', 'O', 'O', 'P', '', '']
      })), 4200),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', 'O', 'O', 'P', 'I', '']
      })), 5000),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        letters: ['H', 'O', 'O', 'P', 'I', 'Q'],
        basketballs: prev.basketballs.map((ball, i) => 
          i === 2 ? { ...ball, show: true } : ball
        )
      })), 5800),
      
      setTimeout(() => setAnimationState(prev => ({
        ...prev,
        basketballs: prev.basketballs.map((ball, i) => 
          i === 2 ? { ...ball, bounce: true } : ball
        )
      })), 6400)
    ];

    return () => letterTimers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="text-white text-6xl md:text-8xl font-bold tracking-tight flex">
        {animationState.letters.map((letter, index) => (
          <div key={index} className="relative">
            {/* Letters */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: letter ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {letter}
            </motion.span>
            
            {/* Basketballs for the "O"s */}
            {index === 1 || index === 2 ? (
              animationState.basketballs[index - 1]?.show && (
                <motion.div
                  initial={{ x: -100, opacity: 0, scale: 0.5 }}
                  animate={animationState.basketballs[index - 1]?.bounce ? {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    y: [0, -60, 0, -40, 0, -20, 0] // More exaggerated bounce
                  } : {}}
                  transition={{
                    duration: 2.4, // Much slower bounce
                    ease: [0.2, 0.65, 0.3, 0.9],
                    times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1]
                  }}
                  className="absolute inset-0"
                >
                  <div className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-orange-500 relative shadow-xl">
                    <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black -translate-x-1/2"></div>
                    <div className="absolute w-full h-full rounded-full border-2 border-black"></div>
                    <div className="absolute top-2 left-3 w-3 h-3 rounded-full bg-white opacity-80"></div>
                  </div>
                </motion.div>
              )
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}