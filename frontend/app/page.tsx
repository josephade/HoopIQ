'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from '@/components/IntroAnimation';
import MainContent from '@/components/MainContent';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowContent(true), 500);
    const timer2 = setTimeout(() => setShowIntro(false), 15000); // 15s total duration
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <AnimatePresence>
        {showIntro && (
          <IntroAnimation showContent={showContent} />
        )}
      </AnimatePresence>

      {!showIntro && <MainContent />}
    </div>
  );
}