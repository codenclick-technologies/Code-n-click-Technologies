import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, Heart, Zap, Coffee, ArrowRight, Check, 
  MapPin, Clock, DollarSign, Search, Filter, X,
  Upload, Send, Loader
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import SpotlightCard from '../components/ui/SpotlightCard';
import { jobsAPI } from '../services/api';

const benefits = [
  { icon: Zap, title: 'High Impact', desc: 'Work on projects that matter.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health coverage.' },
  { icon: Coffee, title: 'Flexible Work', desc: 'Remote-first culture.' },
  { icon: Briefcase, title: 'Growth', desc: 'Learning budget and mentorship.' }
];

const Careers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  // Application form state
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    experienceYears: '',
    currentCTC: '',
    expectedCTC: '',
    noticePeriod: '',
    skills: '',
    coverLetter: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    fetchJobs();
  }, [searchTerm, selectedDepartment, selectedLocation, selectedJobType]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const params = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedDepartment) params.department = selectedDepartment;
      if (selectedLocation) params.location = selectedLocation;
      if (selectedJobType) params.jobType = selectedJobType;

      const response = await jobsAPI.getPublicJobs(params);
      setJobs(response.data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
    setSubmitSuccess(false);
    setSubmitError('');
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    
    if (!resumeFile) {
      setSubmitError('Please upload your resume');
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const formData = new FormData();
      formData.append('resume', resumeFile);
      formData.append('name', applicationData.name);
      formData.append('email', applicationData.email);
      formData.append('phone', applicationData.phone);
      formData.append('experienceYears', applicationData.experienceYears);
      formData.append('skills', applicationData.skills);
      
      if (applicationData.currentCTC) formData.append('currentCTC', applicationData.currentCTC);
      if (applicationData.expectedCTC) formData.append('expectedCTC', applicationData.expectedCTC);
      if (applicationData.noticePeriod) formData.append('noticePeriod', applicationData.noticePeriod);
      if (applicationData.coverLetter) formData.append('coverLetter', applicationData.coverLetter);

      await jobsAPI.applyToJob(selectedJob.id, formData);
      
      setSubmitSuccess(true);
      setTimeout(() => {
        setShowApplicationModal(false);
        resetApplicationForm();
      }, 3000);
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit application');
    } finally {
      setSubmitting(false);
    }
  };

  const resetApplicationForm = () => {
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      experienceYears: '',
      currentCTC: '',
      expectedCTC: '',
      noticePeriod: '',
      skills: '',
      coverLetter: '',
    });
    setResumeFile(null);
    setSubmitSuccess(false);
    setSubmitError('');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDepartment('');
    setSelectedLocation('');
    setSelectedJobType('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-32 pb-20">
      <Helmet>
        <title>Careers at Code'N'Click | Join Our Team</title>
        <meta name="description" content="Join the Code'N'Click team. We are hiring developers, designers, and marketers. Check out our open positions and benefits." />
        <meta name="keywords" content="tech jobs, web developer careers, ui/ux jobs, remote work, digital agency careers" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            We're Hiring
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-6">
            Join the Revolution
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Build the future with us. We're looking for dreamers, doers, and innovators.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="p-6 text-center h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                  <benefit.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search jobs by title, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            {/* Filters */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 overflow-hidden"
                >
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Departments</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                  </select>

                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Locations</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="On-site">On-site</option>
                  </select>

                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">All Types</option>
                    <option value="FULL_TIME">Full-time</option>
                    <option value="PART_TIME">Part-time</option>
                    <option value="INTERNSHIP">Internship</option>
                    <option value="CONTRACT">Contract</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Clear Filters */}
            {(searchTerm || selectedDepartment || selectedLocation || selectedJobType) && (
              <button
                onClick={clearFilters}
                className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={16} />
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Open Positions ({jobs.length})
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader className="animate-spin text-blue-600" size={40} />
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-20">
              <Briefcase className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No positions found matching your criteria
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <motion.div 
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-blue-500/50 transition-all group cursor-pointer">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={16} className="text-blue-600 dark:text-blue-400" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={16} className="text-green-600 dark:text-green-400" />
                            {job.jobType?.replace('_', '-')}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={16} className="text-purple-600 dark:text-purple-400" />
                            {job.location}
                          </span>
                          {job.salaryMin && job.salaryMax && (
                            <span className="flex items-center gap-1.5">
                              <DollarSign size={16} className="text-orange-600 dark:text-orange-400" />
                              {job.salaryCurrency} {job.salaryMin} - {job.salaryMax}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                          {job.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => handleApplyClick(job)}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                        >
                          Apply Now <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Application Modal - Will be created in next file */}
      {showApplicationModal && selectedJob && (
        <ApplicationModal
          job={selectedJob}
          applicationData={applicationData}
          setApplicationData={setApplicationData}
          resumeFile={resumeFile}
          setResumeFile={setResumeFile}
          onSubmit={handleApplicationSubmit}
          onClose={() => {
            setShowApplicationModal(false);
            resetApplicationForm();
          }}
          submitting={submitting}
          submitSuccess={submitSuccess}
          submitError={submitError}
        />
      )}
    </div>
  );
};

// Application Modal Component
const ApplicationModal = ({
  job,
  applicationData,
  setApplicationData,
  resumeFile,
  setResumeFile,
  onSubmit,
  onClose,
  submitting,
  submitSuccess,
  submitError,
}) => {
  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
    } else {
      alert('Please upload a PDF file');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full my-8 border border-gray-200 dark:border-gray-700"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for {job.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{job.department} • {job.location}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={24} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={applicationData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={applicationData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={applicationData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+1 234 567 8900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Years of Experience *
              </label>
              <input
                type="number"
                name="experienceYears"
                required
                min="0"
                value={applicationData.experienceYears}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Current CTC (Optional)
              </label>
              <input
                type="number"
                name="currentCTC"
                value={applicationData.currentCTC}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="50000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Expected CTC (Optional)
              </label>
              <input
                type="number"
                name="expectedCTC"
                value={applicationData.expectedCTC}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="60000"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Notice Period (Optional)
            </label>
            <input
              type="text"
              name="noticePeriod"
              value={applicationData.noticePeriod}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="30 days"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Skills *
            </label>
            <input
              type="text"
              name="skills"
              required
              value={applicationData.skills}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, Node.js, TypeScript..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Resume (PDF) *
            </label>
            <div className="relative">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
                required
              />
              <label
                htmlFor="resume-upload"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-all"
              >
                <Upload size={20} />
                {resumeFile ? resumeFile.name : 'Click to upload resume (PDF)'}
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Cover Letter (Optional)
            </label>
            <textarea
              name="coverLetter"
              value={applicationData.coverLetter}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Tell us why you're a great fit..."
            />
          </div>

          {submitError && (
            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
              <X size={16} />
              {submitError}
            </div>
          )}

          {submitSuccess && (
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
              <Check size={16} />
              Application submitted successfully! We'll be in touch soon.
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting || submitSuccess}
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <Loader className="animate-spin" size={18} />
                  Submitting...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Careers;
