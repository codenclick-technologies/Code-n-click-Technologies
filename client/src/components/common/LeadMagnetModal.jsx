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
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 border-4 border-[#0A0A0A]">
                                        <Sparkles className="text-white w-10 h-10 animate-pulse" />
                                    </div>

                                    <div className="mt-8 text-center">
                                        <div className="inline-block px-3 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wider uppercase mb-4 animate-bounce">
                                            Limited Time Offer
                                        </div>
                                        
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                                            Stop Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Customers!</span>
                                        </h2>
                                        
                                        <p className="text-gray-400 text-sm md:text-base mb-6 max-w-sm mx-auto">
                                            Your website is leaking revenue. Get our free <strong>"Conversion Audit Checklist"</strong> and turn visitors into buyers instantly.
                                        </p>
                                    </div>

                                    {/* Benefits List */}
                                    <div className="bg-white/5 rounded-xl p-4 mb-6 border border-white/10 text-left">
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                <span>Identify 3 critical design flaws</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                <span>Double your mobile sales speed</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-yellow-400" />
                                                <span>SEO tricks used by top 1% agencies</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <div className="relative group">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                                            <input
                                                type="email"
                                                required
                                                placeholder="Enter your business email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="relative w-full bg-[#050505] text-white border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500 transition-all font-medium"
                                            />
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group uppercase tracking-wide text-sm"
                                        >
                                            Send Me The Free Audit
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </form>

                                    {/* Social Proof + Urgency */}
                                    <div className="mt-5 flex items-center justify-center gap-4 text-xs text-gray-500 border-t border-white/5 pt-4">
                                        <div className="flex -space-x-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-500 border border-[#0A0A0A]"></div>
                                            <div className="w-6 h-6 rounded-full bg-purple-500 border border-[#0A0A0A]"></div>
                                            <div className="w-6 h-6 rounded-full bg-green-500 border border-[#0A0A0A]"></div>
                                        </div>
                                        <p>Downloaded by <span className="text-white font-semibold">1,200+</span> Founders</p>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-10 text-center"
                                >
                                    <div className="mx-auto w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/30">
                                        <Zap size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Audit Sent! 🚀</h3>
                                    <p className="text-gray-400 mb-6 max-w-xs mx-auto">
                                        Your free audit checklist is on its way to <strong>{email}</strong>.
                                    </p>
                                    <button 
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm text-gray-500 hover:text-white underline transition-colors"
                                    >
                                        Back to Website
                                    </button>
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
