import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: 'Lucky Sharma',
    company: 'Verified Business Owner',
    role: 'Growth & Tech Strategy',
    image: '🧑‍💻',
    rating: 5,
    quote: 'If you’re looking for a reliable digital agency, Codenclick Technologies is a solid choice. They provide practical solutions, not generic packages. Their SEO and website recommendations were genuinely helpful for our business growth.',
    result: 'Practical ROI Solutions',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    name: 'Surabhi Rawat',
    company: 'Truenorth Consulting',
    role: 'truenorthae.com | truenorthdigi.com',
    image: '👩‍💼',
    rating: 5,
    quote: 'Working with Codenclick Technologies was a great decision for our Dubai-based business. They understood our target audience perfectly and provided digital strategies that truly worked for our international clientele.',
    result: 'International Audience Growth',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  },
  {
    name: 'Akriti',
    company: 'Digital Partner',
    role: 'Web & Marketing Strategy',
    image: '👩‍💻',
    rating: 5,
    quote: 'Codenclick Technologies is a highly professional and reliable digital agency. Their team has a deep understanding of modern web development and digital marketing, delivering excellence at every step.',
    result: 'Professional & Reliable',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
  },
  {
    name: 'Rahul Varma',
    company: 'Startup Founder',
    role: 'E-commerce Solutions',
    image: '👨‍💼',
    rating: 5,
    quote: 'The team at Codenclick is incredibly skilled. They transformed our legacy slow system into a modern, high-converting masterpiece. Their attention to detail in code and design is unparalleled.',
    result: 'Full Digital Transformation',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#FAFBFC] border-y border-slate-200/80 text-slate-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Client Feedback & Trust</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 font-outfit"
          >
            What Founders & Leaders{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              Say About Working With Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal"
          >
            Real feedback from growing businesses across India and the UAE that rely on Codenclick for their technology and growth.
          </motion.p>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 lg:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Result Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${t.badgeColor}`}>
                    {t.result}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl shadow-sm">
                  {t.image}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role} • <span className="text-slate-700">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default memo(TestimonialsSection);
