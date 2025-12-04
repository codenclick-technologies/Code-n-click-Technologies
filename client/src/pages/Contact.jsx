import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';

import SEO from '../components/utils/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="Contact Us"
        description="Get in touch with Code'N'Click Technologies. We are ready to start your next digital project. Call, email, or visit us in Faridabad."
        keywords="contact us, hire developers, web development agency, faridabad, digital marketing inquiry"
      />
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left Column: Info */}
          <div className="space-y-10">
            <div>
              <motion.h1 variants={fadeInUp} className="text-5xl font-extrabold text-white mb-6">
                Let's Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Extraordinary
                </span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-gray-400 max-w-lg">
                Have a project in mind? We'd love to hear about it. Reach out to us and let's start the conversation.
              </motion.p>
            </div>

            <motion.div variants={fadeInUp} className="grid gap-6">
              <SpotlightCard className="p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email Us</h3>
                  <p className="text-gray-400">codenclick24@gmail.com</p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Call Us</h3>
                  <p className="text-gray-400">+91 8700198968</p>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-6 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-pink-600/20 flex items-center justify-center text-pink-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Visit Us</h3>
                  <p className="text-gray-400">Sector-2 Faridabad</p>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            variants={fadeInUp}
            className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <form className="space-y-6" onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
              };
              try {
                await import('../services/api').then(module => module.contactAPI.submit(data));
                alert('Message sent successfully!');
                e.target.reset();
              } catch (error) {
                console.error('Error sending message:', error);
                alert('Failed to send message.');
              }
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">First Name</label>
                  <input name="firstName" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Last Name</label>
                  <input name="lastName" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Subject</label>
                <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option className="bg-gray-900" value="General Inquiry">General Inquiry</option>
                  <option className="bg-gray-900" value="Project Proposal">Project Proposal</option>
                  <option className="bg-gray-900" value="Careers">Careers</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your project..." />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
