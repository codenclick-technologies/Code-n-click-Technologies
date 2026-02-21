import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target,
  BarChart2,
  Users,
  Zap,
  TrendingUp,
  Smartphone,
  ArrowRight,
  Eye,
  MousePointer2,
  PieChart,
  Layers,
  Award,
  CheckCircle2
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const MetaAds = () => {

  const services = [
    {
      icon: <Target className="w-8 h-8 text-pink-500" />,
      title: "Precision Targeting",
      description: "Reach your ideal customers based on demographics, interests, and behaviors with laser-focused accuracy."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: "Creative Strategy",
      description: <span>High-converting <Link to="/services/graphic-design" className="text-purple-400 hover:underline">ad creatives</Link> (video, carousel, image) designed to stop the scroll and drive action.</span>
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Lookalike Audiences",
      description: "Scale your reach by finding new people who resemble your best existing customers."
    },
    {
      icon: <MousePointer2 className="w-8 h-8 text-red-500" />,
      title: "Retargeting Campaigns",
      description: "Re-engage visitors who didn't convert the first time and guide them back to purchase."
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-green-500" />,
      title: "A/B Testing",
      description: "Continuous testing of headlines, creatives, and audiences to lower CPA and increase ROAS."
    },
    {
      icon: <PieChart className="w-8 h-8 text-orange-500" />,
      title: "Analytics & Reporting",
      description: "Transparent, real-time dashboards showing exactly where your budget is going and the results it's driving."
    }
  ];

  const techStack = [
    { name: "Meta Pixel", category: "Tracking" },
    { name: "Ads Manager", category: "Platform" },
    { name: "Google Analytics 4", category: "Analytics" },
    { name: "Canva/Figma", category: "Design" },
    { name: "CapCut/Premiere", category: "Video" },
    { name: "Zapier", category: "Automation" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit & Strategy",
      description: "We dive deep into your data to find where you're bleeding money and plug the holes."
    },
    {
      number: "02",
      title: "Creative Production",
      description: <span>We <Link to="/services/graphic-design" className="text-pink-400 hover:underline">design ads</Link> that don't look like ads. Visuals that stop the scroll and copy that converts.</span>
    },
    {
      number: "03",
      title: "Campaign Launch",
      description: "We structure your account for success, ensuring every dollar is tracked and accounted for."
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "We kill the losers and double down on the winners. Daily optimization to maximize your ROAS."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best Meta Ads Agency in Delhi | Codenclick Technologies"
        description="Top Meta Ads agency in Delhi. We create high-converting Facebook and Instagram ad campaigns for local businesses in Delhi NCR to maximize ROAS."
        keywords="Best Meta Ads Agency Delhi, Facebook Ads Company Delhi, Instagram Marketing Services Delhi, Lead Generation Agency Delhi NCR, Social Media Marketing Delhi"
        canonical="/services/meta-ads"
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-pink-500/30 text-pink-400 text-sm font-medium mb-8"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Maximize Your ROAS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-gray-400"
          >
            Meta Ads (Facebook/Instagram) <br className="hidden md:block" />
            <span className="text-pink-500">Management in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-pink-500/25 flex items-center justify-center gap-2">
              Launch Campaign <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stop Burning Cash on Ads That Don't Convert</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Are your Facebook and Instagram ads eating your budget without bringing in sales? Vanity metrics like "reach" and "likes" don't pay the bills. You need a strategy that targets intent and drives revenue.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codenclick Technologies</strong>, a leading agency in <strong>Delhi</strong>, we treat your ad budget like it's our own. We combine scientific testing with scroll-stopping creativity to lower your Customer Acquisition Cost (CAC) and skyrocket your Return On Ad Spend (ROAS).
          </p>
          <p className="text-pink-400 font-medium text-lg">
            We've managed over $1M+ in ad spend for Delhi brands, delivering profitable growth.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Advertising Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From cold awareness to hot retargeting, we handle the full funnel for your **Delhi** business.
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
                className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 transition-all duration-300 group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-pink-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why Meta Ads Are Essential</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "Unmatched Reach: 3+ Billion active users across Facebook and Instagram.",
                "Laser Targeting: Target not just by age/location, but by interests, behaviors, and purchase intent.",
                "Visual Impact: Build brand desire with immersive video and image formats.",
                "Retargeting Power: Bring back 98% of users who visited your site but didn't buy."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-pink-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <TrendingUp className="w-12 h-12 text-purple-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Paid Social ROI</h3>
              <p className="text-gray-400 mb-6">
                Organic reach is dead (under 2%). To grow, you must pay to play. But with our <span className="text-white font-bold">Scientific Testing Framework</span>, investing $1 should bring back $4+ in revenue.
              </p>
              <Link to="/contact" className="text-pink-400 font-bold hover:underline">Calculate your potential scale &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Explanation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">The Retargeting Matrix</h2>
              <p className="text-lg text-gray-400 mb-8">
                Most brands only run one ad for everyone. We build intelligent funnels that track where a user is in their journey and serve the perfect message to nudge them to the next step.
              </p>
              
              <div className="space-y-6">
                <div className="relative pl-8 border-l-2 border-pink-500/30">
                   <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-pink-500" />
                   <h4 className="text-white font-bold text-lg">Top of Funnel (Cold)</h4>
                   <p className="text-gray-400 text-sm">Goal: Awareness. Content: Viral Videos, Educational Reels.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-pink-500/30">
                   <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-purple-500" />
                   <h4 className="text-white font-bold text-lg">Middle of Funnel (Warm)</h4>
                   <p className="text-gray-400 text-sm">Goal: Consideration. Content: Testimonials, Case Studies.</p>
                </div>
                <div className="relative pl-8 border-l-2 border-pink-500/30">
                   <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-green-500" />
                   <h4 className="text-white font-bold text-lg">Bottom of Funnel (Hot)</h4>
                   <p className="text-gray-400 text-sm">Goal: Purchase. Content: Limited Time Offers, Abandoned Cart Recovery.</p>
                </div>
              </div>
            </div>

             {/* Right: Visual */}
            <div className="relative">
               <div className="w-full max-w-md mx-auto aspect-square relative">
                  {/* Funnel Layers */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-br from-pink-600 to-pink-900 rounded-t-3xl flex items-center justify-center transform scale-100 z-30 shadow-xl border-b border-white/10">
                     <div className="text-center">
                        <div className="text-2xl font-bold text-white">1.4M</div>
                        <div className="text-xs text-pink-200 uppercase tracking-widest">Impressions</div>
                     </div>
                  </div>
                   <div className="absolute top-[30%] left-[10%] right-[10%] h-1/3 bg-gradient-to-br from-purple-600 to-purple-900 flex items-center justify-center transform scale-100 z-20 shadow-xl border-b border-white/10 rounded-xl">
                     <div className="text-center">
                        <div className="text-2xl font-bold text-white">25K</div>
                        <div className="text-xs text-purple-200 uppercase tracking-widest">Visitors</div>
                     </div>
                  </div>
                   <div className="absolute bottom-0 left-[20%] right-[20%] h-1/3 bg-gradient-to-br from-green-600 to-green-900 rounded-b-3xl flex items-center justify-center transform scale-100 z-10 shadow-xl">
                     <div className="text-center">
                        <div className="text-2xl font-bold text-white">840</div>
                        <div className="text-xs text-green-200 uppercase tracking-widest">Sales</div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Process (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Campaign Roadmap</h2>
              <p className="text-xl text-gray-400 mb-8">
                Data-backed strategy meets scroll-stopping creative.
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
              <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Clear ROI Reporting</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Daily Ad Optimization</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Creative Testing Pipeline</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ad Tech Stack</h2>
            <p className="text-xl text-gray-400">Tools we use to track, analyze, and optimize.</p>
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
                <Zap className="w-4 h-4 text-pink-400" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi Brands Scale With Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We treat your ad budget like it's our own money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Profit Over Vanity",
                desc: "Likes and shares are cute. We care about CPC, ROAS, and CAC. If it doesn't print money, we don't do it."
              },
              {
                title: "Creative + Data",
                desc: "We merge art and science. Our creatives stop the scroll, and our media buying strategy ensures the right people see them."
              },
              {
                title: "Full Funnel Strategy",
                desc: "We don't just run ads; we build funnels. From cold traffic to retargeting to loyalty, we map the entire journey."
              },
              {
                title: "Aggressive Testing",
                desc: "We test 100 variations to find the 1 winner. We iterate faster than your competitors can react."
              },
              {
                title: "Pixel Mastery",
                desc: "We ensure your tracking is bulletproof. Conversion API (CAPI), offline events, and server-side tracking are standard."
              },
              {
                title: "No Long-Term Contracts",
                desc: "We believe in earning your business every month. Our results keep you around, not a piece of paper."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-pink-400" size={24} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Recent Wins</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real results for real brands.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Fashion Brand</h3>
                  <p className="text-pink-400">Delhi D2C Scale</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">High CPA ($45)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">UGC Creative Strategy</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">5.2x ROAS</span>
                </div>
              </div>
            </div>
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">B2B Service</h3>
                  <p className="text-pink-400">Gurgaon Lead Gen</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Poor Lead Quality</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Full-Funnel Retargeting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">Cost Per Lead Reduced 60%</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Management Pricing</h2>
            <p className="text-xl text-gray-400">Simple, flat-fee pricing based on your ad spend.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-pink-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
              <p className="text-lg text-gray-400 mb-6">For Spends &lt;$5k/mo</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Full Campaign Setup</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Weekly Optimization</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> 2 Creative Variations</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Monthly Reporting</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all text-center font-bold">Get Pricing</Link>
            </div>
            {/* Scale */}
            <div className="glass-panel p-8 rounded-3xl border border-pink-500 relative transform scale-105 shadow-2xl shadow-pink-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">High Volume</div>
              <h3 className="text-2xl font-bold text-white mb-2">Scale</h3>
              <p className="text-lg text-gray-400 mb-6">For Spends &gt;$5k/mo</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Comprehensive Strategy</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Daily Optimization</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Unlimited Creative Testing</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Weekly Reporting Call</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-pink-600 text-white hover:bg-pink-500 transition-all text-center font-bold">Talk to Expert</Link>
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
              Answers to your most pressing questions about Meta Ads.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "How quickly will I see results?",
              answer: "Meta Ads typically have a 'learning phase' of 3-7 days. However, we usually see initial traction within the first week, with campaigns stabilizing and optimizing for ROI by weeks 2-3."
            },
            {
              question: "What is the minimum budget I need?",
              answer: "It depends on your goals, but we generally recommend a minimum starting budget of $1,000 - $2,000/month to gather enough data for the algorithm to optimize effectively."
            },
            {
              question: "Do you create the ad creatives?",
              answer: "Yes, we have an in-house creative team that designs high-converting images and videos tailored to your brand. We also write all the ad copy."
            },
            {
              question: "How has iOS 14 affected tracking?",
              answer: "It made tracking harder, but we've adapted. We use the Conversion API (CAPI) and aggregated event measurement to reclaim lost data and keep your campaigns performing efficiently."
            },
            {
              question: "Do I have access to the ad account?",
              answer: "Yes, it's your account. You have full transparency and ownership. We never hold your data hostage."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Ads?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop guessing and start growing. Let us run your campaigns.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Get Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MetaAds;
