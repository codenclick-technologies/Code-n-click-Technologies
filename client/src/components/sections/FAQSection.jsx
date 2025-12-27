import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const faqs = [
  {
    question: "What services does Codenclick Technologies offer?",
    answer: "Codenclick Technologies is a full-service digital agency. We offer end-to-end Web Development (MERN Stack, Next.js), Mobile App Development, Custom Software Solutions (SaaS), and comprehensive Digital Marketing services including SEO (Search Engine Optimization), PPC (Pay Per Click) advertising, and Social Media Marketing."
  },
  {
    question: "Where are you located? Do you work with international clients?",
    answer: "We are headquartered in Faridabad, Haryana (Delhi NCR), India. While we have a strong local presence serving businesses in Delhi, Gurgaon, and Noida, we are a global agency. We successfully work with clients across the USA, UK, Australia, and Dubai, leveraging remote collaboration tools to ensure seamless project delivery."
  },
  {
    question: "How much does a custom website or software project cost?",
    answer: "Project costs vary significantly based on complexity, features, and timeline. A simple business website starts at a different price point than a complex SaaS platform. We offer free consultations to understand your requirements and provide a detailed, transparent quote tailored to your budget and goals. Contact us for a no-obligation estimate."
  },
  {
    question: "Do you provide SEO and Digital Marketing for existing websites?",
    answer: "Yes, absolutely. We can audit your existing website and implement a robust SEO strategy to improve your rankings. Our digital marketing team can also take over your ad campaigns and social media management to optimize ROI, even if we didn't build your original site."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines depend on the scope. A standard corporate website typically takes 2-4 weeks, while custom software or e-commerce platforms may take 8-12 weeks or more. We follow an agile development process, providing you with regular updates and milestones so you always know the status of your project."
  },
  {
    question: "How do you ensure the quality and security of your code?",
    answer: "Quality is our top priority. We use modern frameworks and best practices, including rigorous code reviews, automated testing, and security audits. For every project, we ensure the code is clean, scalable, and secure against common vulnerabilities, adhering to industry standards."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#050505] relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400">
            Everything you need to know about working with Codenclick Technologies.
          </motion.p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 text-blue-500 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
