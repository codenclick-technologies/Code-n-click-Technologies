import React from 'react';
import Hero from '../components/sections/Hero';


import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import SEOContentSection from '../components/sections/SEOContentSection';

import SEO from '../components/utils/SEO';

const Home = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Top Web & Digital Marketing Agency Faridabad"
        description="Codenclick Technologies: Best IT Company in Faridabad & Delhi. We provide Premium Web Development, SaaS, SEO, Ads & Graphics for Business Growth."
        keywords="No1 Digital Marketing Agency Delhi, No1 Digital Marketing Agency Faridabad, Best Digital Marketing Agency Delhi, Best Digital Marketing Agency Faridabad, Premium Digital Marketing Services Delhi, Premium Digital Marketing Services Faridabad, Top Software Development Company Delhi, Top Software Development Company Faridabad, Best Website Development Company Delhi, Best Website Development Company Faridabad, Premium SEO Services Delhi, Premium SEO Services Faridabad, Performance Marketing Services Delhi, Meta Ads Expert in Faridabad, Custom Software Development, SaaS Solutions India, Meta Ads Expert Delhi, Google Ads Consultant Faridabad"
        canonical="/"
      >

      </SEO>
      <Hero />


      <ServicesGrid />
      <WhyChooseUs />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <SEOContentSection />
      <CTASection />
    </div>
  );
};

export default Home;
