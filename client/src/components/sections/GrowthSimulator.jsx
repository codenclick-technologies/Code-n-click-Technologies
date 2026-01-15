import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Code, TrendingUp, Users, ArrowRight, CheckCircle, Smartphone, Globe, ShoppingCart, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GrowthSimulator = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    type: '',
    industry: '',
    traffic: 1000,
    features: []
  });

  const [showResult, setShowResult] = useState(false);

  const handleSelectType = (type) => {
    setSelections({ ...selections, type });
    setStep(2);
  };

  const handleSelectIndustry = (industry) => {
    setSelections({ ...selections, industry });
    setStep(3);
  };

  const toggleFeature = (feature) => {
    setSelections(prev => {
      if (prev.features.includes(feature)) {
        return { ...prev, features: prev.features.filter(f => f !== feature) };
      }
      return { ...prev, features: [...prev.features, feature] };
    });
  };

  const calculateGrowth = () => {
    setShowResult(true);
  };

  // Tech Stack & Estimate Logic (Simulated)
  const getTechStack = () => {
    if (selections.type === 'App') return ['React Native', 'Node.js', 'Firebase'];
    if (selections.type === 'E-commerce') return ['Next.js', 'Shopify/Stripe', 'PostgreSQL', 'Redis'];
    return ['React', 'Tailwind', 'Node.js', 'MongoDB'];
  };

  const getEstimate = () => {
    let base = 12000;
    if (selections.type === 'App') base = 35000;
    if (selections.type === 'E-commerce') base = 25000;
    
    // Add feature costs
    if (selections.features.includes('AI/Chatbot')) base += 5000;
    if (selections.features.includes('Payments')) base += 3000;
    if (selections.features.includes('Admin Dashboard')) base += 4000;
    
    // Format
    return `₹${(base / 1000).toFixed(0)}k - ₹${((base * 1.3) / 1000).toFixed(0)}k`;
  };

  const getTimeline = () => {
    if (selections.type === 'App') return '6-8 Weeks';
    if (selections.type === 'E-commerce') return '4-6 Weeks';
    return '2-4 Weeks';
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#0a0a0f]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-4"
          >
            Interactive Project Builder
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Estimate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Growth</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Build your dream project in 30 seconds. Get a tech roadmap, timeline, and cost estimate instantly. No hidden sales calls.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {!showResult ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
            >
              {/* Progress Bar */}
              <div className="flex gap-4 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-blue-500' : 'bg-white/10'}`} />
                ))}
              </div>

              {/* Step 1: Project Type */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
                  <h3 className="text-2xl font-bold text-white text-center">What are we building today?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { id: 'Website', icon: Globe, desc: 'Corporate, Portfolio, Landing Page' },
                      { id: 'E-commerce', icon: ShoppingCart, desc: 'Online Store, Shopify, Marketplace' },
                      { id: 'App', icon: Smartphone, desc: 'iOS, Android, Cross-platform' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelectType(item.id)}
                        className={`group p-6 rounded-2xl border transition-all text-left hover:scale-105 ${selections.type === item.id ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-white/10 hover:border-blue-500/50'}`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${selections.type === item.id ? 'bg-blue-600 text-white' : 'bg-white/10 text-gray-400 group-hover:bg-blue-600/20 group-hover:text-blue-400'}`}>
                          <item.icon size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.id}</h4>
                        <p className="text-sm text-gray-400 group-hover:text-gray-300">{item.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Industry */}
              {step === 2 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
                  <h3 className="text-2xl font-bold text-white text-center">Which industry is this for?</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Healthcare', 'Real Estate', 'Education', 'Finance', 'Fashion', 'SaaS', 'Restaurant', 'Other'].map((ind) => (
                      <button
                        key={ind}
                        onClick={() => handleSelectIndustry(ind)}
                        className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:text-blue-400 transition-all font-medium text-gray-300"
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-start">
                    <button onClick={() => setStep(1)} className="text-gray-500 hover:text-white transition-colors">← Back</button>
                  </div>
                </div>
              )}

              {/* Step 3: Features */}
              {step === 3 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-300">
                  <h3 className="text-2xl font-bold text-white text-center">Select Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: 'User Login/Auth', icon: Users },
                      { id: 'Payments', icon: CheckCircle },
                      { id: 'AI/Chatbot', icon: Zap },
                      { id: 'Admin Dashboard', icon: TrendingUp }
                    ].map((feat) => (
                      <button
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`p-4 rounded-xl border flex items-center justify-between transition-all ${selections.features.includes(feat.id) ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
                      >
                        <span className="flex items-center gap-3">
                          <feat.icon size={18} />
                          {feat.id}
                        </span>
                        {selections.features.includes(feat.id) && <CheckCircle size={18} className="text-blue-400" />}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-6">
                    <button onClick={() => setStep(2)} className="text-gray-500 hover:text-white">← Back</button>
                    <button
                      onClick={calculateGrowth}
                      className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-600/25 transition-all flex items-center gap-2"
                    >
                      <Rocket size={18} />
                      Generate Blueprint
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Result Summary */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-gray-400 uppercase text-sm font-bold tracking-wider mb-2">Project Estimate</h3>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {getEstimate()} <span className="text-lg text-gray-500 font-normal">/ Project</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-400">Timeline</span>
                      <span className="text-white font-bold">{getTimeline()}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                      <span className="text-gray-400">Tech Stack</span>
                      <div className="flex gap-2">
                        {getTechStack().slice(0, 2).map(t => (
                          <span key={t} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 italic mb-6">
                  *This is an AI-generated estimate based on standard market rates. Your final quote may vary based on specific requirements.
                </p>

                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  Book Discovery Call <ArrowRight size={18} />
                </button>
              </div>

              {/* Value Props */}
              <div className="bg-[#0f0f13] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]" />
                
                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Why build with us?</h3>
                <ul className="space-y-6 relative z-10">
                  {[
                    { title: 'Business-First', desc: 'We focus on ROI and Leads, not just code.' },
                    { title: 'Scalable Architecture', desc: 'Built to handle 1 Million+ users from Day 1.' },
                    { title: 'Post-Launch Support', desc: '30 Days free support + Growth strategy.' }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0f0f13]" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">Trusted by 500+ Founders</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GrowthSimulator;
