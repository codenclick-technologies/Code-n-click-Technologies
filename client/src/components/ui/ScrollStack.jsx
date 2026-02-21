import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const defaultItems = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites and web apps built with React, Next.js, and modern tooling. Optimized for speed, accessibility and SEO.',
    icon: '💻',
    color: 'from-blue-500 to-cyan-400',
    link: '/services/web-development'
  },
  {
    title: 'SaaS Development',
    description: 'Build reliable, scalable SaaS products with multi-tenant architecture, microservices, and enterprise-grade infrastructure.',
    icon: '🚀',
    color: 'from-pink-500 to-purple-500',
    link: '/services/saas-development'
  },
  {
    title: 'Meta Ads',
    description: 'Creative-first Facebook and Instagram campaigns designed to drive conversions and maximize customer lifetime value.',
    icon: '📱',
    color: 'from-pink-500 to-red-400',
    link: '/services/meta-ads'
  },
  {
    title: 'Google Ads',
    description: 'Strategic PPC campaigns that capture high-intent users through search and display networks, optimized for ROI.',
    icon: '🎯',
    color: 'from-yellow-400 to-orange-500',
    link: '/services/google-ads'
  },
  {
    title: 'Graphic Design',
    description: 'Visual systems, brand identity, and design assets that resonate with audiences and scale across all channels.',
    icon: '🎨',
    color: 'from-indigo-500 to-blue-400',
    link: '/services/graphic-design'
  },
  {
    title: 'SEO Services',
    description: 'Technical SEO, content strategy, and link-building to increase organic visibility and qualified traffic.',
    icon: '📈',
    color: 'from-green-500 to-emerald-400',
    link: '/services/seo'
  },
];

const ScrollStack = ({ items = defaultItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 0 && activeIndex < items.length - 1) {
        setDirection(1);
        setActiveIndex(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setDirection(-1);
        setActiveIndex(activeIndex - 1);
      }
    };

    const element = document.getElementById('scroll-stack-container');
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: true });
      return () => element.removeEventListener('wheel', handleWheel);
    }
  }, [activeIndex, items.length]);

  const getCardStyle = (idx) => {
    const distance = idx - activeIndex;
    
    if (distance < 0) {
      // Cards above active
      return {
        zIndex: -distance,
        opacity: 0,
        y: -100,
        scale: 0.95
      };
    } else if (distance === 0) {
      // Active card
      return {
        zIndex: 50,
        opacity: 1,
        y: 0,
        scale: 1
      };
    } else if (distance === 1) {
      // Next card (peeking)
      return {
        zIndex: 40,
        opacity: 0.7,
        y: 50,
        scale: 0.98
      };
    } else if (distance === 2) {
      // Second next (more behind)
      return {
        zIndex: 30,
        opacity: 0.5,
        y: 100,
        scale: 0.96
      };
    } else {
      // Far behind
      return {
        zIndex: 20,
        opacity: 0,
        y: 150,
        scale: 0.94
      };
    }
  };

  return (
    <section
      id="scroll-stack-container"
      className="relative w-full min-h-screen bg-gray-950 overflow-hidden py-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4 mb-12 text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Our Services & Expertise
        </h2>
        <p className="text-gray-400 text-lg">
          Scroll to discover the comprehensive solutions we provide to accelerate your business growth.
        </p>
      </motion.div>

      {/* Stack Container */}
      <div className="relative h-96 max-w-2xl mx-auto px-4">
        {items.map((item, idx) => {
          const style = getCardStyle(idx);

          return (
            <motion.a
              key={idx}
              href={item.link}
              className="absolute inset-0 rounded-3xl p-[2px] cursor-pointer will-change-transform"
              animate={{
                y: style.y,
                opacity: style.opacity,
                scale: style.scale,
                zIndex: style.zIndex,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
            >
              {/* Gradient Border */}
              <div className={`rounded-3xl h-full bg-gradient-to-br ${item.color}`}>
                {/* Inner Card */}
                <div className="rounded-3xl h-full bg-gradient-to-br from-gray-900/98 via-gray-900/95 to-gray-950/98 backdrop-blur-xl p-8 flex flex-col justify-between relative overflow-hidden group">
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer with CTA */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10">
                    <span className={`text-xs font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.title === 'Web Development' && 'React • Next.js • Performance'}
                      {item.title === 'SaaS Development' && 'Multi-tenant • Scalable • Secure'}
                      {item.title === 'Meta Ads' && 'Creative Testing • Pixel Setup'}
                      {item.title === 'Google Ads' && 'Search • Display • Shopping'}
                      {item.title === 'Graphic Design' && 'Brand • UI/UX • Marketing'}
                      {item.title === 'SEO Services' && 'Technical • Content • Authority'}
                    </span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="text-white/70 group-hover:text-white transition-colors"
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {items.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === activeIndex
                ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      {activeIndex < items.length - 1 && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium"
        >
          ↓ Scroll to explore
        </motion.div>
      )}
    </section>
  );
};

export default ScrollStack;
