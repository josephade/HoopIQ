'use client'; // Required since we're using hooks and animations

import { motion } from 'framer-motion';
import HoopiqText from './HoopiqText';
import SubtitleText from './SubtitleText';

export default function IntroAnimation({ showContent }: { showContent: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      className="absolute inset-0 flex flex-col items-center justify-center z-50"
    >
      {showContent && (
        <div className="text-center">
          <HoopiqText />
          <SubtitleText />
        </div>
      )}
    </motion.div>
  );
}