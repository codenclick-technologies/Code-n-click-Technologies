import React, { useRef, memo } from "react";
import {
    motion,
    // useScroll, // Unused
    useTransform,
    useSpring,
    useMotionValue,
    // useMotionTemplate, // Unused
} from "framer-motion";
import {
    ArrowRight,
    TrendingUp,
    CheckCircle2,
    Users,
    Code2,
    Layout,
    Smartphone,
    Star,
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Advanced Components (Memoized for Performance) ---

const ParticleVortex = memo(() => {
    // Adaptive particle count - Extremely low for performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isMobile) return null; // Completely disable on mobile to prevent lag

    const count = 10;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none translate-z-0">
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 rounded-full border border-blue-500/10 will-change-transform"
                    style={{
                        width: `${(i + 1) * 120}px`,
                        height: `${(i + 1) * 120}px`,
                        x: "-50%",
                        y: "-50%",
                    }}
                    animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                    transition={{ duration: 80 + i * 10, repeat: Infinity, ease: "linear" }}
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-[#020205]" />
        </div>
    );
});

const PerspectiveGrid = memo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isMobile) return null; // Completely disable on mobile

    return (
        <div className="absolute inset-0 z-0 pointer-events-none perspective-[1000px] overflow-hidden translate-z-0">
            <motion.div
                className="absolute -bottom-[30%] -left-[50%] w-[200%] h-[100%] origin-bottom will-change-transform"
                style={{
                    rotateX: "60deg",
                    background: "linear-gradient(transparent 20%, rgba(59, 130, 246, 0.05) 21%, transparent 22%), linear-gradient(90deg, transparent 20%, rgba(59, 130, 246, 0.05) 21%, transparent 22%)",
                    backgroundSize: "60px 60px"
                }}
                animate={{ y: [0, 60] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-[#020205]" />
            </motion.div>
        </div>
    );
});

const HighlightText = ({ text }) => {
    return (
        <span className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-600/20 -z-10 group-hover:h-full transition-all duration-500 ease-out rounded-sm" />
        </span>
    )
}

// --- Main Hero Component ---

const Hero = () => {
    const containerRef = useRef(null);

    // Motion Values (No State Re-renders)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Detect if touch device to disable mouse effects
    const [isTouchDevice, setIsTouchDevice] = React.useState(false);

    React.useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

        // Set initial center position for spotlight
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);
    }, [mouseX, mouseY]);

    const handleMouseMove = (e) => {
        if (isTouchDevice) return;
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    // Smooth Springs for Interactivity
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Derived Transforms - Only calculate if visible (Desktop)
    const rotateX = useTransform(smoothY, [0, window.innerHeight], [5, -5]);
    const rotateY = useTransform(smoothX, [0, window.innerWidth], [-5, 5]);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen bg-[#020205] overflow-hidden flex items-center selection:bg-blue-500/30 font-sans pt-32 lg:pt-32"
        >
            <PerspectiveGrid />
            <ParticleVortex />

            {/* Optimized Spotlight - Uses Transform instead of Background property */}
            {!isTouchDevice && (
                <motion.div
                    className="absolute -left-[500px] -top-[500px] w-[1000px] h-[1000px] pointer-events-none opacity-40 z-0 will-change-transform"
                    style={{
                        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.12), transparent 70%)",
                        x: smoothX,
                        y: smoothY,
                    }}
                />
            )}

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* --- LEFT: CONTROL INTERFACE --- */}
                <div className="space-y-8 lg:space-y-10 pt-12 lg:pt-0 lg:mt-20 text-center lg:text-left">

                    {/* Header Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl hover:bg-white/10 transition-colors mx-auto lg:mx-0"
                    >
                        <div className="flex gap-1.5">
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                            <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        </div>
                        <span className="text-sm font-medium text-gray-200 tracking-wide">Rated #1 for Reliability & Code Quality</span>
                    </motion.div>

                    {/* Main Title */}
                    <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="block text-gray-200">Turning Vision Into</span>
                            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 pb-2">
                                Real Business Value
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light mx-auto lg:mx-0"
                    >
                        Partner with a team that actually cares about your success. We build <Link to="/services/saas-development" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">custom software</Link>, high-performance <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">web applications</Link>, and digital experiences designed to scale with you and delight your users.
                    </motion.p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "#2563eb" }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-[0_20px_40px_-15px_rgba(37,99,235,0.5)] transition-all"
                            >
                                Start Your Project
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>

                        <Link to="/portfolio">
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 border border-white/10 bg-white/5 text-white font-medium text-lg rounded-xl backdrop-blur-sm transition-all"
                            >
                                View Our Work
                            </motion.button>
                        </Link>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="border-t border-white/10 pt-8 flex flex-wrap gap-8 lg:gap-12 justify-center lg:justify-start"
                    >
                        {[
                            { label: "Client Retention", val: "98%" },
                            { label: "Projects Launched", val: "500+" },
                            { label: "Support & Care", val: "24/7" }
                        ].map((stat, i) => (
                            <div key={i} className="group cursor-default">
                                <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">{stat.val}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* --- RIGHT: 3D DASHBOARD --- */}
                <div className="relative h-[800px] hidden lg:flex items-center justify-center perspective-[2000px]">

                    {/* Main Card */}
                    <motion.div
                        style={{ rotateX, rotateY, z: 100 }}
                        className="relative w-[520px] h-[640px] bg-[#030303]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Glow Effects */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                        {/* Header */}
                        <div className="p-8 border-b border-white/5 flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                                    <TrendingUp className="text-blue-500" size={20} />
                                    Business Growth
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">Real-time Impact Analysis</p>
                            </div>
                            <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold animate-pulse">
                                GROWING
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-8 flex-1 flex flex-col gap-6">

                            {/* Main Stat */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 group hover:border-blue-500/30 transition-colors">
                                <div className="flex justify-between items-end mb-4">
                                    <div>
                                        <p className="text-gray-400 text-sm mb-1">Monthly Active Users</p>
                                        <h2 className="text-4xl font-bold text-white tracking-tight">24,500</h2>
                                    </div>
                                    <div className="text-emerald-400 text-sm font-semibold mb-1 flex items-center gap-1">
                                        +127% <TrendingUp size={14} />
                                    </div>
                                </div>
                                {/* Chart */}
                                <div className="h-32 flex items-end gap-2">
                                    {[30, 45, 40, 60, 55, 75, 80, 95, 100].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ duration: 1.5, delay: 0.2 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                                            className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-md hover:to-blue-400 transition-all cursor-pointer"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Services Row */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Layout, title: "Custom Web", desc: "Designed for Scale", color: "text-blue-400" },
                                    { icon: Smartphone, title: "Mobile Apps", desc: "iOS & Android", color: "text-purple-400" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        <item.icon className={`${item.color} mb-3`} size={24} />
                                        <h4 className="text-white font-medium">{item.title}</h4>
                                        <p className="text-gray-500 text-xs">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* System Status */}
                            <div className="mt-auto pt-4 flex items-center gap-4 text-xs font-mono text-gray-500">
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-gray-400">System Healthy</span>
                                </div>
                                <div className="ml-auto text-blue-400">All Systems Go</div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Parallax Elements */}
                    <motion.div
                        style={{ x: useTransform(smoothX, [0, window.innerWidth], [20, -20]), y: useTransform(smoothY, [0, window.innerHeight], [20, -20]), z: 50 }}
                        className="absolute -right-12 top-1/4 p-5 bg-[#030303]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
                    >
                        <Users className="text-blue-400" size={32} />
                    </motion.div>

                    <motion.div
                        style={{ x: useTransform(smoothX, [0, window.innerWidth], [-20, 20]), y: useTransform(smoothY, [0, window.innerHeight], [-20, 20]), z: 150 }}
                        className="absolute -left-12 bottom-1/3 p-5 bg-[#030303]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
                    >
                        <Code2 className="text-emerald-400" size={32} />
                    </motion.div>

                </div>

            </div>
        </section>
    );
};


export default Hero;




