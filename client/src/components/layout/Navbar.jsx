import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, Briefcase, Phone, Info, BookOpen, Users } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

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
        { name: 'SaaS Development', path: '/services/saas-development' },
        { name: 'Meta Ads', path: '/services/meta-ads' },
        { name: 'Google Ads', path: '/services/google-ads' },
        { name: 'Graphic Design', path: '/services/graphic-design' },
        { name: 'SEO', path: '/services/seo' },
      ]
    },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Careers', path: '/careers', icon: Users },
    { name: 'Contact Us', path: '/contact', icon: Phone },
  ];

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/10 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-xl shadow-2xl py-2' : 'bg-transparent py-4'}`}>
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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={link.path}
                  className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={16} />}
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
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login"
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
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
            className="absolute top-full left-0 right-0 mt-4 mx-4 p-4 bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden md:hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-gray-900 dark:text-white"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon size={20} className="text-blue-600" />
                      {link.name}
                    </span>
                    {link.dropdown && <ChevronDown size={16} />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="mt-2 ml-8 space-y-2 border-l-2 border-gray-100 dark:border-gray-800 pl-4">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
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
