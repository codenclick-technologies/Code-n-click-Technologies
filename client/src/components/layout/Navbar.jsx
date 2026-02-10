import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, Briefcase, Phone, Info, BookOpen, Users, Download, IndianRupee } from 'lucide-react';

const Navbar = ({ isBannerVisible }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isDark, setIsDark] = useState(false); // Unused
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const location = useLocation(); // Unused

  // Handle Scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'About Us', path: '/about', icon: Info },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      dropdown: [
        { name: 'Web Development', path: '/services/web-development' },
        { name: 'App Development', path: '/services/app-development' },
        { name: 'SaaS Development', path: '/services/saas-development' },
        { name: 'Meta Ads', path: '/services/meta-ads' },
        { name: 'Google Ads', path: '/services/google-ads' },
        { name: 'Graphic Design', path: '/services/graphic-design' },
        { name: 'SEO', path: '/services/seo' },
      ]
    },

    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Pricing', path: '/pricing', icon: IndianRupee },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/10 ${isBannerVisible && !isScrolled ? 'top-14' : 'top-4'} ${isScrolled ? 'bg-[#020205]/85 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
      <div className="px-6 sm:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Code-n-Click"
              className="h-16 w-auto"
              width="711"
              height="351"
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className="relative flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors py-2"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} />}
                  
                  {link.name === 'Pricing' && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                      animate={{ 
                        opacity: [0.4, 1, 0.4],
                        scaleX: [0.9, 1.1, 0.9],
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/company-brochure?autoDownload=true"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-700 dark:text-gray-300 transition-all hover:scale-110 active:scale-95 group relative"
              title="Download Brochure"
            >
               <Download size={20} className="group-hover:text-blue-500" />
               <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Get Profile</span>
            </Link>
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden lg:hidden max-h-[75vh] overflow-y-auto"
          >
            <div className="space-y-3">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 pb-3 last:border-0">
                  <Link
                    to={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <span className="flex items-center gap-3 text-base font-medium text-white">
                      <link.icon size={20} className="text-blue-500" />
                      {link.name}
                    </span>
                    {link.dropdown && <ChevronDown size={16} className="text-gray-400" />}
                  </Link>

                  {link.dropdown && (
                    <div className="mt-2 ml-8 space-y-2 border-l-2 border-blue-500/30 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-3 text-sm text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <Link
                   to="/company-brochure?autoDownload=true"
                   onClick={() => setIsOpen(false)}
                   className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white font-medium hover:bg-gray-200"
                >
                   <Download size={18} /> Download Profile
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center rounded-xl bg-blue-600 text-white font-bold shadow-lg"
                >
                  Employee Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
