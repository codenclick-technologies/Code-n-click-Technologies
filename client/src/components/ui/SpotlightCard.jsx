import React, { useRef, useState } from 'react';

const SpotlightCard = ({ children, className = "" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const rectRef = useRef(null);
  const handleMouseEnter = () => {
    setOpacity(1);
    if (divRef.current) {
      rectRef.current = divRef.current.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e) => {
    if (!rectRef.current) return;
    setPosition({ x: e.clientX - rectRef.current.left, y: e.clientY - rectRef.current.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };


  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 ease-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
