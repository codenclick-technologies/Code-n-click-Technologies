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
        title="Your Partner in Digital Growth | Web Development & Marketing Experts"
        description="We don't just build websites; we build businesses. From custom software to ROI-focused digital marketing, Codenclick Technologies is your partner in scaling up. Based in Faridabad & Delhi NCR, serving the world."
        keywords="Digital Growth Partner, Custom Web Solutions, ROI Marketing, Business Scaling Experts, Codenclick Technologies, Web Development Faridabad, Digital Agency Delhi"
        canonical="/"
      >

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
