import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Rocket, CheckCircle, ArrowRight, MessageCircle, Phone, Star } from 'lucide-react';

const LeadMagnetModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show modal on every reload/visit as requested
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/918700198968?text=Hi%20Team%2C%20I%20am%20ready%20to%20build%20my%20website.%20I%20want%20premium%20quality%20work.', '_blank');
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
                        className="relative w-full max-w-3xl bg-[#050505] border border-amber-500/20 rounded-[28px] md:rounded-[24px] shadow-2xl shadow-amber-900/40 flex flex-col md:flex-row max-h-[90vh] overflow-hidden"
                    >
                        {/* Gold Glow Effects */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Scrollable Content Container */}
                        <div className="w-full h-full flex flex-col md:flex-row overflow-y-auto overflow-x-hidden custom-scrollbar">
                            {/* Left Side: The "CEO" Pitch */}
                            <div className="w-full md:w-3/5 p-6 md:p-12 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950/30 border border-amber-500/30 rounded-full mb-4 md:mb-6">
                                    <Trophy size={12} className="text-amber-500" />
                                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-amber-500">For Serious Leaders Only</span>
                                </div>

                                <h2 className="text-2xl md:text-5xl font-black text-white leading-[1.1] mb-4 md:mb-6 tracking-tight">
                                    We Don't Just Build Websites. <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                                        We Build Empires.
                                    </span>
                                </h2>

                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8 border-l-2 border-amber-500/50 pl-4 font-medium italic">
                                    "A website is useless if it doesn't scale. We engineer <strong>Revenue Growth</strong> and Market Dominance."
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex -space-x-3">
                                         {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden shadow-xl">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+25}`} alt="Client" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="flex text-amber-500">
                                            {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                                        </div>
                                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">500+ High-Growth Partners</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: The Offer & Action */}
                            <div className="w-full md:w-2/5 bg-white/[0.03] border-l border-white/5 p-6 md:p-12 flex flex-col justify-center relative">
                                {/* Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                                <h3 className="text-lg md:text-xl font-bold text-white mb-4 relative z-10">
                                    Why Leaders Choose Us:
                                </h3>
                                
                                <ul className="space-y-3 mb-6 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                        <span className="text-xs md:text-sm text-gray-300">Psychology-Based UX</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                                        <span className="text-xs md:text-sm text-gray-300">Infinite Scaling Architecture</span>
                                    </li>
                                </ul>

                                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 mb-6 text-center transform hover:scale-[1.02] transition-transform">
                                    <p className="text-amber-500 font-black text-base md:text-lg animate-pulse">
                                        RAMADAN OFFER: 20% OFF
                                    </p>
                                    <p className="text-gray-500 text-[8px] md:text-[10px] uppercase tracking-tighter">Only 2 Slots Left at this Price</p>
                                </div>

                                <button 
                                    onClick={handleWhatsApp}
                                    className="w-full group relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-black py-4 rounded-xl shadow-lg transition-all active:scale-95"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-xs md:text-sm">
                                        YES, CLAIM MY DISCOUNT
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>
                                
                                <p className="text-center text-[8px] text-gray-600 mt-4 uppercase tracking-[0.2em]">
                                    Direct Founder Oversight on New Projects
                                </p>
                            </div>
                        </div>

                        {/* Stay-Visible Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 z-50 p-2 bg-black/40 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all backdrop-blur-md shadow-2xl"
                            aria-label="Close modal"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadMagnetModal;
