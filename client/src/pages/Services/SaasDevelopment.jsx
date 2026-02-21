import React from 'react';
import SEOHead from '../../components/utils/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Database,
  Server,
  Shield,
  TrendingUp,
  Users,
  ArrowRight,
  Zap,
  Layers,
  Lock,
  Code2,
  CheckCircle2,
  Award
} from 'lucide-react';
import FAQ from '../../components/ui/FAQ';

const SaasDevelopment = () => {

  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-pink-400" />,
      title: "Cloud-Native Architecture",
      description: "Scalable, resilient systems built on AWS, Azure, or GCP that grow with your user base."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Multi-Tenant Platforms",
      description: "Secure data isolation and custom experiences for every customer on your platform."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "High-Performance APIs",
      description: <span>Robust REST and GraphQL APIs designed for speed, reliability, and easy integration with <Link to="/services/web-development" className="text-purple-400 hover:underline">front-end platforms</Link>.</span>
    },
    {
      icon: <Lock className="w-8 h-8 text-emerald-400" />,
      title: "Enterprise Security",
      description: "SOC2-ready security practices, encryption, and role-based access control (RBAC)."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: "Subscription Management",
      description: "Seamless integration with Stripe, Lemon Squeezy, or Paddle for recurring billing."
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      title: "Microservices & Serverless",
      description: "Modern architectures that reduce costs and improve maintainability."
    }
  ];

  const techStack = [
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Caching" },
    { name: "Docker", category: "Container" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "AWS", category: "Cloud" },
    { name: "Terraform", category: "IaC" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "MVP Strategy",
      description: <span>We define exactly what you need to launch and earn revenue, using <Link to="/services/graphic-design" className="text-pink-400 hover:underline">rapid prototyping</Link> to strip away bloat.</span>
    },
    {
      number: "02",
      title: "Architecture Design",
      description: "We build systems that can handle a million users before you even have your first thousand."
    },
    {
      number: "03",
      title: "Agile Build",
      description: "You get updates every week. We ship fast, break nothing, and keep you in the loop."
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "When you grow, we grow with you. We monitor, tweak, and scale your infrastructure in real-time."
    }
  ];

  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-hidden">
      <SEOHead
        title="Best SaaS Development Company in Delhi | Codenclick Technologies"
        description="Top SaaS development agency in Delhi. We build scalable, secure cloud applications and MVPs for startups and enterprises."
        keywords="SaaS Development Company Delhi, Cloud Application Developers Delhi, Custom SaaS Solutions Delhi, SaaS MVP Development India, Startup Tech Partner Delhi"
        canonical="/services/saas-development"
      />

      {/* 1. H1 - Main Service Title */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#020205] to-[#020205] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-40 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-purple-500/30 text-purple-300 text-sm font-medium mb-8"
          >
            <Cloud className="w-4 h-4" />
            <span>Scalable Cloud Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-gray-400"
          >
            SaaS Application <br className="hidden md:block" />
            <span className="text-purple-500">Development in Delhi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2">
              Get SaaS Strategy <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 glass-button text-white rounded-xl font-bold flex items-center justify-center gap-2">
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section (Pain Point -> Solution -> Trust) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#020205]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stop Building Technical Debt. Start Building Assets.</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Most SaaS startups fail not because of a bad idea, but because of poor execution. Spaghetti code, security vulnerabilities, and scalability nightmares can kill your valuation before you even Series A.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            We are <strong>Codenclick Technologies</strong>, your technical co-founders based in <strong>Delhi</strong>. We build robust, SOC2-ready SaaS platforms that are designed to handle millions of requests from day one. You focus on user acquisition; we handle the infrastructure that keeps your churn low and your uptime high.
          </p>
          <p className="text-purple-400 font-medium text-lg">
            Trusted by founders in Delhi NCR to build products that scale.
          </p>
        </div>
      </section>

      {/* 3. What Is This Service? (H2) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SaaS Capabilities</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From MVP to IPO, we provide end-to-end engineering for software products in **Delhi NCR**.
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
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-purple-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
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
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">Why SaaS Is The Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              {[
                "Recurring Revenue: Predictable income streams that investors love.",
                "Global Scale: Write code once, sell it to the world instantly.",
                "Valuation Multiples: SaaS companies trade at 5x-10x higher revenue multiples than service businesses.",
                "Automation: Software doesn't sleep. Your product works 24/7."
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-500/20 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-lg text-gray-300">{point}</p>
                </div>
              ))}
            </div>
            <div className="relative glass-panel p-8 rounded-3xl border border-white/10">
              <div className="absolute top-0 right-0 p-4">
                <TrendingUp className="w-12 h-12 text-pink-400 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Speed to Market</h3>
              <p className="text-gray-400 mb-6">
                In the SaaS world, speed is life. Our <span className="text-white font-bold">Rapid MVP Framework</span> gets you from concept to first paying customer in weeks, not months.
              </p>
              <Link to="/contact" className="text-purple-400 font-bold hover:underline">Start your build today &rarr;</Link>
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
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
                <div className="relative p-6 border border-white/10 bg-[#0F0F13] rounded-xl shadow-2xl flex flex-col gap-6 items-center">
                    {/* Level 1: Users */}
                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                           <Users className="w-6 h-6 text-gray-400" />
                        </div>
                         <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                           <Users className="w-6 h-6 text-gray-400" />
                        </div>
                    </div>
                     <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                    {/* Level 2: Load Balancer */}
                    <div className="w-full max-w-xs p-3 bg-purple-900/30 border border-purple-500/50 rounded text-center text-purple-300 font-bold text-sm">
                       Load Balancer (Nginx)
                    </div>
                     <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                    {/* Level 3: Services */}
                    <div className="flex gap-4 w-full justify-center">
                       <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded flex flex-col items-center gap-2">
                          <Zap className="w-5 h-5 text-yellow-400" />
                          <span className="text-xs text-gray-300">Auth Service</span>
                       </div>
                       <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded flex flex-col items-center gap-2">
                          <Database className="w-5 h-5 text-green-400" />
                          <span className="text-xs text-gray-300">Core API</span>
                       </div>
                       <div className="flex-1 p-4 bg-white/5 border border-white/10 rounded flex flex-col items-center gap-2">
                          <Cloud className="w-5 h-5 text-blue-400" />
                          <span className="text-xs text-gray-300">Worker Nodes</span>
                       </div>
                    </div>
                    {/* Level 4: Data */}
                    <div className="flex justify-center gap-8 w-full border-t border-dashed border-white/10 pt-6">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                           <Database className="w-4 h-4 text-purple-400" /> PostgreSQL Primary
                        </div>
                         <div className="flex items-center gap-2 text-xs text-gray-400">
                           <Layers className="w-4 h-4 text-red-400" /> Redis Cache
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Explanation */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Engineered for Scale</h2>
              <p className="text-lg text-gray-400 mb-8">
                Your MVP might start small, but our architecture doesn't. We design systems that decouple services, allowing you to scale up specific parts of your application without rewriting the whole thing.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold">Zero Single Points of Failure</h4>
                     <p className="text-gray-400 text-sm">Redundancy at every layer ensures 99.99% uptime.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                     <h4 className="text-white font-bold">Auto-Scaling Infrastructure</h4>
                     <p className="text-gray-400 text-sm">Servers spin up automatically when traffic spikes.</p>
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
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Product Roadmap</h2>
              <p className="text-xl text-gray-400 mb-8">
                A proven methodology for building software that scales.
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
              <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full" />
              <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">SOC2 Compliant Architecture</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">99.99% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="text-green-400" />
                    <span className="text-gray-300 font-medium">Automated CI/CD Pipelines</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cloud Stack</h2>
            <p className="text-xl text-gray-400">Enterprise-grade tools for serious software.</p>
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
                <Zap className="w-4 h-4 text-purple-400" />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Delhi NCR Founders Partner With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Founder Mentality",
                desc: "We understand burn rate, CAC, and LTV. We build features that move the needle for your business metrics, not just your GitHub commits."
              },
              {
                title: "Deep Tech Expertise",
                desc: "From AI integration to real-time sockets, we handle the complex engineering challenges that scare other agencies away."
              },
              {
                title: "Scale Ready Architecture",
                desc: "We build systems that survive the 'Hacker News Hug of Death'. Your platform stays up when you go viral."
              },
              {
                title: "Compliance Baked In",
                desc: "GDPR, SOC2, HIPAA readiness depending on your needs. We take data privacy as seriously as you do."
              },
              {
                title: "Code Ownership",
                desc: "You own the IP. 100%. We push code to your repositories, and you have full control over your asset."
              },
              {
                title: "Long-Term Partnership",
                desc: "We don't launch and leave. We stick around to help you iterate, pivot, and scale to your Series A and beyond."
              }
            ].map((item, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-purple-400" size={24} />
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building next-gen unicorns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Fintech Platform</h3>
                  <h3 className="text-2xl font-bold text-white">Fintech Platform</h3>
                  <p className="text-purple-400">Noida: Seed to Series A</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Handle 10k transactions/sec</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Node.js Microservices on AWS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">Successfully Raised $5M</span>
                </div>
              </div>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">CRM Tool</h3>
                  <h3 className="text-2xl font-bold text-white">CRM Tool</h3>
                  <p className="text-purple-400">Delhi B2B SaaS</p>
                </div>
                <Award className="text-yellow-500 w-10 h-10" />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Challenge</span>
                  <span className="text-red-400">Slow query times (&gt;2s)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-gray-400">Solution</span>
                  <span className="text-green-400">Postgres Optimization & Redis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Result</span>
                  <span className="text-white font-bold">Latency reduced to 50ms</span>
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
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Investment Models</h2>
            <p className="text-xl text-gray-400">Flexible engagement models to suit your stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* MVP Package */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col hover:border-purple-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-2">MVP Sprint</h3>
              <p className="text-lg text-gray-400 mb-6">Launch in 8-12 weeks</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Core Feature Development</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Admin Dashboard</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> User Authentication & Payments</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Basic Cloud Setup</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all text-center font-bold">Start MVP</Link>
            </div>
            {/* Dedicated Team */}
            <div className="glass-panel p-8 rounded-3xl border border-purple-500 relative transform scale-105 shadow-2xl shadow-purple-900/20 flex flex-col">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">For Scale-Ups</div>
              <h3 className="text-2xl font-bold text-white mb-2">Dedicated Team</h3>
              <p className="text-lg text-gray-400 mb-6">Your remote engineering team</p>
              <ul className="space-y-4 mb-8 flex-1 text-gray-300">
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Full-Stack Developers</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Project Management Included</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Daily Standups</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="text-green-400" /> Scale up/down as needed</li>
              </ul>
              <Link to="/contact" className="w-full py-4 rounded-xl bg-purple-600 text-white hover:bg-purple-500 transition-all text-center font-bold">Hire Squad</Link>
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
              Common questions from SaaS founders.
            </p>
          </div>

          <FAQ faqs={[
            {
              question: "What is an MVP and why do I need one?",
              answer: "MVP stands for Minimum Viable Product. It's the leanest version of your product that delivers core value to early users. We build MVPs to help you test the market quickly without spending a fortune."
            },
            {
              question: "How do you handle data security and isolation?",
              answer: "For multi-tenant SaaS, we ensure strict data isolation using logical separation (Row Security Policies) or physical separation (separate schemas/databases) depending on your enterprise requirements."
            },
            {
              question: "Do I need to be technical to work with you?",
              answer: "Not at all. We act as your interim CTO. We explain technical decisions in plain English and handle all the infrastructure so you can focus on sales and product vision."
            },
            {
              question: "Can you take over an existing codebase?",
              answer: "Yes, we frequently rescue projects. We perform a comprehensive code audit to identify security risks and technical debt, then implement a refactoring plan to get you back on track."
            },
            {
              question: "What makes you different from a freelancer?",
              answer: "Reliability and breadth of skills. A freelancer can disappear or get stuck. We are a cohesive team with expertise in frontend, backend, DevOps, and design. You get a full department for the cost of one senior hire."
            }
          ]} />
        </div>
      </section>

      {/* 11. CTA (Strong) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto glass-panel rounded-[3rem] p-12 text-center relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Unicorn?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let technical execution be your bottleneck. Let's build something world-changing together.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-bold hover:scale-105 transition-transform">
              Book Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SaasDevelopment;
