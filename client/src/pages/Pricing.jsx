import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
    Check, X, Zap, Shield, Rocket, TrendingUp, 
    AlertTriangle, Clock, DollarSign, MessageCircle,
    Sparkles, Code, Layers, Database, Lock, ArrowRight,
    Star, Award, Globe, ZapOff
} from 'lucide-react';

const Pricing = () => {
    const [selectedType, setSelectedType] = useState('custom'); // Default to best seller
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [isHovered, setIsHovered] = useState(null);

    const websiteTypes = [
        {
            id: 'wordpress',
            name: 'Lite CMS',
            subtitle: 'WordPress Based',
            basePrice: 15000,
            originalPrice: 24999,
            tag: 'ECONOMY',
            tagColor: 'from-gray-500 to-gray-700',
            icon: Globe,
            description: 'Quick deployment using established templates.',
            features: ['Template-based design', 'Plugin-dependent features', 'Basic SEO setup', 'Standard security', '5 pages included'],
            isPopular: false
        },
        {
            id: 'custom',
            name: 'Elite Business',
            subtitle: 'Custom Coded (React/Next.js)',
            basePrice: 45000,
            originalPrice: 65000,
            tag: 'MOST POPULAR',
            tagColor: 'from-blue-600 to-cyan-500',
            icon: Code,
            description: 'Hand-crafted for extreme performance and scalability.',
            features: ['Custom UI/UX Design', 'Lightning fast performance', 'Military-grade security', 'Advanced SEO architecture', 'Unlimited scalability', 'Zero maintenance overhead'],
            isPopular: true
        },
        {
            id: 'ecommerce',
            name: 'Global Store',
            subtitle: 'E-commerce Platform',
            basePrice: 75000,
            originalPrice: 110000,
            tag: '30% OFF',
            tagColor: 'from-purple-600 to-pink-500',
            icon: Layers,
            description: 'A complete digital storefront built to convert.',
            features: ['Secure Payment Gateway', 'Inventory Management', 'Customer Dashboards', 'Order Tracking system', 'Bulk product uploads', 'Multi-currency support'],
            isPopular: false
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            subtitle: 'SaaS / Complex Systems',
            basePrice: 200000,
            originalPrice: 350000,
            tag: 'ULTIMATE',
            tagColor: 'from-amber-500 to-orange-600',
            icon: Database,
            description: 'High-stake architecture for enterprise-grade needs.',
            features: ['Custom API development', 'Advanced Load Balancing', 'Dedicated Support Team', 'Multi-tenant Support', 'Full System Integration', 'Premium SLA'],
            isPopular: false
        }
    ];

    const addons = [
        { id: 'seo', name: 'Elite SEO Package', price: 15000, originalPrice: 25000, icon: TrendingUp, desc: 'Rank on #1 page of Google' },
        { id: 'ai-chatbot', name: 'Neural Chatbot', price: 20000, originalPrice: 35000, icon: MessageCircle, desc: '24/7 AI-powered sales agent' },
        { id: 'cms', name: 'Admin Control Hub', price: 40000, originalPrice: 60000, icon: Lock, desc: 'Manage content with ease' },
        { id: 'analytics', name: 'Predictive Analytics', price: 25000, originalPrice: 40000, icon: Sparkles, desc: 'Data-driven growth insights' },
    ];

    const wordpressVsCustom = {
        wordpress: [
            { point: 'Slow loading speeds (heavy code)', bad: true },
            { point: 'Vulnerable to plugin security leaks', bad: true },
            { point: 'Need regular manual updates', bad: true },
            { point: 'Limited by template structure', bad: true }
        ],
        custom: [
            { point: 'Instant load times (< 1s)', bad: false },
            { point: 'Bulletproof custom security', bad: false },
            { point: 'Zero maintenance headaches', bad: false },
            { point: 'Complete design freedom', bad: false }
        ]
    };

    const calculateTotal = () => {
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
        
        const message = `🚀 Hi Codenclick Team! I'm interested in the ${selectedWebsite?.name} package. ${selectedAddonsList ? `\n\nIncluded Add-ons: ${selectedAddonsList}.` : ''}\n\nEstimated Budget: ₹${total.toLocaleString('en-IN')}.\n\nLet's discuss my project details!`;
        
        window.open(`https://wa.me/918700198968?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#020205] text-white selection:bg-blue-500/30">
            <Helmet>
                <title>Pricing Plans | Codenclick Technologies - Premium Web Solutions</title>
                <meta name="description" content="Transparent, performance-driven pricing for web development, SEO, and enterprise SaaS solutions." />
            </Helmet>

            {/* Ambient Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-600/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
                    >
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Fixed Pricing, No Hidden Traps</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Dominance</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        Whether you're a startup or an enterprise, our pricing is designed for maximum ROI. 
                        Get high-performance assets that work for you 24/7.
                    </motion.p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {websiteTypes.map((type, idx) => {
                        const Icon = type.icon;
                        const isSelected = selectedType === type.id;
                        return (
                            <motion.div
                                key={type.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onMouseEnter={() => setIsHovered(type.id)}
                                onMouseLeave={() => setIsHovered(null)}
                                onClick={() => setSelectedType(type.id)}
                                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                                    isSelected 
                                        ? 'bg-white/[0.03] border-blue-500/50 shadow-2xl shadow-blue-500/10' 
                                        : 'bg-white/[0.01] border-white/10 hover:border-white/20'
                                }`}
                            >
                                {/* Active Selection Glow */}
                                {isSelected && (
                                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
                                )}

                                {/* Tag */}
                                <div className={`absolute -right-12 top-6 rotate-45 px-12 py-1 bg-gradient-to-r ${type.tagColor} text-white font-bold text-[10px] tracking-widest uppercase shadow-lg z-10`}>
                                    {type.tag}
                                </div>

                                <div className={`mb-8 p-3 inline-flex rounded-2xl bg-gradient-to-br ${isSelected ? 'from-blue-500 to-cyan-500' : 'from-white/10 to-white/5 shadow-inner'}`}>
                                    <Icon className={`w-8 h-8 ${isSelected ? 'text-white' : 'text-gray-400'}`} />
                                </div>

                                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-blue-400 transition-colors">{type.name}</h3>
                                <p className="text-gray-500 text-sm mb-6 font-medium tracking-wide uppercase">{type.subtitle}</p>
                                
                                <div className="mb-8">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-4xl font-bold text-white">₹{type.basePrice.toLocaleString('en-IN')}</span>
                                        <span className="text-gray-500 text-sm line-through">₹{type.originalPrice.toLocaleString('en-IN')}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">{type.description}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {type.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                                            <div className="mt-1 p-0.5 rounded-full bg-blue-500/10 text-blue-500">
                                                <Check className="w-3.5 h-3.5" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                                    isSelected 
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                                        : 'bg-white/5 text-gray-300 group-hover:bg-white/10'
                                }`}>
                                    {isSelected ? 'Plan Selected' : 'Choose Plan'}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Comparison / Education Section */}
                <AnimatePresence mode="wait">
                    {selectedType === 'wordpress' && (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            className="mb-24 relative overflow-hidden rounded-[2.5rem] border border-red-500/20 bg-red-500/5 p-8 md:p-12"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertTriangle className="w-64 h-64 text-red-500" />
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase mb-6">
                                        <ZapOff className="w-4 h-4" />
                                        <span>Performance Warning</span>
                                    </div>
                                    <h3 className="text-3xl font-bold mb-6">Why WordPress might be a <span className="text-red-500">bottleneck</span> for your growth.</h3>
                                    
                                    <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                        <div className="space-y-4">
                                            <h4 className="text-gray-500 font-bold text-xs uppercase tracking-tighter">The WordPress Reality</h4>
                                            {wordpressVsCustom.wordpress.map((item, id) => (
                                                <div key={id} className="flex items-center gap-3 text-sm text-gray-400">
                                                    <X className="w-4 h-4 text-red-500 shrink-0" />
                                                    <span>{item.point}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-blue-400 font-bold text-xs uppercase tracking-tighter">The Custom Advantage</h4>
                                            {wordpressVsCustom.custom.map((item, id) => (
                                                <div key={id} className="flex items-center gap-3 text-sm text-gray-400">
                                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                                    <span>{item.point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                                    <p className="text-lg text-gray-300 mb-6 italic leading-relaxed">
                                        "90% of our clients who started with WordPress eventually migrated to Custom to save on hosting costs and improve Google rankings."
                                    </p>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center p-2 overflow-hidden">
                                            <img src="/faviconimage.png" alt="Codenclick" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="font-bold">Team Codenclick</p>
                                            <p className="text-xs text-gray-500">Growth Specialists</p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => setSelectedType('custom')}
                                        className="w-full py-4 bg-white text-black font-black rounded-2xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                                    >
                                        Upgrade to Custom Plan <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Add-ons Builder */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Powerful Add-ons</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Enhance your digital ecosystem with these elite features designed to drive more leads and automate your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {addons.map((addon) => {
                            const Icon = addon.icon;
                            const isSelected = selectedAddons.includes(addon.id);
                            return (
                                <motion.div
                                    key={addon.id}
                                    whileHover={{ y: -5 }}
                                    onClick={() => toggleAddon(addon.id)}
                                    className={`relative p-6 rounded-3xl border-2 cursor-pointer transition-all duration-300 ${
                                        isSelected 
                                            ? 'border-blue-500 bg-blue-500/5' 
                                            : 'border-white/5 bg-white/[0.02] hover:border-white/10'
                                    }`}
                                >
                                    <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${isSelected ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold mb-1 text-white">{addon.name}</h3>
                                    <p className="text-xs text-gray-500 mb-4 h-8 overflow-hidden">{addon.desc}</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-blue-400 font-bold">₹{addon.price.toLocaleString('en-IN')}</span>
                                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-600'}`}>
                                            {isSelected && <Check className="w-3 h-3 text-white font-bold" />}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/5">
                    <div className="text-center">
                        <p className="text-3xl font-bold mb-1">500+</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold mb-1">99.9%</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Uptime Guarantee</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold mb-1">4.9/5</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Client Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold mb-1">24/7</p>
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Premium Support</p>
                    </div>
                </div>

            </div>

            {/* Sticky Order Bar */}
            <motion.div 
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="fixed bottom-8 inset-x-4 md:inset-x-0 mx-auto max-w-3xl z-[100]"
            >
                <div className="p-4 md:p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-gray-400 text-sm">Total Investment:</span>
                            <span className="px-2 py-0.5 rounded-lg bg-green-500/10 text-green-500 text-[10px] font-bold uppercase">Incl. Taxes</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-white">₹{calculateTotal().toLocaleString('en-IN')}</span>
                            <span className="text-gray-500 text-xs">For {websiteTypes.find(t => t.id === selectedType)?.name}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleWhatsApp}
                        className="group relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <MessageCircle className="w-6 h-6" />
                        <span className="relative">Activate Project Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
                    </button>
                </div>
            </motion.div>

            {/* Global CTA Section */}
            <div className="max-w-7xl mx-auto px-4 py-32 text-center">
                <h2 className="text-4xl font-bold mb-6">Need a custom quote for a complex project?</h2>
                <p className="text-gray-400 mb-10 max-w-xl mx-auto">We specialize in turning complex ideas into high-converting digital realities. Let's talk about your specific needs.</p>
                <button 
                    onClick={() => window.open('https://wa.me/918700198968', '_blank')}
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors font-bold"
                >
                    Contact Strategy Team
                </button>
            </div>
        </div>
    );
};

export default Pricing;
