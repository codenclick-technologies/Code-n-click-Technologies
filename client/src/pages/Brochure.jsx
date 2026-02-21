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
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const downloadPDF = async () => {
    setIsGenerating(true);
    const element = brochureRef.current;
    
    // Professional Print Settings
    const opt = {
      margin: 0,
      filename: 'Codenclick_Profile_2026.pdf',
      image: { type: 'jpeg', quality: 1.0 }, // Max quality
      html2canvas: { 
        scale: 2, // High resolution (Retina-like)
        useCORS: true, 
        letterRendering: true,
        scrollY: 0,
        backgroundColor: '#ffffff' // Default white base for clean edges
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Wait for state update and images
    await new Promise(resolve => setTimeout(resolve, 800));

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
    });
  };

  const A4_WIDTH = '210mm';
  const A4_HEIGHT = '296mm'; // Reduce further to safe zone

  // Shared Graphic Elements (CSS Shapes)
  const GridPattern = () => (
    <div className="absolute inset-0 z-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', 
        backgroundSize: '20px 20px' 
      }}>
    </div>
  );

  const Page = ({ children, className = "", id, isLastPage = false }) => (
    <div 
      id={id}
      className={`relative overflow-hidden flex flex-col ${isGenerating ? 'm-0 shadow-none rounded-none' : 'shadow-2xl mx-auto my-8'} ${className}`}
      style={{ 
        width: isGenerating ? A4_WIDTH : '100%', 
        maxWidth: isGenerating ? 'none' : '210mm',
        height: isGenerating ? A4_HEIGHT : 'auto', 
        minHeight: isGenerating ? A4_HEIGHT : '297mm',
        maxHeight: isGenerating ? A4_HEIGHT : 'none',
        aspectRatio: isGenerating ? 'auto' : '210/297',
        breakAfter: isLastPage ? 'auto' : 'page',
        pageBreakAfter: isLastPage ? 'auto' : 'always',
        overflow: 'hidden'
      }}
    >
      {children}
      {/* Universal Footer for internal pages only */}
      {!className.includes('bg-slate-900') && !className.includes('bg-blue-600') && (
        <div className="absolute bottom-6 left-10 right-10 flex justify-between items-end border-t border-gray-100 pt-4">
           <div className="flex items-center justify-between w-full opacity-50">
             <div className="flex items-center gap-2">
                <img src="/logo.png" className="h-4 w-auto grayscale" alt="Footer Logo" />
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">/ 2026 Profile</span>
             </div>
             <div className="text-[10px] text-gray-400 font-mono">www.codenclick.in</div>
           </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111] py-8 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Controls */}
      <div className="fixed top-6 right-6 z-50 flex gap-4 print:hidden">
         <button 
            onClick={downloadPDF}
            disabled={isGenerating}
            className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all disabled:opacity-50"
         >
            {isGenerating ? <div className="w-4 h-4 border-2 border-slate-300 border-t-black rounded-full animate-spin" /> : <Download size={18} />}
            {isGenerating ? 'Exporting PDF...' : 'Download Brochure'}
         </button>
      </div>

      <div className={`transform transition-transform origin-top ${isGenerating ? 'scale-100 pt-0' : 'scale-100 pt-0'} flex flex-col items-center px-4 sm:px-0`}>
        <div ref={brochureRef} className="w-full max-w-[210mm]">
          
          {/* ================= PAGE 1: COVER ================= */}
          <Page className="bg-slate-900 text-white relative">
             {/* Abstract Background Art */}
             <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
             </div>

             <div className="relative z-10 h-full flex flex-col justify-between p-14">
                {/* Header */}
                <div className="flex justify-between items-start">
                   <img src="/logo.png" className="h-24 w-auto object-contain brightness-0 invert" alt="Logo" />
                   <div className="text-right">
                      <div className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-2">Corporate Profile</div>
                      <div className="text-white/60 font-mono text-xs">est. 2018</div>
                   </div>
                </div>

                {/* Main Headline */}
                <div className="mb-20">
                   <h1 className="text-[5.5rem] leading-[0.85] font-black tracking-tighter mb-8">
                      <span className="text-white">FUTURE</span> <br/>
                      <span className="text-blue-600">READY</span> <br/>
                      <span className="text-slate-400">ENGINEERING.</span>
                   </h1>
                   <div className="h-1 w-32 bg-blue-600 mb-8"></div>
                   <p className="text-xl text-slate-300 font-light max-w-md leading-relaxed">
                      We help ambitious brands build scalable digital infrastructure that dominates markets.
                   </p>
                </div>

                {/* Footer Info */}
                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Expertise</div>
                      <div className="text-sm font-medium">Web • Mobile • AI</div>
                   </div>
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Location</div>
                      <div className="text-sm font-medium">Delhi, India</div>
                   </div>
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Contact</div>
                      <div className="text-sm font-medium">www.codenclick.in</div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 2: WHO WE ARE (Story) ================= */}
          <Page className="bg-white text-slate-800">
             <GridPattern />
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex items-center gap-4 mb-16">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">01</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">The Vision</h2>
                </div>

                <div className="grid grid-cols-12 gap-12 h-full">
                   {/* Left Col: The Narrative */}
                   <div className="col-span-7 flex flex-col justify-center">
                      <h3 className="text-4xl font-bold leading-tight mb-8">
                         We leverage technology to turn complex problems into <span className="text-blue-600">seamless growth.</span>
                      </h3>
                      <div className="space-y-6 text-gray-600 text-sm leading-7 text-justify">
                         <p>
                            At <strong>Codenclick Technologies</strong>, we believe that software isn't just code—it's the nervous system of your business. In an era where digital presence dictates market leadership, "good enough" is no longer enough.
                         </p>
                         <p>
                            We started in 2018 with a simple mission: to bridge the gap between heavy enterprise engineering and agile startup speed. Today, we are the secret weapon for 500+ global brands who refuse to compromise on quality.
                         </p>
                         <p>
                            Our team of architects, designers, and strategists work as an extension of your company. We don't just take orders; we challenge assumptions, refine strategies, and deliver products that scale.
                         </p>
                      </div>

                      <div className="mt-12 p-6 bg-slate-50 border-l-4 border-blue-600">
                         <p className="text-lg italic font-medium text-slate-700">
                            "Innovation implies doing things differently. But value implies doing things better."
                         </p>
                         <div className="mt-4 flex items-center gap-3">
                             <div className="h-10 w-10 bg-slate-100 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center p-1">
                                <img src="/faviconimage.png" alt="Company Logo" className="w-full h-full object-contain" />
                             </div>
                             <div>
                                <div className="text-xs font-bold uppercase">Team Codenclick</div>
                                <div className="text-[10px] text-gray-500">Execution Excellence</div>
                             </div>
                          </div>
                      </div>
                   </div>

                   {/* Right Col: The Stats */}
                   <div className="col-span-5 flex flex-col justify-center gap-6">
                      {[
                         { num: "250+", label: "Projects Delivered", desc: "India • Dubai • USA" },
                         { num: "98%", label: "Client Retention", desc: "Relationships, not transactions" },
                         { num: <Users size={36} />, label: "Expert Team", desc: "Engineers & Creatives" },
                         { num: "7+", label: "Years Excellence", desc: "Since 2018" }
                      ].map((stat, i) => (
                         <div key={i} className="bg-slate-900 text-white p-6 rounded-none shadow-xl hover:translate-x-2 transition-transform">
                            <div className="text-4xl font-black text-blue-400 mb-1">{stat.num}</div>
                            <div className="font-bold text-sm uppercase tracking-wider mb-1">{stat.label}</div>
                            <div className="text-xs text-gray-400">{stat.desc}</div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 3: WHAT WE DO (Services) ================= */}
          <Page className="bg-slate-50 text-slate-800">
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-8">
                   <div className="flex items-center gap-4">
                      <span className="text-6xl font-black text-slate-200 pointer-events-none">02</span>
                      <div>
                         <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">Capabilties</h2>
                         <p className="text-sm text-gray-500 mt-1">End-to-end digital lifecycle management</p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6 flex-1">
                   {/* Card 1 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-4 group">
                      <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                         <Globe size={24} />
                      </div>
                      <h3 className="text-xl font-bold">Web Engineering</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         High-performance websites and web apps built on Next.js and React. SEO-optimized out of the box, ensuring you rank as good as you look.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                         {['React', 'Next.js', 'Node', 'Headless CMS'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-600">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-4 group">
                      <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center">
                         <Smartphone size={24} />
                      </div>
                      <h3 className="text-xl font-bold">Mobile Applications</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         Native-like experience with Cross-platform tech (Flutter/React Native). One codebase, two platforms (iOS & Android).
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                         {['Flutter', 'React Native', 'iOS', 'Android'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-600">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-4 group">
                      <div className="h-12 w-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
                         <BarChart size={24} />
                      </div>
                      <h3 className="text-xl font-bold">Growth Marketing</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         Data-driven specific campaigns on Google & Meta. We focus on ROAS (Return on Ad Spend), not just vanity clicks.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                         {['Google Ads', 'Meta Ads', 'SEO', 'Analytics'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-600">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 4 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-4 group">
                      <div className="h-12 w-12 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                         <Cpu size={24} />
                      </div>
                      <h3 className="text-xl font-bold">SaaS & Product</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         Full-cycle product development for startups. From MVP to scaling, we handle the architecture, cloud, and security.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                         {['AWS', 'Docker', 'Microservices', 'CI/CD'].map(t => <span key={t} className="px-2 py-1 bg-slate-100 text-[10px] font-bold uppercase text-slate-600">{t}</span>)}
                      </div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 4: STRATEGIC GROWTH (Tree Infographic) ================= */}
          <Page className="bg-slate-50 text-slate-800">
             <div className="relative z-10 h-full p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">03</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">Strategic Impact</h2>
                </div>
                <p className="text-sm text-gray-500 max-w-2xl mb-8">
                   We don't just write code; we architect ecosystems. Our multi-faceted approach ensures every digital touchpoint contributes to your bottom line.
                </p>

                {/* Full Page Tree Infographic */}
                <div className="flex-1 relative">
                   <svg viewBox="0 0 800 1000" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                      <defs>
                         <linearGradient id="glassBlue" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                         </linearGradient>
                         <linearGradient id="glassPurple" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fae8ff" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.2" />
                         </linearGradient>
                         <linearGradient id="glassGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#dcfce7" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
                         </linearGradient>
                         <linearGradient id="glassAmber" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
                         </linearGradient>
                         <filter id="iso-shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="10" stdDeviation="5" floodOpacity="0.15"/>
                         </filter>
                      </defs>

                      {/* --- CENTRAL CONDUIT (Spine) --- */}
                      <path d="M 400 900 L 400 100" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 4" />
                      <path d="M 400 900 L 400 100" stroke="white" strokeWidth="10" strokeOpacity="0.5" filter="url(#iso-shadow)" />

                      {/* --- LEVEL 1: FOUNDATION (Bottom) --- */}
                      <g transform="translate(400, 800)">
                         {/* Isometric Plate */}
                         <g className="group transition-transform duration-500 hover:scale-105">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassBlue)" stroke="#3b82f6" strokeWidth="2" filter="url(#iso-shadow)" />
                             <polygon points="-100,10 0,40 0,55 -100,25" fill="#3b82f6" opacity="0.3" /> 
                             <polygon points="100,10 0,40 0,55 100,25" fill="#2563eb" opacity="0.4" />
                             
                             {/* Icon Floating */}
                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-blue-600 animate-bounce">
                                         <Cpu size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>

                         {/* Connector & Card (LEFT) */}
                         <path d="M -100 10 L -130 10 L -140 -10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                         <circle cx="-100" cy="10" r="4" fill="#3b82f6" />
                         <foreignObject x="-380" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-blue-500 text-right">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Foundation</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     High-availability cloud schemas engineered for 99.99% uptime.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      {/* --- LEVEL 2: EXPERIENCE (Mid-Low) --- */}
                      <g transform="translate(400, 600)">
                         {/* Isometric Plate */}
                         <g className="group transition-transform duration-500 hover:scale-105">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassGreen)" stroke="#10b981" strokeWidth="2" filter="url(#iso-shadow)" />
                             <polygon points="-100,10 0,40 0,55 -100,25" fill="#10b981" opacity="0.3" />
                             <polygon points="100,10 0,40 0,55 100,25" fill="#059669" opacity="0.4" />

                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-emerald-600 animate-bounce">
                                         <Smartphone size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>

                         {/* Connector & Card (RIGHT) */}
                         <path d="M 100 10 L 130 10 L 140 -10" fill="none" stroke="#10b981" strokeWidth="2" />
                         <circle cx="100" cy="10" r="4" fill="#10b981" />
                         <foreignObject x="140" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-emerald-500 text-left">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Experience</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Pixel-perfect, responsive interfaces that captivate users.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      {/* --- LEVEL 3: ECOSYSTEM (Mid-High) --- */}
                      <g transform="translate(400, 400)">
                         {/* Isometric Plate */}
                         <g className="group transition-transform duration-500 hover:scale-105">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassPurple)" stroke="#8b5cf6" strokeWidth="2" filter="url(#iso-shadow)" />
                             <polygon points="-100,10 0,40 0,55 -100,25" fill="#8b5cf6" opacity="0.3" />
                             <polygon points="100,10 0,40 0,55 100,25" fill="#7c3aed" opacity="0.4" />

                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-violet-600 animate-bounce">
                                         <Globe size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>

                         {/* Connector & Card (LEFT) */}
                         <path d="M -100 10 L -130 10 L -140 -10" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                         <circle cx="-100" cy="10" r="4" fill="#8b5cf6" />
                         <foreignObject x="-380" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-violet-500 text-right">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Ecosystem</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Universal API mesh unifying your entire digital workflow.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      {/* --- LEVEL 4: GROWTH (Top) --- */}
                      <g transform="translate(400, 200)">
                         {/* Isometric Plate */}
                         <g className="group transition-transform duration-500 hover:scale-105">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassAmber)" stroke="#f59e0b" strokeWidth="2" filter="url(#iso-shadow)" />
                             <polygon points="-100,10 0,40 0,55 -100,25" fill="#f59e0b" opacity="0.3" />
                             <polygon points="100,10 0,40 0,55 100,25" fill="#d97706" opacity="0.4" />

                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-amber-600 animate-bounce">
                                         <BarChart size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>

                         {/* Connector & Card (RIGHT) */}
                         <path d="M 100 10 L 130 10 L 140 -10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                         <circle cx="100" cy="10" r="4" fill="#f59e0b" />
                         <foreignObject x="140" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-amber-500 text-left">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Growth</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Intelligence-driven algorithms maximizing business ROI.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      {/* --- RIGHT SIDEBAR: HOLOGRAPHIC STATS --- */}
                      <g transform="translate(730, 100)">
                         <line x1="40" y1="0" x2="40" y2="800" stroke="#cbd5e1" strokeWidth="2" />
                         
                         {/* Stat 1 */}
                         <g transform="translate(0, 150)">
                            <path d="M 40 0 L 10 15 L 10 45 L 40 60 Z" fill="#e0f2fe" opacity="0.8" stroke="#3b82f6" />
                            <circle cx="40" cy="30" r="4" fill="#3b82f6" />
                            <text x="5" y="32" textAnchor="end" className="text-[10px] font-black fill-blue-600">85%</text>
                            <text x="5" y="45" textAnchor="end" className="text-[6px] font-bold uppercase fill-slate-400">Efficiency</text>
                         </g>

                         {/* Stat 2 */}
                         <g transform="translate(0, 350)">
                             <path d="M 40 0 L 10 15 L 10 45 L 40 60 Z" fill="#dcfce7" opacity="0.8" stroke="#10b981" />
                             <circle cx="40" cy="30" r="4" fill="#10b981" />
                             <text x="5" y="32" textAnchor="end" className="text-[10px] font-black fill-emerald-600">3x</text>
                             <text x="5" y="45" textAnchor="end" className="text-[6px] font-bold uppercase fill-slate-400">Speed</text>
                         </g>
                         
                         {/* Stat 3 */}
                         <g transform="translate(0, 550)">
                             <path d="M 40 0 L 10 15 L 10 45 L 40 60 Z" fill="#fae8ff" opacity="0.8" stroke="#8b5cf6" />
                             <circle cx="40" cy="30" r="4" fill="#8b5cf6" />
                             <text x="5" y="32" textAnchor="end" className="text-[10px] font-black fill-violet-600">99%</text>
                             <text x="5" y="45" textAnchor="end" className="text-[6px] font-bold uppercase fill-slate-400">Uptime</text>
                         </g>
                      </g>
                   </svg>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 5: PROCESS ================= */}
          <Page className="bg-white text-slate-800">
             <GridPattern />
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex items-center gap-4 mb-16">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">04</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">How We Work</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center relative mt-8">
                   {/* INFOGRAPHIC: 5-Step Semi-Circle Process (Rainbow Arch) */}
                   <div className="relative w-full max-w-4xl aspect-[2/1] mt-10">
                      <svg viewBox="-100 0 1000 500" className="w-full h-full drop-shadow-2xl">
                         <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                               <feGaussianBlur stdDeviation="4" result="blur" />
                               <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                         </defs>

                         {/* Central Hub Title */}
                         <text x="400" y="450" textAnchor="middle" className="text-3xl font-black fill-slate-800 uppercase tracking-widest">Execution Cycle</text>
                         
                         {/* SECTORS group */}
                         <g transform="translate(400, 400)"> {/* Center point at bottom */}
                            {[
                               { id: 1, color: "#06b6d4", icon: Search, label: "Discovery", desc: "Research & Roadmap" }, // Cyan
                               { id: 2, color: "#10b981", icon: Brain, label: "Design", desc: "UI/UX & Prototype" },   // Emerald
                               { id: 3, color: "#84cc16", icon: Code2, label: "Development", desc: "Agile Sprints" },    // Lime
                               { id: 4, color: "#3b82f6", icon: Rocket, label: "Launch", desc: "QA & Deploy" },         // Blue
                               { id: 5, color: "#6366f1", icon: BarChart, label: "Scale", desc: "Growth & Optimize" }    // Indigo
                            ].map((s, i) => {
                               // Calculate Angles for Top Semi-Circle (180 to 360)
                               const totalSectors = 5;
                               const startAngle = 180 + (i * (180 / totalSectors));
                               const endAngle = startAngle + (180 / totalSectors);
                               
                               // Helper to convert polar to cartesian (Standard Math)
                               const p2c = (r, a) => {
                                  const rad = a * Math.PI / 180;
                                  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
                               };

                               // Inner and Outer Radius
                               const ir = 120;
                               const or = 280;

                               const p1 = p2c(ir, startAngle);
                               const p2 = p2c(or, startAngle);
                               const p3 = p2c(or, endAngle);
                               const p4 = p2c(ir, endAngle);

                               // Icon Position (Midpoint radius)
                               const midAngle = startAngle + (180 / totalSectors) / 2;
                               const iconPos = p2c((ir + or) / 2, midAngle);

                               // Text/Pin Position
                               const pinStart = p2c(or, midAngle);
                               const pinEnd = p2c(or + 40, midAngle);
                               
                               // Text Anchoring
                               const isLeft = midAngle < 270;
                               const isRight = midAngle > 270;
                               const textX = pinEnd.x + (isLeft ? -10 : 10);
                               const textAnchor = isLeft ? "end" : isRight ? "start" : "middle";
                               const yOffset = midAngle === 270 ? -40 : -10; // Push top center text up

                               return (
                                  <g key={i} className="group cursor-pointer">
                                     {/* Sector Path */}
                                     {/* Note: Arc flag '0 0 1' is correct for clockwise 180->360 sweep? No, SVG y is down. 
                                         180->360 goes Left->Top(neg)->Right. 
                                         Since y is inverted, standard circle goes clockwise.
                                         180 (-1, 0) -> 270 (0, -1) -> 360 (1, 0).
                                     */}
                                     <path 
                                        d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${or} ${or} 0 0 1 ${p3.x} ${p3.y} L ${p4.x} ${p4.y} A ${ir} ${ir} 0 0 0 ${p1.x} ${p1.y} Z`} 
                                        fill={s.color} 
                                        className="transition-all duration-300 hover:brightness-110 hover:scale-105 origin-center"
                                        stroke="white"
                                        strokeWidth="4"
                                     />
                                     
                                     {/* Icon */}
                                     <foreignObject x={iconPos.x - 20} y={iconPos.y - 20} width="40" height="40" className="pointer-events-none">
                                        <div className="flex items-center justify-center w-full h-full text-white drop-shadow-md">
                                           <s.icon size={28} strokeWidth={2.5} />
                                        </div>
                                     </foreignObject>

                                     {/* Label Group */}
                                     <g className="opacity-80 group-hover:opacity-100 transition-opacity">
                                         {/* Pin Line */}
                                         <line x1={pinStart.x} y1={pinStart.y} x2={pinEnd.x} y2={pinEnd.y} stroke={s.color} strokeWidth="2" />
                                         <circle cx={pinEnd.x} cy={pinEnd.y} r="4" fill={s.color} />
                                         
                                         {/* Text */}
                                         <text x={textX} y={pinEnd.y + yOffset} textAnchor={textAnchor} className="fill-slate-800 font-bold text-lg uppercase">{s.label}</text>
                                         <text x={textX} y={pinEnd.y + yOffset + 15} textAnchor={textAnchor} className="fill-slate-500 text-xs font-medium">{s.desc}</text>
                                     </g>
                                  </g>
                               );
                            })}
                         </g>
                         
                         {/* Step Badge (Semi-Circle at bottom) */}
                         <g transform="translate(400, 400)">
                           <path d="M -80 0 A 80 80 0 0 1 80 0 Z" fill="white" className="drop-shadow-lg" />
                           <text y="-25" textAnchor="middle" className="text-4xl font-black fill-slate-300">05</text>
                           <text y="-10" textAnchor="middle" className="text-[10px] font-bold fill-gray-400 uppercase tracking-widest">Steps</text>
                         </g>
                      </svg>
                   </div>

                   {/* Human Connection Section */}
                   <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mt-8 px-4 border-t border-slate-100 pt-8">
                      <div className="text-center group">
                          <div className="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                             <Users size={18} />
                          </div>
                          <h4 className="font-bold text-sm text-slate-800 mb-1">People First</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">
                             We don't just follow tickets. We talk, debate, and collaborate. Your project team is a group of humans who genuinely care.
                          </p>
                      </div>
                      <div className="text-center group">
                          <div className="w-10 h-10 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                             <Shield size={18} />
                          </div>
                          <h4 className="font-bold text-sm text-slate-800 mb-1">Transparent Trust</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">
                             No black boxes. No hidden costs. Honest communication builds better software than complex code ever could.
                          </p>
                      </div>
                      <div className="text-center group">
                          <div className="w-10 h-10 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                             <Zap size={18} />
                          </div>
                          <h4 className="font-bold text-sm text-slate-800 mb-1">Passion Driven</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">
                             We don't clock out mentally. We are dreamers and doers who get excited about solving the problems that keep you up at night.
                          </p>
                      </div>
                   </div>
                </div>

                <div className="mt-auto bg-slate-900 text-white p-8 flex justify-between items-center shadow-2xl">
                   <div>
                      <div className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-1">Our Promise</div>
                      <div className="text-lg font-medium">On-Time. On-Budget. Zero Excuses.</div>
                   </div>
                   <div className="h-10 w-10 bg-blue-600 flex items-center justify-center rounded-full">
                      <Check size={20} />
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 5: CONTACT ================= */}
          <Page className="bg-blue-600 text-white relative" isLastPage={true}>
             <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
             </div>
             
             <div className="relative z-10 h-full p-14 flex flex-col justify-between">
                <div>
                   <img src="/logo.png" className="h-16 w-auto brightness-0 invert opacity-50 mb-12" alt="Logo" />
                   <h2 className="text-6xl font-black leading-tight mb-8">
                      READY TO <br/>
                      BUILD THE <br/>
                      <span className="text-gray-900">EXTRAORDINARY?</span>
                   </h2>
                   <p className="text-xl text-blue-100 max-w-md leading-relaxed font-medium">
                      The future belongs to those who build it. Let's start your digital transformation today.
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-12 mt-12">
                   <div className="space-y-8">
                      <div>
                         <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Call Us</div>
                         <div className="text-2xl font-bold">+91 870019 8968</div>
                      </div>
                      <div>
                         <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Email</div>
                         <div className="text-2xl font-bold">contact@codenclick.in</div>
                      </div>
                      <div>
                         <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Visit</div>
                         <div className="text-lg font-medium max-w-xs"> Delhi, India</div>
                      </div>
                   </div>

                   <div className="flex flex-col items-end justify-end">
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                         <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.codenclick.in&format=png" 
                            className="w-32 h-32" 
                            alt="QR Code" 
                         />
                      </div>
                      <div className="mt-4 text-right">
                         <div className="text-xs font-bold uppercase tracking-widest opacity-70">Scan to Visit</div>
                         <div className="font-mono text-sm">www.codenclick.in</div>
                      </div>
                   </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex justify-between items-end">
                   <div className="text-[10px] opacity-60">
                      © 2026 Codenclick Technologies. <br/> All Rights Reserved.
                   </div>
                   <div className="text-6xl font-black text-blue-900 opacity-30 select-none">
                      2026
                   </div>
                </div>
             </div>
          </Page>

        </div>
      </div>
    </div>
  );
};

export default Brochure;
