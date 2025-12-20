import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rectRef = useRef(null);

  function onMouseEnter(e) {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  }

  function onMouseMove({ clientX, clientY }) {
    if (!rectRef.current) return;
    const { left, top, width, height } = rectRef.current;
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  }

  const rotateX = useMotionTemplate`${mouseY.get() * -20}deg`;
  const rotateY = useMotionTemplate`${mouseX.get() * 20}deg`;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      className={`relative transition-all duration-200 ease-out ${className}`}
    >
      <div style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default TiltCard;
