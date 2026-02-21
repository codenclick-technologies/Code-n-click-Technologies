import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone, 
  Heart 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'App Development', href: '/services/app-development' },
      { name: 'SaaS Development', href: '/services/saas-development' },
      { name: 'Graphic Design', href: '/services/graphic-design' },
      { name: 'SEO Services', href: '/services/seo' },
      { name: 'Meta Ads', href: '/services/meta-ads' },
      { name: 'Google Ads', href: '/services/google-ads' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Resources', href: '/resources' },
      { name: 'View Company Profile', href: '/company-brochure' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  return (
    <footer className="relative bg-[#020205] text-white pt-20 pb-10 overflow-hidden border-t border-white/5">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
             <Link to="/" className="block">
                <img 
                  src="/brand-full.png" 
                  alt="CODENCLICK TECHNOLOGIES" 
                  className="h-14 w-auto object-contain"
                />
             </Link>
             <p className="text-gray-400 leading-relaxed">
               Making digital success simple for businesses. We build fast websites and run smart marketing campaigns that actually find your customers.
             </p>
             <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-pink-600/20 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-sky-600/20 hover:text-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-blue-700/20 hover:text-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
             </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 h-fit">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-gray-400">
                  Delhi, India
                </span>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 h-fit">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <a href="mailto:codenclicktechnologies@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                  codenclicktechnologies@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 h-fit">
                  <Phone className="w-5 h-5 text-pink-400" />
                </div>
                <a href="tel:+918700198968" className="text-gray-400 hover:text-white transition-colors">
                  +91-870019-8968
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Codenclick Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
             {footerLinks.legal.map((link) => (
               <Link key={link.name} to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                 {link.name}
               </Link>
             ))}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-600">
             <span>Made with</span>
             <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
             <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
