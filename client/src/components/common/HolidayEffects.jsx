import React from 'react';
import { motion } from 'framer-motion';

const HolidayEffects = ({ type }) => {
  if (!type) return null;

  // Render Snow for Christmas
  if (type === 'christmas') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              top: '-10px',
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.6; }
            100% { transform: translateY(110vh) translateX(${Math.random() * 50 - 25}px); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Render Sparkles for Diwali
  if (type === 'diwali') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden mix-blend-screen">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: -50
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute rounded-full shadow-[0_0_10px_rgba(255,215,0,0.8)]"
            style={{
              background: 'gold',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}
          />
        ))}
      </div>
    );
  }

  // Render Real Tiny Flowers for Ganesh Chaturthi (Professional & Subtle)
  if (type === 'ganesh') {
    const flowers = ['🌸', '🌺', '🌼', '🌹', '🌻', '🏵️'];
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, rotate: 0, opacity: 0 }}
            animate={{ 
              y: '100vh',
              rotate: 360,
              x: [0, Math.random() * 60 - 30, 0], 
              opacity: [0, 0.6, 0.6, 0] 
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            className="absolute text-xs select-none blur-[0.5px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px',
            }}
          >
            {flowers[Math.floor(Math.random() * flowers.length)]}
          </motion.div>
        ))}
      </div>
    );
  }

  // Holi: Subtle Watercolor Spots
  if (type === 'holi') {
    const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden mix-blend-multiply">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2, 2],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute rounded-full blur-xl"
            style={{
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              width: '100px',
              height: '100px',
            }}
          />
        ))}
      </div>
    );
  }

  // Tricolor (National Holidays): Subtle Confetti
  if (type === 'tricolor') {
    const colors = ['#FF9933', '#FFFFFF', '#138808']; // Saffron, White, Green
    return (
     <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: ['-10vh', '110vh'],
              rotate: 360,
              x: [0, Math.random() * 100 - 50, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-2 h-1 opacity-60"
            style={{
              backgroundColor: colors[i % 3],
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  }

  // New Year: Stars (Subtle)
  if (type === 'newyear') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
         {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute text-yellow-200 text-xs opacity-40 select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    );
  }

  return null;

  return null;
};

export default HolidayEffects;
