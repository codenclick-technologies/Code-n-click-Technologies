import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const TeamProfileModal = ({ member, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // focus close for accessibility
    if (closeRef.current) closeRef.current.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden
      />

      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${member.name} profile`}
        className="relative w-full max-w-3xl mx-4 rounded-2xl p-[2px] bg-gradient-to-r from-cyan-400 to-blue-600"
      >
        <div className="rounded-2xl bg-gray-900/95 backdrop-blur-md p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-3xl">{member.avatar}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <div className="text-sm text-gray-400">{member.role}</div>
              </div>
            </div>

            <button
              ref={closeRef}
              onClick={onClose}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close profile"
            >
              <X />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-gray-300 leading-relaxed">{member.bioLong ?? member.bio}</p>

              {member.skills && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Skills & Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((s, i) => (
                      <span key={i} className="text-xs bg-gray-800/60 text-gray-200 px-3 py-1 rounded-full">{s}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="md:col-span-1 bg-gray-900/40 rounded-lg p-4 flex flex-col gap-4">
              <div>
                <div className="text-xs text-gray-400">Contact</div>
                <a href={`mailto:${member.email}`} className="text-sm text-cyan-300 break-all">{member.email}</a>
              </div>

              <div>
                <div className="text-xs text-gray-400">Location</div>
                <div className="text-sm text-gray-200">{member.location ?? 'Remote / India'}</div>
              </div>

              {member.link && (
                <a href={member.link} target="_blank" rel="noreferrer" className="mt-auto text-sm text-white/90 underline">View online profile</a>
              )}
            </aside>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamProfileModal;
