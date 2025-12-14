import React from 'react';
import Hero from '../components/sections/Hero';


import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

import SEO from '../components/utils/SEO';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Best Software Development & Digital Marketing Agency in India"
        description="Code-n-Click Technologies is a leading software development and digital marketing agency in India. We specialize in web development, SaaS solutions, mobile apps, SEO, Google Ads, Meta Ads, and graphic design services. Transform your business with our expert team."
        keywords="software development company India, web development services, SaaS development, mobile app development, digital marketing agency, SEO services India, Google Ads management, Meta Ads, Facebook Ads, graphic design services, UI UX design, custom software development, enterprise solutions, startup development, ecommerce development, React development, Node.js development"
        canonical="/"
      >
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Code-n-Click Technologies",
              "url": "https://codenclick.com",
              "logo": "https://codenclick.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/codenclick",
                "https://www.linkedin.com/company/codenclick",
                "https://twitter.com/codenclick"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9876543210",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </SEO>
      <Hero />


      <ServicesGrid />
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
