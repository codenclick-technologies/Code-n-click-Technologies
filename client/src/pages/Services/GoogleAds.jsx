import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  BarChart2,
  Target,
  ShoppingBag,
  MapPin,
  ArrowRight,
  TrendingUp,
  MousePointer,
  RefreshCw,
  CheckCircle2,
  Zap,
  Award
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const GoogleAds = () => {

  const services = [
    {
      icon: <Search className="w-8 h-8 text-yellow-500" />,
      title: "Search Campaigns",
      description: "Capture high-intent customers exactly when they're searching for your products or services."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-orange-500" />,
      title: "Google Shopping",
      description: <span>Showcase your inventory with rich product listings that drive qualified <Link to="/services/web-development" className="text-orange-400 hover:underline">e-commerce sales</Link>.</span>
    },
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Display Advertising",
      description: <span>Build brand awareness with <Link to="/services/graphic-design" className="text-red-400 hover:underline">visual ads</Link> across millions of websites and apps in the Google Network.</span>
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />,
      title: "Remarketing",
      description: "Stay top-of-mind by showing relevant ads to users who have previously visited your site."
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: "Local Services Ads",
      description: "Connect with local customers in your area who are ready to book your services now."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Performance Max",
      description: "Leverage Google's AI to access all inventory from a single campaign for maximum conversion value."
    }
  ];

  const techStack = [
    { name: "Google Ads", category: "Platform" },
    { name: "GA4", category: "Analytics" },
    { name: "Tag Manager", category: "Tracking" },
    { name: "Looker Studio", category: "Reporting" },
    { name: "Merchant Center", category: "E-commerce" },
    { name: "Keyword Planner", category: "Research" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Keyword Research",
      description: "We find the exact questions your future customers are asking right now."
    },
    {
      number: "02",
      title: "Campaign Setup",
      description: "We build a machine that captures demand. Precise targeting means you don't pay for visitors who don't buy."
    },
    {
      number: "03",
      title: "Bid Management",
      description: "We watch your budget like a hawk. Adjusting bids in real-time to get you the most profit for the least spend."
    },
    {
      number: "04",
      title: "Conversion Optimization",
      description: "Getting the click is half the battle. We optimize your landing page until visitors have no choice but to convert."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best Google Ads Agency in Delhi | Codenclick Technologies"
        description="Top Google Ads agency in Delhi & Delhi NCR. We create high-ROI search, display, and shopping campaigns to drive qualified traffic and sales."
        keywords="Best Google Ads Agency Delhi, PPC Services Delhi NCR, Google Ads Management Cost Delhi, Lead Generation Company Delhi, Shopping Ads Agency India"
        canonical="/services/google-ads"
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-yellow-500/30 text-yellow-400 text-sm font-medium mb-8"
          >
            <MousePointer className="w-4 h-4" />
            <span>Pay Only For Results</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-gray-400"
          >
            Google Ads (PPC) <br className="hidden md:block" />
            <span className="text-yellow-500">Management in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-yellow-500/25 flex items-center justify-center gap-2">
              Start PPC Campaign <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              Success Stories
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stop Paying for Clicks That Don't Convert</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Are you tired of seeing your ad budget drain away with zero leads to show for it? Poorly managed Google Ads campaigns are a black hole for your marketing dollars. Low Quality Scores, broad match disasters, and weak landing pages are costing you thousands.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codenclick Technologies</strong>, a results-driven agency in <strong>Delhi</strong>, we stop the bleeding. We build hyper-targeted campaigns that capture high-intent buyers exactly when they are searching for your solution. We obsess over "Negative Keywords" just as much as positive ones, ensuring you never pay for junk traffic.
          </p>
          <p className="text-yellow-400 font-medium text-lg">
            We help businesses in Delhi NCR turn ad spend into a predictable revenue engine.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PPC Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We dominate the entire Google ecosystem for your **Delhi** business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel glass-card-shine p-8 rounded-3xl border border-white/10 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-yellow-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why This Service Is Important (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Google Ads?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "High Intent: People on Google are actively looking for a solution. They are ready to buy.",
                "Immediate Results: SEO takes months. Google Ads can bring you leads tomorrow.",
                "Measurable ROI: You track every dollar. You know exactly how much it costs to acquire a customer.",
                "Brand Protection: If you don't bid on your brand name, your competitors will."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-yellow-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <TrendingUp className="w-12 h-12 text-orange-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Speed of PPC</h3>
              <p className="text-gray-400 mb-6">
                Need sales now? SEO is a marathon, but PPC is a sprint. We can launch a campaign and start generating calls and leads within <span className="text-white font-bold">48 hours</span>.
              </p>
              <Link to="/contact" className="text-yellow-400 font-bold hover:underline">Get immediate traffic &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Diagram */}
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-full" />
              <div className="relative border border-white/10 bg-[#0F0F13] rounded-xl p-6 shadow-2xl space-y-4">
                 {/* Level 1: Campaign */}
                 <div className="flex justify-center">
                    <div className="px-6 py-3 bg-yellow-900/30 border border-yellow-500/50 rounded-lg text-yellow-500 font-bold flex items-center gap-2">
                       <Target className="w-4 h-4" /> Dental Clinic Delhi
                    </div>
                 </div>
                 <div className="h-8 border-l border-white/10 mx-auto w-px h-8 relative">
                    <div className="absolute top-1/2 left-0 w-32 -translate-x-1/2 h-px bg-white/10" />
                 </div>
                 {/* Level 2: Ad Groups */}
                 <div className="flex justify-between gap-4">
                    <div className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                       <div className="text-sm font-bold text-white mb-1">Teeth Whitening</div>
                       <div className="text-[10px] text-gray-400">Exact Match</div>
                    </div>
                    <div className="flex-1 p-3 bg-white/5 border border-white/10 rounded-lg text-center">
                       <div className="text-sm font-bold text-white mb-1">Root Canal</div>
                       <div className="text-[10px] text-gray-400">Phrase Match</div>
                    </div>
                 </div>
                 {/* Level 3: Keywords */}
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-3 bg-black/40 rounded border border-white/5 text-xs text-green-400 font-mono text-center">
                        +teeth +whitening +delhi
                     </div>
                     <div className="p-3 bg-black/40 rounded border border-white/5 text-xs text-green-400 font-mono text-center">
                        "root canal cost"
                     </div>
                  </div>
              </div>
            </div>

            {/* Right: Explanation */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Structured for ROI</h2>
              <p className="text-lg text-gray-400 mb-8">
                Amateur campaigns dump all keywords into one bucket. We engineer "Single Keyword Ad Groups" (SKAGs) architectures. This matches the user's search query <strong>exactly</strong> with the ad copy, resulting in higher Quality Scores and lower costs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold">10/10 Quality Score</h4>
                     <p className="text-gray-400 text-sm">Google rewards relevance with cheaper clicks.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight className="w-4 h-4 text-yellow-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold">Zero Wasted Spend</h4>
                     <p className="text-gray-400 text-sm">Negative keyword lists prevent irrelevant clicks.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Process (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Campaign Strategy</h2>
              <p className="text-xl text-gray-400 mb-8">
                Strict optimization to lowering your CPA and increasing conversions.
              </p>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6"
                  >
                    <div className="text-5xl font-bold text-white/10">{step.number}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">9-10/10 Quality Scores</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Conversion Tracking Setup</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">A/B Testing Landing Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tools / Technologies (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PPC Tech Stack</h2>
            <p className="text-xl text-gray-400">Data tools for precise bidding.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="glass-button px-6 py-3 rounded-full flex items-center gap-3 text-gray-300 hover:text-white border border-white/5"
              >
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="font-semibold">{tech.name}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-400">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Us (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi Trusts Us With Ad Spend</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We turn Google Ads into a predictable profit machine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Intent Focus",
                desc: "We don't bid on vague terms. We target keywords that indicate intent to buy NOW, not just browse."
              },
              {
                title: "Negative Keyword Mastery",
                desc: "We save you money by aggressively blocking terms that bring junk traffic. Efficiency is our obsession."
              },
              {
                title: "Landing Page Audit",
                desc: "Sending traffic to a bad page is burning money. We audit and consult on your landing pages to ensure they convert."
              },
              {
                title: "Transparent Fees",
                desc: "No hidden percentages. You pay Google directly, and you pay us a flat management fee. No conflict of interest."
              },
              {
                title: "Competitor Analysis",
                desc: "We spy on your competitors, see what's working for them, and then do it better. Legally, of course."
              },
              {
                title: "Data-Driven Bidding",
                desc: "We use automated strategies combined with human oversight to win auctions at the lowest possible cost."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Case Studies / Results (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Proven Results</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We let the numbers speak for themselves.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Local Service Business</h3>
                  <p className="text-yellow-400">Plumbing Services in Delhi</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">High CPR ($50)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Call-Only Ads + LSA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">Cost Per Call: $12</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">E-Commerce Store</h3>
                  <p className="text-yellow-400">Delhi Home Decor Brand</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Low ROAS (1.2x)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Shopping + PMax Feed Optimization</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">ROAS: 6.8x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Pricing (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">PPC Fees</h2>
            <p className="text-xl text-gray-400">Simple, flat-fee pricing based on your ad spend.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-yellow-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Standard</h3>
              <p className="text-lg text-gray-400 mb-6">For Spends &lt;$3k/mo</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Search & Display Setup</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Bid Optimization</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Negative Keyword List</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Monthly Report</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-white transition-all text-center font-bold">Get Price</Link>
            </div>
            {/* Scale */}
            <div className="glass-panel p-8 rounded-3xl border border-yellow-500 relative transform scale-105 shadow-2xl shadow-yellow-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-bold">Best Value</div>
              <h3 className="text-2xl font-bold text-white mb-2">Performance</h3>
              <p className="text-lg text-gray-400 mb-6">For Spends &gt;$3k/mo</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> All Campaign Types (PMax/Shopping)</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Landing Page Consultation</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Competitor Spy Analysis</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Bi-Weekly Calls</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-yellow-600 text-white hover:bg-yellow-500 transition-all text-center font-bold">Start Scaling</Link>
            </div>
          </div>
        </div>
      </section>


      {/* 10. FAQs (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Your questions about Google Ads, answered.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "How do you decide the budget?",
              answer: "We maximize ROI, not spend. We start with a budget you're comfortable with, prove the concept with sales/leads, and then scale up as long as the ROI holds positive."
            },
            {
              question: "Google Ads vs Meta Ads - which is better?",
              answer: "Google is for capturing intent (people looking for you). Meta is for generating demand (people discovering you). We often recommend a mix, but Google is usually best for immediate sales."
            },
            {
              question: "Will you bid on my brand name?",
              answer: "Yes, usually. It's cheap traffic and protects you from competitors who might enhance their listings by bidding on your name (brand jacking)."
            },
            {
              question: "What is Quality Score?",
              answer: "It's Google's rating of your ad quality. A higher score means you pay less per click. We obsessively optimize this to lower your costs."
            },
            {
              question: "Do I get reports?",
              answer: "Yes, we provide detailed monthly reports that show you exactly where every dollar went and what return it brought back."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Maximize Your Budget</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop wasting money on irrelevant clicks. Get high-quality leads today.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book PPC Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GoogleAds;
