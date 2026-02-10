import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, Zap } from 'lucide-react';

const LeadMagnetModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        // Show modal after 3 seconds of page load, but only if not shown before in session
        const hasSeenModal = sessionStorage.getItem('hasSeenLeadModal');
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenLeadModal', 'true');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would integrate with your backend or email service
        console.log('Lead submitted:', email);
        setSubmitted(true);
        setTimeout(() => setIsOpen(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop with blur effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Decorative Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none" />
                        
                        {/* Content Container */}
                        <div className="relative p-8 md:p-10 text-center">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {!submitted ? (
                                <>
                                    {/* Icon Header */}
                                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                                        <Sparkles className="text-white w-8 h-8" />
                                    </div>

                                    <h2 className="text-3xl font-bold text-white mb-3">
                                        Unlock Your Business Potential
                                    </h2>
                                    <p className="text-gray-400 mb-8 leading-relaxed">
                                        Get our exclusive <strong>"Digital Growth Blueprint"</strong>. Join 500+ founders transforming their online presence with actionable strategies.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your best email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="relative w-full bg-[#050505] text-white border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 placeholder-gray-500 transition-all"
                                            />
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
                                        >
                                            Get Free Access
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>

                                    <p className="text-xs text-gray-500 mt-4">
                                        🔒 No spam. Unsubscribe anytime. High-value content only.
                                    </p>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-10"
                                >
                                    <div className="mx-auto w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6">
                                        <Zap size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">You're In! 🚀</h3>
                                    <p className="text-gray-400">
                                        Check your inbox. The blueprint is on its way to transform your business.
                                    </p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadMagnetModal;
