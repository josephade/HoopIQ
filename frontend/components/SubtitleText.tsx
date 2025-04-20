'use client';

import Typewriter from 'typewriter-effect';

export default function SubtitleText() {
  return (
    <div className="mt-8 text-white text-xl md:text-2xl font-light tracking-wider">
      <Typewriter
        options={{
          strings: ['Basketball and AI like never before'],
          autoStart: true,
          delay: 60, // Slower typing
          cursor: '',
          deleteSpeed: Infinity,
        }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(7500) // Wait for HOOPIQ to complete
            .start();
        }}
      />
    </div>
  );
}