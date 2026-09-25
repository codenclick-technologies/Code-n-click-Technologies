import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Zap, 
  Lock, 
  Headphones, 
  Phone, 
  Mail, 
  MessageSquare, 
  Download,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        
        {/* Luxury High-Contrast Floating Action Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#0A1024] to-blue-950 text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Ambient Lighting Gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Persuasive Offer */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero Risk • Free 15-Minute Strategy Call</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-outfit">
                Ready to Turn Your Website into a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                  Revenue Machine?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl">
                Let's discuss your project goals. We’ll analyze your digital footprint, identify 3 quick wins, and share an honest roadmap with fixed pricing and timelines.
              </p>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% NDA Protected</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Direct Architect Call</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No Sales Pressure</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Action Hub */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-2xl space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Get in Touch Directly
              </h3>

              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Book Free Discovery Session</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/918700198968?text=Hi%20Codenclick%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>

                <Link
                  to="/company-brochure"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-medium text-xs border border-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-400" />
                  <span>Download Full PDF Brochure</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>+91-8700198968</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>info@codenclick.in</span>
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default memo(CTASection);
