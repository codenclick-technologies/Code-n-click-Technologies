import React from 'react';
import { motion } from 'framer-motion';
import { getHolidayTheme } from '../../data/holidayConfig';

const HolidayBanner = ({ holiday }) => {
  if (!holiday) return null;

  const theme = getHolidayTheme(holiday.type);

  return (
    <div className={`w-full ${theme.bg} relative overflow-hidden z-[60] shadow-lg`}>
      {/* Background Animations Based on Type */}
      {holiday.type === 'tricolor' && (
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
      )}

      {holiday.type === 'diwali' && (
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse" />
      )}

      {holiday.type === 'christmas' && (
        <div className="absolute inset-0 animate-snow opacity-50 bg-[url('https://www.transparenttextures.com/patterns/snow.png')]" />
      )}

      <div className={`max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between relative z-10 text-[10px] sm:text-xs font-bold uppercase tracking-widest ${theme.text}`}>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline opacity-80 decoration-slice">Celebrate with us</span>
          <span className="text-base animate-bounce">{holiday.icon}</span>
        </div>

        <div className="text-center flex-1 font-serif text-xs sm:text-sm drop-shadow-sm font-extrabold px-2">
          {holiday.message}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-base animate-bounce" style={{ animationDelay: '0.1s' }}>{holiday.icon}</span>
          <span className="hidden sm:inline opacity-80">CODENCLICK TECHNOLOGIES</span>
        </div>
      </div>

      {/* Center Decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {holiday.type === 'tricolor' && <AshokaChakra />}
      </div>
    </div>
  );
};

// Ashoka Chakra Component
const AshokaChakra = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    className="w-24 h-24 sm:w-32 sm:h-32 opacity-20 mix-blend-multiply"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full text-blue-800 fill-current">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      {[...Array(24)].map((_, i) => (
        <line key={i} x1="50" y1="50" x2="50" y2="5" stroke="currentColor" strokeWidth="2" transform={`rotate(${i * 15} 50 50)`} />
      ))}
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 3" />
    </svg>
  </motion.div>
);

export default HolidayBanner;
