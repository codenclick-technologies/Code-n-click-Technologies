import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Extended slightly for the logo reveal

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#030014]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Logo Container */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  ease: "easeInOut" 
                }}
              />
              
              {/* Spinning Gradient Border */}
              <motion.div
                className="absolute inset-0 rounded-full border-t-2 border-l-2 border-blue-400 transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Verified Brand "C" Logo */}
              <motion.img 
                src="/brand-c.png" 
                alt="Brand Logo" 
                className="w-20 h-20 object-contain relative z-10"
                initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
              />
            </div>

            {/* Text Reveal Container */}
            <div className="text-center z-10">
                <div className="overflow-hidden h-16 mb-2">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#9D50BB]"
                    >
                        CODENCLICK
                    </motion.h1>
                </div>
                
                <div className="overflow-hidden h-8">
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="text-sm md:text-base text-blue-400 font-medium tracking-[0.3em] uppercase"
                    >
                        Technologies
                    </motion.p>
                </div>
            </div>

            {/* Loading Progress Bar */}
            <motion.div 
               className="mt-12 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
            >
               <motion.div 
                 className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                 initial={{ width: "0%", x: "-100%" }}
                 animate={{ width: "100%", x: "0%" }}
                 transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
               />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
