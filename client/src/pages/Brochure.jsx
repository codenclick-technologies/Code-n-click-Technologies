import React, { useRef, useState, useEffect } from 'react';
import { Download, ArrowLeft, Globe, Mail, Phone, MapPin, ExternalLink, Zap, Users, Shield, Cpu, Code2, Rocket, BarChart, Layers, Brain, Check, Search, Smartphone, Star } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

const Brochure = () => {
  const brochureRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('autoDownload') === 'true') {
      const timer = setTimeout(() => {
        downloadPDF();
      }, 1000); // Wait 1s for layout to settle
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const downloadPDF = async () => {
    setIsGenerating(true);
    const element = brochureRef.current;
    
    const opt = {
      margin: 0,
      filename: 'Codenclick_Profile_2025.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        letterRendering: true,
        scrollY: 0,
        backgroundColor: '#ffffff'
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    await new Promise(resolve => setTimeout(resolve, 2000));

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
    });
  };

  const A4_WIDTH = '210mm';
  const A4_HEIGHT = '296mm'; 

  const Page = ({ children, className = "", id, hideWatermark = false }) => (
    <div 
      id={id}
      className={`relative bg-white overflow-hidden flex flex-col ${isGenerating ? 'm-0 shadow-none' : 'shadow-2xl mx-auto my-8'} ${className}`}
      style={{ 
        width: isGenerating ? A4_WIDTH : '100%', 
        maxWidth: isGenerating ? 'none' : '210mm',
        height: isGenerating ? A4_HEIGHT : 'auto', 
        minHeight: isGenerating ? 'auto' : '296mm',
        aspectRatio: isGenerating ? 'auto' : '210/296',
        pageBreakAfter: 'always',
        breakAfter: 'page' 
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-8 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Floating Header */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full z-50 flex items-center gap-6 shadow-2xl print:hidden animate-fade-in-down w-[90%] sm:w-auto justify-between sm:justify-start">
         <Link to="/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
            <ArrowLeft size={20} />
         </Link>
         <div className="text-white hidden sm:block text-left">
            <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Document Preview</div>
            <div className="font-bold text-sm">Corporate Profile 2025</div>
         </div>
         <button 
            onClick={downloadPDF}
            disabled={isGenerating}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
         >
            {isGenerating ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download size={16} />}
            {isGenerating ? 'Rendering...' : 'Download PDF'}
         </button>
      </div>

      <div className={`pt-20 transform transition-transform origin-top ${isGenerating ? 'scale-100 pt-0' : 'scale-100 sm:scale-100'} flex flex-col items-center px-4 sm:px-0`}>
        <div ref={brochureRef} className="w-full max-w-[210mm]">
          
          {/* ================= PAGE 1: COVER (IMPRESSION) ================= */}
          <Page className="bg-[#050505] text-white">
             <div className="absolute inset-0">
               <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/20 rounded-full blur-[100px]" />
               <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[100px]" />
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
             </div>

             <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-12 md:p-16">
                <div className="flex justify-between items-center">
                   {/* Logo - Text removed to prevent duplication as logo contains text */}
                   <div className="flex items-center">
                      <img src="/logo.png" alt="Codenclick" className="h-20 sm:h-28 w-auto object-contain" />
                   </div>
                   <div className="text-right">
                       <div className="text-[8px] sm:text-[10px] text-gray-400 uppercase tracking-widest mb-1">Web • Mobile • AI • Growth</div>
                       <div className="h-0.5 w-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></div>
                   </div>
                </div>

                <div className="space-y-6 relative z-20 mt-auto mb-auto py-10 sm:py-0">
                   <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4">
                      Est. 2018 • Global Tech Partner
                   </div>
                   <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] leading-[0.9] font-black tracking-tighter text-white drop-shadow-2xl">
                      WE DON'T <br/>
                      JUST DELIVER <br/>
                      SERVICES. <br/>
                      <span className="text-blue-500">WE DELIVER</span> <br/>
                      RESULTS.
                   </h1>
                   <div className="w-24 sm:w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mt-8 rounded-full"></div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                   <div className="max-w-md">
                      <p className="text-sm sm:text-lg text-gray-400 font-light leading-relaxed">
                         Engineers of the digital future. We help ambitious brands build scalable, high-performance software ecosystems that dominate markets.
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4 text-[10px] sm:text-xs text-gray-500 font-mono uppercase">
                         <span>• Startup Scaling</span>
                         <span>• Enterprise Transformation</span>
                      </div>
                   </div>
                   <div className="text-right w-full md:w-auto">
                      <div className="text-3xl font-bold font-mono text-white">2025</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Corporate Profile</div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 2: VISION & VALUE (DENSE CONTENT) ================= */}
          <Page className="bg-white">
             <div className="flex flex-col h-full">
                {/* Header Strip */}
                 <div className="bg-[#020205] text-white p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                       <h2 className="text-2xl sm:text-3xl font-bold">The Digital Growth Engine.</h2>
                       <p className="text-gray-400 text-xs sm:text-sm mt-1">Bridging the gap between complex tech and business ROI.</p>
                    </div>
                    <div className="hidden sm:block text-right">
                       <div className="font-bold text-2xl text-blue-500">02</div>
                       <div className="text-[10px] text-gray-500 uppercase tracking-widest">About Us</div>
                    </div>
                 </div>

                 <div className="p-6 sm:p-10 flex-1 flex flex-col gap-6 sm:gap-8">
                    {/* Intro */}
                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 text-xs sm:text-sm text-gray-600 leading-relaxed text-justify border-b border-gray-100 pb-8">
                       <p className="flex-1">
                          <strong>Codenclick Technologies</strong> is more than a software agency; we are your strategic technical partner. We specialize in building robust digital infrastructure—from high-frequency trading platforms to AI-driven marketing ecosystems. Our focus is singular: <strong>metrics that matter.</strong>
                       </p>
                       <p className="flex-1">
                          In a world cluttered with "generic" solutions, we provide bespoke engineering. Whether you are a seed-stage startup needing an MVP in 30 days or an enterprise requiring legacy system modernization, our agile squads deliver with military precision.
                       </p>
                    </div>

                    {/* Mission/Vision Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                           <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Zap size={18}/></div>
                              <h3 className="font-bold text-[#020205]">Our Vision</h3>
                           </div>
                           <p className="text-xs text-gray-500 leading-relaxed">
                              To be the global backend for digital innovation, empowering businesses to automate, scale, and dominate their industries through superior, future-proof technology.
                           </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                           <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Shield size={18}/></div>
                              <h3 className="font-bold text-[#020205]">Our Mission</h3>
                           </div>
                           <p className="text-xs text-gray-500 leading-relaxed">
                              To eliminate technical debt and execution gaps. We treat every line of code as a business asset, ensuring 100% transparency, security, and measurable performance.
                           </p>
                        </div>
                    </div>

                    {/* Why Choose Us - Dense Grid */}
                    <div className="mt-2">
                       <h3 className="text-sm font-bold uppercase tracking-widest text-[#020205] mb-4">Why Industry Leaders Partner With Us</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[
                             { t: "Result-Driven Engineering", d: "We don't ship until it works. Focus on load speed, conversion rates, and uptime.", c: "text-blue-600" },
                             { t: "Transparent Pricing", d: "Fixed scope, fixed price. No hidden hourly billing or surprise cohesive costs.", c: "text-green-600" },
                             { t: "Global Delivery Standards", d: "ISO-compliant coding practices. Secure, scalable, and documented architectures.", c: "text-purple-600" },
                             { t: "24/7 Dedicated Support", d: "Post-launch maintenance and real-time monitoring to ensure business continuity.", c: "text-orange-600" }
                          ].map((item, i) => (
                             <div key={i} className="flex gap-3 items-start p-3 rounded-lg border border-gray-100 hover:bg-gray-50 bg-white">
                                <Check size={16} className={`${item.c} mt-1`} />
                                <div>
                                   <div className="font-bold text-xs text-[#020205]">{item.t}</div>
                                   <div className="text-[10px] text-gray-500 leading-snug mt-1">{item.d}</div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>
             </div>
          </Page>

          {/* ================= PAGE 3: SERVICES (DETAILED & TECHNICAL) ================= */}
          <Page className="bg-slate-50">
             <div className="p-6 sm:p-10 h-full flex flex-col">
                <div className="text-center mb-8">
                   <h2 className="text-3xl font-extrabold text-[#020205]">Comprehensive Expertise.</h2>
                   <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">End-to-End Digital Transformation</p>
                </div>

                <div className="grid grid-cols-1 gap-3 flex-1">
                   {[
                      { 
                         title: "Custom Website Development", 
                         desc: "Not just pages, but conversion funnels. We build SEO-ready, lightning-fast React/Next.js websites that rank high and convert visitors.", 
                         tags: ["Next.js", "React", "Node.js", "Headless CMS"],
                         icon: Globe, color: "bg-blue-600"
                      },
                      { 
                         title: "Mobile & Web Applications", 
                         desc: "Scalable SaaS platforms and native apps. From ride-sharing to fintech dashboards, we build complex logic with intuitive UI.", 
                         tags: ["Flutter", "React Native", "iOS/Android", "PWA"],
                         icon: Smartphone, color: "bg-indigo-600"
                      },
                      { 
                         title: "SEO & Growth Marketing", 
                         desc: "Technical SEO and content strategy to dominate SERPs. We fix Core Web Vitals and build authority to drive organic leads.", 
                         tags: ["Technical SEO", "Backlinking", "CRO", "Site Speed"],
                         icon: Search, color: "bg-green-600"
                      },
                      { 
                         title: "Performance Advertising", 
                         desc: "High-ROI Google & Meta Ads. We optimize CPA (Cost Per Acquisition) using data-driven audience targeting and A/B testing.", 
                         tags: ["Google Ads", "Meta Ads", "Retargeting", "Analytics"],
                         icon: BarChart, color: "bg-orange-600"
                      },
                      { 
                         title: "SaaS Product Development", 
                         desc: "From concept to IPO. We handle architecture, database design, API development, and cloud deployment for software products.", 
                         tags: ["Microservices", "AWS/Azure", "Docker", "CI/CD"],
                         icon: Cpu, color: "bg-purple-600"
                      }
                   ].map((s, i) => (
                      <div key={i} className="flex gap-5 p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                          <div className={`w-12 h-12 ${s.color} rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0 hidden sm:flex`}>
                             <s.icon size={22} />
                          </div>
                          <div className={`w-10 h-10 ${s.color} rounded-lg flex items-center justify-center text-white shadow-md flex-shrink-0 flex sm:hidden`}>
                             <s.icon size={18} />
                          </div>
                          <div className="flex-1">
                             <h3 className="font-bold text-[#020205] text-sm mb-1">{s.title}</h3>
                             <p className="text-[11px] text-gray-500 leading-relaxed mb-2">{s.desc}</p>
                             <div className="flex flex-wrap gap-2">
                                {s.tags.map(t => (
                                   <span key={t} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-bold rounded uppercase tracking-wide">{t}</span>
                                ))}
                             </div>
                          </div>
                      </div>
                   ))}
                </div>
                
                {/* Tech Stack Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 text-center">Powered By Modern Tech Stack</div>
                    <div className="grid grid-cols-3 sm:flex sm:justify-between items-center opacity-60 grayscale px-2 sm:px-8 gap-4 sm:gap-0">
                        {/* Text Placeholders for Logos to ensure PDF safety */}
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">REACT</div>
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">NODE</div>
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">PYTHON</div>
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">AWS</div>
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">DOCKER</div>
                        <div className="font-black text-sm sm:text-lg text-gray-400 text-center">MONGO</div>
                    </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 4: PROOF & PROCESS (TRUST BUILDERS) ================= */}
          <Page className="bg-[#0f1115] text-white">
             <div className="p-6 sm:p-10 h-full flex flex-col">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/10 pb-6 mb-8 gap-4">
                   <div>
                      <h4 className="text-blue-500 font-bold uppercase text-xs tracking-widest mb-2">How We Work</h4>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">The Execution Framework.</h2>
                   </div>
                </div>

                {/* 1. The Process Flow */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                   {[
                      { n: "01", t: "Blueprint", d: "Requirement Analysis & System Architecture Design." },
                      { n: "02", t: "Design", d: "UI/UX Prototyping & High-Fidelity Mockups." },
                      { n: "03", t: "Develop", d: "Agile Coding Sprints & Rigorous QA Testing." },
                      { n: "04", t: "Scale", d: "Deployment, SEO Optimization & Market Launch." }
                   ].map((step, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 p-2 text-4xl font-black text-white/5">{step.n}</div>
                         <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold mb-3 shadow-lg shadow-blue-600/20">{step.n}</div>
                         <h3 className="font-bold text-sm text-white mb-1">{step.t}</h3>
                         <p className="text-[10px] text-gray-400 leading-snug">{step.d}</p>
                      </div>
                   ))}
                </div>

                {/* 2. Industries & Stats */}
                <div className="flex-1 flex flex-col gap-6">
                   <div className="bg-[#1a1d23] rounded-2xl p-6 border border-white/5">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Industries We Dominate</h3>
                      <div className="flex flex-wrap gap-2">
                         {['FinTech', 'HealthTech', 'E-Commerce', 'EdTech', 'Real Estate', 'Logistics', 'SaaS', 'Hospitality'].map(ind => (
                            <span key={ind} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                               {ind}
                            </span>
                         ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                      <div className="bg-gradient-to-br from-blue-900/40 to-blue-900/10 rounded-2xl p-6 border border-blue-500/20 relative overflow-hidden flex flex-col justify-between group h-full">
                         <div className="relative z-10">
                            <div className="text-4xl font-black text-white mb-1">50+</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Enterprise Projects</div>
                            <p className="text-[10px] text-blue-200/60 mt-4 leading-relaxed mb-6">
                               From complex dashboard systems to consumer-facing mobile apps, we delivered excellence.
                            </p>
                         </div>
                         <div className="space-y-2 relative z-10 border-t border-blue-500/10 pt-4">
                            <div className="flex justify-between text-[10px] text-blue-100/80">
                                <span>Fintech Portals</span>
                                <span className="font-bold text-white">12+</span>
                            </div>
                            <div className="flex justify-between text-[10px] text-blue-100/80">
                                <span>SaaS Platforms</span>
                                <span className="font-bold text-white">25+</span>
                            </div>
                            <div className="flex justify-between text-[10px] text-blue-100/80">
                                <span>Mobile Apps</span>
                                <span className="font-bold text-white">15+</span>
                            </div>
                        </div>
                      </div>
                      
                      {/* Testimonial Snapshot */}
                      <div className="bg-white text-slate-900 rounded-2xl p-6 relative flex flex-col justify-between h-full">
                          <div>
                            <div className="text-4xl text-blue-500 font-serif leading-none mb-2">“</div>
                            <p className="text-xs italic font-medium leading-relaxed mb-4">
                                Codenclick transformed our offline business into a digital powerhouse. Sales increased by 200% in 6 months.
                            </p>
                            <div className="border-t border-gray-100 pt-3">
                                <div className="font-bold text-xs">CEO, Logistics Startup</div>
                                <div className="text-[9px] text-gray-400 uppercase">New Delhi, India</div>
                            </div>
                          </div>

                          <div className="mt-4 bg-slate-50 p-3 rounded-lg border border-slate-100 box-border">
                                <div className="flex items-center justify-between mb-1">
                                    <div className="text-[10px] text-gray-500 font-bold uppercase">Client Rating</div>
                                    <div className="flex items-center gap-0.5 text-yellow-500">
                                        <Star size={10} fill="currentColor" />
                                        <Star size={10} fill="currentColor" />
                                        <Star size={10} fill="currentColor" />
                                        <Star size={10} fill="currentColor" />
                                        <Star size={10} fill="currentColor" />
                                    </div>
                                </div>
                                <div className="text-[9px] text-gray-400 leading-snug">Based on 40+ verified client reviews.</div>
                           </div>
                      </div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 5: CONTACT (FINAL CTA) ================= */}
          <Page className="bg-[#000000] text-white" hideWatermark={true}>
             <div className="h-full flex flex-col justify-center items-center p-8 sm:p-12 relative overflow-hidden">
                 {/* Background FX (Static for PDF) */}
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-blue-900/20 rounded-full blur-[100px]"></div>
                 <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-purple-900/20 rounded-full blur-[100px]"></div>

                 <div className="relative z-10 w-full max-w-xl text-center">
                     <div className="w-auto h-20 mx-auto flex items-center justify-center mb-8">
                        <img src="/logo.png" alt="Codenclick" className="h-full w-auto object-contain" />
                     </div>

                     <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                        Ready to Build the <br/>
                        <span className="text-blue-500">Extraordinary?</span>
                     </h2>
                     <p className="text-gray-400 text-sm sm:text-base mb-10 max-w-md mx-auto">
                        Stop planning, start executing. Book a free 30-minute technical consultation and let's map out your success.
                     </p>

                     {/* Contact Box */}
                     <div className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden w-full mb-8">
                         <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-800 border-b border-gray-800">
                             <div className="p-6 flex flex-col items-center hover:bg-white/5 transition-colors">
                                 <Phone className="text-blue-500 mb-2" size={20}/>
                                 <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Talk to Sales</div>
                                 <div className="text-sm font-bold font-mono">+91-870019-8968</div>
                             </div>
                             <div className="p-6 flex flex-col items-center hover:bg-white/5 transition-colors">
                                 <Mail className="text-purple-500 mb-2" size={20}/>
                                 <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Email Us</div>
                                 <div className="text-sm font-bold font-mono">contact@codenclick.in</div>
                             </div>
                         </div>
                         <div className="p-6 flex flex-col items-center hover:bg-white/5 transition-colors">
                             <MapPin className="text-green-500 mb-2" size={20}/>
                             <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Headquarters</div>
                             <div className="text-sm font-bold">New Delhi, India</div>
                         </div>
                     </div>

                     {/* QR & Web */}
                     <div className="flex flex-col items-center gap-3">
                         <div className="p-3 bg-white rounded-xl shadow-lg shadow-white/10">
                            <img 
                                src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.codenclick.in&format=png" 
                                alt="Scan QR" 
                                className="w-20 h-20 block"
                                crossOrigin="anonymous" 
                                onLoad={(e) => e.target.setAttribute('data-loaded', 'true')}
                            />
                         </div>
                         <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold">www.codenclick.in</div>
                     </div>
                 </div>

                 {/* Final Footer */}
                 <div className="absolute bottom-6 w-full text-center">
                    <div className="flex justify-center gap-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
                        <span>LinkedIn</span>
                        <span>•</span>
                        <span>Instagram</span>
                        <span>•</span>
                        <span>Twitter</span>
                    </div>
                     <div className="text-[9px] text-gray-700 mt-2">© 2025 Codenclick Technologies. All Rights Reserved.</div>
                 </div>
             </div>
          </Page>

        </div>
      </div>
    </div>
  );
};

export default Brochure;
