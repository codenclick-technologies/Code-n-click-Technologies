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
        title="Best Software Development & Digital Marketing Agency in Faridabad"
        description="No.1 Digital Marketing Agency in Delhi & Faridabad - Code-n-Click Technologies. We are the best and premium IT company specializing in web development, SaaS solutions, mobile apps, SEO, Google Ads, Meta Ads, and graphic design services. Transform your business with our expert team."
        keywords="No1 Digital Marketing Agency Delhi, No1 Digital Marketing Agency Faridabad, Best Digital Marketing Agency Delhi, Best Digital Marketing Agency Faridabad, Premium Digital Marketing Services Delhi, Premium Digital Marketing Services Faridabad, Top Software Development Company Delhi, Top Software Development Company Faridabad, Best Web Development Company Delhi, Best Web Development Company Faridabad, Premium SEO Services Delhi, Premium SEO Services Faridabad, Best IT Company Delhi NCR, Top IT Company Faridabad, software development company, web development services, SaaS development, mobile app development, Google Ads management, Meta Ads, graphic design services"
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
