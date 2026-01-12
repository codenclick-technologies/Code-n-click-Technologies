
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, ArrowRight, Star, Shield, Zap, Globe } from 'lucide-react';
import SEO from '../components/utils/SEO';

const servicesData = {
  'web-development': {
    title: 'Web Development',
    description: 'Custom, high-performance websites and web apps built for speed and conversion.',
    icon: <Globe className="w-12 h-12 text-blue-400" />,
    features: ['Custom React/Next.js Apps', 'E-commerce Solutions', 'CMS Integration', 'PWA Development']
  },
  'seo': {
    title: 'SEO Services',
    description: 'Data-driven SEO strategies to rank your business #1 on Google.',
    icon: <Zap className="w-12 h-12 text-yellow-400" />,
    features: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Backlink Building']
  },
  'meta-ads': {
    title: 'Meta Ads',
    description: 'High-ROI Facebook and Instagram ad campaigns that drive leads.',
    icon: <Zap className="w-12 h-12 text-purple-400" />,
    features: ['Audience Targeting', 'Creative A/B Testing', 'Conversion Tracking', 'Retargeting Campaigns']
  },
  'google-ads': {
    title: 'Google Ads',
    description: 'PPC campaigns that put your business in front of high-intent buyers.',
    icon: <Zap className="w-12 h-12 text-green-400" />,
    features: ['Search Ads', 'Display Network', 'Shopping Ads', 'ROI Optimization']
  },
  'graphic-design': {
    title: 'Graphic Design',
    description: 'Stunning visuals that elevate your brand identity.',
    icon: <Zap className="w-12 h-12 text-pink-400" />,
    features: ['Logo Design', 'Brand Identity', 'Social Media Graphics', 'Marketing Materials']
  },
  'saas-development': {
    title: 'SaaS Development',
    description: 'Scalable Software-as-a-Service platforms built for growth.',
    icon: <Zap className="w-12 h-12 text-cyan-400" />,
    features: ['Multi-tenant Architecture', 'Subscription Billing', 'Cloud Infrastructure', 'API Development']
  } 
};

const ServiceLocation = () => {
  const { service, city } = useParams();
  const serviceInfo = servicesData[service];
  const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);

  if (!serviceInfo) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Service Not Found</h2>
          <Link to="/services" className="text-blue-400 hover:text-blue-300">View All Services</Link>
        </div>
      </div>
    );
  }

  const pageTitle = `Best ${serviceInfo.title} Company in ${formattedCity} | Top Rated Agency`;
  const pageDesc = `Looking for the best ${serviceInfo.title} in ${formattedCity}? Code-n-Click Technologies offers premium, results-driven ${serviceInfo.title.toLowerCase()} services tailored for ${formattedCity} businesses. Get a free quote today!`;

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <SEO 
        title={pageTitle}
        description={pageDesc}
        canonical={`/services/${service}/in/${city}`}
        keywords={`${serviceInfo.title} ${formattedCity}, Best ${serviceInfo.title} Agency ${formattedCity}, Top ${serviceInfo.title} Company ${formattedCity}, ${serviceInfo.title} Services near me`}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": serviceInfo.title,
            "provider": {
              "@type": "Organization",
              "name": "Code-n-Click Technologies"
            },
            "areaServed": {
              "@type": "City",
              "name": formattedCity
            },
            "description": pageDesc,
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": `${serviceInfo.title} Packages`,
                "itemListElement": serviceInfo.features.map((feature, idx) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": feature
                    }
                }))
            }
          },
          {
             "@context": "https://schema.org",
             "@type": "BreadcrumbList",
             "itemListElement": [
               {
                 "@type": "ListItem",
                 "position": 1,
                 "name": "Home",
                 "item": "https://codenclick.in"
               },
               {
                 "@type": "ListItem",
                 "position": 2,
                 "name": "Services",
                 "item": "https://codenclick.in/services"
               },
               {
                 "@type": "ListItem",
                 "position": 3,
                 "name": `${serviceInfo.title} in ${formattedCity}`,
                 "item": `https://codenclick.in/services/${service}/in/${city}`
               }
             ]
          }
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8"
          >
            <MapPin className="w-4 h-4" />
            <span>Serving Businesses in {formattedCity}</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              #1 {serviceInfo.title} Agency
            </span>
            <br />
            <span className="text-blue-500">in {formattedCity}</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {pageDesc} We help {formattedCity} brands scale with cutting-edge technology and data-driven marketing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30"
            >
              Get a Quote for {formattedCity}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-900/30 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceInfo.features.map((feature, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-gray-950 border border-gray-800 hover:border-blue-500/50 transition-colors">
                      <CheckCircle2 className="w-8 h-8 text-blue-500 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{feature}</h3>
                      <p className="text-gray-400 text-sm">Top-rated {feature.toLowerCase()} services available in {formattedCity}.</p>
                  </div>
              ))}
           </div>
        </div>
      </section>
      
      {/* City Context Section */}
      <section className="py-24">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us in {formattedCity}?</h2>
            <p className="text-gray-400 text-lg mb-8">
               We understand the {formattedCity} market. Whether you are a startup in the city center or an established enterprise, 
               our local expertise ensures your {serviceInfo.title.toLowerCase()} strategy is aligned with local trends and customer behavior.
            </p>
            <div className="grid grid-cols-3 gap-8 text-center">
               <div className="p-6 rounded-xl bg-gray-800/50">
                  <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                  <div className="text-sm text-gray-400">Clients in {formattedCity}</div>
               </div>
               <div className="p-6 rounded-xl bg-gray-800/50">
                  <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
                  <div className="text-sm text-gray-400">Local Rating</div>
               </div>
               <div className="p-6 rounded-xl bg-gray-800/50">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default ServiceLocation;
