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
        title="Home"
        description="Code-n-Click Technologies provides top-notch web development, SaaS solutions, and digital marketing services to grow your business."
        keywords="web development, saas, digital marketing, seo, graphic design"
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
