import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Smartphone,
  Layers,
  Cpu,
  Globe,
  Zap,
  CheckCircle2,
  ArrowRight,
  Code2,
  Settings,
  Shield,
  Award,
  Terminal
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const AppDevelopment = () => {

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: "iOS & Android (Native)",
      description: "High-performance, platform-specific apps using Swift and Kotlin for the ultimate native experience."
    },
    {
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      title: "Cross-Platform Solutions",
      description: <span>Build once, deploy everywhere with <Link to="/services/saas-development" className="text-purple-400 hover:underline">React Native</Link> and Flutter. Save 40% on development costs.</span>
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-400" />,
      title: "Enterprise Mobility",
      description: "Secure, robust internal apps that streamline your workforce operations and increase productivity."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "PWA Development",
      description: <span>Progressive Web Apps that look and feel like mobile apps but run in the browser. Perfect for <Link to="/services/web-development" className="text-green-400 hover:underline">universal access</Link>.</span>
    },
    {
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      title: "App Maintenance",
      description: "Regular updates, bug fixes, and OS compatibility checks to keep your app running smoothly."
    },
    {
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      title: "API Integration",
      description: "Seamlessly connect your mobile app to your existing backend, CRM, or third-party services."
    }
  ];

  const techStack = [
    { name: "React Native", category: "Cross-Platform" },
    { name: "Flutter", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "Node.js", category: "API" },
    { name: "GraphQL", category: "Data" },
    { name: "Redux", category: "State" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Blueprint & UI/UX",
      description: <span>We don't write a single line of code until we have a clickable prototype. Our <Link to="/services/graphic-design" className="text-blue-400 hover:underline">design team</Link> ensures the flow is intuitive.</span>
    },
    {
      number: "02",
      title: "Agile Development",
      description: "We build in two-week sprints. You get a testable build on your phone every fortnight. No surprises."
    },
    {
      number: "03",
      title: "Testing & QA",
      description: "We test on real devices, not just simulators. We check for battery drain, memory leaks, and network resilience."
    },
    {
      number: "04",
      title: "Launch & ASO",
      description: <span>We handle the complex submission process for the App Store and Play Store, including <Link to="/services/seo" className="text-blue-400 hover:underline">ASO keywords</Link> for visibility.</span>
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best Mobile App Development Company in Delhi | iOS & Android Developers"
        description="Top-rated mobile app development agency in Delhi. We build high-performance iOS, Android, and React Native apps that users love."
        keywords="Mobile App Development Company Delhi, Android App Developers Delhi, iOS App Development Agency India, React Native Developers, Flutter App Development, Hybrid App Solutions"
        canonical="/services/app-development"
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-blue-500/30 text-blue-300 text-sm font-medium mb-8"
          >
            <Smartphone className="w-4 h-4" />
            <span>Native & Cross-Platform Excellence</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
          >
            Mobile Application <br className="hidden md:block" />
            <span className="text-blue-500">Development in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2">
              Discuss Your App Idea <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              See Our Work
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Is Your Business Accessible in Your Customer's Pocket?</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Websites are essential, but mobile apps are habit-forming. If your users have to open a browser and type your URL every time, you are losing engagement. In a world where screen time is dominated by apps, not having one puts you at a disadvantage.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            At <strong>Codenclick Technologies</strong>, we don't just build apps; we build businesses. Whether you need a sleek consumer app for iOS or a rugged logistics app for Android, our developers in <strong>Delhi</strong> craft experiences that feel fluid, fast, and native. We focus on retention, not just downloads.
          </p>
          <p className="text-blue-400 font-medium text-lg">
            We transform complex ideas into intuitive, 5-star mobile experiences.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mobile Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end mobile solutions for **Delhi** startups and enterprises.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
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

      {/* 4.5 Technical Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Explanation */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Native Performance, Fractional Cost</h2>
              <p className="text-lg text-gray-400 mb-8">
                The debate between Native vs. Cross-Platform is over. With modern frameworks like React Native, we deliver 60fps performance and native-feeling gestures while sharing up to 90% of the code between iOS and Android.
              </p>
              
              <div className="space-y-6">
                 <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl bg-blue-600 shadow-lg shadow-blue-900/50 flex items-center justify-center">
                     <Cpu className="w-8 h-8 text-white" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">The Bridge Architecture</h4>
                      <p className="text-gray-400 text-sm">Our code communicates directly with native APIs for camera, GPS, and Bluetooth without lag.</p>
                   </div>
                </div>
                 <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-xl bg-purple-500 shadow-lg shadow-purple-900/50 flex items-center justify-center">
                     <Zap className="w-8 h-8 text-white" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Instant OTA Updates</h4>
                      <p className="text-gray-400 text-sm">We can push critical bug fixes directly to user devices, bypassing the slow App Store review process.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
             <div className="relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                <div className="relative flex justify-center gap-6">
                    {/* Phone 1: iOS */}
                    <div className="w-[160px] h-[300px] border-[6px] border-[#1a1a1a] bg-[#0F0F13] rounded-[2rem] shadow-2xl relative overflow-hidden transform -rotate-6 translate-y-4">
                        <div className="absolute top-0 w-1/2 left-1/4 h-4 bg-[#1a1a1a] rounded-b-xl z-10" />
                        <div className="p-4 pt-8">
                           <div className="w-full h-8 bg-white/10 rounded mb-2" />
                           <div className="w-2/3 h-8 bg-white/10 rounded mb-4" />
                           <div className="grid grid-cols-2 gap-2">
                              <div className="aspect-square bg-blue-500/20 rounded-lg" />
                              <div className="aspect-square bg-blue-500/20 rounded-lg" />
                              <div className="aspect-square bg-blue-500/20 rounded-lg" />
                              <div className="aspect-square bg-blue-500/20 rounded-lg" />
                           </div>
                           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full" />
                        </div>
                    </div>

                    {/* Phone 2: Android */}
                    <div className="w-[160px] h-[300px] border-[6px] border-[#1a1a1a] bg-[#0F0F13] rounded-[1.5rem] shadow-2xl relative overflow-hidden transform rotate-6 translate-y-4">
                         <div className="absolute top-2 w-3 h-3 left-1/2 -translate-x-1/2 bg-[#1a1a1a] rounded-full z-10" />
                          <div className="p-4 pt-8">
                           <div className="w-full h-8 bg-white/10 rounded mb-2" />
                           <div className="w-2/3 h-8 bg-white/10 rounded mb-4" />
                           <div className="grid grid-cols-2 gap-2">
                              <div className="aspect-square bg-purple-500/20 rounded-lg" />
                              <div className="aspect-square bg-purple-500/20 rounded-lg" />
                              <div className="aspect-square bg-purple-500/20 rounded-lg" />
                              <div className="aspect-square bg-purple-500/20 rounded-lg" />
                           </div>
                        </div>
                    </div>
                </div>
                {/* Code Connection */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/80 px-4 py-2 rounded-full border border-white/20 text-xs font-mono text-blue-300">
                    &lt;SharedComponent /&gt;
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Development Lifecycle</h2>
              <p className="text-xl text-gray-400 mb-8">
                From napkin sketch to Featured on the App Store.
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
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">App Store Rejection Handling</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Offline Mode Architecture</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Push Notification Strategy</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mobile Tech Stack</h2>
            <p className="text-xl text-gray-400">Future-proof technologies for your app.</p>
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
                <Smartphone className="w-4 h-4 text-blue-400" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Trust Us With Your App?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We build apps that get featured, not deleted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centric Design",
                desc: "An app is only as good as its UX. We design thumb-friendly interfaces that users instinctively understand."
              },
              {
                title: "Battery Optimized",
                desc: "We write efficient code that respects the user's battery life and data plan. Bloated apps get uninstalled."
              },
              {
                title: "Security First",
                desc: "We implement banking-grade encryption and secure authentication to protect user data from day one."
              },
              {
                title: "Scalable Backend",
                desc: "We build server-side logic that can handle growth from 1,000 to 1,000,000 users without crashing."
              },
              {
                title: "Post-Launch Support",
                desc: "OS updates happen every year. We monitor your app and update it to keep it compatible with the latest iOS/Android versions."
              },
              {
                title: "Analytics Integration",
                desc: "We integrate tools like Mixpanel and Firebase so you know exactly how users are behaving inside your app."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-blue-400" size={24} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">App Portfolio</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Apps that are changing industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Hyperlocal Delivery</h3>
                  <p className="text-blue-400">Delhi Startup</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Real-time tracking lag</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">WebSocket Integration</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">4.8 Star App Rating</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Fitness Coach</h3>
                  <p className="text-blue-400">Health & Wellness</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Video buffering issues</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">CDN & Adaptive Streaming</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">100k+ Downloads</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Engagement Models</h2>
            <p className="text-xl text-gray-400">Flexible options to build your dream app.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Project */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">Fixed Cost</h3>
              <p className="text-lg text-gray-400 mb-6">For defined scopes</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Clear Scope & Timeline</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Milestone Based Payments</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> 3 Months Support Included</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Best for MVPs</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all text-center font-bold">Get Quote</Link>
            </div>
            {/* Team */}
            <div className="glass-panel p-8 rounded-3xl border border-blue-500 relative transform scale-105 shadow-2xl shadow-blue-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">For Startups</div>
              <h3 className="text-2xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-lg text-gray-400 mb-6">Monthly resource hire</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Full-Time App Developers</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Direct Communication</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Flexibility to Pivot</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Scalable Team Size</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-all text-center font-bold">Hire Developers</Link>
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
              Questions about buying an app.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "How much does an app cost to build?",
              answer: "It varies wildly. A simple MVP might cost $5k-$10k, while a complex Uber-like app can cost $30k+. We provide detailed breakdowns so you know exactly what you're paying for."
            },
            {
              question: "Should I build for iOS or Android first?",
              answer: "With Cross-Platform technologies like React Native, you don't have to choose! We can build for both simultaneously for nearly the cost of one."
            },
            {
              question: "How long does it take?",
              answer: "A typical MVP takes 8-12 weeks. More complex enterprise apps can take 4-6 months. We work in sprints so you see progress every 2 weeks."
            },
            {
              question: "Do you help with App Store upload?",
              answer: "Yes, we handle the entire submission process, including creating screenshots, writing descriptions, and handling any rejections from Apple or Google."
            },
            {
              question: "Who owns the code?",
              answer: "You do. 100%. Once final payment is made, we transfer all IP and repositories to your ownership."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Got an App Idea?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let it stay in your head. Let's build the next big thing.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book App Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AppDevelopment;
