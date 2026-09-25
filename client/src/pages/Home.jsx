import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import ConnectedGrowthEngine from '../components/sections/ConnectedGrowthEngine';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';
import SEOHead from '../components/utils/SEOHead';

const homeFAQs = [
  {
    question: "What digital services does Codenclick Technologies offer?",
    answer: "Codenclick Technologies specializes in custom full-stack Web Development (React & Next.js), Scalable SaaS Platforms, High-ROAS Google & Meta Ads Campaigns, UI/UX Design, and Top 1% SEO & Generative Search Optimization (AEO/GEO)."
  },
  {
    question: "How long does it take to launch a custom web application?",
    answer: "Most MVP and business website projects launch within 2 to 4 weeks. Enterprise SaaS and complex web portals typically take 6 to 12 weeks, with weekly agile sprint demos and transparent milestone tracking."
  },
  {
    question: "Do you guarantee code ownership and post-launch support?",
    answer: "Yes, 100%. You own all source code, IP rights, and private GitHub repositories upon project completion. We also provide 30 to 90 days of complimentary post-launch warranty and continuous maintenance retainers."
  },
  {
    question: "Where is Codenclick Technologies located?",
    answer: "We are headquartered in New Delhi, India, serving growing businesses, startups, and enterprises across 18+ major Indian tech hubs as well as international clients in Dubai (UAE), the UK, and North America."
  }
];

const Home = () => {
  return (
    <div className="bg-white text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white font-sans">
      <SEOHead
        title="Best Web Development & Digital Growth Agency in Delhi | Codenclick Technologies"
        description="Scale your business with Codenclick Technologies. High-performance custom Web Development, SaaS platforms, high-ROAS Meta/Google Ads, and top 1% SEO in New Delhi."
        canonicalPath="/"
        faqs={homeFAQs}
      />

      {/* 1. Hero Section: Clean Luxury White Canvas, Interactive Capability Console & Social Proof */}
      <Hero />

      {/* 2. Core Capabilities: 6 Detailed Cards + Regional City Hub Navigation */}
      <ServicesGrid />

      {/* 3. The Connected Digital Growth Engine: 5-Stage Interactive Pipeline */}
      <ConnectedGrowthEngine />

      {/* 4. Why Choose Us: 4 Value Pillars + Switch To Us Banner */}
      <WhyChooseUs />

      {/* 5. Live Stats: Animated Counters (200+ Projects, 95% Retention, +340% ROI) */}
      <StatsSection />

      {/* 6. Execution Methodology: 4-Stage Transparent Roadmap */}
      <ProcessSection />

      {/* 7. Client Trust: Verified Founder Testimonials & Outcomes */}
      <TestimonialsSection />

      {/* 8. High-Impact Closing CTA: Strategy Session Booking, WhatsApp Chat & Brochure Download */}
      <CTASection />
    </div>
  );
};

export default Home;
