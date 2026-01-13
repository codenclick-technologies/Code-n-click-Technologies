import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  // Mouse position state
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  // Smooth springs for the cursor follower
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(mouse.x, springConfig);
  const smoothY = useSpring(mouse.y, springConfig);

  useEffect(() => {
    const manageMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouse.x.set(clientX);
      mouse.y.set(clientY);
      
      // Efficient check for clickable elements
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.getAttribute('role') === 'button';
      
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', manageMouseMove);
    return () => window.removeEventListener('mousemove', manageMouseMove);
  }, []);

  // Only show on desktop (non-touch) devices
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: mouse.x,
          y: mouse.y,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full z-[9998] pointer-events-none mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          scale: isPointer ? 2.5 : 1,
          opacity: isPointer ? 0.5 : 0.8,
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          borderWidth: isPointer ? '0px' : '1px'
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default CustomCursor;
