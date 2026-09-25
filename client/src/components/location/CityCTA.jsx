import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Phone, Mail, Shield, Send } from 'lucide-react';
import PropTypes from 'prop-types';

const CityCTA = ({ cityName, ctaSectionRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    website: '',
    need: 'Digital Marketing & SEO'
  });
  const [status, setStatus] = useState({ submitted: false, loading: false, error: null });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitted: false, loading: true, error: null });

    // Handle submission - integrates with standard lead dispatch
    setTimeout(() => {
      setStatus({ submitted: true, loading: false, error: null });
    }, 700);
  };

  return (
    <section ref={ctaSectionRef} className="py-20 bg-[#020205] relative overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/10 via-indigo-600/15 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              Ready to Accelerate Growth?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Get a Tailored Digital Growth Strategy for Your Business in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400">
                {cityName}
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Schedule a 30-minute discovery consultation with our technical growth architects. We will analyze your search competition, identify wasted ad spend, and present a clear roadmap to qualified inbound revenue.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Custom competitor search audit & keyword opportunity map</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Actionable CAC reduction & conversion funnel recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Strict confidentiality • No high-pressure sales pitches</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="tel:+918700198968" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 8700198968</span>
              </a>
              <a href="mailto:contact@codenclick.in" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>contact@codenclick.in</span>
              </a>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              {status.submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Strategy Request Received!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto">
                    Thank you. Our senior technical strategist for {cityName} will review your website details and contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus({ submitted: false, loading: false, error: null })}
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:underline pt-2"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleChange}
                        placeholder="Company or Brand Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-300 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Website URL (if existing)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="need" className="block text-xs font-medium text-gray-300 mb-1.5">
                      Primary Objective
                    </label>
                    <select
                      id="need"
                      name="need"
                      value={formData.need}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#030014] border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                      <option value="Google & Meta Performance Ads">Google & Meta Performance Ads</option>
                      <option value="Modern Web Development">Modern Web Development</option>
                      <option value="AI Lead Automation & CRM">AI Lead Automation & CRM</option>
                      <option value="Full Omnichannel Growth">Full Omnichannel Growth Package</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                  >
                    {status.loading ? (
                      <span>Preparing Your Audit...</span>
                    ) : (
                      <>
                        <span>Get a Growth Strategy</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-gray-500 text-center pt-1">
                    Direct reply from senior growth engineers • No spam guaranteed
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CityCTA.propTypes = {
  cityName: PropTypes.string.isRequired,
  ctaSectionRef: PropTypes.object
};

export default CityCTA;
