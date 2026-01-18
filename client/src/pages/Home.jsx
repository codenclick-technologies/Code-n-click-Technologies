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
        title="Web Development & Digital Marketing Company in Delhi | Codenclick Technologies"
        description="Codenclick Technologies is the best web development and digital marketing agency in Delhi NCR. We build high-performance websites and ROI-driven marketing campaigns to scale your business."
        keywords="Web Development Company Delhi, Digital Marketing Agency Delhi, SEO Services Delhi, Best IT Company in Delhi, Codenclick Technologies"
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
