import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IndianFlagBanner = () => {
  const [occasion, setOccasion] = useState('');

  useEffect(() => {
    const checkDate = () => {
      // const today = new Date();
      // const date = today.getDate();
      // const month = today.getMonth() + 1; // 0-indexed

      // if (date === 15 && month === 8) {
      //   setOccasion('Happy Independence Day! 🇮🇳');
      // } else if (date === 26 && month === 1) {
      //   setOccasion('Happy Republic Day! 🇮🇳');
      // } else {
      //   // For testing/demo purposes, you can uncomment the next line to force show it
      //   setOccasion('Jai Hind! 🇮🇳');
      // }

      // DEMO MODE: Force 15th August
      setOccasion('Happy Independence Day! 🇮🇳');
    };

    checkDate();
    // The banner's visibility is now controlled by the parent component.
    // The occasion is set once on mount. If dynamic updates are needed,
    // the parent should pass a prop or a more sophisticated context/state management.
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-orange-500 via-white to-green-600 relative overflow-hidden z-[60]">
      {/* Glossy Overlay for "Waving" effect */}
      <motion.div
        animate={{ x: ['-100%', '100%'] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
      />

      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative z-10 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="text-white drop-shadow-md hidden sm:inline">Vande Mataram</span>
          <span className="animate-pulse">🇮🇳</span>
        </div>

        <div className="text-center font-serif text-blue-900 drop-shadow-sm flex-1">
          {occasion}
        </div>

        <div className="flex items-center gap-2">
          <span className="animate-pulse">🇮🇳</span>
          <span className="text-white drop-shadow-md hidden sm:inline">Jai Hind</span>
        </div>
      </div>

      {/* Ashoka Chakra Center Decoration (Animated) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none mix-blend-multiply">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-24 h-24 sm:w-32 sm:h-32"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800 fill-current">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="5" fill="currentColor" />
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2="50"
                y2="5"
                stroke="currentColor"
                strokeWidth="2"
                transform={`rotate(${i * 15} 50 50)`}
              />
            ))}
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default IndianFlagBanner;
