
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calculator, CheckCircle2, ArrowRight, RefreshCw, DollarSign, BarChart3, Globe, Shield, Zap } from 'lucide-react';
import SEO from '../../components/utils/SEO';

const CostEstimator = () => {
  const [pages, setPages] = useState(5);
  const [designStyle, setDesignStyle] = useState('standard');
  const [features, setFeatures] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const basePrice = 15000; // Base setup cost in INR
  const pricePerPage = 2000;

  const designMultipliers = {
    basic: 1,
    standard: 1.2,
    premium: 1.5,
    luxury: 2.0
  };

  const featureList = [
    { id: 'seo', name: 'Advanced SEO Setup', price: 8000, icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'cms', name: 'CMS (Content Management)', price: 12000, icon: <RefreshCw className="w-5 h-5" /> },
    { id: 'ecommerce', name: 'E-commerce Functionality', price: 25000, icon: <DollarSign className="w-5 h-5" /> },
    { id: 'auth', name: 'User Authentication', price: 10000, icon: <Shield className="w-5 h-5" /> },
    { id: 'multilingual', name: 'Multilingual Support', price: 15000, icon: <Globe className="w-5 h-5" /> },
    { id: 'analytics', name: 'Analytics Dashboard', price: 10000, icon: <Zap className="w-5 h-5" /> }
  ];

  useEffect(() => {
    let cost = basePrice + (pages * pricePerPage);
    cost = cost * designMultipliers[designStyle];
    
    features.forEach(featureId => {
      const feature = featureList.find(f => f.id === featureId);
      if (feature) cost += feature.price;
    });

    setTotalCost(Math.round(cost));
  }, [pages, designStyle, features]);

  const toggleFeature = (id) => {
    if (features.includes(id)) {
      setFeatures(features.filter(f => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <SEO 
        title="Website Cost Estimator | Code'N'Click Technologies"
        description="Calculate the estimated cost of your website project instantly. Custom pricing for web development, design, and SEO services."
        canonical="/tools/website-cost-estimator"
        keywords="website cost calculator, web development price estimator, cost to build website india, website pricing calculator"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
          >
            <Calculator className="w-4 h-4" />
            <span>Interactive Quote Tool</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Estimate Your <span className="text-blue-500">Project Cost</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Get a rough estimate for your dream website in seconds. Adjust the parameters to see how features impact the budget.
          </p>
        </div>
      </section>

      {/* Calculator Interface */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Pages Slider */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
               <h3 className="text-xl font-bold mb-6 flex justify-between items-center">
                 <span>Number of Pages</span>
                 <span className="text-blue-400 text-2xl">{pages}</span>
               </h3>
               <input 
                 type="range" 
                 min="1" 
                 max="50" 
                 value={pages} 
                 onChange={(e) => setPages(parseInt(e.target.value))}
                 className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
               />
               <div className="flex justify-between text-xs text-gray-500 mt-2">
                 <span>1 Page</span>
                 <span>50 Pages</span>
               </div>
            </div>

            {/* Design Style */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-6">Design Complexity</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {Object.keys(designMultipliers).map((style) => (
                  <button
                    key={style}
                    onClick={() => setDesignStyle(style)}
                    className={`p-4 rounded-xl border transition-all ${
                      designStyle === style 
                      ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-800/30 border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    <span className="capitalize font-semibold block mb-1">{style}</span>
                    <span className="text-xs opacity-70">
                      {style === 'basic' && 'Clean & Simple'}
                      {style === 'standard' && 'Modern Professional'}
                      {style === 'premium' && 'High-End Custom'}
                      {style === 'luxury' && 'Award Winning'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
               <h3 className="text-xl font-bold mb-6">Add-on Features</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                 {featureList.map((feature) => (
                   <div 
                     key={feature.id}
                     onClick={() => toggleFeature(feature.id)}
                     className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                       features.includes(feature.id)
                       ? 'bg-blue-600/10 border-blue-500/50 text-white'
                       : 'bg-gray-800/20 border-gray-700 text-gray-400 hover:bg-gray-800'
                     }`}
                   >
                     <div className={`p-2 rounded-lg ${features.includes(feature.id) ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-500'}`}>
                       {feature.name === 'Advanced SEO Setup' ? <BarChart3 size={18} /> : feature.icon}
                     </div>
                     <span className="font-medium">{feature.name}</span>
                     {features.includes(feature.id) && <CheckCircle2 size={18} className="ml-auto text-blue-500" />}
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Sticky Total Column */}
          <div className="lg:col-span-1">
             <div className="sticky top-24 bg-gradient-to-b from-blue-900/20 to-gray-900 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
               <h2 className="text-gray-400 font-medium mb-2">Estimated Total Cost</h2>
               <div className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                 {formatCurrency(totalCost)}
                 <span className="text-lg text-gray-500 block mt-2 font-normal text-base">*Approximate estimate</span>
               </div>
               
               <div className="space-y-4 mb-8 text-sm text-gray-300">
                 <div className="flex justify-between border-b border-gray-700 pb-2">
                   <span>Project Scale</span>
                   <span>{pages} Pages</span>
                 </div>
                 <div className="flex justify-between border-b border-gray-700 pb-2">
                   <span>Design Level</span>
                   <span className="capitalize">{designStyle}</span>
                 </div>
                 <div className="flex justify-between border-b border-gray-700 pb-2">
                   <span>Add-ons</span>
                   <span>{features.length} selected</span>
                 </div>
               </div>

               <Link 
                 to="/contact" 
                 state={{ estimatedCost: totalCost, projectDetails: { pages, designStyle, features } }}
                 className="block w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-center font-bold text-white transition-all shadow-lg shadow-blue-600/25 mb-4"
               >
                 Get Official Quote
               </Link>
               <p className="text-xs text-center text-gray-500">
                 This is a rough estimate. Final pricing may vary based on specific requirements.
               </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CostEstimator;
