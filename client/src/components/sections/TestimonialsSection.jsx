import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      company: 'TechVenture Solutions',
      role: 'Founder & CEO',
      image: '🧑‍💼',
      rating: 5,
      quote: 'Code n Click transformed our entire digital presence. Within 3 months, we saw a 420% increase in qualified leads. Their team is proactive, responsive, and genuinely invested in our success.',
      result: '+420% Leads',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      name: 'Priya Sharma',
      company: 'Brilliance Digital',
      role: 'Marketing Director',
      image: '👩‍💼',
      rating: 5,
      quote: 'Best investment we made this year. The SaaS platform they built scales effortlessly and reduced our infrastructure costs by 60%. Technical excellence paired with business understanding.',
      result: '60% Cost Reduction',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Amit Kumar',
      company: 'E-Commerce Plus',
      role: 'Operations Manager',
      image: '👨‍💼',
      rating: 5,
      quote: 'Their paid advertising expertise brought us a 3.8x ROAS within the first quarter. The strategies are data-backed and continuously optimized. Couldn\'t recommend them more.',
      result: '3.8x ROAS',
      color: 'from-green-500 to-emerald-400'
    },
    {
      name: 'Neha Desai',
      company: 'Creative Minds Co.',
      role: 'Brand Manager',
      image: '👩‍🔬',
      rating: 5,
      quote: 'They delivered a complete brand identity system and website that perfectly captures our vision. The design is stunning and performs beautifully across all devices.',
      result: 'Award-Winning Design',
      color: 'from-orange-500 to-red-400'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real results from real businesses. See how we've helped companies like yours achieve exponential growth.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Gradient border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="rounded-2xl bg-gray-950 h-full" />
              </div>

              {/* Card */}
              <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-white/10 group-hover:border-white/30 p-6 h-full transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote size={24} className="text-white/30 mb-3" />

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-bold text-white text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{testimonial.company}</p>

                  {/* Result badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className={`inline-block text-xs font-bold bg-gradient-to-r ${testimonial.color} bg-clip-text text-transparent px-3 py-1 rounded-full border border-white/10`}
                  >
                    {testimonial.result}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Join 200+ successful companies growing with us.</p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-500/50"
          >
            Schedule a Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
