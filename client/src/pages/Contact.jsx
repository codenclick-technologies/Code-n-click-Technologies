import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Clock, Globe } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';
import { contactAPI } from '../services/api';
import SEO from '../components/utils/SEO';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData(e.target);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        try {
            await contactAPI.submit(data);
            setStatus({
                type: 'success',
                message: '✅ Message sent successfully! We\'ll get back to you soon.'
            });
            e.target.reset();

            setTimeout(() => {
                setStatus({ type: '', message: '' });
            }, 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Please try again later.';
            setStatus({
                type: 'error',
                message: `❌ Failed to send message: ${errorMessage}`
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020205] pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            <SEO
                title="Contact Best Digital Agency in Delhi | Codenclick Technologies"
                description="Contact Codenclick Technologies in Delhi. Get a free consultation for web development, SEO, or paid ads. Call +91 8700198968 today."
                keywords="contact digital agency Delhi, web design inquiry Delhi, hire developers Delhi, Codenclick Technologies contact address"
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="space-y-16"
                >
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                        <motion.div variants={fadeInUp}>
                            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase">
                                Contact Us
                            </span>
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                            Let's Build Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Digital Success Story.
                            </span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-gray-400 leading-relaxed">
                            Have a project in mind? We're here to help you turn it into reality. Whether you need an <Link to="/services/seo" className="text-green-400 hover:text-green-300 underline">SEO Expert in Delhi</Link> to grow your traffic, or a <Link to="/services/web-development" className="text-blue-400 hover:text-blue-300 underline">Web Development</Link> team to build your next big platform, we've got you covered. No confusing jargon, just real conversations and real growth.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-8">
                            <motion.div variants={fadeInUp} className="grid gap-6">
                                <SpotlightCard className="p-8 group hover:bg-white/[0.02] border border-white/5 transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500">
                                            <Mail size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-white font-bold text-xl">Email Address</h3>
                                            <p className="text-gray-400">codenclicktechnologies@gmail.com</p>
                                            <p className="text-blue-400/60 text-sm">Response within 24 hours</p>
                                        </div>
                                    </div>
                                </SpotlightCard>

                                <SpotlightCard className="p-8 group hover:bg-white/[0.02] border border-white/5 transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                            <Phone size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-white font-bold text-xl">Phone Number</h3>
                                            <p className="text-gray-400">+91 8700198968</p>
                                            <p className="text-purple-400/60 text-sm">Mon - Fri, 9am - 6pm</p>
                                        </div>
                                    </div>
                                </SpotlightCard>

                                <SpotlightCard className="p-8 group hover:bg-white/[0.02] border border-white/5 transition-all duration-500">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform duration-500">
                                            <MapPin size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-white font-bold text-xl">Office Location</h3>
                                            <p className="text-gray-400">Delhi, India</p>
                                            <p className="text-pink-400/60 text-sm">India, 110001</p>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
                                <h4 className="text-white font-bold flex items-center gap-2">
                                    <Clock size={20} className="text-blue-400" /> Business Hours
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Monday - Friday</span>
                                        <span className="text-white">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Saturday</span>
                                        <span className="text-white">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Sunday</span>
                                        <span className="text-red-400">Closed</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <motion.div
                                variants={scaleIn}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[32px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                                <div className="relative bg-[#030303] p-8 md:p-12 rounded-[28px] border border-white/10 shadow-2xl">
                                    {/* Status Message */}
                                    {status.message && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`mb-8 p-5 rounded-2xl flex items-center gap-4 ${status.type === 'success'
                                                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                                }`}
                                        >
                                            {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                                            <span className="font-medium">{status.message}</span>
                                        </motion.div>
                                    )}

                                    <form className="space-y-8" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-semibold text-gray-300 ml-1">First Name</label>
                                                <input
                                                    name="firstName"
                                                    type="text"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-gray-600"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div className="space-y-2.5">
                                                <label className="text-sm font-semibold text-gray-300 ml-1">Last Name</label>
                                                <input
                                                    name="lastName"
                                                    type="text"
                                                    required
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-gray-600"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <label className="text-sm font-semibold text-gray-300 ml-1">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-gray-600"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className="space-y-2.5">
                                            <label className="text-sm font-semibold text-gray-300 ml-1">Subject</label>
                                            <div className="relative">
                                                <select
                                                    name="subject"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 appearance-none cursor-pointer"
                                                >
                                                    <option className="bg-[#030303]" value="General Inquiry">General Inquiry</option>
                                                    <option className="bg-[#030303]" value="Project Proposal">Project Proposal</option>
                                                    <option className="bg-[#030303]" value="Careers">Careers</option>
                                                    <option className="bg-[#030303]" value="Consultation">Free Consultation</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                                    <MessageSquare size={18} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <label className="text-sm font-semibold text-gray-300 ml-1">Your Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 placeholder:text-gray-600 resize-none"
                                                placeholder="Tell us about your project or inquiry..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full group relative overflow-hidden py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_auto] text-white font-bold text-xl shadow-xl hover:shadow-blue-500/30 transition-all duration-500 hover:bg-right disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-3">
                                                {loading ? (
                                                    <>
                                                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                                        <span>Sending Message...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                                    </>
                                                )}
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;

