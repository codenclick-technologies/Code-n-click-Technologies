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
        title="No.1 Web Development & Digital Marketing Agency in Faridabad, Delhi NCR"
        description="Codenclick Technologies is the Best IT Company in Faridabad & Delhi. We provide Premium Web Development, SaaS, SEO, Google/Meta Ads & Graphics. #1 Digital Agency for Business Growth."
        keywords="No1 Digital Marketing Agency Delhi, No1 Digital Marketing Agency Faridabad, Best Digital Marketing Agency Delhi, Best Digital Marketing Agency Faridabad, Premium Digital Marketing Services Delhi, Premium Digital Marketing Services Faridabad, Top Software Development Company Delhi, Top Software Development Company Faridabad, Best Web Development Company Delhi, Best Web Development Company Faridabad, Premium SEO Services Delhi, Premium SEO Services Faridabad, Best IT Company Delhi NCR, Top IT Company Faridabad, Custom Software Development, SaaS Solutions India, Meta Ads Expert Delhi, Google Ads Consultant Faridabad"
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
