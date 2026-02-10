import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Rocket, CheckCircle, ArrowRight, MessageCircle, Phone, Star } from 'lucide-react';

const LeadMagnetModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Force show for testing new design
        // Using a new key ensures previous visitors see the new offer
        const hasSeenModal = sessionStorage.getItem('hasSeenEliteOffer_v1');
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenEliteOffer_v1', 'true');
            }, 1000); // Show quickly (1s)
            return () => clearTimeout(timer);
        }
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/919999999999?text=Hi%20Team%2C%20I%20am%20ready%20to%20build%20my%20website.%20I%20want%20premium%20quality%20work.', '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Cinematic Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* Elite Authority Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative w-full max-w-3xl bg-[#050505] border border-amber-500/20 rounded-[24px] shadow-2xl shadow-amber-900/20 overflow-hidden flex flex-col md:flex-row"
                    >
                        {/* Gold Glow Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Left Side: The "CEO" Pitch */}
                        <div className="w-full md:w-3/5 p-8 md:p-12 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/30 border border-amber-500/30 rounded-full mb-6">
                                <Trophy size={12} className="text-amber-500" />
                                <span className="text-amber-500 text-[10px] font-bold tracking-[0.2em] uppercase">For Serious Business Owners Only</span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                                We Don't Just Build Websites. <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                                    We Build 24/7 Sales Machines.
                                </span>
                            </h2>

                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 border-l-2 border-amber-500/50 pl-4 font-medium">
                                "Listen, a website is useless if it doesn't print money. Most agencies sell you a digital brochure. We engineer <strong>Market Dominance</strong>. If you want to crush your competition and automate your sales, you're in the right place."
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                     {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden">
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="Client" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex text-amber-500">
                                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium">Joined by 500+ Top Founders</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: The Offer & Action */}
                        <div className="w-full md:w-2/5 bg-white/[0.02] border-l border-white/5 p-8 md:p-12 flex flex-col justify-center relative">
                            {/* Texture */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                            <h3 className="text-xl font-bold text-white mb-6 relative z-10">
                                Why Industry Leaders Choose Us:
                            </h3>
                            
                            <ul className="space-y-4 mb-10 relative z-10">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300 font-medium">Psychology-Based Design</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300 font-medium">Enterprise-Grade Security</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-300 font-medium">Built to Scale to Millions</span>
                                </li>
                            </ul>

                            <button 
                                onClick={handleWhatsApp}
                                className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-black font-bold py-4 rounded-xl shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    YES, BUILD MY EMPIRE
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                {/* Shine Effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                            </button>
                            
                            <p className="text-center text-[10px] text-gray-600 mt-4 uppercase tracking-widest">
                                Limited capacity for new projects
                            </p>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-white/20 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadMagnetModal;
