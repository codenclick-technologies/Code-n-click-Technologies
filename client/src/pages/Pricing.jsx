import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    Check, X, Zap, Shield, Rocket, TrendingUp, 
    AlertTriangle, Clock, DollarSign, MessageCircle,
    Sparkles, Code, Layers, Database, Lock
} from 'lucide-react';

const Pricing = () => {
    const [selectedType, setSelectedType] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);

    const websiteTypes = [
        {
            id: 'wordpress',
            name: 'WordPress Website',
            basePrice: 15000,
            originalPrice: 24999,
            tag: 'ECONOMY',
            tagColor: 'bg-gray-500',
            icon: AlertTriangle,
            description: 'Template-based, plugin-dependent'
        },
        {
            id: 'custom',
            name: 'Custom Coded Website',
            basePrice: 45000,
            originalPrice: 65000,
            tag: 'FLAT ₹20,000 OFF',
            tagColor: 'bg-green-600',
            icon: Code,
            description: 'Hand-crafted, performance-optimized'
        },
        {
            id: 'ecommerce',
            name: 'E-commerce Platform',
            basePrice: 75000,
            originalPrice: 110000,
            tag: 'BEST SELLER - 30% OFF',
            tagColor: 'bg-blue-600',
            icon: Layers,
            description: 'Full-featured online store'
        },
        {
            id: 'enterprise',
            name: 'Enterprise Solution',
            basePrice: 200000,
            originalPrice: 350000,
            tag: 'ULTIMATE PERFORMANCE',
            tagColor: 'bg-purple-600',
            icon: Database,
            description: 'Scalable, enterprise-grade architecture'
        }
    ];

    const addons = [
        { id: 'seo', name: 'Advanced SEO Optimization', price: 15000, originalPrice: 25000, icon: TrendingUp },
        { id: 'ai-chatbot', name: 'AI-Powered Chatbot', price: 20000, originalPrice: 35000, icon: MessageCircle },
        { id: 'cms', name: 'Custom CMS Dashboard', price: 40000, originalPrice: 60000, icon: Lock },
        { id: 'analytics', name: 'Advanced Analytics Suite', price: 25000, originalPrice: 40000, icon: Sparkles },
        { id: 'security', name: 'Enterprise Security Package', price: 30000, originalPrice: 50000, icon: Shield }
    ];

    const wordpressVsCustom = {
        wordpress: [
            { point: 'Slow loading speeds (3-5 seconds)', bad: true },
            { point: 'Security vulnerabilities from plugins', bad: true },
            { point: 'Frequent updates & maintenance needed', bad: true },
            { point: 'Limited customization options', bad: true },
            { point: 'Poor SEO performance out-of-box', bad: true }
        ],
        custom: [
            { point: '2X faster load times (under 1 second)', bad: false },
            { point: 'Military-grade security built-in', bad: false },
            { point: 'Zero maintenance headaches', bad: false },
            { point: 'Unlimited customization freedom', bad: false },
            { point: 'SEO-optimized from day one', bad: false }
        ]
    };

    const calculateTotal = () => {
        if (!selectedType) return 0;
        const basePrice = websiteTypes.find(t => t.id === selectedType)?.basePrice || 0;
        const addonsPrice = selectedAddons.reduce((sum, addonId) => {
            const addon = addons.find(a => a.id === addonId);
            return sum + (addon?.price || 0);
        }, 0);
        return basePrice + addonsPrice;
    };

    const toggleAddon = (addonId) => {
        setSelectedAddons(prev => 
            prev.includes(addonId) 
                ? prev.filter(id => id !== addonId)
                : [...prev, addonId]
        );
    };

    const handleWhatsApp = () => {
        const selectedWebsite = websiteTypes.find(t => t.id === selectedType);
        const selectedAddonsList = selectedAddons.map(id => addons.find(a => a.id === id)?.name).join(', ');
        const total = calculateTotal();
        
        const message = `Hi Team, I want to build a ${selectedWebsite?.name}. ${selectedAddonsList ? `Add-ons: ${selectedAddonsList}. ` : ''}Estimated Budget: ₹${total.toLocaleString('en-IN')}. Let's discuss!`;
        
        window.open(`https://wa.me/918700198968?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>Special Offers - Website Development Pricing | Code-n-click</title>
                <meta name="description" content="Limited time offers on custom website development. Save up to ₹50,000 on your next digital empire." />
            </Helmet>

            <div className="min-h-screen bg-[#0A0A0A] pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Header with Countdown/Urgency Banner */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-r from-red-600/20 via-orange-600/20 to-red-600/20 border-2 border-orange-500/30 rounded-2xl p-4 mb-12 text-center"
                    >
                        <p className="text-orange-400 font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                            <Clock className="w-5 h-5 animate-pulse" />
                            LIMITED TIME RAMDAN OFFER: GET FLAT 20% EXTRA OFF ON ALL CUSTOM PROJECTS! (Valid for first 5 clients)
                        </p>
                    </motion.div>

                    {/* Main Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6">
                            <span className="text-amber-500 text-sm font-bold uppercase tracking-wider">Invest in Growth, Not Just a Website</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Build Your Empire With <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 text-glow">
                                Exclusive Launch Offers
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Stop paying full price for mediocre templates. Get elite performance at exclusive first-time client rates.
                        </p>
                    </motion.div>

                    {/* Website Type Selection */}
                    <div className="mb-16">
                        <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-4">
                            <h2 className="text-2xl font-bold text-white">Select Your Success Level</h2>
                            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                <Sparkles className="w-4 h-4 text-amber-500" />
                                All packages include Free SSL & 1 Year Support
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {websiteTypes.map((type, idx) => {
                                const Icon = type.icon;
                                return (
                                    <motion.div
                                        key={type.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setSelectedType(type.id)}
                                        className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all hover:scale-[1.02] ${
                                            selectedType === type.id 
                                                ? 'border-amber-500 bg-amber-500/5 shadow-lg shadow-amber-500/20' 
                                                : 'border-white/10 bg-white/5 hover:border-white/20'
                                        }`}
                                    >
                                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 ${type.tagColor} text-white text-[10px] font-black rounded-full shadow-lg whitespace-nowrap`}>
                                            {type.tag}
                                        </div>
                                        <Icon className="w-12 h-12 text-amber-500 mb-4" />
                                        <h3 className="text-xl font-bold text-white mb-2">{type.name}</h3>
                                        <p className="text-gray-400 text-sm mb-6 h-10">{type.description}</p>
                                        
                                        <div className="space-y-1">
                                            <p className="text-gray-500 text-sm line-through decoration-red-500/50">
                                                ₹{type.originalPrice.toLocaleString('en-IN')}
                                            </p>
                                            <div className="text-3xl font-black text-white">
                                                ₹{type.basePrice.toLocaleString('en-IN')}
                                                <span className="text-sm text-green-500 font-bold ml-2">SAVE {Math.round((1 - type.basePrice/type.originalPrice) * 100)}%</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>


                    {/* WordPress Warning (Only show if WordPress selected) */}
                    <AnimatePresence>
                        {selectedType === 'wordpress' && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mb-16"
                            >
                                <div className="bg-red-950/20 border-2 border-red-500/30 rounded-2xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <AlertTriangle className="w-8 h-8 text-red-500" />
                                        <h3 className="text-2xl font-bold text-white">⚠️ Hold On! Here's Why WordPress Might Cost You More</h3>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-red-400 font-bold mb-4 flex items-center gap-2">
                                                <X className="w-5 h-5" /> WordPress Problems
                                            </h4>
                                            <ul className="space-y-3">
                                                {wordpressVsCustom.wordpress.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                        <span>{item.point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                                <Check className="w-5 h-5" /> Custom Code Advantages
                                            </h4>
                                            <ul className="space-y-3">
                                                {wordpressVsCustom.custom.map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                        <span>{item.point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-8 p-6 bg-green-950/20 border border-green-500/30 rounded-xl">
                                        <p className="text-white font-bold text-lg mb-2">💡 Smart Move:</p>
                                        <p className="text-gray-300">
                                            Upgrade to <strong className="text-green-400">Custom Coded Website</strong> for just ₹30,000 more and get 2X performance, bulletproof security, and zero maintenance headaches. Your ROI will thank you.
                                        </p>
                                        <button 
                                            onClick={() => setSelectedType('custom')}
                                            className="mt-4 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg transition-all"
                                        >
                                            Switch to Custom Code →
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Add-ons Section */}
                    {selectedType && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-16"
                        >
                            <h2 className="text-2xl font-bold text-white mb-8 text-center">Supercharge Your Website</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {addons.map((addon) => {
                                    const Icon = addon.icon;
                                    const isSelected = selectedAddons.includes(addon.id);
                                    return (
                                        <motion.div
                                            key={addon.id}
                                            whileHover={{ scale: 1.02 }}
                                            onClick={() => toggleAddon(addon.id)}
                                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                                                isSelected 
                                                    ? 'border-amber-500 bg-amber-500/5' 
                                                    : 'border-white/10 bg-white/5 hover:border-white/20'
                                            }`}
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <Icon className={`w-8 h-8 ${isSelected ? 'text-amber-500' : 'text-gray-400'}`} />
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                                    isSelected ? 'border-amber-500 bg-amber-500' : 'border-gray-600'
                                                }`}>
                                                    {isSelected && <Check className="w-4 h-4 text-black" />}
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{addon.name}</h3>
                                            <div className="text-xl font-bold text-amber-500">
                                                +₹{addon.price.toLocaleString('en-IN')}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* Price Summary & CTA */}
                    {selectedType && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="sticky bottom-8 z-50"
                        >
                            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 shadow-2xl shadow-amber-900/50">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div>
                                        <p className="text-white/80 text-sm mb-2">Your Investment</p>
                                        <div className="text-5xl font-black text-white">
                                            ₹{calculateTotal().toLocaleString('en-IN')}
                                        </div>
                                        <p className="text-white/60 text-sm mt-2">One-time payment. Lifetime value.</p>
                                    </div>
                                    
                                    <button
                                        onClick={handleWhatsApp}
                                        className="group px-8 py-4 bg-black hover:bg-gray-900 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        <span>Start Building Now</span>
                                        <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </>
    );
};

export default Pricing;
