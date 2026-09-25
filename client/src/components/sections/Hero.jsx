import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Users,
  Code2,
  Smartphone,
  Star,
  Download,
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("web");

  const tabContent = {
    web: {
      badge: "High-Performance Web Apps",
      title: "Sub-Second Custom React & Headless Web",
      stat1: { label: "LCP Load Speed", val: "480ms", sub: "Core Web Vitals 99+" },
      stat2: { label: "Conversion Lift", val: "+210%", sub: "Above Industry Avg" },
      stat3: { label: "SEO Health Score", val: "100/100", sub: "Zero Crawler Errors" },
      features: [
        "Headless React 19 Architecture",
        "Edge-cached Global CDN",
        "Dynamic Open Graph & Schema",
        "Zero-Bloat Custom UI/UX"
      ]
    },
    saas: {
      badge: "SaaS & Cloud Platforms",
      title: "Scalable Multi-Tenant Architecture",
      stat1: { label: "Concurrent Users", val: "50,000+", sub: "Seamless Concurrency" },
      stat2: { label: "System Uptime", val: "99.99%", sub: "Enterprise SLA" },
      stat3: { label: "Database Latency", val: "<12ms", sub: "Optimized Indexing" },
      features: [
        "Secure Stripe & Razorpay Billing",
        "Role-Based Access Control (RBAC)",
        "REST & GraphQL Microservices",
        "Automated CI/CD Pipelines"
      ]
    },
    growth: {
      badge: "Paid Ads & Acquisition",
      title: "High-ROAS Meta & Google Ad Funnels",
      stat1: { label: "Average ROAS", val: "4.8x", sub: "Omnichannel Return" },
      stat2: { label: "Customer Acquisition", val: "-38%", sub: "Reduced CAC" },
      stat3: { label: "Qualified Pipeline", val: "₹18Cr+", sub: "Total Pipeline Value" },
      features: [
        "High-Intent Negative Bidding Shields",
        "Hyper-segmented Lookalike Audiences",
        "WhatsApp Automation Hand-offs",
        "Server-Side Conversion CAPI Tracking"
      ]
    },
    seo: {
      badge: "Top 1% SEO & Generative Search",
      title: "Dominate Google & Perplexity AI Overviews",
      stat1: { label: "Top 3 SERP Ranks", val: "84%", sub: "Commercial Keywords" },
      stat2: { label: "Organic Monthly Traffic", val: "1.2M+", sub: "Across Client Network" },
      stat3: { label: "Entity Authority", val: "AEO/GEO Ready", sub: "Structured Knowledge Graph" },
      features: [
        "Semantic Topic Clustering",
        "Local Pincode & City Hubs",
        "Google Rich Snippets FAQ Markup",
        "Instant Edge Snapshot Rendering"
      ]
    }
  };

  const current = tabContent[activeTab];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white text-slate-900 overflow-hidden">
      {/* Premium Subtle Ambient Gradients */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.08) 40%, rgba(236, 72, 153, 0.03) 70%, transparent 100%)"
        }}
      />

      {/* Subtle Dot Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 25%, black 40%, transparent 100%)"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top Badges & Announcement */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm text-xs sm:text-sm font-semibold text-blue-700"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Top-Rated Web & Digital Growth Agency in Delhi NCR</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Now Booking Q2 2026 Projects</span>
          </motion.div>
        </div>

        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6 font-outfit"
          >
            Engineering Digital Products &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
              Growth Engines
            </span>{" "}
            That Scale Your Revenue.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            We replace generic templates with custom, sub-second web applications, enterprise SaaS platforms, and ROI-driven SEO & Ads funnels built to win.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/company-brochure"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm hover:shadow hover:border-slate-400 active:scale-95 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>Get Company Profile</span>
            </Link>
          </motion.div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Sub-600ms Load Time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No Retainer Lock-in</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] p-6 sm:p-8 lg:p-10 overflow-hidden"
        >
          {/* Subtle Accent Glow Inside Card */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

          {/* Interactive Navigation Pills */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">
                INTERACTIVE CAPABILITY CONSOLE
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Explore How We Deliver Results
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80">
              {[
                { id: "web", label: "Web Apps", icon: Code2 },
                { id: "saas", label: "SaaS Platforms", icon: Layers },
                { id: "growth", label: "Performance Ads", icon: TrendingUp },
                { id: "seo", label: "AI Search & SEO", icon: BarChart3 },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-white text-blue-600 shadow-md shadow-slate-200/80 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? "text-blue-600" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Content Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Metrics & Architecture */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-blue-600" />
                  <span>{current.badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {current.title}
                </h3>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                      {current.stat1.val}
                    </p>
                    <p className="text-xs font-bold text-slate-700 mt-1">{current.stat1.label}</p>
                    <p className="text-[10px] text-slate-500">{current.stat1.sub}</p>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70">
                    <p className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">
                      {current.stat2.val}
                    </p>
                    <p className="text-xs font-bold text-slate-700 mt-1">{current.stat2.label}</p>
                    <p className="text-[10px] text-slate-500">{current.stat2.sub}</p>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <p className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">
                      {current.stat3.val}
                    </p>
                    <p className="text-xs font-bold text-slate-700 mt-1">{current.stat3.label}</p>
                    <p className="text-[10px] text-slate-500">{current.stat3.sub}</p>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Code & Visual Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-slate-900 text-slate-100 p-5 sm:p-6 shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-slate-400">production.pipeline.ts</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                      LIVE 2026
                    </span>
                  </div>

                  <div className="font-mono text-xs space-y-2 text-slate-300">
                    <p className="text-blue-400">// Enterprise Grade Deployment</p>
                    <p><span className="text-purple-400">const</span> <span className="text-amber-300">deployment</span> = <span className="text-blue-400">await</span> engine.<span className="text-emerald-300">initialize</span>(&#123;</p>
                    <p className="pl-4">framework: <span className="text-emerald-300">"React 19 + Next Architecture"</span>,</p>
                    <p className="pl-4">performance: <span className="text-emerald-300">"LCP &lt; 500ms"</span>,</p>
                    <p className="pl-4">security: <span className="text-emerald-300">"Zero Vulnerability Guard"</span>,</p>
                    <p className="pl-4">revenueTracking: <span className="text-cyan-400">true</span></p>
                    <p>&#125;);</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Ready to build your roadmap?</span>
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                    >
                      <span>Explore all services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Client Trust & Rating Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-6 text-slate-600">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["👨‍💼", "👩‍💻", "👨‍💻", "👩‍💼"].map((emoji, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-sm shadow-sm">
                  {emoji}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1">4.9 / 5.0</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Over 200+ Businesses Scaled Across India & UAE</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-semibold text-xs sm:text-sm text-slate-400 uppercase tracking-wider">
            <span>STARTUPS</span>
            <span>•</span>
            <span>ENTERPRISES</span>
            <span>•</span>
            <span>D2C BRANDS</span>
            <span>•</span>
            <span>SAAS FOUNDERS</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);
