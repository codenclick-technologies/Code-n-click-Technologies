import React from 'react';
import Hero from '../components/sections/Hero';


const ServicesGrid = React.lazy(() => import('../components/sections/ServicesGrid'));
const WhyChooseUs = React.lazy(() => import('../components/sections/WhyChooseUs'));
const StatsSection = React.lazy(() => import('../components/sections/StatsSection'));
const ProcessSection = React.lazy(() => import('../components/sections/ProcessSection'));
const TestimonialsSection = React.lazy(() => import('../components/sections/TestimonialsSection'));
const CTASection = React.lazy(() => import('../components/sections/CTASection'));

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


      <React.Suspense fallback={<div className="h-96 bg-gray-950" />}>
        <ServicesGrid />
        <WhyChooseUs />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </React.Suspense>
    </div>
  );
};

export default Home;
