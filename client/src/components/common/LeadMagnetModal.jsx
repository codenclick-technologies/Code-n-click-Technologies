import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Rocket, CheckCircle, ArrowRight, MessageCircle, Phone } from 'lucide-react';

const LeadMagnetModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Smart trigger: Show after 5 seconds or upon exit intent (if possible, but simpler here)
        const hasSeenModal = sessionStorage.getItem('hasSeenPremiumOffer');
        if (!hasSeenModal) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasSeenPremiumOffer', 'true');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleWhatsApp = () => {
        window.open('https://wa.me/919999999999?text=I%20want%20to%20scale%20my%20business%20with%20Code-n-click', '_blank');
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
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Ultra-Premium Modal */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50, rotateX: 10 }}
                        animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 50 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="relative w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden group"
                    >
                        {/* Holographic/Gradient Effects */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>

                        <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                            
                            {/* Left Side: Visual Impact */}
                            <div className="w-full md:w-5/12 text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                                    <Trophy size={14} />
                                    <span>Top Rated Agency</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                                    Don't Just Build a Website. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                        Build an Empire.
                                    </span>
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    Your competitors are already using AI-driven tech. Give us <strong>15 minutes</strong>, and we'll show you how to beat them.
                                </p>
                                
                                {/* Trust Badges */}
                                <div className="flex justify-center md:justify-start -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#080808] bg-gray-800 flex items-center justify-center overflow-hidden`}>
                                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i*13}`} alt="User" />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-[#080808] bg-gray-800 flex items-center justify-center text-[10px] font-bold text-white">
                                        +500
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Trusted by 500+ Market Leaders</p>
                            </div>

                            {/* Right Side: The Offer (No Email, Direct Value) */}
                            <div className="w-full md:w-7/12 bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Rocket size={100} className="text-white transform rotate-12" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 relative z-10">
                                    Why Choose Codenclick?
                                </h3>
                                
                                <ul className="space-y-3 mb-8 relative z-10">
                                    {[
                                        "2X Faster Load Speeds Guaranteed",
                                        "Click-to-Conversion Designs",
                                        "AI-Integrated Sales Funnels"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-3 relative z-10">
                                    <button 
                                        onClick={handleWhatsApp}
                                        className="w-full group bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        <span>Chat on WhatsApp</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </button>
                                    
                                    <div className="text-center">
                                        <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">Or</span>
                                    </div>

                                    <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>Book Free Strategy Call</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadMagnetModal;
