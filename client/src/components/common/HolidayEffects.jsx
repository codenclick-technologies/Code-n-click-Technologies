import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HolidayEffects = ({ type }) => {
  const [particles, setParticles] = useState([]);
  const [randomX, setRandomX] = useState(0);

  useEffect(() => {
    // Generate randomX
    setRandomX(Math.random() * 50 - 25);

    if (!type) {
      setParticles([]);
      return;
    }

    if (type === 'christmas') {
      setParticles(Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 5 + 2}px`,
          height: `${Math.random() * 5 + 2}px`,
          animationDuration: `${Math.random() * 5 + 5}s`,
          animationDelay: `${Math.random() * 5}s`,
        }
      })));
      return;
    }

    if (type === 'diwali') {
      setParticles(Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        transition: {
          duration: 2 + Math.random() * 2,
          delay: Math.random() * 3,
        },
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 4 + 2}px`,
          height: `${Math.random() * 4 + 2}px`,
        }
      })));
      return;
    }

    if (type === 'ganesh') {
      const flowers = ['🌸', '🌺', '🌼', '🌹', '🌻', '🏵️'];
      setParticles(Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        flower: flowers[Math.floor(Math.random() * flowers.length)],
        animate: {
          x: [0, Math.random() * 60 - 30, 0],
        },
        transition: {
          duration: 10 + Math.random() * 10,
          delay: Math.random() * 10,
        },
        style: {
          left: `${Math.random() * 100}%`,
        }
      })));
      return;
    }

    if (type === 'holi') {
      const colors = ['#EF4444', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'];
      setParticles(Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        style: {
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          left: `${Math.random() * 90 + 5}%`,
          top: `${Math.random() * 90 + 5}%`,
        },
        transition: {
          delay: Math.random() * 5,
        }
      })));
      return;
    }

    if (type === 'tricolor') {
      const colors = ['#FF9933', '#FFFFFF', '#138808'];
      setParticles(Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        animate: {
          x: [0, Math.random() * 100 - 50, 0]
        },
        transition: {
          duration: 8 + Math.random() * 5,
          delay: Math.random() * 5,
        },
        style: {
          backgroundColor: colors[i % 3],
          left: `${Math.random() * 100}%`,
        }
      })));
      return;
    }

    if (type === 'newyear') {
      setParticles(Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        transition: {
          duration: 3 + Math.random() * 2,
          delay: Math.random() * 3,
        },
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }
      })));
      return;
    }

    setParticles([]);
  }, [type]);

  if (!type) return null;

  // Render Snow for Christmas
  if (type === 'christmas') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-white rounded-full opacity-60"
            style={{
              top: '-10px',
              left: p.style.left,
              width: p.style.width,
              height: p.style.height,
              animation: `fall ${p.style.animationDuration} linear infinite`,
              animationDelay: p.style.animationDelay,
            }}
          />
        ))}
        <style>{`
          @keyframes fall {
            0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.6; }
            100% { transform: translateY(110vh) translateX(${randomX}px); opacity: 0; }
          }
        `}</style>
      </div>
    );
  }

  // Render Sparkles for Diwali
  if (type === 'diwali') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden mix-blend-screen">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: -50
            }}
            transition={{
              ...p.transition,
              repeat: Infinity,
            }}
            className="absolute rounded-full shadow-[0_0_10px_rgba(255,215,0,0.8)]"
            style={{
              background: 'gold',
              ...p.style
            }}
          />
        ))}
      </div>
    );
  }

  // Render Real Tiny Flowers for Ganesh Chaturthi
  if (type === 'ganesh') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: -20, rotate: 0, opacity: 0 }}
            animate={{
              y: '100vh',
              rotate: 360,
              opacity: [0, 0.6, 0.6, 0],
              ...p.animate
            }}
            transition={{
              ...p.transition,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-xs select-none blur-[0.5px]"
            style={{
              top: '-20px',
              ...p.style
            }}
          >
            {p.flower}
          </motion.div>
        ))}
      </div>
    );
  }

  // Holi: Subtle Watercolor Spots
  if (type === 'holi') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden mix-blend-multiply">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 2, 2],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              ...p.transition
            }}
            className="absolute rounded-full blur-xl"
            style={{
              width: '100px',
              height: '100px',
              ...p.style
            }}
          />
        ))}
      </div>
    );
  }

  // Tricolor (National Holidays): Subtle Confetti
  if (type === 'tricolor') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: ['-10vh', '110vh'],
              rotate: 360,
              ...p.animate
            }}
            transition={{
              ...p.transition,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-1 opacity-60"
            style={p.style}
          />
        ))}
      </div>
    );
  }

  // New Year: Stars (Subtle)
  if (type === 'newyear') {
    return (
      <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              ...p.transition,
              repeat: Infinity,
            }}
            className="absolute text-yellow-200 text-xs opacity-40 select-none"
            style={p.style}
          >
            ✨
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
};

export default HolidayEffects;
