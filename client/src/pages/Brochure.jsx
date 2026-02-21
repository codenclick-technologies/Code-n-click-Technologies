import React, { useRef, useState, useEffect } from 'react';
import { Download, Globe, Mail, Phone, MapPin, Zap, Users, Shield, Cpu, Code2, Rocket, BarChart, Layers, Brain, Check, Search, Smartphone, Star, Heart, Sparkles, MessageCircle } from 'lucide-react';
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
    
    const opt = {
      margin: 0,
      filename: 'Codenclick_Humanized_Profile_2026.pdf',
      image: { type: 'jpeg', quality: 1.0 },
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

    await new Promise(resolve => setTimeout(resolve, 800));

    html2pdf().set(opt).from(element).save().then(() => {
      setIsGenerating(false);
    });
  };

  const A4_WIDTH = '210mm';
  const A4_HEIGHT = '296mm';

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
      {!className.includes('bg-slate-900') && !className.includes('bg-blue-600') && (
        <div className="absolute bottom-6 left-10 right-10 flex justify-between items-end border-t border-gray-100 pt-4">
           <div className="flex items-center justify-between w-full opacity-50">
             <div className="flex items-center gap-2">
                <img src="/faviconimage.png" className="h-4 w-auto grayscale" alt="Footer Logo" />
                <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">/ Partnering for Growth</span>
             </div>
             <div className="text-[10px] text-gray-400 font-mono">www.codenclick.in</div>
           </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#111] py-8 font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      
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
             <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b), linear-gradient(45deg, #1e293b 25%, transparent 25%, transparent 75%, #1e293b 75%, #1e293b)', backgroundPosition: '0 0, 10px 10px', backgroundSize: '20px 20px' }}></div>
             </div>

             <div className="relative z-10 h-full flex flex-col justify-between p-14">
                <div className="flex justify-between items-start">
                   <img src="/logo.png" className="h-24 w-auto object-contain brightness-0 invert" alt="Logo" />
                   <div className="text-right">
                      <div className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-2">Partner Profile</div>
                      <div className="text-white/60 font-mono text-xs">2026 Edition</div>
                   </div>
                </div>

                <div className="mb-20">
                   <h1 className="text-[5rem] leading-[0.85] font-black tracking-tighter mb-8">
                      <span className="text-white">LESS</span> <br/>
                      <span className="text-blue-600">JARGON.</span> <br/>
                      <span className="text-slate-400">MORE GROWTH.</span>
                   </h1>
                   <div className="h-1 w-32 bg-blue-600 mb-8"></div>
                   <p className="text-xl text-slate-300 font-light max-w-md leading-relaxed">
                      We help founders and leaders move the needle by building technology that real people actually love to use.
                   </p>
                </div>

                <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Human Focus</div>
                      <div className="text-sm font-medium">Design • Impact • Scale</div>
                   </div>
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">HQ</div>
                      <div className="text-sm font-medium">New Delhi, India</div>
                   </div>
                   <div>
                      <div className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-1">Connect</div>
                      <div className="text-sm font-medium">www.codenclick.in</div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 2: OUR PROMISE (Humanized Narrative) ================= */}
          <Page className="bg-white text-slate-800">
             <GridPattern />
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex items-center gap-4 mb-16">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">01</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">The Human Edge</h2>
                </div>

                <div className="grid grid-cols-12 gap-12 h-full">
                   <div className="col-span-12 flex flex-col justify-center">
                      <h3 className="text-4xl font-bold leading-tight mb-8">
                         Results over Fluff. <span className="text-blue-600">Humans over Machines.</span>
                      </h3>
                      <div className="space-y-6 text-gray-600 text-sm leading-7 text-justify">
                         <p>
                            In a world where digital agencies drown you in complex jargon and overpriced "black-box" strategies, we chose a different path at <strong>Codenclick Technologies</strong>. We chose to listen.
                         </p>
                         <p>
                            We've seen too many brilliant founders get lost in technical debt and too many businesses pay for code that doesn't deliver a single lead. That's why we don't just sell code—we partner with you to engineer <strong>measurable growth</strong>.
                         </p>
                         <p>
                            Our team works as an extension of yours. We challenge your assumptions, refine your strategy, and treat your budget with the same respect we treat our own. No smoke, no mirrors—just aggressive transparency and a relentless focus on your bottom line.
                         </p>
                      </div>

                      <div className="mt-12 p-8 bg-slate-50 border-l-4 border-blue-600 relative overflow-hidden">
                         <Sparkles className="absolute -right-4 -bottom-4 w-24 h-24 text-blue-500/5 rotate-12" />
                         <p className="text-xl italic font-medium text-slate-700 relative z-10">
                            "Innovation isn't about how complex you can make it. It's about how much value you can create."
                         </p>
                         <div className="mt-6 flex items-center gap-3 relative z-10">
                             <div className="h-12 w-12 bg-white rounded-full overflow-hidden border border-slate-200 flex items-center justify-center p-2 shadow-sm">
                                <img src="/faviconimage.png" alt="Company Logo" className="w-full h-full object-contain" />
                             </div>
                             <div>
                                <div className="text-sm font-bold uppercase tracking-wider text-slate-800">Team Codenclick</div>
                                <div className="text-[11px] text-gray-500 font-medium">Growth Partners & Engineers</div>
                             </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 3: HOW WE HELP (Humanized Services) ================= */}
          <Page className="bg-slate-50 text-slate-800">
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-8">
                   <div className="flex items-center gap-4">
                      <span className="text-6xl font-black text-slate-200 pointer-events-none">02</span>
                      <div>
                         <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">How we help you win</h2>
                         <p className="text-sm text-gray-500 mt-1">We bridge the gap between heavy tech and real-world results.</p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 flex-1">
                   {/* Card 1 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-5 group hover:shadow-xl transition-all border-b-4 border-b-blue-500">
                      <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shadow-inner">
                         <Globe size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Websites that actually work</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         High-performance web platforms that don't just look pretty—they convert. We build on React and Next.js for speed that makes Google (and your users) fall in love.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {['SEO Built-in', 'Lightning Fast', 'User First'].map(t => <span key={t} className="px-3 py-1 bg-blue-50 text-[10px] font-bold uppercase text-blue-600 rounded-lg">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 2 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-5 group hover:shadow-xl transition-all border-b-4 border-b-purple-500">
                      <div className="h-14 w-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center shadow-inner">
                         <Smartphone size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Your vision, in their pockets</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         Native-level mobile experiences that solve real problems. Simple, intuitive, and built to scale from 10 users to 10 million without breaking a sweat.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {['iOS & Android', 'One Codebase', 'Fluid UI'].map(t => <span key={t} className="px-3 py-1 bg-purple-50 text-[10px] font-bold uppercase text-purple-600 rounded-lg">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-5 group hover:shadow-xl transition-all border-b-4 border-b-emerald-500">
                      <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shadow-inner">
                         <TrendingUp size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Turning clicks into customers</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         We ignore vanity metrics and focus on what matters: your ROI. Data-driven growth strategies that find your audience and tell your story effectively.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {['Result Focused', 'Google Ads', 'Meta Ads'].map(t => <span key={t} className="px-3 py-1 bg-emerald-50 text-[10px] font-bold uppercase text-emerald-600 rounded-lg">{t}</span>)}
                      </div>
                   </div>

                   {/* Card 4 */}
                   <div className="bg-white p-8 shadow-sm border border-slate-100 flex flex-col gap-5 group hover:shadow-xl transition-all border-b-4 border-b-orange-500">
                      <div className="h-14 w-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shadow-inner">
                         <Layers size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Products with zero headaches</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">
                         Full-cycle SaaS development from MVP to market leader. We handle the complex architecture so you can focus on building your business.
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4">
                         {['Scalable', 'Secure', 'Custom Managed'].map(t => <span key={t} className="px-3 py-1 bg-orange-50 text-[10px] font-bold uppercase text-orange-600 rounded-lg">{t}</span>)}
                      </div>
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 4: STRATEGIC GROWTH (Infographic) ================= */}
          <Page className="bg-slate-50 text-slate-800">
             <div className="relative z-10 h-full p-12 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">03</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">The Codenclick Effect</h2>
                </div>
                <p className="text-md text-gray-500 max-w-2xl mb-8 font-medium">
                   We don't just write code; we architect ecosystems. Every decision we make is aimed at one final goal: <span className="text-slate-800 font-bold underline decoration-blue-500 decoration-2">Your Market Dominance.</span>
                </p>

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

                      <path d="M 400 900 L 400 100" stroke="#cbd5e1" strokeWidth="4" strokeDasharray="4 4" />
                      <path d="M 400 900 L 400 100" stroke="white" strokeWidth="10" strokeOpacity="0.5" filter="url(#iso-shadow)" />

                      <g transform="translate(400, 800)">
                         <g className="group">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassBlue)" stroke="#3b82f6" strokeWidth="2" filter="url(#iso-shadow)" />
                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-blue-600 animate-bounce">
                                         <Shield size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>
                         <path d="M -100 10 L -130 10 L -140 -10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                         <foreignObject x="-380" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-blue-500 text-right">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">A Base That Never Breaks</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Military-grade security and 99.9% uptime architecture because your business never sleeps.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      <g transform="translate(400, 600)">
                         <g className="group">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassGreen)" stroke="#10b981" strokeWidth="2" filter="url(#iso-shadow)" />
                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-emerald-600 animate-bounce">
                                         <Heart size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>
                         <path d="M 100 10 L 130 10 L 140 -10" fill="none" stroke="#10b981" strokeWidth="2" />
                         <foreignObject x="140" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-emerald-500 text-left">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Capturing User Hearts</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Emotional design that connects with real people, making your brand impossible to forget.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      <g transform="translate(400, 400)">
                         <g className="group">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassPurple)" stroke="#8b5cf6" strokeWidth="2" filter="url(#iso-shadow)" />
                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-violet-600 animate-bounce">
                                         <Sparkles size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>
                         <path d="M -100 10 L -130 10 L -140 -10" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                         <foreignObject x="-380" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-violet-500 text-right">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Unified Digital Flows</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Connecting all your tools into one seamless engine that automates your success.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>

                      <g transform="translate(400, 200)">
                         <g className="group">
                             <polygon points="0,40 100,10 0,-20 -100,10" fill="url(#glassAmber)" stroke="#f59e0b" strokeWidth="2" filter="url(#iso-shadow)" />
                             <g transform="translate(0, -30)">
                                 <foreignObject x="-20" y="-20" width="40" height="40">
                                     <div className="flex items-center justify-center w-full h-full text-amber-600 animate-bounce">
                                         <Rocket size={32} />
                                     </div>
                                 </foreignObject>
                             </g>
                         </g>
                         <path d="M 100 10 L 130 10 L 140 -10" fill="none" stroke="#f59e0b" strokeWidth="2" />
                         <foreignObject x="140" y="-80" width="240" height="140">
                             <div className="bg-white p-4 rounded-xl shadow-lg border-t-4 border-amber-500 text-left">
                                 <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Explosive Growth ROI</h4>
                                 <p className="text-[9px] text-slate-500 font-medium leading-relaxed">
                                     Aggressive marketing and optimization to ensure your investment returns 10x value.
                                 </p>
                             </div>
                         </foreignObject>
                      </g>
                   </svg>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 5: PROCESS (Humanized Steps) ================= */}
          <Page className="bg-white text-slate-800">
             <GridPattern />
             <div className="relative z-10 h-full p-14 flex flex-col">
                <div className="flex items-center gap-4 mb-16">
                   <span className="text-6xl font-black text-slate-200 pointer-events-none">04</span>
                   <h2 className="text-3xl font-bold uppercase tracking-wide text-slate-900">From Handshake to Launch</h2>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center relative mt-8">
                   <div className="relative w-full max-w-4xl aspect-[2/1] mt-10">
                      <svg viewBox="-100 0 1000 500" className="w-full h-full drop-shadow-2xl">
                         <text x="400" y="450" textAnchor="middle" className="text-2xl font-black fill-slate-800 uppercase tracking-widest italic">The Growth Cycle</text>
                         
                         <g transform="translate(400, 400)">
                            {[
                               { id: 1, color: "#06b6d4", icon: MessageCircle, label: "We Listen", desc: "Understanding your vision" },
                               { id: 2, color: "#10b981", icon: Brain, label: "We Sketch", desc: "Crafting the experience" },
                               { id: 3, color: "#84cc16", icon: Code2, label: "We Build", desc: "Clean, elite engineering" },
                               { id: 4, color: "#3b82f6", icon: Rocket, label: "We Ship", desc: "Launching for impact" },
                               { id: 5, color: "#6366f1", icon: Star, label: "We Grow Together", desc: "Constant optimization" }
                            ].map((s, i) => {
                               const totalSectors = 5;
                               const startAngle = 180 + (i * (180 / totalSectors));
                               const endAngle = startAngle + (180 / totalSectors);
                               const p2c = (r, a) => {
                                  const rad = a * Math.PI / 180;
                                  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
                               };
                               const ir = 120;
                               const or = 280;
                               const p1 = p2c(ir, startAngle);
                               const p2 = p2c(or, startAngle);
                               const p3 = p2c(or, endAngle);
                               const p4 = p2c(ir, endAngle);
                               const midAngle = startAngle + (180 / totalSectors) / 2;
                               const iconPos = p2c((ir + or) / 2, midAngle);
                               const pinStart = p2c(or, midAngle);
                               const pinEnd = p2c(or + 40, midAngle);
                               const isLeft = midAngle < 270;
                               const isRight = midAngle > 270;
                               const textX = pinEnd.x + (isLeft ? -10 : 10);
                               const textAnchor = isLeft ? "end" : isRight ? "start" : "middle";
                               const yOffset = midAngle === 270 ? -40 : -10;

                               return (
                                  <g key={i} className="group cursor-pointer">
                                     <path 
                                        d={`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${or} ${or} 0 0 1 ${p3.x} ${p3.y} L ${p4.x} ${p4.y} A ${ir} ${ir} 0 0 0 ${p1.x} ${p1.y} Z`} 
                                        fill={s.color} 
                                        className="transition-all duration-300 hover:brightness-110"
                                        stroke="white"
                                        strokeWidth="4"
                                     />
                                     <foreignObject x={iconPos.x - 20} y={iconPos.y - 20} width="40" height="40" className="pointer-events-none">
                                        <div className="flex items-center justify-center w-full h-full text-white">
                                           <s.icon size={28} strokeWidth={2.5} />
                                        </div>
                                     </foreignObject>
                                     <g className="opacity-80 group-hover:opacity-100 transition-opacity">
                                         <line x1={pinStart.x} y1={pinStart.y} x2={pinEnd.x} y2={pinEnd.y} stroke={s.color} strokeWidth="2" />
                                         <text x={textX} y={pinEnd.y + yOffset} textAnchor={textAnchor} className="fill-slate-800 font-bold text-lg uppercase">{s.label}</text>
                                         <text x={textX} y={pinEnd.y + yOffset + 15} textAnchor={textAnchor} className="fill-slate-500 text-xs font-medium">{s.desc}</text>
                                     </g>
                                  </g>
                               );
                            })}
                         </g>
                      </svg>
                   </div>

                   <div className="grid grid-cols-3 gap-6 w-full max-w-5xl mt-8 px-4 border-t border-slate-100 pt-8">
                      <div className="text-center">
                          <h4 className="font-bold text-sm text-slate-800 mb-1">People First</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">We don't follow tickets; we follow visions. You get a direct line to creators.</p>
                      </div>
                      <div className="text-center border-x border-slate-100">
                          <h4 className="font-bold text-sm text-slate-800 mb-1">Honest Talk</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">No jargon. No black boxes. If something isn't working, we tell you immediately.</p>
                      </div>
                      <div className="text-center">
                          <h4 className="font-bold text-sm text-slate-800 mb-1">Elite Impact</h4>
                          <p className="text-[10px] text-slate-500 leading-relaxed px-2">We only take on projects where we know we can create massive ROI value.</p>
                      </div>
                   </div>
                </div>

                <div className="mt-auto bg-slate-900 text-white p-8 mb-4 flex justify-between items-center shadow-2xl rounded-2xl">
                   <div>
                      <div className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-1">Our Human Promise</div>
                      <div className="text-lg font-medium tracking-tight italic">"We treat your business like it's our own."</div>
                   </div>
                   <div className="h-12 w-12 bg-blue-600 flex items-center justify-center rounded-xl shadow-lg">
                      <Check size={24} className="text-white font-black" />
                   </div>
                </div>
             </div>
          </Page>

          {/* ================= PAGE 6: THE NEXT STEP ================= */}
          <Page className="bg-blue-600 text-white relative" isLastPage={true}>
             <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                   <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
             </div>
             
             <div className="relative z-10 h-full p-14 flex flex-col justify-between">
                <div>
                   <img src="/logo.png" className="h-16 w-auto brightness-0 invert opacity-50 mb-12" alt="Logo" />
                   <h2 className="text-6xl font-black leading-[1] mb-8 tracking-tighter uppercase italic">
                      Ready to <br/>
                      Engineer <br/>
                      <span className="text-slate-900">Your Future?</span>
                   </h2>
                   <p className="text-xl text-blue-100 max-w-md leading-relaxed font-light italic">
                      Stop settling for agencies that don't care. Partner with a team that's obsessed with your success.
                   </p>
                </div>

                <div className="grid grid-cols-2 gap-12 mt-12">
                   <div className="space-y-8">
                      <div>
                         <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Direct Line</div>
                         <div className="text-2xl font-bold">+91-8700198968</div>
                      </div>
                      <div>
                         <div className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-2">Human Support</div>
                         <div className="text-2xl font-bold">contact@codenclick.in</div>
                      </div>
                   </div>

                   <div className="flex flex-col items-end justify-end">
                      <div className="bg-white p-4 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                         <img 
                            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://www.codenclick.in&format=png" 
                            className="w-32 h-32" 
                            alt="QR Code" 
                         />
                      </div>
                      <div className="mt-6 text-right">
                         <div className="text-xs font-bold uppercase tracking-widest opacity-70">Scan to See Our Results</div>
                         <div className="font-mono text-sm">www.codenclick.in</div>
                      </div>
                   </div>
                </div>

                <div className="border-t border-white/20 pt-8 flex justify-between items-end">
                   <div className="text-[10px] opacity-60 font-medium">
                      © 2026 Codenclick Technologies. <br/> Built with ❤️ in Delhi for the World.
                   </div>
                   <div className="text-6xl font-black text-blue-900 opacity-20 select-none">
                      GROWTH
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
